import { View, Text } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './TopNavbar.style';

const TopNavbar = () => {
  return (
    <View style={styles.topNavbarWrapper}>
      <View style={{ flex: 1, padding: 12 }}>
        <Text style={styles.topNavbarText}>WhatsApp</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row-reverse', padding: 12 }}>
        <Entypo
          style={{ marginLeft: 18 }}
          name="dots-three-vertical"
          color="white"
          size={23}
        />
        <AntDesign
          name="search1"
          color="white"
          size={23}
        />
      </View>
    </View>
  );
};

export default TopNavbar;
