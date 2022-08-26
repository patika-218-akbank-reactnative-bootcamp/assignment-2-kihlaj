import React from 'react';
import { TextInput, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './ChatInput.style';

const ChatInput = ({ firstIcon, secondIcon, thirdIcon, fourthIcon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <AntDesign name={firstIcon} size={24} color="grey" />
        <TextInput
          placeholder={'Type a message'}
          style={styles.textInput}
          name="text"
          multiline
        />
        <Entypo name={secondIcon} size={24} color="grey" style={styles.icon} />
        <AntDesign
          name={thirdIcon}
          size={24}
          color="grey"
          style={styles.icon}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Entypo name={fourthIcon} size={28} color="white" />
      </View>
    </View>
  );
};

export default ChatInput;
