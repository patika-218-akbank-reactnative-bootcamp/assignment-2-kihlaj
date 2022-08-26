import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './Chats.style';
import ContactsFloatingIcon from '../../components/ContactsFloatingIcon';
import ChatListItem from '../../components/ChatListItem';
import chatList from '../../../data/chatList';

const Chats = ({ navigation }) => {
  return (
    <View style={{}}>
      {/* <Button
        title="chat"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything',
          });
        }}
      /> */}
      <ChatListItem chatList={chatList[0]} />
      <ContactsFloatingIcon name="message1" />
    </View>
  );
};

export default Chats;
