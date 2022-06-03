import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Alert,
} from 'react-native';
import React from 'react';
import {firebase} from '@react-native-firebase/auth';

const onSignOut = async () => {
  try {
    await firebase.auth().signOut().then(console.log('logged out'));
  } catch (error) {
    Alert.alert(error.message + '\n\n');
  }
};

const Header = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={onSignOut}>
        <Image
          resizeMode="contain"
          style={styles.MainImage}
          source={require('../../../assets/header-logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.IconContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPost')}>
          <Image
            resizeMode="contain"
            style={[styles.iconStyle, {width: 25}]}
            source={require('../../../assets/add-post-tab-inactive-icon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={[styles.iconStyle, {width: 26}]}
            source={require('../../../assets/like-icon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>3</Text>
          </View>

          <Image
            resizeMode="contain"
            style={styles.iconStyle}
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
            }}
          />
        </TouchableOpacity>
      </View>
      {/* <Text>Header</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    // borderWidth: 2,
  },

  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },

  MainImage: {
    width: 100,
    height: 50,
    marginLeft: 10,
  },

  iconStyle: {
    width: 30,
    height: 50,
    marginLeft: 10,
  },

  unreadBadge: {
    width: 25,
    height: 18,
    backgroundColor: '#FF3250',
    justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    borderRadius: 10,
    top: 5,
    left: 20,

    zIndex: 1,
  },
  unreadBadgeText: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});

export default Header;
