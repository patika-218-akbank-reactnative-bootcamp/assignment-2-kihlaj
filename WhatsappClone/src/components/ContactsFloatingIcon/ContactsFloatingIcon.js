import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './ContactsFloatingIcon.style';

const ContactsFloatingIcon = ({ name }) => {
  return (
    <TouchableOpacity style={styles.iconWrapper}>
      <AntDesign name={name} size={28} color="white" />
    </TouchableOpacity>
  );
};

export default ContactsFloatingIcon;
