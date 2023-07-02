import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Toast from 'react-native-simple-toast';


export const InternetErrToast = () => {
  Toast.show('Please check your Internet Connection!', Toast.LONG);
};

export const somethingErrToast = () => {
  Toast.show('Oops Something went wrong. Please try again later!', Toast.LONG,);
};

export const EmptyCredentialsErrToast = () => {
  Toast.show('Please Enter Mail and Password!', Toast.LONG,);
};
export const CorrectCredentialErrToast = () => {
  Toast.show('Either the email ID or the password is incorrect!', Toast.LONG);
};
export const UserAlreadyExistToast = () => {
  Toast.show('You are already registered. Please log in!', Toast.LONG);
};
export const ValidEmailToast = () => {
  Toast.show('Please enter valid Email!', Toast.LONG);
};
const backgroundColor = 0x50A54A;
export const SuccessfullLoginToast = () => {
  Toast.show('Successfully Login!', Toast.LONG, 0x50A54A);
};
// export const SuccessfullRegistrateToast = () => {
//   Toast.show('Successfully !', Toast.LONG);
// };