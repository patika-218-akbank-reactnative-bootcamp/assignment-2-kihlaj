import React from 'react';
import { View, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './TopNavbar.style';

// could and maybe should have add icons as props!
const TopNavbar = ({ firstIcon, secondIcon }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 15,
        width: 90,
        justifyContent: 'space-between',
      }}>
      <Pressable>
        <AntDesign name={firstIcon} color="white" size={23} />
      </Pressable>
      <Pressable>
        <Entypo name={secondIcon} color="white" size={23} />
      </Pressable>
    </View>
  );
};

export default TopNavbar;
