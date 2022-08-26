import { View, Text } from 'react-native';
import React from 'react';
// to get needed the variables
import { useRoute } from '@react-navigation/native';

import styles from './Chat.style';

const Chat = () => {
  // to query the messages to this page
  const route = useRoute();

  // console.log(route.params);

  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;
