import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './ChatNavbar.style';

const ChatNavbar = ({ firstIcon, secondIcon, thirdIcon }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <AntDesign name={firstIcon} color="white" size={23} />
      </Pressable>
      <Pressable>
        <AntDesign name={secondIcon} color="white" size={23} />
      </Pressable>
      <Pressable>
        <Entypo name={thirdIcon} color="white" size={23} />
      </Pressable>
    </View>
  );
};

export default ChatNavbar;
