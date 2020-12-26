import {createStackNavigator} from 'react-navigation-stack';
import {
    Home,
    Lyircs,
    Register,
    Login,
    ArtistSongs
} from '../screens/index';

export const AppStack = {
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
    }
},{
        initialRouteName: 'Login',
    })