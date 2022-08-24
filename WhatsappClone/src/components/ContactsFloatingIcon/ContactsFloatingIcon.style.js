import { Dimensions, StyleSheet } from 'react-native';

import { theme } from '../../../utils';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  iconWrapper: {
    position: 'absolute',
    right: 10,
    bottom: -height * 0.775,
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
});
