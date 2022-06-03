import {StyleSheet, ScrollView, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
// import {Header} from 'react-native/Libraries/NewAppScreen';
import Header from '../Componenets/Home Component/Header';
import Stories from '../Componenets/Home Component/Stories';
import Post from '../Componenets/Home Component/Post';
import {Divider} from 'react-native-elements';
import BottomTabs from '../Componenets/Home Component/BottomTabs';
import {BottomTabsIcons} from '../DummyData/BottomTabsIcons';

// import {Divider} from 'react-native-elements';
const Home = ({navigation}) => {
  // console.log(BottomTabsIcons);

  return (
    <SafeAreaView style={styles.Container}>
      <Header navigation={navigation} />
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* <Stories /> */}
      {/* <Divider width={1} orientation="vertical" /> */}
      <Post />
      {/* </ScrollView> */}
      <BottomTabs
        navigation={navigation}
        style={styles.BottomTabsStyle}
        icons={BottomTabsIcons}
      />
    </SafeAreaView>
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
  BottomTabsStyle: {
    alignSelf: 'flex-end',
  },
});
export default Home;
