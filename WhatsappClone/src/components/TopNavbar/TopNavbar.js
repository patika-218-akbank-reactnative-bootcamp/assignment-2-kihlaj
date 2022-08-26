import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './TopNavbar.style';

// could and maybe should have add icons as props!
const TopNavbar = ({ text }) => {
  return (
    <View style={{ flexDirection: 'row-reverse', padding: 10 }}>
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
  );
};

export default TopNavbar;
