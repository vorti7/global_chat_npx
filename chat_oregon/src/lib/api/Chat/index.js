import {useQuery, useMutation, useSubscription} from '@apollo/react-hooks';

import * as Queries from './queries';
import * as Mutations from './mutations';
import * as Subscriptions from './subscriptions'

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

export const createItem = () => {
  return useMutation(Mutations.CREATE_CHAT, {})
}
export const onGlobal = () => {
  const {
    data,
    loading,
  } = useSubscription(Subscriptions.ON_CHAT_GLOBAL);
  // return data
  return useSubscription(Subscriptions.ON_CHAT_GLOBAL);
}

// export const updateChat = () => {
//   const mutation = useMutation(Mutations.UPDATE_CHAT);
//   return mutation;
// };
