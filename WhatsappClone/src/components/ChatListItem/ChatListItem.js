import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';

import styles from './ChatListItem.style';

const ChatListItem = (props, { route, navigation }) => {
  const { chatList } = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: chatList.receiver.image }} style={styles.image} />
        <View style={styles.middleContainer}>
          {/* TODO: After 20 characters you can put ... like you used in instagram clone */}
          <Text style={styles.userName}>{chatList.receiver.firstName}</Text>
          <Text style={styles.lastMessage}>{chatList.messages[0].text}</Text>
        </View>
      </View>
      {/* TODO: You could show message sent not later than one week ago as Sunday, Yesterday, etc. and others as below */}
      <Text>{moment(chatList.messages[0].dateTime).format('DD/MM/YYYY')}</Text>
    </View>
  );
};

export default ChatListItem;
