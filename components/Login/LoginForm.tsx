import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import TextInput from './TextInput';
import { theme } from '../theme';

function LoginForm({
  username,
  handleUserNameChange,
  password,
  handlePasswordChange,
  handleLogin,
  formError,
}: {
  username: { value: string; error: string };
  handleUserNameChange: (text: string) => void;
  password: { value: string; error: string };
  handlePasswordChange: (text: string) => void;
  handleLogin: () => void;
  formError: string;
}) {
  return (
    <>
      <View style={styles.inputView}>
        <Text style={styles.primaryText}>Welcome Back!</Text>
        <Text style={styles.secondaryText}>Enter Your Credentials</Text>
        <TextInput
          label='Username'
          returnKeyType='next'
          value={username.value}
          onChangeText={handleUserNameChange}
          error={!!username.error}
          errorText={username.error}
          autoCapitalize='none'
          description=''
        />
        <TextInput
          secureTextEntry
          label='Password'
          returnKeyType='done'
          value={password.value}
          keyboardType='visible-password'
          onChangeText={handlePasswordChange}
          error={!!password.error}
          errorText={password.error}
          autoCapitalize='none'
          description=''
        />
        {formError && <Text style={{ color: theme.colors.error }}></Text>}
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  loginText: {
    color: 'white',
  },
  primaryText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  secondaryText: {
    marginTop: 9,
  },

  inputView: {
    width: '80%',
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'black',
  },
});
