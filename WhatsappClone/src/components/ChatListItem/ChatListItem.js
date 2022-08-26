import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import styles from './ChatListItem.style';

const ChatListItem = props => {
  // getting dummy data
  const { chatList } = props;

  // a hook which gives access to navigation object
  const navigation = useNavigation();

  // onClick function to navigate to chat page
  const onClick = () => {
    // passing parameters as navigation happens
    navigation.navigate('Chat', {
      id: chatList.id,
      name: `${chatList.receiver.firstName} ${chatList.receiver.lastName}`,
    });
  };

  return (
    // onPress is a function which is called when the user presses down, and then releases
    <Pressable onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: chatList.receiver.image }}
            style={styles.image}
          />
          <View style={styles.middleContainer}>
            {/* TODO: After 20 characters you can put "..." at the end, you used in instagram clone */}
            <Text style={styles.userName}>{chatList.receiver.firstName}</Text>
            <Text style={styles.lastMessage}>{chatList.messages[0].text}</Text>
          </View>
        </View>
        {/* TODO: You could show message sent not later than one week ago as Sunday, Yesterday, etc. and others as below */}
        <Text>
          {moment(chatList.messages[0].dateTime).format('DD/MM/YYYY')}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatListItem;
