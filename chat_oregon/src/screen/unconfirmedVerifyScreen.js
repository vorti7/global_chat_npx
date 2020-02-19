import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    TextInput
  } from 'react-native';
  import { Navigation } from "react-native-navigation";
  import { Auth } from 'aws-amplify';

  const UnconfirmedVerifyScreen = (props) => {
    const [ emailInput, setEmailInput ] = useState("")
    const [ codeInput, setCodeInput ] = useState("")

    const requestCodePressed = () => {
        Auth.verifyUserAttribute(emailInput, 'email').then((res) => {
            // should go inside here and send the verification code
         }).catch((error) => {
           console.error(error) // hitting error here 
         })
    }

    const requestVerifyPressed = () => {
        Auth.verifyUserAttributeSubmit(emailInput, 'email', codeInput).then((res) => {
            // should go inside here and send the verification code
         }).catch((error) => {
           console.error(error) // hitting error here 
         })
    }

    return (
      <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <TextInput
            style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin:'2.5%' }}
            onChangeText={text => setEmailInput(text)}
            value={emailInput}
            placeholder="email"
        />
        <TextInput
            style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin:'2.5%' }}
            onChangeText={text => setCodeInput(text)}
            value={codeInput}
            placeholder="code"
        />
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
            onPress={() => requestCodePressed()}
        >
          <Text
            style={{fontSize:30, fontWeight:'bold'}}
          >
            Request Verify Code
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
            onPress={() => requestVerifyPressed()}
        >
          <Text
            style={{fontSize:30, fontWeight:'bold'}}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default UnconfirmedVerifyScreen