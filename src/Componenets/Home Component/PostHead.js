import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

const PostHead = props => {
  return (
    <View style={styles.ContainerView}>
      {/* <Image
        resizeMode="center"
        style={styles.profileImage}
        source={require('../../../assets/profile.jpg')}
      /> */}
      <Image
        resizeMode="center"
        style={styles.profileImage}
        // source={require('../../../assets/profile4.jpg')}
        source={{uri: props.ImageUri}}
      />
      <Text style={styles.TextView}>{props.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerView: {
    flexDirection: 'row',
    margin: 10,
    marginLeft: 0,
    marginBottom: 0,
    borderBottomColor: '#fff',
    paddingBottom: 4,
    // borderWidth: 0.3,
  },
  profileImage: {
    width: 35,
    height: 35,

    borderRadius: 50,
  },
  TextView: {
    marginTop: 5,
    marginLeft: 5,
  },
});

export default PostHead;
