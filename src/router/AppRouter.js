import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AuthLoadingScreen} from '../screens/AuthScreen';
import {AppStack, AuthStack} from './MainRouter';

export const AppNavigator = createSwitchNavigator ({
    Auth : AuthStack,
    AuthLoading : AuthLoadingScreen
},{
    initialRouteName: "AuthLoading"
})

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

