import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Linking,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { ScrollView, State } from 'react-native-gesture-handler';
import { Colors } from '../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Toptab from '../navigations/Toptab';
import BottomTab from '../navigations/BottomTab';

const { height, width } = Dimensions.get('window');

const Video = props => {
  const navigation = props.navigation;
  const [Like, setLike] = useState(5624);
  const [ready, setready] = useState();
  const [quality, setquality] = useState();
  const [state, setstate] = useState();


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

  // // video 
  // const handlePress = useCallback(async () => {
  //   await Linking.openURL("https://www.youtube.com/watch?v=nqgP37hJFzs");
  // }, []);

  // // context 
  // const handlecontent=()=> navigation.navigate('VideoPlay') = useCallback(async () => {
  //   await Linking.openURL("https://www.hindustantimes.com/cricket/babar-azam-equals-virat-kohli-rohit-sharma-s-spectacular-t20i-records-with-incredible-match-winning-79-vs-new-zealand-101665222602208.html");
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
      {/* top nav tab  */}
      <Toptab {...props} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          // marginBottom: height * 0.1
        }}
      >
        <View style={{
          marginHorizontal: width * 0.024,
          marginTop: height * 0.01
        }}>
          {/* video section  */}
          <View
            style={{
              height: height * 0.35,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
              borderRadius: 25,
              elevation: 10
            }}>
            <Image
              style={{
                width: '100%',
                height: '75%',
                resizeMode: 'contain',
                borderRadius: 25,
                borderBottomLeftRadius: 80,
                position: 'absolute',
                top: -5
              }}
              source={require('../assets/images/img4.jpg')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoPlay')}
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
              bottom: height * 0.03,
              alignSelf: 'center',
            }}>

              <View style={{
                backgroundColor: Colors.PRIMARY_3,
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
                top: height * 0.01,
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
                  color: Colors.PRIMARY_3,
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: '700'
                }}>
                  01 Jan 2019
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: height * 0.35,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
              borderRadius: 25,
              elevation: 10
            }}>
            <Image
              style={{
                width: '100%',
                height: '75%',
                resizeMode: 'contain',
                borderRadius: 25,
                borderBottomLeftRadius: 80,
                position: 'absolute',
                top: -5
              }}
              source={require('../assets/images/img5.jpg')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoPlay')}
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
              bottom: height * 0.03,
              alignSelf: 'center',
            }}>

              <View style={{
                backgroundColor: Colors.PRIMARY_3,
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
                top: height * 0.01,
                textAlign: 'center'
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 13.5,
                  fontWeight: '500'
                }}>
                  2022- The year of the Cricket World Cup
                </Text>
                <Text style={{
                  color: Colors.PRIMARY_3,
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: '700'
                }}>
                  01 Jan 2022
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: height * 0.35,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
              borderRadius: 25,
              elevation: 10
            }}>
            <Image
              style={{
                width: '100%',
                height: '80%',
                resizeMode: 'contain',
                borderRadius: 25,
                borderBottomLeftRadius: 80,
                position: 'absolute',
                top: -6
              }}
              source={require('../assets/images/img6.png')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoPlay')}
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
              bottom: height * 0.03,
              alignSelf: 'center',
            }}>

              <View style={{
                backgroundColor: Colors.PRIMARY_3,
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
                top: height * 0.01,
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
                  color: Colors.PRIMARY_3,
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: '700'
                }}>
                  01 Jan 2019
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: height * 0.35,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
              borderRadius: 25,
              elevation: 10
            }}>
            <Image
              style={{
                width: '100%',
                height: '75%',
                resizeMode: 'contain',
                borderRadius: 25,
                borderBottomLeftRadius: 80,
                position: 'absolute',
                top: -5
              }}
              source={require('../assets/images/img8.png')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoPlay')}
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
              bottom: height * 0.03,
              alignSelf: 'center',
            }}>

              <View style={{
                backgroundColor: Colors.PRIMARY_3,
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
                top: height * 0.01,
                textAlign: 'center'
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 13.5,
                  fontWeight: '500'
                }}>
                  2022- The year of the Cricket World Cup
                </Text>
                <Text style={{
                  color: Colors.PRIMARY_3,
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: '700'
                }}>
                  01 Jan 2022
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: width * 0.92,
              backgroundColor: Colors.PRIMARY_2,
              justifyContent: 'center',
              borderRadius: 25,
              paddingVertical: height * 0.02,
              paddingHorizontal: width * 0.04,
              width: '100%',
              marginVertical: height * 0.008,
              elevation: 10,
              alignSelf: 'center'
            }}>
            <View>
              <Text style={styles.para_text}>
                Trending Videos
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoPlay')}>
                <Image
                  style={{
                    width: '100%',
                    height: height * 0.28,
                    alignSelf: 'center',
                    marginTop: height * 0.002,
                    borderRadius: 25,
                  }}
                  source={require('../assets/images/home-img2.png')}
                />
                <Text
                  style={{
                    color: '#fff', fontSize: 14, fontWeight: '500',
                    letterSpacing: 0.5, padding: 20, position: 'absolute', bottom: 0
                  }}
                >
                  Facilis enim ut voluptatem corrupti eum sed now impedit deserunt.
                </Text>
              </TouchableOpacity>
              <View style={{ marginTop: height * 0.022 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('VideoPlay')}>
                  <View style={{ flexDirection: 'row', }}>
                    <Image
                      style={{
                        width: width * 0.27,
                        height: height * 0.11,
                        alignSelf: 'center',
                        marginTop: height * 0.007,
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 40
                      }}
                      source={require('../assets/images/img7.jpg')}
                    />
                    <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                      Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                    </Text>
                  </View>
                  <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('VideoPlay')}>
                  <View style={{ flexDirection: 'row', }}>
                    <Image
                      style={{
                        width: width * 0.27,
                        height: height * 0.11,
                        alignSelf: 'center',
                        marginTop: height * 0.001,
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 40
                      }}
                      source={require('../assets/images/home-img.png')}
                    />
                    <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                      Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                    </Text>
                  </View>
                  <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                </TouchableOpacity>

              </View>

            </View>
          </View>
          <View
            style={{
              width: width * 0.92,
              backgroundColor: Colors.PRIMARY_2,
              justifyContent: 'center',
              borderRadius: 25,
              paddingVertical: height * 0.02,
              paddingHorizontal: width * 0.04,
              width: '100%',
              marginVertical: height * 0.008,
              elevation: 10,
              alignSelf: 'center'
            }}>
            <View>
              <Text style={styles.para_text}>
                Trending Videos
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoPlay')}>
                <Image
                  style={{
                    width: '100%',
                    height: height * 0.28,
                    alignSelf: 'center',
                    marginTop: height * 0.002,
                    borderRadius: 25,
                  }}
                  source={require('../assets/images/img2.png')}
                />
                <Text
                  style={{
                    color: '#fff', fontSize: 14, fontWeight: '500',
                    letterSpacing: 0.5, padding: 20, position: 'absolute', bottom: 0
                  }}
                >
                  Facilis enim ut voluptatem corrupti eum sed now impedit deserunt.
                </Text>
              </TouchableOpacity>
              <View style={{ marginTop: height * 0.022 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('VideoPlay')}>
                  <View style={{ flexDirection: 'row', }}>
                    <Image
                      style={{
                        width: width * 0.27,
                        height: height * 0.11,
                        alignSelf: 'center',
                        marginTop: height * 0.007,
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 40
                      }}
                      source={require('../assets/images/img8.png')}
                    />
                    <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                      Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                    </Text>
                  </View>
                  <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('VideoPlay')}>
                  <View style={{ flexDirection: 'row', }}>
                    <Image
                      style={{
                        width: width * 0.27,
                        height: height * 0.11,
                        alignSelf: 'center',
                        marginTop: height * 0.001,
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 40
                      }}
                      source={require('../assets/images/img6.png')}
                    />
                    <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                      Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                    </Text>
                  </View>
                  <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                </TouchableOpacity>

              </View>

            </View>
          </View>
          {/* min video section  */}
          <View
            style={{
              height: height * 0.256,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
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
                onPress={() => navigation.navigate('VideoPlay')}
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
                backgroundColor: Colors.PRIMARY_3,
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
                onPress={() => navigation.navigate('VideoPlay')}
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
                backgroundColor: Colors.PRIMARY_3,
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

          <View
            style={{
              height: height * 0.256,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
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
                source={require('../assets/images/img18.png')}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoPlay')}
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
                backgroundColor: Colors.PRIMARY_3,
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
                source={require('../assets/images/img18.png')}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoPlay')}
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
                backgroundColor: Colors.PRIMARY_3,
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

          <View
            style={{
              height: height * 0.24,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
              borderRadius: 25,
              elevation: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={{
              width: '45%',
              height: '50%',
              marginTop: height * 0.03,
            }}>
              <Image
                style={{
                  width: '100%',
                  height: '108%',
                  resizeMode: 'contain',
                  borderRadius: 35,
                  borderBottomRightRadius: 240,
                  borderTopRightRadius: 240,
                }}
                source={require('../assets/images/img5.jpg')}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoPlay')}
                style={{
                  borderColor: '#fff',
                  height: height * 0.05,
                  width: height * 0.05,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: 'center',
                  opacity: 0.7,
                  position: 'absolute',
                  top: height * 0.04,
                  alignSelf: 'center',
                }}>
                <View style={{
                  backgroundColor: '#fff',
                  height: height * 0.039,
                  width: height * 0.039,
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
                backgroundColor: Colors.PRIMARY_3,
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
              marginTop: height * 0.03,
              marginLeft: width * 0.02
            }}>
              <Image
                style={{
                  width: '100%',
                  height: '108%',
                  resizeMode: 'contain',
                  borderRadius: 35,
                  borderBottomRightRadius: 240,
                  borderTopRightRadius: 240,
                }}
                source={require('../assets/images/img4.jpg')}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoPlay')}
                style={{
                  borderColor: '#fff',
                  height: height * 0.05,
                  width: height * 0.05,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: 'center',
                  opacity: 0.7,
                  position: 'absolute',
                  top: height * 0.04,
                  alignSelf: 'center',
                }}>
                <View style={{
                  backgroundColor: '#fff',
                  height: height * 0.039,
                  width: height * 0.039,
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
                backgroundColor: Colors.PRIMARY_3,
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

          </View>

          <View
            style={{
              height: height * 0.35,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
              borderRadius: 25,
              elevation: 10
            }}>
            <Image
              style={{
                width: '100%',
                height: '80%',
                resizeMode: 'contain',
                borderRadius: 25,
                borderBottomLeftRadius: 80,
                position: 'absolute',
                top: -6
              }}
              source={require('../assets/images/img6.png')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoPlay')}
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
              bottom: height * 0.03,
              alignSelf: 'center',
            }}>

              <View style={{
                backgroundColor: Colors.PRIMARY_3,
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
                top: height * 0.01,
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
                  color: Colors.PRIMARY_3,
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: '700'
                }}>
                  01 Jan 2019
                </Text>
              </View>
            </View>
          </View>

          {/* video section  */}
          <View
            style={{
              height: height * 0.35,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
              borderRadius: 25,
              elevation: 10
            }}>
            <Image
              style={{
                width: '100%',
                height: '75%',
                resizeMode: 'contain',
                borderRadius: 25,
                borderBottomLeftRadius: 80,
                position: 'absolute',
                top: -5
              }}
              source={require('../assets/images/img8.png')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoPlay')}
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
              bottom: height * 0.03,
              alignSelf: 'center',
            }}>

              <View style={{
                backgroundColor: Colors.PRIMARY_3,
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
                top: height * 0.01,
                textAlign: 'center'
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 13.5,
                  fontWeight: '500'
                }}>
                  2022- The year of the Cricket World Cup
                </Text>
                <Text style={{
                  color: Colors.PRIMARY_3,
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: '700'
                }}>
                  01 Jan 2022
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: width * 0.92,
              backgroundColor: Colors.PRIMARY_2,
              justifyContent: 'center',
              borderRadius: 25,
              paddingVertical: height * 0.02,
              paddingHorizontal: width * 0.04,
              width: '100%',
              marginVertical: height * 0.008,
              elevation: 10,
              alignSelf: 'center'
            }}>
            <View>
              <Text style={styles.para_text}>
                Trending Videos
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoPlay')}>
                <Image
                  style={{
                    width: '100%',
                    height: height * 0.28,
                    alignSelf: 'center',
                    marginTop: height * 0.002,
                    borderRadius: 25,
                  }}
                  source={require('../assets/images/home-img2.png')}
                />
                <Text
                  style={{
                    color: '#fff', fontSize: 14, fontWeight: '500',
                    letterSpacing: 0.5, padding: 20, position: 'absolute', bottom: 0
                  }}
                >
                  Facilis enim ut voluptatem corrupti eum sed now impedit deserunt.
                </Text>
              </TouchableOpacity>
              <View style={{ marginTop: height * 0.022 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('VideoPlay')}>
                  <View style={{ flexDirection: 'row', }}>
                    <Image
                      style={{
                        width: width * 0.27,
                        height: height * 0.11,
                        alignSelf: 'center',
                        marginTop: height * 0.007,
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 40
                      }}
                      source={require('../assets/images/img7.jpg')}
                    />
                    <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                      Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                    </Text>
                  </View>
                  <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('VideoPlay')}>
                  <View style={{ flexDirection: 'row', }}>
                    <Image
                      style={{
                        width: width * 0.27,
                        height: height * 0.11,
                        alignSelf: 'center',
                        marginTop: height * 0.001,
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 40
                      }}
                      source={require('../assets/images/home-img.png')}
                    />
                    <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                      Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                    </Text>
                  </View>
                  <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                </TouchableOpacity>

              </View>

            </View>
          </View>

          <View
            style={{
              height: height * 0.256,
              width: '100%',
              backgroundColor: Colors.PRIMARY_2,
              marginVertical: height * 0.008,
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
                onPress={() => navigation.navigate('VideoPlay')}
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
                backgroundColor: Colors.PRIMARY_3,
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
                onPress={() => navigation.navigate('VideoPlay')}
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
                backgroundColor: Colors.PRIMARY_3,
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
        </View>


        {/* Squard List section  */}
        <View style={{
          marginTop: height * 0.008,
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
          </View>

          <View>
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              colors={[Colors.PRIMARY_2, Colors.PRIMARY_1]}
              style={{
                width: '100%',
                alignSelf: 'center',
                paddingVertical: height * 0.035,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                zIndex: 8,
                paddingBottom: height * 0.095
              }}>
              <View
                style={{
                  opacity: 1,
                  zIndex: 3,
                  paddingHorizontal: width * 0.05,
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
                  }}
                  source={require('../assets/icons/flag1.png')}
                />

                <View style={{
                  marginVertical: height * 0.015
                }}>
                  <Text
                    style={{
                      color: '#fff',
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
                </View>
              </View>

              <View style={{
                marginHorizontal: width * 0.024,
              }}>

                {/* blue bg video section  */}
                <View
                  style={{
                    height: height * 0.35,
                    width: '100%',
                    backgroundColor: Colors.PRIMARY_2,
                    marginVertical: height * 0.008,
                    borderRadius: 25,
                    elevation: 10
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: '75%',
                      resizeMode: 'contain',
                      borderRadius: 25,
                      borderBottomLeftRadius: 80,
                      position: 'absolute',
                      top: -5
                    }}
                    source={require('../assets/images/img4.jpg')}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('VideoPlay')}
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
                    bottom: height * 0.03,
                    alignSelf: 'center',
                  }}>

                    <View style={{
                      backgroundColor: Colors.PRIMARY_3,
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
                      top: height * 0.01,
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
                        color: Colors.PRIMARY_3,
                        textAlign: 'center',
                        fontSize: 13,
                        fontWeight: '700'
                      }}>
                        01 Jan 2019
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    height: height * 0.35,
                    width: '100%',
                    backgroundColor: Colors.PRIMARY_2,
                    marginVertical: height * 0.008,
                    borderRadius: 25,
                    elevation: 10
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: '75%',
                      resizeMode: 'contain',
                      borderRadius: 25,
                      borderBottomLeftRadius: 80,
                      position: 'absolute',
                      top: -5
                    }}
                    source={require('../assets/images/img5.jpg')}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('VideoPlay')}
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
                    bottom: height * 0.03,
                    alignSelf: 'center',
                  }}>

                    <View style={{
                      backgroundColor: Colors.PRIMARY_3,
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
                      top: height * 0.01,
                      textAlign: 'center'
                    }}>
                      <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 13.5,
                        fontWeight: '500'
                      }}>
                        2022- The year of the Cricket World Cup
                      </Text>
                      <Text style={{
                        color: Colors.PRIMARY_3,
                        textAlign: 'center',
                        fontSize: 13,
                        fontWeight: '700'
                      }}>
                        01 Jan 2022
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    height: height * 0.35,
                    width: '100%',
                    backgroundColor: Colors.PRIMARY_2,
                    marginVertical: height * 0.008,
                    borderRadius: 25,
                    elevation: 10
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: '80%',
                      resizeMode: 'contain',
                      borderRadius: 25,
                      borderBottomLeftRadius: 80,
                      position: 'absolute',
                      top: -6
                    }}
                    source={require('../assets/images/img6.png')}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('VideoPlay')}
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
                    bottom: height * 0.03,
                    alignSelf: 'center',
                  }}>

                    <View style={{
                      backgroundColor: Colors.PRIMARY_3,
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
                      top: height * 0.01,
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
                        color: Colors.PRIMARY_3,
                        textAlign: 'center',
                        fontSize: 13,
                        fontWeight: '700'
                      }}>
                        01 Jan 2019
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: width * 0.92,
                    backgroundColor: Colors.PRIMARY_2,
                    justifyContent: 'center',
                    borderRadius: 25,
                    paddingVertical: height * 0.02,
                    paddingHorizontal: width * 0.04,
                    width: '100%',
                    marginVertical: height * 0.008,
                    elevation: 10,
                    alignSelf: 'center'
                  }}>
                  <View>
                    <Text style={styles.para_text}>
                      Trending Videos
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('VideoPlay')}>
                      <Image
                        style={{
                          width: '100%',
                          height: height * 0.28,
                          alignSelf: 'center',
                          marginTop: height * 0.002,
                          borderRadius: 25,
                        }}
                        source={require('../assets/images/home-img2.png')}
                      />
                      <Text
                        style={{
                          color: '#fff', fontSize: 14, fontWeight: '500',
                          letterSpacing: 0.5, padding: 20, position: 'absolute', bottom: 0
                        }}
                      >
                        Facilis enim ut voluptatem corrupti eum sed now impedit deserunt.
                      </Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: height * 0.022 }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('VideoPlay')}>
                        <View style={{ flexDirection: 'row', }}>
                          <Image
                            style={{
                              width: width * 0.27,
                              height: height * 0.11,
                              alignSelf: 'center',
                              marginTop: height * 0.007,
                              borderTopLeftRadius: 40,
                              borderBottomLeftRadius: 40
                            }}
                            source={require('../assets/images/img7.jpg')}
                          />
                          <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                            Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                          </Text>
                        </View>
                        <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => navigation.navigate('VideoPlay')}>
                        <View style={{ flexDirection: 'row', }}>
                          <Image
                            style={{
                              width: width * 0.27,
                              height: height * 0.11,
                              alignSelf: 'center',
                              marginTop: height * 0.001,
                              borderTopLeftRadius: 40,
                              borderBottomLeftRadius: 40
                            }}
                            source={require('../assets/images/home-img.png')}
                          />
                          <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                            Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                          </Text>
                        </View>
                        <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                      </TouchableOpacity>

                    </View>

                  </View>
                </View>
                <View
                  style={{
                    width: width * 0.92,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    justifyContent: 'center',
                    borderRadius: 25,
                    paddingVertical: height * 0.02,
                    paddingHorizontal: width * 0.04,
                    width: '100%',
                    marginVertical: height * 0.008,
                    alignSelf: 'center'
                  }}>
                  <View>
                    <Text style={styles.para_text}>
                      Trending Videos
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('VideoPlay')}>
                      <Image
                        style={{
                          width: '100%',
                          height: height * 0.28,
                          alignSelf: 'center',
                          marginTop: height * 0.002,
                          borderRadius: 25,
                        }}
                        source={require('../assets/images/img2.png')}
                      />
                      <Text
                        style={{
                          color: '#fff', fontSize: 14, fontWeight: '500',
                          letterSpacing: 0.5, padding: 20, position: 'absolute', bottom: 0
                        }}
                      >
                        Facilis enim ut voluptatem corrupti eum sed now impedit deserunt.
                      </Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: height * 0.022 }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('VideoPlay')}>
                        <View style={{ flexDirection: 'row', }}>
                          <Image
                            style={{
                              width: width * 0.27,
                              height: height * 0.11,
                              alignSelf: 'center',
                              marginTop: height * 0.007,
                              borderTopLeftRadius: 40,
                              borderBottomLeftRadius: 40
                            }}
                            source={require('../assets/images/img8.png')}
                          />
                          <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                            Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                          </Text>
                        </View>
                        <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => navigation.navigate('VideoPlay')}>
                        <View style={{ flexDirection: 'row', }}>
                          <Image
                            style={{
                              width: width * 0.27,
                              height: height * 0.11,
                              alignSelf: 'center',
                              marginTop: height * 0.001,
                              borderTopLeftRadius: 40,
                              borderBottomLeftRadius: 40
                            }}
                            source={require('../assets/images/img6.png')}
                          />
                          <Text style={{ width: width * 0.57, paddingLeft: width * 0.02, fontSize: 14, fontWeight: '500', color: '#fff' }}>
                            Facilis enim ut voluptatem core corrupti eum sed impedit time to deserunt.
                          </Text>
                        </View>
                        <Text style={{ bottom: 17, left: 210, fontSize: 12 }}>52 minutes ago</Text>
                      </TouchableOpacity>

                    </View>

                  </View>
                </View>
                {/* min video section  */}
                <View
                  style={{
                    height: height * 0.256,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    marginVertical: height * 0.008,
                    borderRadius: 25,
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
                      onPress={() => navigation.navigate('VideoPlay')}
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
                      backgroundColor: Colors.PRIMARY_3,
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
                      onPress={() => navigation.navigate('VideoPlay')}
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
                      backgroundColor: Colors.PRIMARY_3,
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

                <View
                  style={{
                    height: height * 0.256,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    marginVertical: height * 0.008,
                    borderRadius: 25,
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
                      source={require('../assets/images/img18.png')}
                    />
                    <TouchableOpacity
                      onPress={() => navigation.navigate('VideoPlay')}
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
                      backgroundColor: Colors.PRIMARY_3,
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
                      source={require('../assets/images/img18.png')}
                    />
                    <TouchableOpacity
                      onPress={() => navigation.navigate('VideoPlay')}
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
                      backgroundColor: Colors.PRIMARY_3,
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

                <View
                  style={{
                    height: height * 0.24,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    marginVertical: height * 0.008,
                    borderRadius: 25,
                    // elevation: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View style={{
                    width: '45%',
                    height: '50%',
                    marginTop: height * 0.03,
                  }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '108%',
                        resizeMode: 'contain',
                        borderRadius: 35,
                        borderBottomRightRadius: 240,
                        borderTopRightRadius: 240,
                      }}
                      source={require('../assets/images/img5.jpg')}
                    />
                    <TouchableOpacity
                      onPress={() => navigation.navigate('VideoPlay')}
                      style={{
                        borderColor: '#fff',
                        height: height * 0.05,
                        width: height * 0.05,
                        borderRadius: 50,
                        borderWidth: 2,
                        justifyContent: 'center',
                        opacity: 0.7,
                        position: 'absolute',
                        top: height * 0.04,
                        alignSelf: 'center',
                      }}>
                      <View style={{
                        backgroundColor: '#fff',
                        height: height * 0.039,
                        width: height * 0.039,
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
                      backgroundColor: Colors.PRIMARY_3,
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
                    marginTop: height * 0.03,
                    marginLeft: width * 0.02
                  }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '108%',
                        resizeMode: 'contain',
                        borderRadius: 35,
                        borderBottomRightRadius: 240,
                        borderTopRightRadius: 240,
                      }}
                      source={require('../assets/images/img4.jpg')}
                    />
                    <TouchableOpacity
                      onPress={() => navigation.navigate('VideoPlay')}
                      style={{
                        borderColor: '#fff',
                        height: height * 0.05,
                        width: height * 0.05,
                        borderRadius: 50,
                        borderWidth: 2,
                        justifyContent: 'center',
                        opacity: 0.7,
                        position: 'absolute',
                        top: height * 0.04,
                        alignSelf: 'center',
                      }}>
                      <View style={{
                        backgroundColor: '#fff',
                        height: height * 0.039,
                        width: height * 0.039,
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
                      backgroundColor: Colors.PRIMARY_3,
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
                </View>

                {/* blue bg options  */}
                <View style={{
                  marginVertical: height * 0.005
                }}>
                  <View style={{}}>
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
                        Betting
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
                </View>

              </View>
            </LinearGradient>
          </View>
        </View>



      </ScrollView>


      <BottomTab {...props} />
    </SafeAreaView>
  );
};
export default Video;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d7e1',
  },
  searchbg: {
    backgroundColor: Colors.PRIMARY_2,
    height: height * 0.105,
    paddingTop: height * 0.0145,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18
  },
  Primary_button: {
    height: height * 0.067,
    backgroundColor: Colors.PRIMARY_3,
    alignSelf: 'center',
    borderRadius: 8,
    padding: 13,
    margin: 7,
    paddingHorizontal: width * 0.09
  },
  para_text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    width: width * 0.7,
    paddingVertical: height * 0.012
  },
  secondary_button: {
    height: height * 0.067,
    backgroundColor: Colors.PRIMARY_2,
    alignSelf: 'center',
    borderRadius: 8,
    padding: 13,
    margin: 7,
    paddingHorizontal: width * 0.09
  },
  Primary_button_text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
  },
  secondary_button_text: {
    textAlign: 'center',
    color: '#9696A3',
    fontSize: 15,
    fontWeight: '500'
  },

  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: -20
  }
});