import React ,{ useEffect, useState} from 'react'
import {
    ScrollView,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions
  } from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import {  Header } from "../Components";

import { useNavigation } from 'react-navigation-hooks'
import { articles, Images, argonTheme } from "../constants/";
import Client from '../api/Client'

const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

export const Album = ({navigation}) => {
    let url = navigation.state.params.api_albums
    const [Albums , setAlbums] = useState(0);
    const [name, setName] = useState(0)
   
    useEffect(()=>{
      Client.get(url).then((res)=>{
        let info = `Albums of ${res.data.result.artist}`
        setName(info)
        setAlbums(res.data.result.albums)
      })
    },[])

    

    
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
              onPress={() => nav.navigate("Home")}
            >
              View All
            </Text>
          </Block>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Albums.length && Albums.map((res, index) => (
              <Block key={`viewed-${res.id_album}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: res.cover }}
                  style={styles.albumThumb}
                />
                
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
    albumThumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: "center",
      width: thumbMeasure,
      height: thumbMeasure
    },
  });