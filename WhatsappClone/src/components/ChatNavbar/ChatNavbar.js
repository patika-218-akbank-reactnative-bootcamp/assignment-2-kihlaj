import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './ChatNavbar.style';

const ChatNavbar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <AntDesign name="videocamera" color="white" size={23} />
      </Pressable>
      <Pressable>
        <AntDesign name="phone" color="white" size={23} />
      </Pressable>
      <Pressable>
        <Entypo name="dots-three-vertical" color="white" size={23} />
      </Pressable>
    </View>
  );
};

export default ChatNavbar;
