import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import SignUpForm from '../Componenets/SignUpComponents/SignUpForm';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.Maincontainer}>
      <Image
        source={{
          uri: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png',
        }}
        style={styles.ImageStyle}
      />

      <SignUpForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  ImageStyle: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginBottom: 55,
  },
});

export default SignUp;
