import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginForm: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
  },
  emailText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputType: {
    backgroundColor: 'white',
    borderColor: '#5E73FF',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 15,
  },
  login: {
    height: 60,
    backgroundColor: '#3D57FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 30,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default styles;
