import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions
} from 'react-native';
import { Colors } from '../theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
const { height, width } = Dimensions.get('window');
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const International = () => {
  return (
    <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>

      <View>
        <Text style={styles.date}>Sun, Nov 13 2022</Text>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
        }}>
          <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
          <Feather
            name='chevron-right'
            size={20}
            color={'black'}
          />
        </TouchableOpacity>

        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>

        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: height * 0.018 }}>
          <TouchableOpacity style={{
            flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
          }}>
            <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
            <Feather
              name='chevron-right'
              size={20}
              color={'black'}
            />
          </TouchableOpacity>

          <View style={styles.section}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.title}>Final . Melbourne</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
                <Feather
                  name='bell'
                  size={20}
                  color={'gray'}
                  style={{ padding: 2, paddingLeft: width * 0.03 }}
                />
              </View>
            </View>
            <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{}}>
                <Image
                  source={require('../assets/icons/flag2.png')}
                  style={{
                    height: height * 0.039,
                    width: height * 0.039,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                  }}
                />
                <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
              </View>
              <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
              <View style={{}}>
                <Image
                  source={require('../assets/icons/flag1.png')}
                  style={{
                    height: height * 0.037,
                    width: height * 0.037,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                  }}
                />
                <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
              </View>
            </View>

          </View>
        </View>
      </View>

      <View>
        <Text style={styles.date}>Sun, Nov 13 2022</Text>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
        }}>
          <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
          <Feather
            name='chevron-right'
            size={20}
            color={'black'}
          />
        </TouchableOpacity>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  )
};

const T20Leagues = () => {
  return (
    <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>

      <View>
        <Text style={styles.date}>WED, Nov 23 2022</Text>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
        }}>
          <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
          <Feather
            name='chevron-right'
            size={20}
            color={'black'}
          />
        </TouchableOpacity>

        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>

        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: height * 0.018 }}>
          <TouchableOpacity style={{
            flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
          }}>
            <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
            <Feather
              name='chevron-right'
              size={20}
              color={'black'}
            />
          </TouchableOpacity>

          <View style={styles.section}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.title}>Final . Melbourne</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
                <Feather
                  name='bell'
                  size={20}
                  color={'gray'}
                  style={{ padding: 2, paddingLeft: width * 0.03 }}
                />
              </View>
            </View>
            <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{}}>
                <Image
                  source={require('../assets/icons/flag2.png')}
                  style={{
                    height: height * 0.039,
                    width: height * 0.039,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                  }}
                />
                <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
              </View>
              <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
              <View style={{}}>
                <Image
                  source={require('../assets/icons/flag1.png')}
                  style={{
                    height: height * 0.037,
                    width: height * 0.037,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                  }}
                />
                <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
              </View>
            </View>

          </View>
        </View>
      </View>

      <View>
        <Text style={styles.date}>Sun, Nov 13 2022</Text>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
        }}>
          <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
          <Feather
            name='chevron-right'
            size={20}
            color={'black'}
          />
        </TouchableOpacity>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  )
};

const Domestic = () => {
  return (
    <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>

      <View>
        <Text style={styles.date}>Sat, Nov 12 2022</Text>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
        }}>
          <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
          <Feather
            name='chevron-right'
            size={20}
            color={'black'}
          />
        </TouchableOpacity>

        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>

        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: height * 0.018 }}>
          <TouchableOpacity style={{
            flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
          }}>
            <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
            <Feather
              name='chevron-right'
              size={20}
              color={'black'}
            />
          </TouchableOpacity>

          <View style={styles.section}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.title}>Final . Melbourne</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
                <Feather
                  name='bell'
                  size={20}
                  color={'gray'}
                  style={{ padding: 2, paddingLeft: width * 0.03 }}
                />
              </View>
            </View>
            <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{}}>
                <Image
                  source={require('../assets/icons/flag2.png')}
                  style={{
                    height: height * 0.039,
                    width: height * 0.039,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                  }}
                />
                <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
              </View>
              <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
              <View style={{}}>
                <Image
                  source={require('../assets/icons/flag1.png')}
                  style={{
                    height: height * 0.037,
                    width: height * 0.037,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                  }}
                />
                <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
              </View>
            </View>

          </View>
        </View>
      </View>

      <View>
        <Text style={styles.date}>Sun, Nov 13 2022</Text>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
        }}>
          <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
          <Feather
            name='chevron-right'
            size={20}
            color={'black'}
          />
        </TouchableOpacity>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  )
};

const Women = () => {
  return (
    <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>

      <View>
        <Text style={styles.date}>Sat, Nov 12 2022</Text>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
        }}>
          <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
          <Feather
            name='chevron-right'
            size={20}
            color={'black'}
          />
        </TouchableOpacity>

        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>

        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: height * 0.018 }}>
          <TouchableOpacity style={{
            flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
          }}>
            <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
            <Feather
              name='chevron-right'
              size={20}
              color={'black'}
            />
          </TouchableOpacity>

          <View style={styles.section}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.title}>Final . Melbourne</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
                <Feather
                  name='bell'
                  size={20}
                  color={'gray'}
                  style={{ padding: 2, paddingLeft: width * 0.03 }}
                />
              </View>
            </View>
            <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{}}>
                <Image
                  source={require('../assets/icons/flag2.png')}
                  style={{
                    height: height * 0.039,
                    width: height * 0.039,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                  }}
                />
                <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
              </View>
              <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
              <View style={{}}>
                <Image
                  source={require('../assets/icons/flag1.png')}
                  style={{
                    height: height * 0.037,
                    width: height * 0.037,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                  }}
                />
                <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
              </View>
            </View>

          </View>
        </View>
      </View>

      <View>
        <Text style={styles.date}>Sun, Nov 13 2022</Text>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.PRIMARY_2, opacity: 0.7, padding: height * 0.017
        }}>
          <Text style={{ color: 'black', fontSize: 12 }}>ICC MENS T20 WORLD CUP 2022</Text>
          <Feather
            name='chevron-right'
            size={20}
            color={'black'}
          />
        </TouchableOpacity>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Final . Melbourne</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 13, color: 'black' }}>01:30 pm</Text>
              <Feather
                name='bell'
                size={20}
                color={'gray'}
                style={{ padding: 2, paddingLeft: width * 0.03 }}
              />
            </View>
          </View>
          <View style={{ padding: height * 0.015, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag2.png')}
                style={{
                  height: height * 0.039,
                  width: height * 0.039,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Pakistan</Text>
            </View>
            <Text style={{ color: 'gray', paddingTop: height * 0.018, fontSize: 15 }}>V/S</Text>
            <View style={{}}>
              <Image
                source={require('../assets/icons/flag1.png')}
                style={{
                  height: height * 0.037,
                  width: height * 0.037,
                  resizeMode: 'contain',
                  alignSelf: 'center'
                }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 14, color: 'black', textAlign: 'center', paddingTop: height * 0.004 }}>Indian</Text>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  )
};

const renderScene = SceneMap({
  first: International,
  second: T20Leagues,
  third: Domestic,
  fourth: Women,
});

const Schedule = props => {
  const navigation = props.navigation;
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'International' },
    { key: 'second', title: 'T20 Leagues' },
    { key: 'third', title: 'Domestic' },
    { key: 'fourth', title: 'Women' },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
      {/* top nav tab  */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: '4%',
          borderBottomColor: Colors.PRIMARY_1,
          borderBottomWidth: 0.7,
          paddingVertical: height * 0.02,
          backgroundColor: Colors.PRIMARY_2
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            justifyContent: 'center'
          }}>
          <MaterialIcons
            name='keyboard-backspace'
            size={28}
            color={Colors.LIGHT_SKY}
          />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{
            color: Colors.LIGHT_SKY,
            fontSize: 18,
            fontWeight: '400',
            left: width * 0.05,
          }}>Schedules</Text>
        </View>

      </View>
      <TabView
                style={{}}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => <TabBar {...props}
                    style={{ backgroundColor: Colors.PRIMARY_2, opacity: 0.9 }}
                    labelStyle={{ fontSize: 12, fontWeight: '500' }}
                    tabStyle={{ width: 'auto' }}
                    scrollEnabled={true}
                    bounces={true}
                    activeColor={'#fff'}
                    indicatorStyle={{ backgroundColor: '#fff' }}
                // inactiveColor={'#fff'}
                />}
            />
    </SafeAreaView>
  );
};
export default Schedule;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_SKY,
    height: '100%'
  },
  options_icon: {
    alignSelf: 'center',
    marginRight: width * 0.035
  },
  section: {
    backgroundColor: '#fff',
    width: '100%',
    padding: height * 0.011,
    marginVertical: height * 0.0012,
    paddingHorizontal: width * 0.04
  },
  sub_title: { fontSize: 14, color: 'black' },
  title: { fontSize: 13, color: 'gray' },
  date: {
    fontSize: 15, color: 'black',
    paddingHorizontal: width * 0.04,
    padding: height * 0.013,
    fontWeight: '500'
  }
});