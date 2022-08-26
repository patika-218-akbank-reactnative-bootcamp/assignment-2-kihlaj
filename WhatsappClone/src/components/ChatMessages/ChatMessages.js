import { View, Text } from 'react-native';
import React from 'react';
import moment from 'moment';

import styles from './ChatMessages.style';
import { theme } from '../../../utils';

const ChatMessages = props => {
  const { message } = props;

  // to differentiate between sent and received messages
  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage()
              ? theme.colors.tertiary
              : theme.colors.text,
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
          },
        ]}>
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessages;
