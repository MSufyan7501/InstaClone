import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

const PLACEHOLDER =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzEld4lR-Esw0QgSYjRjcnOzP3W81Q-JSSzwrC404_8U3dbFVPh5nnvEYijRMuNIW-9g&usqp=CAU';
const newPostScheama = Yup.object().shape({
  imageUrl: Yup.string().url().required('Image Url Required'),
  caption: Yup.string().max(2200, 'Caption text has exceed the limit'),
});

const FormikNewPost = ({navigation}) => {
  const [thumbnail, setthumbnail] = useState(PLACEHOLDER);
  const [currentUserLoggedIn, setcurrentUserLoggedIn] = useState(null);
  const getUsername = () => {
    try {
      const data = firestore()
        .collection('Users')
        .doc(firebase.auth().currentUser.email)
        .get()
        .then(documentSnapshot => {
          setcurrentUserLoggedIn(documentSnapshot.data().username);
        });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  useEffect(() => {
    getUsername();
  }, []);

  const uploadPost = (imageUrl, Caption) => {
    try {
      firestore()
        .collection('Users')
        .doc(firebase.auth().currentUser.email)
        .collection('posts')
        .add({
          username: currentUserLoggedIn,
          image: imageUrl,
          likes: 0,
          caption: Caption,
          com: [],
          likes_by_users: [],
        })
        .then(navigation.goBack());
    } catch (error) {
      Alert.alert(error.message + '\n\n');
    }
  };
  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => uploadPost(values.imageUrl, values.caption)}
      validationSchema={newPostScheama}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View style={styles.MainContainer}>
            <View style={styles.SubContainer}>
              <View>
                <Image
                  style={{width: 100, height: 100}}
                  source={{uri: thumbnail ? thumbnail : PLACEHOLDER}}
                />
              </View>
              <View style={{flex: 1, marginLeft: 12}}>
                <TextInput
                  style={{}}
                  placeholder="Write A Caption"
                  placeholderTextColor="grey"
                  onChangeText={handleChange('caption')}
                  multiline={true}
                  onBlur={handleBlur('caption')}
                  value={values.caption}
                />
              </View>
            </View>
            <View>
              <TextInput
                // style={{marginLeft: 20}}
                onChange={e => setthumbnail(e.nativeEvent.text)}
                placeholder="Write A Url"
                placeholderTextColor="grey"
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                multiline={true}
                value={values.imageUrl}
              />
            </View>
            {errors.imageUrl && (
              <Text style={{color: 'red', fontSize: 10}}>
                {errors.imageUrl}
              </Text>
            )}
            <View>
              <TouchableOpacity
                style={[
                  styles.BtnStyle,
                  {
                    backgroundColor: isValid ? 'blue' : 'grey',
                  },
                ]}
                disabled={!isValid}
                onPress={handleSubmit}>
                <Text>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  SubContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  MainContainer: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  BtnStyle: {
    width: 100,
    borderRadius: 5,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default FormikNewPost;
