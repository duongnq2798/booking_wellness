import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: '#214151',
  },
  contentText: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 15,
  },
  contentHead: {
    backgroundColor: '#ffc93c',
  },
  contentTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  logout: {
    width: width - 30,
    height: 40,
    backgroundColor: '#16c79a',
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  titleLogout: {
    color: 'white',
    fontWeight: 'bold',
  },
  viewEvent: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#31326f',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewEventText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalListEvent: {
    backgroundColor: 'white',
    height: height / 2,
    padding: 20,
    borderRadius: 20,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  cancelText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  eventItemText: {
    fontSize: 17,
  },
});

export default styles;
