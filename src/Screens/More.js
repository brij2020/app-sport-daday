import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Share,
  Linking,
} from 'react-native';
import { ScrollView, State } from 'react-native-gesture-handler';
import { Colors } from '../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import Toptab from '../navigations/Toptab';
import BottomTab from '../navigations/BottomTab';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const { height, width } = Dimensions.get('window');

const More = props => {
  const navigation = props.navigation;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Hi Welcome to the Sports Daddy Application Install and Enjoy.',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // Youtube 
  const YoutubeClick = useCallback(async () => {
    await Linking.openURL("https://www.youtube.com/");
  }, []);

  // Instagram 
  const InstagramClick = useCallback(async () => {
    await Linking.openURL("https://www.instagram.com/");
  }, []);

  // Facebook 
  const FacebookClick = useCallback(async () => {
    await Linking.openURL("https://www.facebook.com/");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
      {/* top nav tab  */}
      <Toptab {...props} />
      <ScrollView style={{
      }}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={[Colors.LIGHT_SKY, Colors.PRIMARY_2]}
          style={{
            width: '100%',
            height: '100%',
            alignSelf: 'center',
            paddingVertical: height * 0.01,
            paddingBottom: height * 0.085,
          }}>
          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('BrowseSeries')}>
              <SimpleLineIcons
                name='trophy'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Browser Series</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('BrowseTeams')}>
              <AntDesign
                name='team'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Browse Team</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('BrowsePlayer')}>
              <AntDesign
                name='user'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Browser Player</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('Schedule')}>
              <Entypo
                name='calendar'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('Archives')}>
              <MaterialCommunityIcons
                name='archive-clock-outline'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Archives</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}

              onPress={() => navigation.navigate('AllGames')}>

              <Ionicons
                name='md-game-controller-outline'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Games</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('Photos')}>

              <FontAwesome
                name='photo'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Photos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('Quiz')}>
              <MaterialCommunityIcons
                name='file-question-outline'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('Quotes')}>
              <Entypo
                name='quote'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Quotes</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('ICCMens')}>
              <MaterialIcons
                name='score'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>ICC Rankings - Men</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('ICCWomens')}>
              <MaterialIcons
                name='score'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>ICC Rankings - Women</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}>
              <Ionicons
                name='document-text-outline'
                size={22}
                color={"#000000"}
                style={{
                  alignSelf: 'center',
                  marginRight: width * 0.035
                }}
              />
              <Text style={styles.more_text}>Records</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}>
              <MaterialIcons
                name='table-chart'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>ICC World Test Championship</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}>
              <MaterialIcons
                name='table-chart'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>ICC World Cup Super League</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}
              onPress={YoutubeClick}>
              <Feather
                name='youtube'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Youtube</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}
              onPress={InstagramClick}>
              <AntDesign
                name='instagram'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}
              onPress={FacebookClick}>
              <Feather
                name='facebook'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}>
              <Ionicons
                name='star-outline'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Rate the App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}>
              <MaterialCommunityIcons
                name='message-text-outline'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}
              onPress={onShare}>
              <AntDesign
                name='sharealt'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Share App</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.group}>
            <TouchableOpacity style={styles.more_sections}>
              <AntDesign
                name='setting'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.more_sections}
              onPress={() => navigation.navigate('AboutApp')}>
              <AntDesign
                name='infocirlceo'
                size={22}
                color={"#000000"}
                style={styles.options_icon}
              />
              <Text style={styles.more_text}>About Sports Daddy</Text>
            </TouchableOpacity>
          </View>

          <Text style={{
            color: Colors.PLACEHOLDER,
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
            paddingBottom: height * 0.028
          }}>
            App Version: 28.02.2023
          </Text>
        </LinearGradient>
      </ScrollView>

      <BottomTab {...props} />
    </SafeAreaView>
  );
};
export default More;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_SKY,
    height: '100%'
  },
  more_sections: {
    backgroundColor: Colors.LIGHT_SKY,
    flexDirection: 'row',
    height: height * 0.07,
    paddingHorizontal: width * 0.03,
    marginVertical: height * 0.0009
  },
  more_text: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'center',
  },
  group: {
    marginBottom: height * 0.012
  },
  options_icon: {
    alignSelf: 'center',
    marginRight: width * 0.035
  }
});