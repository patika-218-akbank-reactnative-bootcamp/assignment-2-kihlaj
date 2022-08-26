import { StyleSheet } from 'react-native';

import { theme } from '../../../utils';

export default StyleSheet.create({
  container: { padding: 10 },
  messageBox: {
    borderRadius: 15,
    padding: 8,
  },
  sent: { backgroundColor: theme.colors.tertiary, marginLeft: 50 },
  received: { backgroundColor: theme.colors.text, marginRight: 50 },
  message: { color: 'black', fontSize: 15 },
  name: { color: theme.colors.tertiary },
  time: { alignSelf: 'flex-end', color: 'grey' },
});
