import { View, Text } from 'react-native';
import React from 'react';
import moment from 'moment';

import styles from './ChatMessages.style';

const ChatMessages = props => {
  const { message } = props;

  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text>{message.content}</Text>
        <Text>{message.user.name}</Text>
        <Text>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessages;
