import React from 'react';
import { View, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './TopNavbar.style';

const TopNavbar = ({ firstIcon, secondIcon }) => {
  return (
    <View style={styles.container}>
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
