import { StyleSheet } from 'react-native';

import { theme } from '../../../utils';

export default StyleSheet.create({
  topNavbarWrapper: {
    height: 50,
    backgroundColor: theme.colors.foreground,
    flexDirection: 'row',
  },
  topNavbarText: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '500',
  },
});
