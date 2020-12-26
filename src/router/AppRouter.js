import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AuthScreen} from '../screens/AuthScreen';
import {AppStack, AuthStack} from './MainRouter';

export const AppContainer = createSwitchNavigator ({
    Auth : AuthStack,
    AuthLoading : AuthScreen
},{
    initialRouteName: "AuthLoading"
})

const AppContainer = createAppContainer(AppContainer);
export default AppContainer;

