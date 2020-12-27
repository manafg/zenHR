
import React , { useEffect, useState} from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import  Card  from './Card';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');
import Client from '../api/Client';
import axios from 'axios';
import {happiApiKey} from '../../config/keys'

export const RenderSearch = (props) => {
    const [limit , setLimit] = useState(0);
    const [result , setResult] = useState(0)
    useEffect(()=>{
        Client.get(`?q=${props.text}&limit=10`).then((res)=>{
            setResult(res.data.result)
      })
    },[])
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          {result.length ? result.map((res,key)=>(
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