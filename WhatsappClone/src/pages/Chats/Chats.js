import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './Chats.style';
import ContactsFloatingIcon from '../../components/ContactsFloatingIcon';
import ChatListItem from '../../components/ChatListItem';
import chatList from '../../../data/chatList';

const Chats = () => {
  return (
    <View style={{}}>
      <FlatList
        style={styles.container}
        data={chatList}
        renderItem={({ item }) => (
          <ChatListItem chatList={item} keyExtractor={item => item.id} />
        )}
      />
      <ContactsFloatingIcon name="message1" />
    </View>
  );
};

export default Chats;
