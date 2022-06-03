import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  View,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// import ProgressDialog from 'react-native-progress-dialog';

const OnSignUp = async (Email, Pass, username) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Pass)
      .then(() => {
        firestore()
          .collection('Users')
          .doc(firebase.auth().currentUser.email)
          .set({
            username: username,
            email: Email,
            owner_uid: firebase.auth().currentUser.uid,
            //profile 4 41 20
          });
        Alert.alert('User Created');

        //move to home
      });
  } catch (error) {
    Alert.alert('Error!!', error.message + '\n\n');
  }
};

const SignUpForm = ({navigation}) => {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .required()
      .min(8, 'Minimun character for Password should be 8'),
    username: Yup.string()
      .required()
      .min(2, 'Minimun character for Username should be 2'),
  });
  return (
    <Formik
      validationSchema={SignUpSchema}
      initialValues={{email: '', username: '', password: ''}}
      onSubmit={values => {
        OnSignUp(values.email, values.password, values.username);
      }}
      validateOnMount={true}>
      {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
        <>
          <TextInput
            style={styles.InputContainer}
            //   {borderColor: values.username < 2 ? 'red' : 'black'}
            placeholderTextColor="grey"
            placeholder="Enter username"
            autoCapitalize="none"
            autoCorrect={false}
            // secureTextEntry={true}
            textContentType="username"
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            values={values.username}
          />
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
            placeholder="Enter your email"
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

          <TouchableOpacity
            disabled={!isValid}
            style={[
              styles.BtnStyle,
              {backgroundColor: isValid ? '#405DE6' : 'grey'},
            ]}
            onPress={handleSubmit}>
            <Text>Sign Up</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{color: 'black'}}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text
                style={{
                  color: '#6AA0F5',
                  fontSize: 12,
                  alignSelf: 'flex-end',
                }}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik>
  );
};

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

export default SignUpForm;
