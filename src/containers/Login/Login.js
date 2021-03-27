import React, {useState} from 'react';
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
import styles from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onChangeEmail = value => {
    setEmail(value);
  };

  const onChangePassword = value => {
    setPassword(value);
  };

  const _onLogin = () => {
    if (
      accountRole.HR_ADMIN_ACCOUNT === email &&
      accountRole.HR_ADMIN_PASSWORD === password
    ) {
      navigation.navigate('HrDashboad');
    } else if (
      accountRole.VENDOR_ADMIN_ACCOUNT === email &&
      accountRole.VENDOR_ADMIN_PASSWORD
    ) {
      navigation.navigate('VendorDashboad');
    }
    setEmail('');
    setPassword('');
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
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />

        <Text style={styles.emailText}>Password</Text>
        <TextInput
          style={styles.inputType}
          onChangeText={text => onChangePassword(text)}
          value={password}
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
