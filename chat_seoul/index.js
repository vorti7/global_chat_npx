import { Navigation } from "react-native-navigation";
import Amplify, { Auth } from 'aws-amplify';
// // import App from "./App";

// import AWSAppSyncClient, { buildSubscription } from 'aws-appsync';
// import { Rehydrated, graphqlMutation } from 'aws-appsync-react';
// import { ApolloProvider, useApolloClient } from 'react-apollo';
// import {ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

import IntroScreen from "./src/screen/introScreen"
import LoginScreen from "./src/screen/loginScreen"
import SignupScreen from "./src/screen/signupScreen"
import ChatScreen from "./src/screen/chatScreen"
import ChangeAttributeScreen from "./src/screen/changeAttributeScreen"
import VerifyScreen from "./src/screen/verifyScreen"
import ConfirmScreen from "./src/screen/confirmScreen"
import UnconfirmedVerifyScreen from "./src/screen/unconfirmedVerifyScreen"

Navigation.registerComponent(`IntroScreen`, () => IntroScreen);
Navigation.registerComponent(`LoginScreen`, () => LoginScreen);
Navigation.registerComponent(`SignupScreen`, () => SignupScreen);
Navigation.registerComponent(`ChatScreen`, () => ChatScreen);
Navigation.registerComponent('ChangeAttributeScreen', () => ChangeAttributeScreen);
Navigation.registerComponent('VerifyScreen', () => VerifyScreen);
Navigation.registerComponent('ConfirmScreen', () => ConfirmScreen);
Navigation.registerComponent('UnconfirmedVerifyScreen', () => UnconfirmedVerifyScreen);

  // const awsConfig = {
  //   identityPoolId: 'ap-northeast-2:e18290e0-3b80-4bac-a0c1-4717148019c1',
  //   region: 'ap-northeast-2',
  //   userPoolId: 'ap-northeast-2_R43NckM5I',
  //   userPoolWebClientId: 'b0h9q3ge715k6silk7nnbsd57'
  // }

  const awsConfig = {
    identityPoolId: 'ap-northeast-2:e18290e0-3b80-4bac-a0c1-4717148019c1',
    region: 'ap-northeast-2',
    userPoolId: 'ap-northeast-2_A9ZlaxIsH',
    userPoolWebClientId: '5r1dlq4rdglclf7go0iecn1o1l'
  }

// import awsconfig from './src/aws-exports';
Amplify.configure(awsConfig);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "IntroScreen"
            }
          }
        ]
      }
    }
  });
});