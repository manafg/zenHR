import React ,{ useEffect, useState, useContext} from 'react'
import {
    ScrollView,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions
  } from "react-native";import { Block, Checkbox, Text, theme } from "galio-framework";

import { Icon, Header , RenderAlbum, RenderArtiset , RenderTracks, RenderSearch} from "../Components";
import { useNavigation } from 'react-navigation-hooks'
import tabs from '../constants/tabs'


export const Home = ()=>{
    const  nav = useNavigation();
    const [activeTab,setActiveTab] = useState(0)
    const [search, setSearchText] = useState('')

    function returnTabType (tabId) {
      setActiveTab(tabId)
    }

    function changeSearch(text) {
      debugger
      setSearchText(text)
    }

    function renderTabs(tab) {
      switch (tab) {
        case "Artists":
          return <RenderArtiset/> 
        case "LatestTrack":
          return  <RenderTracks/>
        case "Albums":
          return  <RenderAlbum/>
        default:
          <RenderAlbum/>
          break;
      }
      
    }
    
    return(

        <Block flex center>
            <Header none={true} tabs={!search.length ? tabs.categories : []} changeSearch={changeSearch} returnTabType={returnTabType} search title="Home" navigation={nav} />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        {
          !search.length ? 
          renderTabs(activeTab)
          : 
          <RenderSearch search = {search}/>
        }
        </ScrollView>
      </Block>
    )
    
}

