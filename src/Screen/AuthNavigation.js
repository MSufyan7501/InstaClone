import React, {useEffect, useState} from 'react';
import {SignInStack, SignOutStack} from './Navigation';
import {firebase} from '@react-native-firebase/auth';

const AuthNavigation = () => {
  const [CurrentUser, setCurrentsetUser] = useState(null);

  const userHandler = user => {
    user ? setCurrentsetUser(user) : setCurrentsetUser(null);
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => userHandler(user));
  }, []);

  return <>{CurrentUser ? <SignInStack /> : <SignOutStack />}</>;
};

export default AuthNavigation;
