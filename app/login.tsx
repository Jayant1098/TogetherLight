import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { router } from 'expo-router';
import { DUMMY_USER_CREDENTIALS } from '../constants';
import {
  passwordValidator,
  usernameValidator,
} from '../components/Login/helpers';
import LoginForm from '../components/Login/LoginForm';

export default function Login() {
  const [username, setUserName] = useState({ value: 'username', error: '' });
  const [password, setPassword] = useState({ value: 'password', error: '' });
  const [formError, setFormError] = useState('');

  function handleLogin() {
    const usernameError = usernameValidator(username.value);
    const passwordError = passwordValidator(password.value);

    if (usernameError || passwordError) {
      setUserName((val) => ({ ...val, error: usernameError }));
      setPassword((val) => ({ ...val, error: passwordError }));
      return;
    }
    if (
      username.value !== DUMMY_USER_CREDENTIALS.USER_NAME ||
      password.value !== DUMMY_USER_CREDENTIALS.PASSWORD
    ) {
      Alert.alert('Login Failed.');
      setFormError('Invalid Username/Password combination.');
      return;
    }

    Alert.alert('Login Success');
    router.replace('/posts');
  }
  const handleUserNameChange = useCallback(function (text: string) {
    setUserName({ value: text, error: '' });
    setFormError('');
  }, []);

  const handlePasswordChange = useCallback(function (text: string) {
    setPassword({ value: text, error: '' });
    setFormError('');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <LoginForm
        username={username}
        password={password}
        handleUserNameChange={handleUserNameChange}
        handlePasswordChange={handlePasswordChange}
        handleLogin={handleLogin}
        formError={formError}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
