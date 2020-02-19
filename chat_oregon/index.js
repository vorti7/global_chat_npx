import React, {PureComponent} from 'react';
import { Navigation } from "react-native-navigation";
import Amplify, { Auth } from 'aws-amplify';

import {ApolloProvider} from 'react-apollo';
import {Rehydrated} from 'aws-appsync-react';
import {ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks';
import AWSAppSyncClient from 'aws-appsync';

import IntroScreen from "./src/screen/introScreen"
import LoginScreen from "./src/screen/loginScreen"
import SignupScreen from "./src/screen/signupScreen"
import ChatScreen from "./src/screen/chatScreen"
import ChangeAttributeScreen from "./src/screen/changeAttributeScreen"
import VerifyScreen from "./src/screen/verifyScreen"
import ConfirmScreen from "./src/screen/confirmScreen"
import UnconfirmedVerifyScreen from "./src/screen/unconfirmedVerifyScreen"

Navigation.registerComponent(`IntroScreen`, () => WithProvider(IntroScreen));
Navigation.registerComponent(`LoginScreen`, () => WithProvider(LoginScreen));
Navigation.registerComponent(`SignupScreen`, () => WithProvider(SignupScreen));
Navigation.registerComponent(`ChatScreen`, () => WithProvider(ChatScreen));
Navigation.registerComponent('ChangeAttributeScreen', () => WithProvider(ChangeAttributeScreen));
Navigation.registerComponent('VerifyScreen', () => WithProvider(VerifyScreen));
Navigation.registerComponent('ConfirmScreen', () => WithProvider(ConfirmScreen));
Navigation.registerComponent('UnconfirmedVerifyScreen', () => WithProvider(UnconfirmedVerifyScreen));

const awsConfig = {
  identityPoolId: 'us-west-2:79cf9fea-c635-4bf8-9705-5806231ae523',
  region: 'us-west-2',
  userPoolId: 'us-west-2_yJ8Lcci4M',
  userPoolWebClientId: '6pli9ulrhb77p1g3ualhbsc1k3',
  aws_appsync_graphqlEndpoint: 'https://jssvbysfqvfwjk6vqw3elgcehy.appsync-api.us-west-2.amazonaws.com/graphql',
  aws_appsync_cognitoType: 'AMAZON_COGNITO_USER_POOLS',
}

Amplify.configure(awsConfig);

const authenticatedClient = new AWSAppSyncClient({
  url: awsConfig.aws_appsync_graphqlEndpoint,
  region: awsConfig.region,
  auth: {
    type: awsConfig.aws_appsync_cognitoType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  offlineConfig: {
    keyPrefix: 'private',
  },
});

const WithProvider = Component => {
  return class extends PureComponent {
    render() {
      return (
        <ApolloProvider client={authenticatedClient}>
          <ApolloHooksProvider client={authenticatedClient}>
            <Rehydrated>
              <Component {...this.props} />
            </Rehydrated>
          </ApolloHooksProvider>
        </ApolloProvider>
      );
    }
  };
};

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