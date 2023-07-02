import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Linking,
  Button,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Animated,
  Pressable,
} from 'react-native';

// import KeyboardAwareScrollView from '@pietile-native-kit/keyboard-aware-scrollview';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Toptab from '../navigations/Toptab';
import BottomTab from '../navigations/BottomTab';

import Lottie from 'lottie-react-native';
const { height, width } = Dimensions.get('window');

const Series = props => {
  const navigation = props.navigation;
  const [Like, setLike] = useState(5624);

  const fadeAnimate = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      fadeAnimate,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }
    ).start();
  })


  const LeftAnimate = new Animated.ValueXY({ x: -220, y: 200 })

  useEffect(() => {
    Animated.timing(
      LeftAnimate,
      {
        toValue: { x: 2, y: 4 },
        duration: 800,
        useNativeDriver: true
      }
    ).start();


  })

  // video 
  const handlePress = useCallback(async () => {
    await Linking.openURL("https://www.youtube.com/watch?v=nqgP37hJFzs");
  }, []);

  // context 
  const handlePressContent = useCallback(async () => {
    await Linking.openURL("https://www.hindustantimes.com/cricket/babar-azam-equals-virat-kohli-rohit-sharma-s-spectacular-t20i-records-with-incredible-match-winning-79-vs-new-zealand-101665222602208.html");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
      {/* top nav tab  */}
      <Toptab {...props} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ }}
      >
        <View style={{
          marginHorizontal: width * 0.035,
          marginTop: height * 0.014
        }}>
          {/* live match score  */}
          <ScrollView
            horizontal={true}>
            <View>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 2 }}
                colors={[Colors.PRIMARY_2, '#fff']}
                style={{
                  width: '99%',
                  borderRadius: 25,
                  alignSelf: 'center',
                  padding: width * 0.02,
                  paddingVertical: height * 0.02,
                  marginBottom: height * 0.015,
                  elevation: 10
                }}>
                <View>
                  <View style={{
                    flexDirection: 'row',
                    height: height * 0.06,
                    borderTopLeftRadius: 8,
                    borderTopEndRadius: 8,
                    justifyContent: 'space-between',
                    padding: 10
                  }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'red',
                        top: 1,
                        left: width * 0.02
                      }}>
                      Watch LIVE
                    </Text>
                    <MaterialCommunityIcons
                      name='bell'
                      size={20}
                      color={'black'}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: height * 0.1,
                      borderTopColor: '#CBC3E3',
                      borderTopWidth: 1,
                      justifyContent: 'space-between',
                      padding: 30
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{
                          width: width * 0.12,
                          height: height * 0.065,
                          alignSelf: 'center',
                          marginVertical: height * 0.01,
                          marginVertical: height * 0.01,
                        }}
                        source={require('../assets/icons/flag1.png')}
                      />
                      <View
                        style={{
                          left: 10,
                          bottom: 7
                        }}>

                        <Text style={{
                          color: 'black',
                          width: width * 0.25,
                          fontSize: 12,
                          fontWeight: '500',
                          height: 15

                        }}>IND</Text>
                        <Text style={{
                          fontSize: 10,
                        }}>Bat to yet</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          bottom: 7,
                          left: width * 0.11
                        }}>

                        <Text style={{
                          color: 'black',
                          width: width * 0.25,
                          fontSize: 12,
                          fontWeight: '500',
                          height: 15
                        }}>PAK</Text>
                        <Text style={{
                          fontSize: 10,
                          color: 'red'
                        }}>51-1 (6.5)</Text>
                      </View>
                      <Image
                        style={{
                          width: width * 0.12,
                          height: height * 0.065,
                          alignSelf: 'center',
                          marginVertical: height * 0.01,
                          marginVertical: height * 0.01,
                        }}
                        source={require('../assets/icons/flag2.png')}
                      />

                    </View>
                  </View>
                  <View style={{
                    borderTopColor: '#CBC3E3',
                    borderTopWidth: 1,
                    padding: 8,
                    borderBottomLeftRadius: 8,
                    borderBottomEndRadius: 8
                  }}>
                    <Text>Match postponed
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 2 }}
                colors={[Colors.PRIMARY_2, '#fff']}
                style={{
                  width: '98%',
                  elevation: 10,
                  borderRadius: 25,
                  alignSelf: 'center',
                  padding: width * 0.03,
                  paddingVertical: height * 0.02,
                  marginBottom: height * 0.015
                }}>
                <View>
                  <View style={{
                    flexDirection: 'row',
                    height: height * 0.06,
                    borderTopLeftRadius: 8,
                    borderTopEndRadius: 8,
                    justifyContent: 'space-between',
                    padding: 10
                  }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'red',
                        top: 1,
                        left: width * 0.02
                      }}>
                      Watch LIVE
                    </Text>
                    <MaterialCommunityIcons
                      name='bell'
                      size={20}
                      color={'black'}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: height * 0.1,
                      borderTopColor: '#CBC3E3',
                      borderTopWidth: 1,
                      justifyContent: 'space-between',
                      padding: 30
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{
                          width: width * 0.12,
                          height: height * 0.065,
                          alignSelf: 'center',
                          marginVertical: height * 0.01,
                          marginVertical: height * 0.01,
                        }}
                        source={require('../assets/icons/flag1.png')}
                      />
                      <View
                        style={{
                          left: 10,
                          bottom: 7
                        }}>

                        <Text style={{
                          color: 'black',
                          width: width * 0.25,
                          fontSize: 12,
                          fontWeight: '500',
                          height: 15

                        }}>IND</Text>
                        <Text style={{
                          fontSize: 10,
                        }}>Bat to yet</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          bottom: 7,
                          left: width * 0.11
                        }}>

                        <Text style={{
                          color: 'black',
                          width: width * 0.25,
                          fontSize: 12,
                          fontWeight: '500',
                          height: 15
                        }}>PAK</Text>
                        <Text style={{
                          fontSize: 10,
                          color: 'red'
                        }}>51-1 (6.5)</Text>
                      </View>
                      <Image
                        style={{
                          width: width * 0.12,
                          height: height * 0.065,
                          alignSelf: 'center',
                          marginVertical: height * 0.01,
                          marginVertical: height * 0.01,
                        }}
                        source={require('../assets/icons/flag2.png')}
                      />

                    </View>
                  </View>
                  <View style={{
                    borderTopColor: '#CBC3E3',
                    borderTopWidth: 1,
                    padding: 8,
                    borderBottomLeftRadius: 8,
                    borderBottomEndRadius: 8
                  }}>
                    <Text>Match postponed
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 2 }}
                colors={[Colors.PRIMARY_2, '#fff']}
                style={{
                  width: '98%',
                  elevation: 10,
                  borderRadius: 25,
                  alignSelf: 'center',
                  padding: width * 0.03,
                  paddingVertical: height * 0.02,
                  marginBottom: height * 0.015
                }}>
                <View>
                  <View style={{
                    flexDirection: 'row',
                    height: height * 0.06,
                    borderTopLeftRadius: 8,
                    borderTopEndRadius: 8,
                    justifyContent: 'space-between',
                    padding: 10
                  }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'red',
                        top: 1,
                        left: width * 0.02
                      }}>
                      Watch LIVE
                    </Text>
                    <MaterialCommunityIcons
                      name='bell'
                      size={20}
                      color={'black'}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: height * 0.1,
                      borderTopColor: '#CBC3E3',
                      borderTopWidth: 1,
                      justifyContent: 'space-between',
                      padding: 30
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{
                          width: width * 0.12,
                          height: height * 0.065,
                          alignSelf: 'center',
                          marginVertical: height * 0.01,
                          marginVertical: height * 0.01,
                        }}
                        source={require('../assets/icons/flag1.png')}
                      />
                      <View
                        style={{
                          left: 10,
                          bottom: 7
                        }}>

                        <Text style={{
                          color: 'black',
                          width: width * 0.25,
                          fontSize: 12,
                          fontWeight: '500',
                          height: 15

                        }}>IND</Text>
                        <Text style={{
                          fontSize: 10,
                        }}>Bat to yet</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          bottom: 7,
                          left: width * 0.11
                        }}>

                        <Text style={{
                          color: 'black',
                          width: width * 0.25,
                          fontSize: 12,
                          fontWeight: '500',
                          height: 15
                        }}>PAK</Text>
                        <Text style={{
                          fontSize: 10,
                          color: 'red'
                        }}>51-1 (6.5)</Text>
                      </View>
                      <Image
                        style={{
                          width: width * 0.12,
                          height: height * 0.065,
                          alignSelf: 'center',
                          marginVertical: height * 0.01,
                          marginVertical: height * 0.01,
                        }}
                        source={require('../assets/icons/flag2.png')}
                      />

                    </View>
                  </View>
                  <View style={{
                    borderTopColor: '#CBC3E3',
                    borderTopWidth: 1,
                    padding: 8,
                    borderBottomLeftRadius: 8,
                    borderBottomEndRadius: 8
                  }}>
                    <Text>Match postponed
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </ScrollView>

          {/* video section  */}
          <View
            style={{
              height: height * 0.37,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
              borderRadius: 25,
              elevation: 10
            }}>
            <Image
              style={{
                width: '100%',
                height: '70%',
                resizeMode: 'contain',
                borderRadius: 25,
                borderBottomLeftRadius: 80,
                position: 'absolute',
                top: -5

              }}
              source={require('../assets/images/img4.jpg')}
            />
            <TouchableOpacity
              onPress={handlePress}
              style={{
                borderColor: '#fff',
                height: height * 0.1,
                width: height * 0.1,
                borderRadius: 50,
                borderWidth: 2,
                position: 'absolute',
                top: height * 0.092,
                justifyContent: 'center',
                opacity: 0.5,
                alignSelf: 'center',
              }}>
              <View style={{
                backgroundColor: '#fff',
                height: height * 0.087,
                width: height * 0.087,
                borderRadius: 50,
                justifyContent: 'center',
                paddingLeft: 5,
                alignSelf: 'center',
              }}>
                <Entypo
                  name='controller-play'
                  size={40}
                  color={Colors.PRIMARY_2}
                  style={{
                    alignSelf: 'center',

                  }}
                />
              </View>
            </TouchableOpacity>

            <View style={{
              position: 'absolute',
              bottom: height * 0.038,
              alignSelf: 'center',
            }}>

              <View style={{
                backgroundColor: Colors.PINK_LABEL,
                width: width * 0.36,
                padding: 10,
                borderRadius: 8,
                alignSelf: 'center',
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 11,
                  fontWeight: '600',
                  letterSpacing: 0.6
                }}>
                  CWC 01:01 Mins
                </Text>
              </View>

              <View style={{
                alignSelf: 'center',
                top: height * 0.014,
                textAlign: 'center'
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 13.5,
                  fontWeight: '500'
                }}>
                  2019- The year of the Cricket World Cup
                </Text>
                <Text style={{
                  color: Colors.PINK_LABEL,
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: '700'
                }}>
                  01 Jan 2019
                </Text>
              </View>
            </View>
          </View>

          {/* min video section  */}
          <View
            style={{
              height: height * 0.256,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginBottom: height * 0.025,
              borderRadius: 25,
              elevation: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>

            <View style={{
              width: '45%',
              height: '50%',
              marginTop: height * 0.02,
            }}>
              <Image
                style={{
                  width: '98%',
                  height: '120%',
                  resizeMode: 'contain',
                  borderRadius: 35,
                  borderBottomRightRadius: 240,
                  borderTopRightRadius: 240,

                }}
                source={require('../assets/images/img9.jpg')}
              />
              <TouchableOpacity
                onPress={handlePress}
                style={{
                  borderColor: '#fff',
                  height: height * 0.055,
                  width: height * 0.055,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: 'center',
                  opacity: 0.7,
                  position: 'absolute',
                  top: height * 0.06,
                  alignSelf: 'center',
                }}>
                <View style={{
                  backgroundColor: '#fff',
                  height: height * 0.043,
                  width: height * 0.043,
                  borderRadius: 50,
                  justifyContent: 'center',
                  paddingLeft: 5,
                  alignSelf: 'center',
                }}>
                  <Entypo
                    name='controller-play'
                    size={25}
                    color={Colors.PRIMARY_2}
                    style={{
                      alignSelf: 'center',

                    }}
                  />
                </View>
              </TouchableOpacity>

              <View style={{
                backgroundColor: Colors.PINK_LABEL,
                padding: 5,
                borderRadius: 8,
                paddingHorizontal: 9,
                bottom: height * 0.023,
                alignSelf: 'center'
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 9,
                  fontWeight: '600',
                  letterSpacing: 0.6
                }}>
                  01:01
                </Text>
              </View>

              <View style={{
                bottom: height * 0.015,
              }}>
                <Text style={{
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: '500',
                  paddingLeft: width * 0.03,
                  width: width * 0.25
                }}>
                  NEL vs Cricket World Cup
                </Text>
              </View>
            </View>

            <View style={{
              width: '45%',
              height: '50%',
              paddingLeft: 10,
              marginTop: height * 0.025,
            }}>
              <Image
                style={{
                  width: '98%',
                  height: '120%',
                  resizeMode: 'contain',
                  borderRadius: 35,
                  borderBottomRightRadius: 240,
                  borderTopRightRadius: 240,

                }}
                source={require('../assets/images/img7.jpg')}
              />
              <TouchableOpacity
                onPress={handlePress}
                style={{
                  borderColor: '#fff',
                  height: height * 0.055,
                  width: height * 0.055,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: 'center',
                  opacity: 0.7,
                  position: 'absolute',
                  top: height * 0.06,
                  alignSelf: 'center',
                }}>
                <View style={{
                  backgroundColor: '#fff',
                  height: height * 0.043,
                  width: height * 0.043,
                  borderRadius: 50,
                  justifyContent: 'center',
                  paddingLeft: 5,
                  alignSelf: 'center',
                }}>
                  <Entypo
                    name='controller-play'
                    size={25}
                    color={Colors.PRIMARY_2}
                    style={{
                      alignSelf: 'center',

                    }}
                  />
                </View>
              </TouchableOpacity>

              <View style={{
                backgroundColor: Colors.PINK_LABEL,
                padding: 5,
                borderRadius: 8,
                paddingHorizontal: 9,
                bottom: height * 0.023,
                alignSelf: 'center'
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 9,
                  fontWeight: '600',
                  letterSpacing: 0.6
                }}>
                  01:01
                </Text>
              </View>

              <View style={{
                bottom: height * 0.015,
              }}>
                <Text style={{
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: '500',
                  paddingLeft: width * 0.03,
                }}>
                  The Cricket World Cup Carnival is coming
                </Text>
              </View>
            </View>

          </View>

          {/* most watched  */}
          <TouchableOpacity
            onPress={handlePress}
            style={{
              height: height * 0.1,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginBottom: height * 0.01,
              borderRadius: 25,
              elevation: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: height * 0.03,
              paddingHorizontal: width * 0.02
            }}>
            <View style={{
              justifyContent: 'center',
              left: width * 0.05
            }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: '600'
                }}>
                Most Watched
              </Text>
              <Text
                style={{
                  color: Colors.MUTE_ICON,
                  textAlign: 'center',
                  fontSize: 9,
                  fontWeight: '600',
                  letterSpacing: 3
                }}>VIDEOES</Text>
            </View>
            <View style={{
              justifyContent: 'center'
            }}>
              <Image
                style={{
                  width: width * 0.52,
                  height: width * 0.27,
                  resizeMode: 'contain',
                  position: 'absolute',
                  bottom: 0,
                  right: 0
                }}
                source={require('../assets/images/img18.png')}
              />
            </View>
          </TouchableOpacity>

          {/* quiz section  */}
          <View style={{
            marginVertical: height * 0.012
          }}>
            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.PINK_LABEL, Colors.PRIMARY_2]}
                style={{
                  width: '100%',
                  // height: 100,
                  borderRadius: 25,
                  alignSelf: 'center',
                  padding: width * 0.03,
                  paddingVertical: height * 0.03,
                  marginBottom: height * 0.015
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <MaterialIcons
                    name='group'
                    size={20}
                    color={'#fff'}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'white',
                      top: 1,
                      left: width * 0.02
                    }}>
                    60K+ Participants
                  </Text>
                </View>
                <Text style={styles.para_text}>
                  T20 Match 2022 Finale Quiz.
                </Text>
                <Text
                  style={{ fontSize: 14, color: '#fff' }}>
                  Sint quia recusandae officiis neque eaque maiores is cupiditate tempora qui.
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.PRIMARY_2, Colors.PRIMARY_1]}
                style={{
                  width: '100%',
                  // height: 100,
                  borderRadius: 25,
                  alignSelf: 'center',
                  padding: width * 0.03,
                  paddingVertical: height * 0.03,
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <MaterialIcons
                    name='group'
                    size={20}
                    color={'#fff'}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'white',
                      top: 1,
                      left: width * 0.02
                    }}>
                    25K+ Participants
                  </Text>
                </View>
                <Text style={styles.para_text}>
                  TATA IPL 2022 Finale Quiz.
                </Text>
                <Text
                  style={{ fontSize: 14, color: '#fff' }}>
                  Sint quia recusandae officiis neque eaque maiores is cupiditate tempora qui.
                </Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>
        </View>


        {/* Squard List section  */}
        <View style={{
          height: height * 0.99,
          marginTop: height * 0.01,
          zIndex: 1,
        }}>
          <View style={{
            width: '100%',
            height: height * 0.295,
            backgroundColor: Colors.PRIMARY_2,
            zIndex: 2,
          }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
                opacity: 0.5,

              }}
              source={require('../assets/images/img3.png')}
            />
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.LIGHT_SKY,
                position: 'absolute',
                top: height * 0.19,
                elevation: 10,
                opacity: 1,
                zIndex: 3,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                paddingHorizontal: width * 0.05,
                paddingVertical: width * 0.06
              }}
            >
              <Image
                style={{
                  width: width * 0.18,
                  height: width * 0.18,
                  alignSelf: 'center',
                  borderColor: Colors.LIGHT_SKY,
                  borderWidth: 2,
                  borderRadius: 50,
                  marginTop: height * -0.073
                }}
                source={require('../assets/icons/flag1.png')}
              />
              <View style={{
                marginVertical: height * 0.015
              }}>
                <Text
                  style={{
                    color: Colors.PRIMARY_2,
                    textAlign: 'center',
                    fontSize: 25,
                    fontWeight: '500'
                  }}>
                  Most Watched
                </Text>
                <Text
                  style={{
                    color: Colors.PRIMARY_2,
                    textAlign: 'center',
                    fontSize: 13,
                    fontWeight: '500',
                    letterSpacing: 5,
                    marginTop: height * 0.005
                  }}>RANKINGS</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: height * 0.02
                  }}>
                  <View
                    style={{
                      borderRadius: 8,
                      backgroundColor: '#055C9D',
                      elevation: 10,
                      width: height * 0.0895,
                      height: height * 0.0895,
                      margin: height * 0.016,
                      justifyContent: 'center',

                    }}>
                    <Text style={{
                      color: '#fff',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      alignSelf: 'center',
                      width: width * 0.08
                    }}>
                      ODI 4
                    </Text>
                  </View>
                  <View
                    style={{
                      borderRadius: 8,
                      backgroundColor: '#FB6B90',
                      elevation: 10,
                      width: height * 0.0895,
                      height: height * 0.0895,
                      margin: height * 0.016,
                      justifyContent: 'center',

                    }}>
                    <Text style={{
                      color: '#fff',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      alignSelf: 'center',
                      width: width * 0.09
                    }}>
                      Test 2
                    </Text>
                  </View>

                  <View
                    style={{
                      borderRadius: 8,
                      backgroundColor: '#77dd77',
                      elevation: 10,
                      width: height * 0.0895,
                      height: height * 0.0895,
                      margin: height * 0.016,
                      justifyContent: 'center',

                    }}>
                    <Text style={{
                      color: '#fff',
                      fontWeight: '500',
                      fontSize: 15,
                      textAlign: 'center',
                      alignSelf: 'center',
                      width: width * 0.08
                    }}>
                      T20 2
                    </Text>
                  </View>

                </View>

                <View style={{
                  marginTop: height * 0.02
                }}>
                  <Text
                    style={{
                      color: Colors.PRIMARY_2,
                      fontSize: 25,
                      fontWeight: '500',
                    }}>
                    Squard List
                  </Text>

                  <View style={{
                    flexDirection: 'row',
                    marginTop: height * 0.045,
                  }}>
                    <View style={{
                      borderRadius: 8,
                      backgroundColor: '#fff',
                      elevation: 10,
                      width: '22%',
                      height: '100%',
                      marginRight: width * 0.035
                    }}>
                      <Image
                        style={{
                          width: width * 0.3,
                          height: width * 0.3,
                          alignSelf: 'center',
                          position: 'absolute',
                          bottom: -8
                        }}
                        source={require('../assets/images/abdev.png')}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={handlePressContent}
                      style={{
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        elevation: 10,
                        width: height * 0.33,
                        height: height * 0.099,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        padding: height * 0.032
                      }}>
                      <Text
                        style={{
                          color: Colors.PRIMARY_2,
                          fontSize: 14,
                          fontWeight: 'bold',
                          // padding: 10
                        }}>
                        AB de Villiers
                      </Text>
                      <Feather
                        name='arrow-right-circle'
                        size={20}
                        color={'green'}
                        style={{
                          marginTop: height * 0.004,
                        }}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    marginTop: height * 0.045,
                  }}>
                    <View style={{
                      borderRadius: 8,
                      backgroundColor: '#fff',
                      elevation: 10,
                      width: '22%',
                      height: '100%',
                      marginRight: width * 0.035
                    }}>
                      <Image
                        style={{
                          width: width * 0.25,
                          height: width * 0.25,
                          alignSelf: 'center',
                          position: 'absolute',
                          bottom: 0,
                        }}
                        source={require('../assets/images/chris.png')}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={handlePressContent}
                      style={{
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        elevation: 10,
                        width: height * 0.33,
                        height: height * 0.099,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        padding: height * 0.032
                      }}>
                      <Text
                        style={{
                          color: Colors.PRIMARY_2,
                          fontSize: 14,
                          fontWeight: 'bold',
                          // padding: 10
                        }}>
                        Chris Morris
                      </Text>
                      <Feather
                        name='arrow-right-circle'
                        size={20}
                        color={'red'}
                        style={{
                          marginTop: height * 0.004,
                        }}
                      />
                    </TouchableOpacity>

                  </View>

                  <View style={{
                    flexDirection: 'row',
                    marginTop: height * 0.045,
                  }}>
                    <View style={{
                      borderRadius: 8,
                      backgroundColor: '#fff',
                      elevation: 10,
                      width: '22%',
                      height: '100%',
                      marginRight: width * 0.035
                    }}>
                      <Image
                        style={{
                          width: width * 0.27,
                          height: width * 0.27,
                          alignSelf: 'center',
                          position: 'absolute',
                          bottom: 0
                        }}
                        source={require('../assets/images/david.png')}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={handlePressContent}
                      style={{
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        elevation: 10,
                        width: height * 0.33,
                        height: height * 0.099,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        padding: height * 0.032
                      }}>
                      <Text
                        style={{
                          color: Colors.PRIMARY_2,
                          fontSize: 14,
                          fontWeight: 'bold',
                          // padding: 10
                        }}>
                        David Miller
                      </Text>
                      <Feather
                        name='arrow-right-circle'
                        size={20}
                        color={'green'}
                        style={{
                          marginTop: height * 0.004,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>


        {/* bottom bg gradiant  */}
        <View>

          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={[Colors.PRIMARY_2, Colors.PRIMARY_1]}
            style={{
              width: '100%',
              alignSelf: 'center',
              padding: width * 0.03,
              paddingVertical: height * 0.08,
            }}>
            <View style={{
              paddingHorizontal: width * 0.01,
            }}>
              <Text
                style={{
                  color: Colors.LIGHT_SKY,
                  fontSize: 24,
                  fontWeight: '600'
                }}>
                Most Watched
              </Text>

              {/* blue bg video section  */}
              <View
                style={{
                  height: height * 0.37,
                  width: '100%',
                  backgroundColor: Colors.PRIMARY_2,
                  marginVertical: height * 0.02,
                  borderRadius: 25,
                  elevation: 10
                }}>
                <Image
                  style={{
                    width: '100%',
                    height: '70%',
                    resizeMode: 'contain',
                    borderRadius: 25,
                    borderBottomLeftRadius: 80,
                    position: 'absolute',
                    top: -5
                  }}
                  source={require('../assets/images/img8.png')}
                />
                <TouchableOpacity
                  onPress={handlePress}
                  style={{
                    borderColor: '#fff',
                    height: height * 0.1,
                    width: height * 0.1,
                    borderRadius: 50,
                    borderWidth: 2,
                    position: 'absolute',
                    top: height * 0.092,
                    justifyContent: 'center',
                    opacity: 0.5,
                    alignSelf: 'center',
                  }}>
                  <View style={{
                    backgroundColor: '#fff',
                    height: height * 0.087,
                    width: height * 0.087,
                    borderRadius: 50,
                    justifyContent: 'center',
                    paddingLeft: 5,
                    alignSelf: 'center',
                  }}>
                    <Entypo
                      name='controller-play'
                      size={40}
                      color={Colors.PRIMARY_2}
                      style={{
                        alignSelf: 'center',

                      }}
                    />
                  </View>
                </TouchableOpacity>

                <View style={{
                  position: 'absolute',
                  bottom: height * 0.038,
                  alignSelf: 'center',
                }}>

                  <View style={{
                    backgroundColor: Colors.PINK_LABEL,
                    width: width * 0.36,
                    padding: 10,
                    borderRadius: 8,
                    alignSelf: 'center',
                  }}>
                    <Text style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 11,
                      fontWeight: '600',
                      letterSpacing: 0.6
                    }}>
                      CWC 01:01 Mins
                    </Text>
                  </View>

                  <View style={{
                    alignSelf: 'center',
                    top: height * 0.014,
                    textAlign: 'center'
                  }}>
                    <Text style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 13.5,
                      fontWeight: '500'
                    }}>
                      2019- The year of the Cricket World Cup
                    </Text>
                    <Text style={{
                      color: Colors.PINK_LABEL,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: '700'
                    }}>
                      01 Jan 2019
                    </Text>
                  </View>
                </View>
              </View>

              {/* blue bg min video section  */}
              <View
                style={{
                  height: height * 0.256,
                  width: '100%',
                  backgroundColor: Colors.PRIMARY_2,
                  marginBottom: height * 0.025,
                  borderRadius: 25,
                  elevation: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>

                <View style={{
                  width: '45%',
                  height: '50%',
                  paddingLeft: 10,
                  marginTop: height * 0.02,
                }}>
                  <Image
                    style={{
                      width: height * 0.2,
                      height: height * 0.15,
                      resizeMode: 'contain',
                      borderRadius: 35,
                      borderBottomRightRadius: 240,
                      borderTopRightRadius: 240,

                    }}
                    source={require('../assets/images/img2.png')}
                  />
                  <TouchableOpacity
                    onPress={handlePress}
                    style={{
                      borderColor: '#fff',
                      height: height * 0.055,
                      width: height * 0.055,
                      borderRadius: 50,
                      borderWidth: 2,
                      justifyContent: 'center',
                      opacity: 0.7,
                      position: 'absolute',
                      top: height * 0.06,
                      alignSelf: 'center',
                    }}>
                    <View style={{
                      backgroundColor: '#fff',
                      height: height * 0.043,
                      width: height * 0.043,
                      borderRadius: 50,
                      justifyContent: 'center',
                      paddingLeft: 5,
                      alignSelf: 'center',
                    }}>
                      <Entypo
                        name='controller-play'
                        size={25}
                        color={Colors.PRIMARY_2}
                        style={{
                          alignSelf: 'center',

                        }}
                      />
                    </View>
                  </TouchableOpacity>

                  <View style={{
                    backgroundColor: Colors.PINK_LABEL,
                    padding: 5,
                    borderRadius: 8,
                    paddingHorizontal: 9,
                    bottom: height * 0.023,
                    alignSelf: 'center'
                  }}>
                    <Text style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 9,
                      fontWeight: '600',
                      letterSpacing: 0.6
                    }}>
                      01:01
                    </Text>
                  </View>

                  <View style={{
                    bottom: height * 0.015,
                  }}>
                    <Text style={{
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: '500',
                      paddingLeft: width * 0.03,
                    }}>
                      NEL vs Cricket World Cup

                    </Text>
                  </View>
                </View>

                <View style={{
                  width: '45%',
                  height: '50%',
                  paddingLeft: 10,
                  marginTop: height * 0.02,
                }}>
                  <Image
                    style={{
                      width: height * 0.2,
                      height: height * 0.15,
                      resizeMode: 'contain',
                      borderRadius: 35,
                      borderBottomRightRadius: 240,
                      borderTopRightRadius: 240,

                    }}
                    source={require('../assets/images/img6.png')}
                  />
                  <TouchableOpacity
                    onPress={handlePress}
                    style={{
                      borderColor: '#fff',
                      height: height * 0.055,
                      width: height * 0.055,
                      borderRadius: 50,
                      borderWidth: 2,
                      justifyContent: 'center',
                      opacity: 0.7,
                      position: 'absolute',
                      top: height * 0.06,
                      alignSelf: 'center',
                    }}>
                    <View style={{
                      backgroundColor: '#fff',
                      height: height * 0.043,
                      width: height * 0.043,
                      borderRadius: 50,
                      justifyContent: 'center',
                      paddingLeft: 5,
                      alignSelf: 'center',
                    }}>
                      <Entypo
                        name='controller-play'
                        size={25}
                        color={Colors.PRIMARY_2}
                        style={{
                          alignSelf: 'center',

                        }}
                      />
                    </View>
                  </TouchableOpacity>

                  <View style={{
                    backgroundColor: Colors.PINK_LABEL,
                    padding: 5,
                    borderRadius: 8,
                    paddingHorizontal: 9,
                    bottom: height * 0.023,
                    alignSelf: 'center'
                  }}>
                    <Text style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 9,
                      fontWeight: '600',
                      letterSpacing: 0.6
                    }}>
                      01:01
                    </Text>
                  </View>

                  <View style={{
                    bottom: height * 0.015,
                  }}>
                    <Text style={{
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: '500',
                      paddingLeft: width * 0.03,
                    }}>
                      The Cricket World Cup Carnival is coming
                    </Text>
                  </View>
                </View>

              </View>

              {/* blue bg most watched  */}
              <TouchableOpacity
                onPress={handlePress}
                style={{
                  height: height * 0.1,
                  width: '100%',
                  backgroundColor: Colors.PRIMARY_2,
                  marginBottom: height * 0.01,
                  borderRadius: 25,
                  elevation: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: height * 0.09,
                  paddingHorizontal: width * 0.02
                }}>

                <View style={{
                  justifyContent: 'center',
                  left: width * 0.05
                }}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 14,
                      fontWeight: '600'
                    }}>
                    Most Watched
                  </Text>
                  <Text
                    style={{
                      color: Colors.MUTE_ICON,
                      textAlign: 'center',
                      fontSize: 9,
                      fontWeight: '600',
                      letterSpacing: 3
                    }}>VIDEOES</Text>
                </View>

                <Image
                  style={{
                    width: width * 0.62,
                    height: width * 0.37,
                    resizeMode: 'contain',
                    position: 'absolute',
                    bottom: 0,
                    right: -15
                  }}
                  source={require('../assets/images/img19.png')}
                />

              </TouchableOpacity>

              {/* blue bg gradian  */}
              <View style={{
                marginVertical: height * 0.012
              }}>
                <LinearGradient
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  colors={[Colors.PINK_LABEL, Colors.PRIMARY_2]}
                  style={{
                    width: '100%',
                    // height: 100,
                    borderRadius: 25,
                    alignSelf: 'center',
                    padding: width * 0.03,
                    paddingVertical: height * 0.03,
                    marginBottom: height * 0.015
                  }}>
                  <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons
                      name='group'
                      size={20}
                      color={'#fff'}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'white',
                        top: 1,
                        left: width * 0.02
                      }}>
                      25K+ Participants
                    </Text>
                  </View>
                  <Text style={styles.para_text}>
                    TATA IPL 2022 Finale Quiz.
                  </Text>
                  <Text
                    style={{ fontSize: 14, color: '#fff' }}>
                    Sint quia recusandae officiis neque eaque maiores is cupiditate tempora qui.
                  </Text>
                </LinearGradient>

                <View style={{
                  marginTop: height * 0.02
                }}>
                  <TouchableOpacity style={{
                    borderRadius: 8,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    width: '100%',
                    height: height * 0.08,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    padding: height * 0.023,
                    marginVertical: height * 0.01
                  }}>
                    <Text
                      style={{
                        color: Colors.MUTE_ICON,
                        fontSize: 16,
                        fontWeight: 'bold',
                        // padding: 10
                      }}>
                      Fictures
                    </Text>
                    <Feather
                      name='arrow-right-circle'
                      size={20}
                      color={'green'}
                      style={{
                        marginTop: height * 0.004,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={{
                    borderRadius: 8,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    width: '100%',
                    height: height * 0.08,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    padding: height * 0.023,
                    marginVertical: height * 0.01
                  }}>
                    <Text
                      style={{
                        color: Colors.MUTE_ICON,
                        fontSize: 16,
                        fontWeight: 'bold',
                        // padding: 10
                      }}>
                      Results
                    </Text>
                    <Feather
                      name='arrow-right-circle'
                      size={20}
                      color={'green'}
                      style={{
                        marginTop: height * 0.004,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={{
                    borderRadius: 8,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    width: '100%',
                    height: height * 0.08,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    padding: height * 0.023,
                    marginVertical: height * 0.01
                  }}>
                    <Text
                      style={{
                        color: Colors.MUTE_ICON,
                        fontSize: 16,
                        fontWeight: 'bold',
                        // padding: 10
                      }}>
                      Tours
                    </Text>
                    <Feather
                      name='arrow-right-circle'
                      size={20}
                      color={'green'}
                      style={{
                        marginTop: height * 0.004,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={{
                    borderRadius: 8,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    width: '100%',
                    height: height * 0.08,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    padding: height * 0.023,
                    marginVertical: height * 0.01
                  }}>
                    <Text
                      style={{
                        color: Colors.MUTE_ICON,
                        fontSize: 16,
                        fontWeight: 'bold',
                        // padding: 10
                      }}>
                      Most Watched
                    </Text>
                    <Feather
                      name='arrow-right-circle'
                      size={20}
                      color={'green'}
                      style={{
                        marginTop: height * 0.004,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={{
                    borderRadius: 8,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    width: '100%',
                    height: height * 0.08,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    padding: height * 0.023,
                    marginVertical: height * 0.01
                  }}>
                    <Text
                      style={{
                        color: Colors.MUTE_ICON,
                        fontSize: 16,
                        fontWeight: 'bold',
                        // padding: 10
                      }}>
                      Videos Hub
                    </Text>
                    <Feather
                      name='arrow-right-circle'
                      size={20}
                      color={'green'}
                      style={{
                        marginTop: height * 0.004,
                      }}
                    />
                  </TouchableOpacity>
                </View>


                {/* most watched  */}
                <View style={{
                  marginTop: height * 0.035,

                }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: '500',
                      color: Colors.LIGHT_SKY,
                    }}>
                    Players Hub
                  </Text>
                  <TouchableOpacity
                    onPress={handlePress}
                    style={{
                      height: height * 0.1,
                      width: '100%',
                      backgroundColor: Colors.LIGHT_SKY,
                      marginBottom: height * 0.04,
                      borderRadius: 25,
                      elevation: 10,
                      marginTop: height * 0.08,
                      justifyContent: 'center',
                      alignSelf: 'center',

                    }}>

                    <View style={{
                    }}>
                      <Image
                        style={{
                          width: width * 0.9,
                          height: width * 0.65,
                          resizeMode: 'contain',
                          alignSelf: 'center',
                          marginBottom: height * 0.04,
                        }}
                        source={require('../assets/images/img21.png')}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={{
                    width: '100%',
                    height: 1.7,
                    backgroundColor: Colors.PRIMARY_1,
                    marginTop: height * 0.013,
                    opacity: 0.5
                  }}>

                  </View>
                  <TouchableOpacity
                    onPress={handlePress}
                    style={{
                      height: height * 0.1,
                      width: '100%',
                      backgroundColor: Colors.LIGHT_SKY,
                      marginBottom: height * 0.04,
                      borderRadius: 25,
                      elevation: 10,
                      marginTop: height * 0.08,
                      justifyContent: 'center',
                      alignSelf: 'center',

                    }}>

                    <View style={{
                    }}>
                      <Image
                        style={{
                          width: width * 0.9,
                          height: width * 0.65,
                          resizeMode: 'contain',
                          alignSelf: 'center',
                          marginBottom: height * 0.04,
                        }}
                        source={require('../assets/images/img22.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

      </ScrollView>


      <BottomTab {...props}/>
    </SafeAreaView>
  );
};
export default Series;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d7e1',
  },
  para_text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    width: width * 0.7,
    paddingVertical: height * 0.012
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});