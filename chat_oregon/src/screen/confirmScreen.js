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

  const ConfirmScreen = (props) => {
    const [ emailInput, setEmailInput ] = useState("")
    const [ codeInput, setCodeInput ] = useState("")

    const codeSendPressed = () => {
        Auth.confirmSignUp(emailInput, codeInput, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true    
        }).then(data => console.log(data))
          .catch(err => console.log(err));
    }

    // const pressed = () => {
    // }

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
            onPress={() => codeSendPressed()}
        >
          <Text
            style={{fontSize:30, fontWeight:'bold'}}
          >
            Code Send
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
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
            onPress={() => prssed()}
        >
          <Text
            style={{fontSize:30, fontWeight:'bold'}}
          >
            -
          </Text>
        </TouchableOpacity> */}
      </View>
    );
  };
  
  export default ConfirmScreen