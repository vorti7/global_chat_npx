import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
    View,
    Button,
    FlatList,
    Text,
    TextInput
} from 'react-native';
import {API} from '../lib/api';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';


export default (props) => {
    const flatListRef = useRef(null);

    const getChatList = API.Chat.getList();

    const {
        subData,
        loading,
    } = API.Chat.onGlobal()

    useEffect(() => {
        if(subData != undefined) {
            setChatList([data.onGlobalChat, ...chatList.filter(chat => chat.id !== subData.onGlobalChat.id)])
        }
    },[subData])

    const [ createChat, { data }] = API.Chat.createItem();
    // const createChat = API.Chat.createItem()

    const [ chatList, setChatList ] = useState(getChatList.data.listChats.items)




    // const CREATECHAT = gql`
    //     mutation createChat($createchatinput: CreateChatInput!) {
    //         createChat(input: $createchatinput) {
    //             type
    //             writer
    //             content
    //         }
    //     }
    // `

    // const [createChat] = useMutation(CREATECHAT, {
    //     variables: {
    //       createchatinput : {
    //         "type": 0,
    //         "writer": "hodor",
    //         "content": "hodor!!!!!!!!"
    //       }
    //     }
    // });



    const chatInput = (chatData) => {
        createChat({ variables: {
            createchatinput: {
                "type": 0,
                "writer": "hodor",
                "content": chatData
            }
        } })
    }

    return(
        <View style={{flex:1}}>
            <FlatList
                ref = {flatListRef}
                data={chatList}
                renderItem = {({item, index}) =>
                                <AChat
                                    chatIndex = {index}
                                    data = {item}
                                />
                            }
                onContentSizeChange={() => flatListRef.current.scrollToEnd()}
                keyExtractor = {(item, index) => index.toString()}
            />
            <InputContainer
                chatInput={(chatData) => chatInput(chatData)}
            />
        </View>
    )
}

function AChat(props){
    chatColor = 'white'
    chatPosition = ''
    chatTouchable = true
    if (props.data.writer==''){ // recognize chat writer.
        chatColor = 'blue'
        chatPosition = 'flex-end'
        // chatTouchable = false
    }else{
        chatColor = 'red'
        chatPosition = 'flex-start'
    }

    return(
        <View
            style={{width:'100%', padding:5, alignItems:chatPosition}}
        >
            <View style={{minHeight:40, minWidth:60, maxWidth:'70%', padding:10, backgroundColor:chatColor, borderRadius:5, justifyContent:'center'}}>
                    <Text style={{color:'white'}}>{props.data.content}</Text>
            </View>
        </View>
    )
}

function InputContainer(props){
    const [ inputText, setInputText ] = useState('')

    return(
        <View style={{width:'100%', borderColor:'black', bodrderWidth:1}}>
            <View
                style={{width:'100%', paddingLeft:'1%', paddingRight:'1%'}}
            >
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'12%', justifyContent:'center', padding:4}}>
                        <View style={{flex:1, borderRadius:5, borderWidth:3, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:25}}>+</Text>
                        </View>
                    </View>
                    <TextInput
                        style = {{width:'65%', height:40, paddingLeft:'1%', fontSize:20}}
                        onChangeText = {inputText => setInputText(inputText)}
                        value = {inputText}
                    />
                    <View style={{width:'23%', justifyContent:'center', paddingLeft:'1%'}}>
                        <Button
                            title="INPUT"
                            onPress={() => {
                                props.chatInput(inputText)
                                setInputText('')
                            }}
                        />
                    </View>
                </View>
            </View>
            <View
                style={{height:Platform.OS === 'ios' ? '2%' : 0}}
            />
        </View>
    )
}