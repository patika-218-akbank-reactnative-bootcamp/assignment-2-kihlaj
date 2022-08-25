import React from 'react';
import { TouchableOpacity } from 'react-native';
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
