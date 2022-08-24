import React from 'react';
import { StyleSheet } from 'react-native';

import { theme } from '../../../utils';

export default StyleSheet.create({
  topNavbarWrapper: {
    height: 50,
    backgroundColor: theme.colors.foreground,
    // justifyContent: 'flex-end',
  },
  topNavbarText: {
    color: theme.colors.secondaryText,
  },
});
