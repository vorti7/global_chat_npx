import gql from 'graphql-tag';

export const ON_CHAT_GLOBAL = gql`
    subscription onGlobalChat {
        onGlobalChat {
            id
            type
            writer
            content
        }
    }
`;
