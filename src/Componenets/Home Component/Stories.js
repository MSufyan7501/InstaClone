import {StyleSheet, Image, FlatList, Text, View} from 'react-native';
import React from 'react';
import {USERS} from '../../DummyData/users';

const myItems = ({item}) => {
  return (
    <View style={styles.StoryView}>
      <Image
        style={styles.ImageStyle}
        resizeMode="center"
        source={item.image}
      />
      <Text style={styles.TextStories} numberOfLines={1}>
        {item.username}
      </Text>
    </View>
  );
};

const Stories = () => {
  return (
    <View style={styles.Container}>
      <FlatList
        data={USERS}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={myItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {},
  StoryView: {
    width: 70,

    marginRight: 14,
  },
  ImageStyle: {
    width: '100%',
    height: 70,
    borderRadius: 500,
    borderColor: '#FF1850',
    borderWidth: 2,
  },
  TextStories: {
    margin: 4,
    paddingRight: 9,
    width: '100%',
    textAlign: 'center',
    fontSize: 13,
  },
});

export default Stories;
