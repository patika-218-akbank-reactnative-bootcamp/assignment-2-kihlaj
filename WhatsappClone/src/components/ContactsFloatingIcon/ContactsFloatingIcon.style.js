import { StyleSheet } from 'react-native';

import { theme } from '../../../utils';

export default StyleSheet.create({
  iconWrapper: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    zIndex: 100,
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.foreground,
  },
});
