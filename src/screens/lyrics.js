import React ,{ useEffect, useState} from 'react'
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Icon, Header , RenderAlbum, RenderArtiset , RenderTracks, RenderSearch} from "../Components";
import { StyleSheet, Dimensions, ScrollView } from 'react-native';

import { useNavigation } from 'react-navigation-hooks'
import Client from '../api/Client'

export const Lyircs = ({navigation, route})=>{
    let url = navigation.state.params.api_lyrics
    const [artist, setArtist] = useState(0);
    const [album, setAlbum] = useState(0);
    const [lyircs, setLyircis] =  useState(0);
    useEffect(()=>{
        Client.get(url).then((res)=>{
          let album = `Track from ${res.data.result.album}`;
          let art = `Song by : ${res.data.result.artist}`
          setAlbum(album)
          setArtist(art)
          setLyircis(res.data.result.lyrics)
        })
      },[])
      

    
    const  nav = useNavigation()
    return(
        <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
            <Block column>
                {/* <Text>{{album}}</Text>
                <Text style={{marginTop:10}}>{{artist}}</Text>
                <Text style={{marginTop:10}}>{{lyircs}}</Text> */}
            </Block>
        </ScrollView>
        </Block>
    )
    
}