import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PostHeader from '../Componenets/New Post Components/PostHeader';
import FormikNewPost from '../Componenets/New Post Components/FormikNewPost';

const NewPost = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <PostHeader navigation={navigation} />
      <FormikNewPost navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    padding: '1%',
    flex: 1,
    display: 'flex',
    backgroundColor: 'black',
  },
});

export default NewPost;
