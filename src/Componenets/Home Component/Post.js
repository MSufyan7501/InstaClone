import {StyleSheet, Text, FlatList, Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostHead from './PostHead';
import PostFooter from './PostFooter';
import {PostData} from '../../DummyData/Post';
import Stories from './Stories';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
// import Divider from 'react-native-elements';

const Post = () => {
  const [Posts, setPosts] = useState([]);
  const getData = async () => {
    firestore()
      .collectionGroup('posts')
      // .where('')
      //     // .doc('muhammadsufyan7501@techxpert.io')
      //     // .collection('posts')

      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => doc.data()));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FlatList
      data={Posts}
      ListHeaderComponent={Stories}
      renderItem={({item}) => {
        return (
          <View style={styles.Container}>
            <PostHead
              ImageUri={'https://picsum.photos/200'}
              username={item.username}
            />
            <View>
              <Image
                resizeMode="cover"
                style={styles.postImage}
                // source={require('../../../assets/profile4.jpg')}
                // source={item.image}
                source={{uri: item.image}}
              />
            </View>
            <PostFooter
              username={item.username}
              caption={item.caption}
              comments={item?.com}
              likes={item?.likes}

              // comments={[
              // {
              //   username: 'sufyan7501',
              //   text: 'hello this muhammad sufyan',
              // },
              // {
              //   username: 'sufyan751',
              //   text: 'hello this m Sufyan',
              // },
              // ]}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  postImage: {
    width: '100%',
    height: 425,
    // marginHorizontal: 10,
  },
});

export default Post;
