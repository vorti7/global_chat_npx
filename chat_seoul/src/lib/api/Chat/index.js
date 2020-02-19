import {useQuery, useMutation} from '@apollo/react-hooks';

import * as Queries from './queries';
import * as Mutations from './mutations';

export const getItem = variables => {
  const query = useQuery(Queries.GET_CHAT, {
    variables,
    fetchPolicy: 'cache-and-network',
  });
  return query;
};

export const getList = () => {
    const query = useQuery(Queries.GET_CHAT_LIST, {
        fetchPolicy: 'cache-and-network',
    })
    return query
}

export const createChat = () => {
    const mutation = useMutation(Mutations.CREATE_CHAT,);
    return mutation
}

// export const updateChat = () => {
//   const mutation = useMutation(Mutations.UPDATE_CHAT);
//   return mutation;
// };
