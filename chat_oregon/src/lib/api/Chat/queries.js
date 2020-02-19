import gql from 'graphql-tag';

export const GET_CHAT = gql`
    query getChat($id: ID!) {
        getChat(id: $id){
            id
            type
            writer
            content
            testList
        }
    }
`;

export const GET_CHAT_LIST = gql`
    query getChatList {
        listChats {
            items{
                id
                type
                writer
                content
                testList
            }
        }
    }
`;
