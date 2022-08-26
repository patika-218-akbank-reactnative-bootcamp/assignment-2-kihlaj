import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
