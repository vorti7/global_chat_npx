import gql from 'graphql-tag';

export const CREATE_CHAT = gql`
    mutation createChat($createchatinput: CreateChatInput!) {
        createChat(input: $createchatinput) {
            type
            writer
            content
        }
    }
`;

// export const UPDATE_CHAT= gql`
// `;
