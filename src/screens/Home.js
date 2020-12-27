import React ,{ useEffect, useState} from 'react'
import {
    ScrollView,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions
  } from "react-native";import { Block, Checkbox, Text, theme } from "galio-framework";

import { Icon, Header , RenderAlbum} from "../Components";
import { useNavigation } from 'react-navigation-hooks'


export const Home = ()=>{
    const  nav = useNavigation("Login")
    
    
    return(

        <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        <RenderAlbum/>
        </ScrollView>
      </Block>
    )
    
}

