import React from 'react';
import { FlatList, ImageBackground } from 'react-native';

import styles from './Chat.style';
import ChatMessages from '../../components/ChatMessages';
import chatList from '../../../data/Chats';
import background from '../../../assets/background.jpg';
import ChatInput from '../../components/ChatInput';

const Chat = () => {
  return (
    <ImageBackground source={background} style={styles.image}>
      <FlatList
        data={chatList.messages}
        renderItem={({ item }) => <ChatMessages message={item} />}
      />
      <ChatInput
        firstIcon="smileo"
        secondIcon="attachment"
        thirdIcon="videocamera"
        fourthIcon="paper-plane"
      />
    </ImageBackground>
  );
};

export default Chat;
