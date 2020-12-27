import React , {useEffect ,useState , useRef} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Platform,
  AsyncStorage
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import * as firebase from 'firebase';

export const AuthLoadingScreen =()=>{
  
  const firstRender = useRef(true)
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(0);
  const  nav = useNavigation("Home")
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function callRoute () {
    useNavigation("Home")
  }

  useEffect(() => {
    if(firstRender.current) {firstRender.current = false;  return}
    if (!user) {
        nav.navigate("Home")
    }
    
  }, [initializing]);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  
    return (
      <View style={styles.IndicatorStyle}>
        <ActivityIndicator size="large" />
      </View>
    );
}

//Screen Styling
const styles = StyleSheet.create({
  IndicatorStyle: {
    flex: 1,
    justifyContent: "center"
  }
})