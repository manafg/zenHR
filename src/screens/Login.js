import React , {useState , useEffect, useRef} from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../Components";
import { Images, argonTheme } from "../constants";
import * as firebase from 'firebase';

import { useNavigation } from 'react-navigation-hooks'

const { width, height } = Dimensions.get("screen");

export const Login = () => {

    const { navigate } = useNavigation()
    const firstRender = useRef(true);
    const secondFirstRender = useRef(true);
    const [email , setEmail] = useState(0);
    const [password , setPassword] = useState(0);
    const [passwordValid , setPasswordValid] = useState(0);
    const [emailValid , setEmailValid] = useState(0);

    useEffect(()=>{
        if(firstRender.current) {
          firstRender.current = false
          return
        }
        const complexity  = 'alphanumeric'
        let passwordValid = '';
        if (complexity == 'alphanumeric') {
            passwordValid = password.length > 8;
        }
        setPasswordValid(!passwordValid)
      },[password])
    
      useEffect(()=>{
        if(secondFirstRender.current) {
          secondFirstRender.current = false
          return
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         
        let emailValidation = re.test(email)
        setEmailValid(!emailValidation)
      },[email])

      useEffect(()=>{
         
        emailValid
      },[emailValid])
    
    function login (email , password) {
       firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.15} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Login 
                </Text>
                
              </Block>
              <Block flex>
              <Block row style={{marginLeft:22}} width={width * 0.75}>
                      <Text
                       style={{paddingTop:20}} 
                      >
                          Or you can
                      </Text>
                      <Button
                        onPress = {()=>{
                             
                            navigate("Register")
                        }}
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                       Sign up
                      </Button>
                    </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        onChange={(e)=>setEmail(e.nativeEvent.text)}
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        onChange={(e)=>{  setPassword(e.nativeEvent.text)}}
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block middle>
                      <Button onPress={()=> {debugger; login(email, password)}}  color={!emailValid && !passwordValid ? "primary" : "disabled"} style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Login
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

