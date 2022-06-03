import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React, {useState} from 'react';

const BottomTabs = ({icons, navigation}) => {
  const [activeStatus, setActiveStatus] = useState('home');
  const [CurrentactiveStatus, setCurrentActiveStatus] = useState('home');

  const Icons = ({icon}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // if (icon.name != CurrentactiveStatus && icon.name == 'addpost') {
          //   setCurrentActiveStatus(icon.name);
          //   navigation.push('NewPost');
          // } else if (icon.name != CurrentactiveStatus && icon.name == 'home') {
          //   setCurrentActiveStatus(icon.name);
          //   navigation.push('Home');
          // }
          setActiveStatus(icon.name);
        }}>
        <Image
          resizeMode="contain"
          style={styles.iconStyle}
          source={activeStatus == icon.name ? icon.active : icon.inactive}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.MainContainer}>
      {icons.map((icons, index) => {
        return (
          <Icons
            key={index}
            icon={icons}
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconStyle: {
    marginTop: 10,

    width: 26,
    height: 30,
    marginHorizontal: 5,
  },
});

export default BottomTabs;
