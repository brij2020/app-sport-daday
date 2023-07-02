import React, { useState, useEffect } from 'react';
import {
  Linking,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
const { height, width } = Dimensions.get('window');
import { List } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SidebarMenufirst = 'SidebarMenu';

const SidebarMenu = props => {
  const navigation = props.navigation;
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);
  const [expanded1, setExpanded1] = useState(false);
  const handlePress1 = () => setExpanded1(!expanded1);

  return (
    <SafeAreaView style={styles.Drawerstyle}>
      <View
        style={styles.topbox}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <MaterialIcons
            name='keyboard-backspace'
            size={25}
            color={Colors.LIGHT_SKY}
            style={{
              padding: 15

            }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
          <View style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: height * 0.011,
            borderColor: Colors.LIGHT_SKY,
            borderWidth: 2,
            borderRadius: 75
          }}>
            <View style={{
              width: 70,
              height: 70,
              borderRadius: 75,
              backgroundColor: Colors.LIGHT_SKY,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
              <Text style={{
                alignSelf: 'center',
                color: Colors.PRIMARY_2,
                fontSize: 36,
                fontWeight: 'bold',
              }}>
                {/* {String(profileData.name)[0].toUpperCase()} */}
                J
              </Text>
            </View>
          </View>

          <Text
            style={{
              marginLeft: width * 0.035,
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold',
              alignSelf: 'center',
              bottom: 2
            }}>
            Jyoti
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <TouchableOpacity >
            <Text style={styles.boxView_2}>My Profile</Text>
          </TouchableOpacity>

          <View style={{  }}>

            <View
              style={{ borderBottomColor: 'grey', borderBottomWidth: 2 }}></View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.boxView_2}>Logout</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ borderBottomColor: 'grey', borderBottomWidth: 2 }}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SidebarMenu;
const styles = StyleSheet.create({
  Drawerstyle: {
    flex: 1,
    backgroundColor: 'white',
    height: height,
  },
  topbox: {
    height: height * 0.23,
    backgroundColor: Colors.PRIMARY_2
  },
  boxView_2: {
    height: height * 0.078,
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
    paddingTop: 18,
    paddingLeft: 15,
    fontFamily: 'DMSans-Regular',
  },
});
