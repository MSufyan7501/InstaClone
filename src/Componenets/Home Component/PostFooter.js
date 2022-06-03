import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';

const PostFooter = props => {
  //let data = JSON.parse(props.comments);

  console.log(props.comments[1]?.comment);

  return (
    <View>
      <View style={styles.IconContainer}>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.iconStyle}
            source={require('../../../assets/like-icon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.iconStyle}
            source={require('../../../assets/comment-icon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.iconStyle}
            source={require('../../../assets/share-icon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'absolute', right: 0}}>
          <Image
            resizeMode="center"
            style={styles.iconStyle}
            source={require('../../../assets/save-icon.png')}
          />
        </TouchableOpacity>
      </View>
      {/* likes and caption */}
      <View>
        <Text style={{color: '#fff'}}>{props.likes} likes</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.usernameStyleCaption}>
            {props.username}
            <Text style={{fontWeight: 'normal', color: '#fff'}}>
              {' '}
              {props.caption}
            </Text>
          </Text>
        </View>
      </View>
      {/* <View>
        <Text style={styles.usernameStyleCaption}>
          {props.comments[0].username}
          <Text style={{fontWeight: 'normal'}}> {props.comments[0].text}</Text>
        </Text>
      </View> */}
      {/* comments no and comments */}
      <View>
        {props.comments?.length > 1 ? (
          <Text>View all {props.comments?.length} comments</Text>
        ) : (
          <Text>View {props.comments?.length} comment</Text>
        )}

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.usernameStyleCaption}>
            {/* {props.comments[0]?.username} */}

            <Text style={{fontWeight: 'normal'}}>
              {' '}
              {props.comments[0]?.comment}
            </Text>
          </Text>
        </View>

        {/* <View style={{flexDirection: 'row'}}>
          <Text style={styles.usernameStyleCaption}>
            {props.comments?.username}
            <Text style={{fontWeight: 'normal'}}> {props.comments?.text}</Text>
          </Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  IconContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingRight: 10,
  },
  iconStyle: {
    width: 26,
    height: 40,
    marginHorizontal: 5,
  },
  usernameStyleCaption: {
    fontWeight: '800',
  },
});

export default PostFooter;
