import React, { Component } from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Series from '../Screens/Series';
import Schedule from '../Screens/Schedule';
import Video from '../Screens/Video';
import More from '../Screens/More';
import AboutApp from '../Screens/About/AboutApp';
import PrivacyPolicy from '../Screens/About/PrivacyPolicy';
import Terms from '../Screens/About/Terms';
import BrowsePlayer from '../Screens/BrowsePlayer';
import MultiGames from '../Screens/multigame/MultiGames';
import Quotes from '../Screens/Quotes';
import Quiz from '../Screens/Quiz';
import QuizQuestion from '../Screens/QuizQuestion';
import FullNews from '../Screens/news/FullNews';
import MoreNews from '../Screens/news/MoreNews';
import Game from '../Screens/Game/Game';
import Game2 from '../Screens/Game/Game2';
import AllGames from '../Screens/AllGames';
import Splash from '../Screens/Spalsh';
import Home from '../Screens/Dashboard/featured/Home';
import PlusDashboard from '../Screens/Dashboard/premium/PlusDashboard';
import GetPremium from '../Screens/Dashboard/premium/GetPremium';
import Photos from '../Screens/Photos';
import Notifications from '../Screens/Notifications';
import Registration from '../Screens/Users/Registration';
import Login from '../Screens/Users/Login';
import Profile from '../Screens/Users/Profile';
import Otp from '../Screens/Users/Otp';
import OtpOk from '../Screens/Users/OtpOk';
import Onboarding from '../Screens/onboarding/Onboarding';
import Onboarding2 from '../Screens/onboarding/Onboarding2';
import Onboarding3 from '../Screens/onboarding/Onboarding3';
import Onboarding4 from '../Screens/onboarding/Onboarding4';
import BottomTab from '../navigations/BottomTab';
import Toptab from '../navigations/Toptab';
import BrowseSeries from '../Screens/ToptabScreens/BrowseSeries';
import BrowseTeams from '../Screens/ToptabScreens/BrowseTeams';
import Archives from '../Screens/ToptabScreens/Archives';
import ICCMens from '../Screens/ToptabScreens/ICCMens';
import ICCWomens from '../Screens/ToptabScreens/ICCWomens';
import LiveMatches from '../Screens/ToptabScreens/LiveMatches';
import PastMatches from '../Screens/ToptabScreens/PastMatches';
import VideoPlay from '../Screens/VideoPlay';

const Stack = createStackNavigator();
function Navigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoPlay"
        component={VideoPlay}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetPremium"
        component={GetPremium}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlusDashboard"
        component={PlusDashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game2"
        component={Game2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MoreNews"
        component={MoreNews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MultiGames"
        component={MultiGames}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ICCWomens"
        component={ICCWomens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizQuestion"
        component={QuizQuestion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FullNews"
        component={FullNews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllGames"
        component={AllGames}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Archives"
        component={Archives}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quotes"
        component={Quotes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Photos"
        component={Photos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LiveMatches"
        component={LiveMatches}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PastMatches"
        component={PastMatches}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrowseSeries"
        component={BrowseSeries}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ICCMens"
        component={ICCMens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrowseTeams"
        component={BrowseTeams}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrowsePlayer"
        component={BrowsePlayer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutApp"
        component={AboutApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Toptab"
        component={Toptab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpOk"
        component={OtpOk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding2"
        component={Onboarding2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding3"
        component={Onboarding3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding4"
        component={Onboarding4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Home"
        component={BottomNavigation}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Series"
        component={Series}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Video"
        component={Video}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="More"
        component={More}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AppContainer() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default AppContainer;
