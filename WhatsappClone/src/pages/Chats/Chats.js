import React from 'react';
import { View, Text } from 'react-native';

import styles from './Chats.style';
import ContactsFloatingIcon from '../../components/ContactsFloatingIcon';
import ChatListItem from '../../components/ChatListItem';

const Chats = () => {
  return (
    <View>
      <ChatListItem chatList={{ message: { text: 'hello' } }} />
      <ContactsFloatingIcon name="message1" />
    </View>
  );
};

export default Chats;
