import React from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './Chat.style';
import ChatMessages from '../../components/ChatMessages';
import chatList from '../../../data/Chats';

const Chat = () => {
  // to query the messages to this page
  const route = useRoute();
  return (
    <FlatList
      data={chatList.messages}
      renderItem={({ item }) => <ChatMessages message={item} />}
    />
  );
};

export default Chat;
