
import React , { useEffect, useState} from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import  Card  from './Card';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');
import Client from '../api/Client';
import axios from 'axios';
import {happiApiKey} from '../../config/keys'

export const RenderArtiset = () => {
    const [artists , setArtists] = useState(0);
    useEffect(()=>{
      axios.get(`https://api.happi.dev/v1/music/artists?page=1&apikey=${happiApiKey}`).then((res)=>{
        setArtists(res.data.result)
      })
    },[])

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          {artists ? artists.map((res,key)=>(
              <Card item={res} horizontal  />
          )) : null
          }  
          
        </Block>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    home: {
      width: width,    
    },
    articles: {
      width: width - theme.SIZES.BASE * 2,
      paddingVertical: theme.SIZES.BASE,
    },
  });