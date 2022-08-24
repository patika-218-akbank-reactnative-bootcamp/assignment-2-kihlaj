import { View, Text } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './TopNavbar.style';

const TopNavbar = () => {
  return (
    <View style={styles.topNavbarWrapper}>
      <View style={{ flex: 1 }}>
        <Text style={styles.topNavbarText}>Whatsapp</Text>
      </View>
      <View style={{ flex: 1 }}>
        <AntDesign name="home" color="white" size={30} />
        <Entypo name="home" color="white" size={30} />
      </View>
    </View>
  );
};

export default TopNavbar;
