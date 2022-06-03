import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {color} from 'react-native-elements/dist/helpers';
// import Validator from 'email-validator';
// import {validate} from 'email-validator';
import firebase from '@react-native-firebase/app';
const LogInForm = ({navigation}) => {
  const OnLogInPress = async (Email, Pass) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(Email, Pass)
        .then(() => {
          Alert.alert('logged In');
          //move to home
        });
    } catch (error) {
      Alert.alert(
        'Error!!',
        error.message + '\n\n What do you want to do next?',
        [
          {
            text: 'OK',
            style: 'cancel',
            onPress: () => {
              console.log('ok');
            },
          },
          {
            text: 'Sign Up',
            onPress: () => {
              navigation.push('SignUp');
            },
          },
        ],
      );
    }
  };

  const LogInSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is Required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Pasword should be atleast 8 characters long'),
  });
  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          OnLogInPress(values.email, values.password);
        }}
        validationSchema={LogInSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <TextInput
              style={[
                styles.InputContainer,
                // {
                //   borderColor:
                //     values.email.length < 1 || validate(values.email)
                //       ? '#ccc'
                //       : 'red',
                // },
              ]}
              placeholderTextColor="grey"
              placeholder="Enter your phone, email or username"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              textContentType="emailAddress"
              autoFocus={true}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              values={values.email}
            />
            <TextInput
              style={styles.InputContainer}
              placeholderTextColor="grey"
              placeholder="Enter your Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              values={values.password}
            />
            <TouchableOpacity>
              <Text
                style={{color: '#6AA0F5', fontSize: 12, alignSelf: 'flex-end'}}>
                Forgot password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!isValid}
              style={[
                styles.BtnStyle,
                {backgroundColor: isValid ? '#405DE6' : 'grey'},
              ]}
              onPress={handleSubmit}>
              <Text>Log In</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={{color: 'black'}}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.push('SignUp');
                }}>
                <Text
                  style={{
                    color: '#6AA0F5',
                    fontSize: 12,
                    alignSelf: 'flex-end',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  InputContainer: {
    borderWidth: 1,
    height: 45,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    color: 'black',
    borderRadius: 4,
  },
  BtnStyle: {
    width: '100%',
    borderRadius: 5,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});
