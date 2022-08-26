import React from 'react';
import { Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './ContactsFloatingIcon.style';

const ContactsFloatingIcon = ({ name }) => {
  return (
    <Pressable style={styles.iconWrapper}>
      <AntDesign name={name} size={28} color="white" />
    </Pressable>
  );
};

export default ContactsFloatingIcon;
