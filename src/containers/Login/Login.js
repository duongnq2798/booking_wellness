import React, {useReducer} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {accountRole} from '../../helpers/Constants';
import {setEmailLocal, setPasswordLocal} from './action';
import {initState, loginReducer} from './reducer';
import styles from './styles';

const Login = () => {
  const [stateLocal, dispatchLocal] = useReducer(loginReducer, initState);
  const navigation = useNavigation();

  const onChangeEmail = value => {
    dispatchLocal(setEmailLocal(value));
  };

  const onChangePassword = value => {
    dispatchLocal(setPasswordLocal(value));
  };

  const _onLogin = () => {
    if (
      accountRole.HR_ADMIN_ACCOUNT === stateLocal.email &&
      accountRole.HR_ADMIN_PASSWORD === stateLocal.password
    ) {
      navigation.navigate('HrDashboad');
    } else if (
      accountRole.VENDOR_ADMIN_ACCOUNT === stateLocal.email &&
      accountRole.VENDOR_ADMIN_PASSWORD === stateLocal.password
    ) {
      navigation.navigate('VendorDashboad');
    }
    dispatchLocal(setEmailLocal(''));
    dispatchLocal(setPasswordLocal(''));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.img}
          source={require('../../assets/logo_booking_wellness.jpg')}
        />
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.emailText}>Email</Text>
        <TextInput
          style={styles.inputType}
          onChangeText={text => onChangeEmail(text)}
          value={stateLocal.email}
          placeholder="Email"
          keyboardType="email-address"
        />

        <Text style={styles.emailText}>Password</Text>
        <TextInput
          style={styles.inputType}
          onChangeText={text => onChangePassword(text)}
          value={stateLocal.password}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.login} onPress={_onLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
