import React from 'react';
import {StyleSheet} from 'react-native';
import AppContainer from './src/navigations/Navigator';
// import DrawerBar from './src/navigations/DrawerBar';
const App = () => {

    return <AppContainer />;
    // return <DrawerBar />;

}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default App;
