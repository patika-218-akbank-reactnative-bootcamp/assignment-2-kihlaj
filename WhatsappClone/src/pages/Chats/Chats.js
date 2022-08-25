import React from 'react';
import { View, Text } from 'react-native';

import styles from './Chats.style';
import ContactsFloatingIcon from '../../components/ContactsFloatingIcon';

const Chats = () => {
  return (
    <View>
      <Text>Chats</Text>
      <ContactsFloatingIcon name="message1" />
    </View>
  );
};

export default Chats;
