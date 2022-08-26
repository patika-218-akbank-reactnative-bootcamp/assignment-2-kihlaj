import { StyleSheet } from 'react-native';

import { theme } from '../../../utils';

export default StyleSheet.create({
  container: { padding: 10 },
  messageBox: {
    backgroundColor: theme.colors.secondaryText,
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
  },
});
