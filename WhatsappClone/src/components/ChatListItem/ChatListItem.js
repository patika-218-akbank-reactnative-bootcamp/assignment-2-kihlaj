import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from './ChatListItem.style';

const ChatListItem = (props, { route, navigation }) => {
  const { chatList } = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: chatList.receiver.image }} style={styles.image} />
        <View style={styles.middleContainer}>
          <Text style={styles.userName}>{chatList.receiver.firstName}</Text>
          <Text style={styles.lastMessage}>{chatList.messages[0].text}</Text>
        </View>
      </View>
      {/* <Text>{chatList.messages[0].dateTime}</Text> */}
      <Text style={styles.date}>Yesterday</Text>
    </View>
  );
};

export default ChatListItem;
