import React ,{ useEffect, useState} from 'react'
import {
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Alert
  } from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Card } from './Card';

import { useNavigation } from 'react-navigation-hooks'
import { articles, Images, argonTheme } from "../constants/";
import Client from '../api/Client'


const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

export const RenderTracks = () => {
    const [tracks , setTracks] = useState(0);
    const [album, setAlbum] = useState(0)
    const [albumImage, setAlbumImage] = useState(0)

   
    useEffect(()=>{
      let artistId = "49313";
      let albumId = "412993"
      Client.get(`/artists/${artistId}/albums/${albumId}/tracks`).then((res)=>{
        let info = `Albums of ${res.data.result.artist}`
        setAlbum(info)
        setTracks(res.data.result.tracks)
        setAlbumImage(res.data.result.cover)
      })
    },[])

    function navigate (res) {
      if(!res.haslyrics) {
        Alert.alert(
          "Alet",
          "We don't have the lyrics for this song",
          [
            
            { text: "OK", onPress: () => {}}
          ],
          { cancelable: false }
        );
      } else {
       nav.navigate("Lyircs",{...res})
      }
    }

    let name = `Tracks from ${album}`
    const  nav = useNavigation()
    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Text bold size={16} style={styles.title}>
          {name}
        </Text>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block flex right>
            <Text
              size={12}
              color={theme.COLORS.PRIMARY}
              
            >
              View All
            </Text>
          </Block>
          <Block
            column
            
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {tracks.length && tracks.map((res, index) => (
              <Block flex card shadow style={styles.category}>
              <TouchableOpacity onPress={()=>{navigate(res)}}>
              <ImageBackground
                source={{ uri: albumImage ?albumImage : '../../assets/imgs/bg.png' }}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 2, height: 252 }
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 252
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>
                    {res.track}
                  </Text>
                </Block>
              </ImageBackground>
              </TouchableOpacity>
            </Block>
            ))}
          </Block>
        </Block>
      </Block>
    );
  };

  const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 22,
      color: argonTheme.COLORS.HEADER
    },
    group: {
      paddingTop: theme.SIZES.BASE
    },
    imageBlock: {
        overflow: "hidden",
        borderRadius: 4
      },
    category: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE / 2,
        borderWidth: 0
      },
      categoryTitle: {
        height: "100%",
        paddingHorizontal: theme.SIZES.BASE,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center"
      },
    albumThumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: "center",
      width: thumbMeasure,
      height: thumbMeasure
    },
  });