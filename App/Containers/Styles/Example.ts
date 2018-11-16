import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    marginTop: 100,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
  fetchButton: {
    marginTop: 100,
  },
  people: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  }
});