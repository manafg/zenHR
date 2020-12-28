import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import {
    Home,
    Lyircs,
    Register,
    Login,
    ArtistSongs,
    Album
} from '../screens/index';
import {  tabs } from "../constants/";



export const AppStack = {
    Albums:{
        screen:Album,
        navigationOptions: {
            heder: null
        }
    },
    Home: {
        screen : Home, 
        options: {
            header: null
        }
    },
    Lyircs: {
        screen : Lyircs, 
        navigationOptions: {
            header:null
        }
    },
    Register: {
        screen : Register, 
        navigationOptions: {
            header:null
        }
    },
    Login: {
        screen : Login, 
        navigationOptions: {
            header:null
        }
    },
    ArtistSongs: {
        screen : ArtistSongs, 
        navigationOptions: {
            header:null
        }
    },

}

export const AuthStack = createStackNavigator({
    Register: {
        screen : Register, 
        navigationOptions: {
            header:null
        }
    },
    Login: {
        screen : Login, 
        navigationOptions: {
            header:null
        }
    },
    Home: {
        screen : Home, 
        navigationOptions: {
            header:null
        }
    },
    Lyircs: {
        screen : Lyircs, 
        navigationOptions: {
            header:null
        }
    },
    Albums:{
        screen:Album,
        navigationOptions: {
            heder: null
        }
    },
},{
        initialRouteName: 'Login',
    })