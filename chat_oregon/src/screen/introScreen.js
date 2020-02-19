import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Text,
    TouchableOpacity
  } from 'react-native';
  import { Navigation } from "react-native-navigation";
  import { Auth } from 'aws-amplify';
  
  const introScreen = (props) => {

    const goPressed = () => {
      Auth.currentSession()
        .then(data => {
          // console.log(data)
          Navigation.push(props.componentId, {
              component: {
                name: 'ChatScreen',
              }
          });
        })
        .catch(err => {
          console.log(err)
          Navigation.push(props.componentId, {
              component: {
                name: 'LoginScreen',
              }
          });
        });
    }

    const logoutPressed = () => {
      Auth.signOut()
        .then(success => {
          console.log(success)
        })
        .catch(err => {
          console.log(err)
        });
    }

    const changeAttributePressed = () => {
      Navigation.push(props.componentId, {
        component: {
          name: 'ChangeAttributeScreen',
        }
    });
    }

    const verifyPressed = () => {
      Navigation.push(props.componentId, {
        component: {
          name: 'VerifyScreen',
        }
    });
    }

    const confirmPressed = () => {
      Navigation.push(props.componentId, {
        component: {
          name: 'ConfirmScreen',
        }
    });
    }

    const unconfirmedVerifyPressed = () => {
      Navigation.push(props.componentId, {
        component: {
          name: 'UnconfirmedVerifyScreen',
        }
    });
    }

    return (
      <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <TouchableOpacity
            style={{
                height: 40,
                width: '80%',
                backgroundColor: 'gray',
                borderWidth: 1,
                margin:'2.5%',
                paddingTop:5,
                alignItems:'center',
                justifyContent:'center'
            }}
            onPress={() => goPressed()}
        >
          <Text
            style={{fontSize:50, fontWeight:'bold'}}
          >
            Go
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                height: 40,
                width: '80%',
                backgroundColor: 'gray',
                borderWidth: 1,
                margin:'2.5%',
                paddingTop:5,
                alignItems:'center',
                justifyContent:'center'
            }}
            onPress={() => logoutPressed()}
        >
          <Text
            style={{fontSize:50, fontWeight:'bold'}}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                height: 40,
                width: '80%',
                backgroundColor: 'gray',
                borderWidth: 1,
                margin:'2.5%',
                paddingTop:5,
                alignItems:'center',
                justifyContent:'center'
            }}
            onPress={() => changeAttributePressed()}
        >
          <Text
            style={{fontSize:50, fontWeight:'bold'}}
          >
            Change
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                height: 40,
                width: '80%',
                backgroundColor: 'gray',
                borderWidth: 1,
                margin:'2.5%',
                paddingTop:5,
                alignItems:'center',
                justifyContent:'center'
            }}
            onPress={() => verifyPressed()}
        >
          <Text
            style={{fontSize:50, fontWeight:'bold'}}
          >
            Verify
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                height: 40,
                width: '80%',
                backgroundColor: 'gray',
                borderWidth: 1,
                margin:'2.5%',
                paddingTop:5,
                alignItems:'center',
                justifyContent:'center'
            }}
            onPress={() => confirmPressed()}
        >
          <Text
            style={{fontSize:50, fontWeight:'bold'}}
          >
            Confirm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                height: 40,
                width: '80%',
                backgroundColor: 'gray',
                borderWidth: 1,
                margin:'2.5%',
                paddingTop:5,
                alignItems:'center',
                justifyContent:'center'
            }}
            onPress={() => unconfirmedVerifyPressed()}
        >
          <Text
            style={{fontSize:35, fontWeight:'bold'}}
          >
            Unconfirmed Verify
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default introScreen