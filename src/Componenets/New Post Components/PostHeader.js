import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';

const PostHeader = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          resizeMode="contain"
          style={styles.iconStyle}
          source={require('../../../assets/left-arrow-icon.png')}
        />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>New Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  HeaderText: {
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginRight: 155,
    fontSize: 17,
  },
  iconStyle: {
    width: 20,
    height: 50,
    marginLeft: 10,
  },
});

export default PostHeader;
