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

  const ChangeAttributeScreen = (props) => {
    const [ emailInput, setEmailInput ] = useState("")

    const changePressed = () => {
      Auth.currentAuthenticatedUser()
      .then(data => {
        console.log(data)
        Auth.updateUserAttributes(data, {
          'email': emailInput
      })
      })
      .catch(err => {
        console.log(err)
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
        <TextInput
            style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin:'2.5%' }}
            onChangeText={text => setEmailInput(text)}
            value={emailInput}
            placeholder="email"
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
            onPress={() => changePressed()}
        >
          <Text
            style={{fontSize:50, fontWeight:'bold'}}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default ChangeAttributeScreen