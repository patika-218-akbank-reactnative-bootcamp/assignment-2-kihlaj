import { View, Text } from 'react-native';
import React from 'react';
import moment from 'moment';

import styles from './ChatMessages.style';

const ChatMessages = props => {
  const { message } = props;

  // to differentiate between sent and received messages
  const sentMessage = () => {
    return message.user.id === 'u1';
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          sentMessage() ? styles.sent : styles.received,
        ]}>
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessages;
