import React from 'react';
import { TextInput, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './ChatInput.style';

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <AntDesign name="smileo" size={24} color="grey" />
        <TextInput
          placeholder={'Type a message'}
          style={styles.textInput}
          name="text"
          multiline
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        <AntDesign
          name="videocamera"
          size={24}
          color="grey"
          style={styles.icon}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Entypo name="paper-plane" size={28} color="white" />
      </View>
    </View>
  );
};

export default ChatInput;
