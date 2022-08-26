import { View, Text } from 'react-native';
import React from 'react';

import styles from './ChatListItem.style';

const ChatListItem = props => {
  const { chatList } = props;
  return (
    <View>
      <Text>{chatList.message.text}</Text>
    </View>
  );
};

export default ChatListItem;
