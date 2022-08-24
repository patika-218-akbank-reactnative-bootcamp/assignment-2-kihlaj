import { View, Text } from 'react-native';
import React from 'react';

import styles from './Chats.style';
import ContactsFloatingIcon from '../../components/ContactsFloatingIcon';

const Chats = () => {
  return (
    <View>
      <Text>Chats</Text>
      <ContactsFloatingIcon />
    </View>
  );
};

export default Chats;
