import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './TopNavbar.style';

// could and maybe should have add icons as props!
const TopNavbar = ({ text }) => {
  return (
    <View style={styles.topNavbarWrapper}>
      <View style={{ flex: 1, padding: 12 }}>
        <Text style={styles.topNavbarText}>{text}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row-reverse', padding: 12 }}>
        <TouchableOpacity>
          <Entypo
            style={{ marginLeft: 18 }}
            name="dots-three-vertical"
            color="white"
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="search1" color="white" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNavbar;
