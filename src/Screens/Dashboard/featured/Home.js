import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Linking,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Animated,
  Modal,
  TextInput,
  Easing,
  ToastAndroid,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../../../navigations/BottomTab';
import Toptab from '../../../navigations/Toptab';
import { Dropdown } from 'react-native-element-dropdown';
import { apiURL } from '../../../util/Api';
import axios from 'axios';
import moment from 'moment';

import Lottie from 'lottie-react-native';
import { colors } from 'react-native-elements';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
const { height, width } = Dimensions.get('window');


const Data = [
  {
    label: 'Basket ball',
    value: 1
  },
  {
    label: 'Tennis',
    value: 2
  },
  {
    label: 'Cricket',
    value: 3
  },
  {
    label: 'Football',
    value: 4
  },
  {
    label: 'Badminton',
    value: 5
  },
  {
    label: 'Rugby',
    value: 6
  },
  {
    label: 'Soccer',
    value: 6
  }
]
const Home = props => {

  function showInternetLostToast() {
    ToastAndroid.show('Please check your Internet and try again!', ToastAndroid.SHORT);
  }
  function showErrToast() {
    ToastAndroid.show('Something is wrong', ToastAndroid.SHORT);
  }

  const navigation = props.navigation;
  const [enquiryModal, setEnquiryModal] = useState(false);
  const [interestType, setInterestType] = useState("");
  const [loader, setLoader] = useState(false);
  const [timeLineModal, setTimeLineModal] = useState(false);

  const [liveScoreData, setLiveScoreData] = useState([]);
  const [cricketScheduleData, setCricketScheduleData] = useState([]);
  const [ICCRankingData, setICCRankingData] = useState([]);
  const [videoHubData, setVideoHubData] = useState([]);
  const [photoGallaryData, setPhotoGallaryData] = useState([]);
  const [eventTimeLineData, setEventTimeLineData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [newsArticleData, setNewsArticleData] = useState([]);


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
  const spinValue = new Animated.Value(0)
  // First set up animation 
  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  // All about API
  const HomeContentAPI = () => {
    setLoader(true)
    fetch(`${apiURL.home_api}`, {
      method: 'get'
    })
      .then((response) => response.json())
      .then((res) => {
        setLoader(false)
        // console.log("detail-res====", JSON.stringify(res.response.sections))
        setLiveScoreData(JSON.stringify(res.response.sections.sport_daday_live_score))
        setCricketScheduleData(res.response.sections.sport_daday_cricket_schedule)
        setICCRankingData(res.response.sections.sport_daday_icc_ranking)
        setVideoHubData(res.response.sections.sport_daday_vidoehub)
        setPhotoGallaryData(res.response.sections.sport_daday_photo_gallary)
        setEventTimeLineData(res.response.sections.sport_daday_event_time_Line)
        setTeamData(res.response.sections.sport_daday_team)
        setNewsArticleData(res.response.sections.sport_daday_news_article)
        // setassetDetails(res.data)
        //  if (res.status !== 200) {
        //     setModalVisible(true)
        // }
      })
      .catch((err) => {
        setLoader(false)
        console.log("error%%%", err);
        if (err == 'TypeError: Network request failed' || err == 'AxiosError: Network Error') {
          showInternetLostToast()
        }
        else {
          showErrToast()
        }
      });
  };
  useEffect(() => {
    HomeContentAPI();
  }, []);

  const CricketLiveScoreCont = (props) => {
    return (
      <ScrollView style={styles.side_space}
        horizontal={true}>
        {liveScoreData.map((liveScoreEle) => (
          <ImageBackground source={require('../../../assets/images/bgimg.png')}
            key={liveScoreEle.matchId}
            resizeMode="cover"
            style={{
              alignSelf: 'center',
              padding: width * 0.03,
              paddingVertical: height * 0.02,
              marginBottom: height * 0.01,
              marginRight: 1,
            }}
            imageStyle={{ borderRadius: 25 }}>
            <TouchableOpacity onPress={() => navigation.navigate('LiveMatches')}
            >
              <View>
                <View style={{
                  flexDirection: 'row',
                  borderTopLeftRadius: 8,
                  borderTopEndRadius: 8,
                  justifyContent: 'space-between',
                  paddingHorizontal: 2,
                  paddingTop: 7,
                }}>
                  <Text
                    style={styles.live_heading}>
                    {liveScoreEle?.matchFormat}
                  </Text>
                  <MaterialCommunityIcons
                    name='bell'
                    size={20}
                    color={'#fff'}
                  />
                </View>
                <Text style={{
                  padding: 7,
                  color: '#fff',
                  fontSize: 14
                }}>{liveScoreEle?.seriesName}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    paddingVertical: 4,
                  }}
                >
                  <View style={{ width: width * 0.36 }}>
                    <Image style={styles.country_flag}
                      source={{ uri: `${liveScoreEle?.team1?.thumb}` }}
                    />
                    <Text style={styles.short_country_text}>{liveScoreEle?.team1?.teamSName}</Text>
                  </View>
                  <Text style={styles.short_country_text}>V/S</Text>
                  <View style={{ width: width * 0.36 }}>
                    <Image style={styles.country_flag}
                      source={{ uri: `${liveScoreEle?.team2?.thumb}` }}
                    />
                    <Text style={styles.short_country_text}>{liveScoreEle?.team2?.teamSName}</Text>
                  </View>
                </View>
                <View style={{
                  borderTopColor: '#CBC3E3',
                  borderTopWidth: 1,
                  padding: 8,
                  borderBottomLeftRadius: 8,
                  borderBottomEndRadius: 8
                }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 14,
                    }}>{liveScoreEle?.matchDesc}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        ))}

      </ScrollView>
    );
  }

  const CricketScheduleCont = (props) => {
    return (
      <ScrollView style={styles.side_space}
        horizontal={true}>
        {cricketScheduleData.map((scheduleEle) => (
          <ImageBackground source={require('../../../assets/images/bgimg.png')}
            key={scheduleEle.matchId}
            resizeMode="cover"
            style={{
              alignSelf: 'center',
              padding: width * 0.03,
              paddingVertical: height * 0.02,
              marginBottom: height * 0.01,
              marginRight: 1,
            }}
            imageStyle={{ borderRadius: 25 }}>
            <TouchableOpacity onPress={() => navigation.navigate('LiveMatches')}
            >
              <View>
                <View style={{
                  flexDirection: 'row',
                  borderTopLeftRadius: 8,
                  borderTopEndRadius: 8,
                  justifyContent: 'space-between',
                  paddingHorizontal: 2,
                  paddingTop: 7,
                }}>
                  <Text
                    style={styles.live_heading}>
                    {scheduleEle?.matchFormat}
                  </Text>
                  <MaterialCommunityIcons
                    name='bell'
                    size={20}
                    color={'#fff'}
                  />
                </View>
                <Text style={{
                  padding: 7,
                  color: '#fff',
                  fontSize: 14
                }}>{scheduleEle?.seriesName}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    paddingVertical: 4,
                  }}
                >
                  <View style={{ width: width * 0.36 }}>
                    <Image style={styles.country_flag}
                      source={{ uri: `${scheduleEle?.team1?.thumb}` }}
                    />
                    <Text style={styles.short_country_text}>{scheduleEle?.team1?.teamSName}</Text>
                  </View>
                  <Text style={styles.short_country_text}>V/S</Text>
                  <View style={{ width: width * 0.36 }}>
                    <Image style={styles.country_flag}
                      source={{ uri: `${scheduleEle?.team2?.thumb}` }}
                    />
                    <Text style={styles.short_country_text}>{scheduleEle?.team2?.teamSName}</Text>
                  </View>
                </View>
                <View style={{
                  borderTopColor: '#CBC3E3',
                  borderTopWidth: 1,
                  padding: 8,
                  borderBottomLeftRadius: 8,
                  borderBottomEndRadius: 8
                }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 14,
                    }}>{scheduleEle?.matchDesc}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        ))}

      </ScrollView>
    );
  }

  const TeamsContainer = (props) => {
    return (
      <View style={styles.side_space}>
        <Text style={styles.text_heading}>
          Our Cricket Teams
        </Text>
        {teamData.map((teamEle) => (
          <View
            key={teamEle.id}
            style={{
              marginVertical: height * 0.007
            }}
          >
            {/* <ImageBackground
              style={{
                width: '100%',
                height: height * 0.205,
                alignSelf: 'center',
              }}
              imageStyle={{ borderRadius: 12 }}
              source={{ uri: kk }}
            > */}
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                width: '100%',
              }}
              onPress={() => navigation.navigate('BrowseTeams')}>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#fff', Colors.PRIMARY_2]}
                style={styles.team_card}>
                <Text
                  style={styles.title}>
                  {teamEle?.IPL_Team_Name} ({teamEle?.Team_Short_Name}){'\n'}
                  Captain - {teamEle?.Team_Captain}
                </Text>
                <Text
                  style={styles.sub_title}>
                  {moment(new Date(teamEle?.publishedAt)).format("DD-MM-YYYY")}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <Image
              style={styles.team_circle_img}
              source={{ uri: `${"http://52.205.83.44:1337" + teamEle?.Logo_url}` }}
            />
            {/* </ImageBackground> */}
          </View>
        ))}
      </View>
    );
  }

  const PhotoGalleryCont = (props) => {
    return (
      <View style={[styles.side_space, { backgroundColor: Colors.PRIMARY_2, paddingBottom: height * 0.02 }]}>
        <Text
          style={[styles.text_heading, { color: '#fff', paddingTop: 7 }]}>
          Our Sportsdaddy Gallery
        </Text>
        {photoGallaryData.map((photoEle) => (
          <View
            key={photoEle.id}
            style={{ flexDirection: 'row', alignSelf: 'center', paddingBottom: height * 0.005 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('Photos')}
            >
              <ImageBackground
                style={{
                  width: height * 0.236,
                  height: height * 0.16,
                  alignSelf: 'center',
                  marginHorizontal: width * 0.01,
                  marginTop: height * 0.011,
                }}
                imageStyle={{
                  borderTopLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}
                source={{ uri: photoEle?.thumb }}
              >
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    paddingVertical: height * 0.007,
                    borderBottomRightRadius: 15,
                    paddingHorizontal: height * 0.01
                  }}>
                  <Text style={{
                    color: '#fff',
                    fontSize: 15
                  }}>{photoEle?.EventName}
                  </Text>
                  <Text style={{
                    color: 'gray',
                    fontSize: 15,
                    fontWeight: '500'
                  }}>{moment(new Date(photoEle?.publishedAt)).format("DD-MM-YYYY")}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Photos')}
            >
              <ImageBackground
                style={{
                  width: height * 0.236,
                  height: height * 0.16,
                  marginHorizontal: width * 0.01,
                  marginTop: height * 0.011,
                }}
                imageStyle={{
                  borderTopLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}
                source={{ uri: photoEle?.thumb }}
              >
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    position: 'absolute',
                    bottom: 0,
                    width: '60%',
                    right: 0,
                    height: '100%',
                    paddingVertical: height * 0.02,
                    borderBottomRightRadius: 15,
                    paddingHorizontal: height * 0.01,
                    alignSelf: 'center',
                    alignItems: 'center'
                  }}>
                  <Text style={{
                    color: '#fff',
                    fontSize: 15
                  }}>{photoEle?.EventName}
                  </Text>
                  <Text style={{
                    color: 'gray',
                    fontSize: 15,
                    fontWeight: '500'
                  }}>{moment(new Date(photoEle?.publishedAt)).format("DD-MM-YYYY")}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))
        }
      </View>
    );
  }

  const LatestNewsCont = (props) => {
    return (
      <View style={styles.side_space}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={styles.text_heading}>
            Latest News
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MoreNews')}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: Colors.PRIMARY_2,
                bottom: height * -0.01,
                right: height * 0.06
              }}>MORE</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{ paddingTop: height * 0.013 }}
          horizontal={true}>

          {newsArticleData.reverse().map((scheduleEle) => (
            <TouchableOpacity
              style={styles.news_card}
              key={scheduleEle.id}
              onPress={() => navigation.navigate('FullNews')}
            >
              <View >
                <Image
                  style={styles.quiz_img}
                  source={{ uri: `${scheduleEle?.thumb}` }}
                />
                <View style={{
                  padding: height * 0.01,
                }}>
                  <Text style={styles.title}>{scheduleEle?.Title}</Text>
                  <Text style={styles.sub_title}>{scheduleEle?.publishedAt}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}

        </ScrollView>
      </View>
    );
  }

  const VideosCont = (props) => {
    return (
      <View style={{ paddingHorizontal: width * 0.015 }}>
        {/* video  */}
        <Text
          style={styles.text_heading}>
          Video Hub
        </Text>

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
            source={{
              uri: `${videoHubData[0]?.thumb}`
            }}
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
              opacity: 0.7,
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
                {videoHubData[0]?.Event}
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
                {videoHubData[0]?.Title}
              </Text>
              <Text style={{
                color: Colors.PRIMARY_3,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: '700',
                paddingTop: 3
              }}>
                {moment(new Date(videoHubData[0]?.updatedAt)).format("DD-MM-YYYY  -  HH:MM:SS")}
              </Text>
            </View>
          </View>
        </View>

        {/* min video section  */}
        <ScrollView
          style={{ backgroundColor: Colors.PRIMARY_2, paddingVertical: 15, borderRadius: 12, paddingHorizontal: 4 }}
          horizontal={true}>
          {videoHubData.map((videoEle) => (
            <TouchableOpacity
              key={videoEle.id}
              onPress={() => navigation.navigate('FullNews')}
            >
              <View style={{
                width: width * 0.47,
                paddingHorizontal: 4,
              }}>
                <ImageBackground
                  source={{
                    uri: `${videoEle?.thumb}`
                  }}
                  style={{
                    height: height * 0.16,
                    justifyContent: 'center'
                  }}
                  imageStyle={{ borderRadius: 12 }}
                  resizeMode="contain">
                  <TouchableOpacity
                    onPress={() => navigation.navigate('VideoPlay')}
                    style={{
                      borderColor: '#fff',
                      height: height * 0.0677,
                      width: height * 0.0677,
                      borderRadius: 50,
                      borderWidth: 2,
                      justifyContent: 'center',
                      opacity: 0.7,
                      alignSelf: 'center',
                    }}>
                    <View style={{
                      backgroundColor: '#fff',
                      height: height * 0.058,
                      width: height * 0.058,
                      borderRadius: 50,
                      justifyContent: 'center',
                      paddingLeft: 5,
                      alignSelf: 'center',
                    }}>
                      <Entypo
                        name='controller-play'
                        size={34}
                        color={Colors.PRIMARY_2}
                        style={{
                          alignSelf: 'center',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.vdo_event}>
                    {videoEle?.Event}
                  </Text>
                </ImageBackground>
                <Text style={{
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: '500',
                  paddingLeft: width * 0.03,
                  paddingVertical: 3
                }}>
                  {videoEle?.Title}
                </Text>
                <Text style={{
                  color: Colors.PRIMARY_3,
                  fontSize: 13,
                  fontWeight: '700',
                  paddingLeft: width * 0.03,
                }}>
                  {moment(new Date(videoEle?.updatedAt)).format("DD-MM-YYYY")}
                </Text>
              </View>

            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  const ICCRankingCont = (props) => {
    const [endListSize, setEndListSize] = useState(5);
    const [startListSize, setStartListSize] = useState(0);

    const firstICCListSize = 5;
    const SecICCListSize = 10;
    const ThirdICCListSize = 15;

    return (
      <View style={{
        height: height * 0.85,
        marginTop: height * 0.005,
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
            source={require('../../../assets/images/img3.png')}
          />
          <View
            style={{
              width: '100%',
              backgroundColor: Colors.LIGHT_SKY,
              position: 'absolute',
              top: height * 0.15,
              elevation: 10,
              opacity: 1,
              zIndex: 3,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              paddingHorizontal: width * 0.025,
              paddingVertical: width * 0.04,
              paddingBottom: height * 0.025
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  color: Colors.PRIMARY_2,
                  textAlign: 'center',
                  fontSize: 25,
                  fontWeight: '500'
                }}>
                ICC Cricket
              </Text>
              <Text style={{
                color: Colors.PRIMARY_2,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: '500',
                letterSpacing: 5,
                marginTop: height * 0.005
              }}>RANKINGS
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingTop: height * 0.01
                }}>
                <TouchableOpacity style={[styles.icc_crick_type, { backgroundColor: '#055C9D' }]}
                  onPress={() => { setEndListSize(firstICCListSize); setStartListSize(0) }}>
                  <Text style={styles.white_boldtext}>
                    ODI {'\n'}4
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icc_crick_type}
                  onPress={() => { setEndListSize(SecICCListSize); setStartListSize(firstICCListSize) }}>
                  <Text style={styles.white_boldtext}>
                    Test {'\n'}2
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.icc_crick_type, { backgroundColor: '#77dd77' }]}
                  onPress={() => { setEndListSize(ThirdICCListSize); setStartListSize(SecICCListSize) }}>
                  <Text style={styles.white_boldtext}>
                    T20 {'\n'}2
                  </Text>
                </TouchableOpacity>

              </View>
              {ICCRankingData.slice(startListSize, endListSize).map((rankingEle) => (
                <View
                  key={rankingEle.id}
                  style={{}}>
                  <TouchableOpacity style={styles.icc_opt_section}
                    onPress={() => navigation.navigate('BrowsePlayer')}>
                    <Text style={[styles.primary_boldtext, { width: '5.5%' }]}>
                      {rankingEle?.rank}
                    </Text>
                    <Text style={[styles.primary_boldtext, { backgroundColor: '#000', paddingVertical: height * 0.005, borderRadius: 5, width: '30%', textAlign: 'center', marginRight: width * 0.012, color: '#fff' }]}>
                      {rankingEle?.country}
                    </Text>
                    <Text
                      style={[styles.primary_boldtext, { width: '40%' }]}>
                      {rankingEle?.name}
                    </Text>
                    <Text
                      style={[styles.primary_boldtext, { width: '17.5%' }]}>
                      {rankingEle?.points}
                    </Text>
                    <Feather
                      name='arrow-right-circle'
                      size={20}
                      color={'green'}
                      style={{
                        alignSelf: 'center',
                        width: '9%'
                      }}
                    />
                  </TouchableOpacity>
                </View>
              ))}

            </View>
          </View>
        </View>
      </View>
    );
  }

  const WorldCupTimelineCont = (props) => {
    return (
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={[Colors.PRIMARY_2, '#fff']}
        style={{
          width: '100%',
          alignSelf: 'center',
          padding: width * 0.03,
        }}>
        <View>
          <View style={{}}>
            <Text
              style={styles.text_heading}>
              T20 WORLD CUP TIMELINE
            </Text>
          </View>
          <ScrollView
            style={{ paddingTop: height * 0.025 }}
            horizontal={true}>
            {eventTimeLineData.reverse().map((timeLineEle) => (
              <TouchableOpacity
                key={timeLineEle.id}
                style={styles.timeline_section}
                onPress={() => setTimeLineModal(true)}>
                <Image
                  style={styles.timeline_img}
                  source={{ uri: `${timeLineEle?.thumb_teamA}` }}
                // source={{ uri: `${"http://52.205.83.44:1337" + timeLineEle?.thumb}` }}
                />
                <View style={{
                  padding: height * 0.005,
                  alignSelf: 'center'
                }}>
                  <Text style={[styles.timeline_title, { color: '#fff' }]}>{timeLineEle?.Winner}</Text>
                  <Text style={styles.timeline_year}>{moment(new Date(timeLineEle?.Year)).format("YYYY")}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ LinearGradient>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
      {/* top nav tab  */}
      <Toptab {...props} />

      {/* games top animation       */}
      <TouchableOpacity
        onPress={() => navigation.navigate('PlusDashboard')}
        style={styles.premiumbtn}>
        <Lottie source={require('../../../assets/animation/premium2.json')}
          autoPlay loop
          style={{
            height: 40,
            width: 40
          }}
        />
        <Text style={{
          alignSelf: 'center',
          color: '#fff',
          fontSize: 14,
        }}>Click to{" "}</Text>
        <Text style={{
          alignSelf: 'center',
          color: '#fff',
          fontSize: 16,
          fontWeight: '500'
        }}>Sportsdaddy Plus</Text>
        <Lottie source={require('../../../assets/animation/premium2.json')}
          autoPlay loop
          style={{
            height: 40,
            width: 40
          }}
        />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} style={{}}>

        <View style={{
          marginTop: height * 0.01,
        }}>
          {/* live match score  */}
          <CricketScheduleCont />

          {/* video section  */}
          <VideosCont />

          {/* Squard List section  */}
          <ICCRankingCont />

          {/* Latest News  */}
          <LatestNewsCont />

          {/* photo gallery  */}
          <PhotoGalleryCont />

          {/* most watched  */}
          <View style={styles.side_space}>
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoPlay')}
              style={{
                height: height * 0.1,
                width: '100%',
                backgroundColor: Colors.PRIMARY_2,
                marginBottom: height * 0.01,
                borderRadius: 25,
                elevation: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: height * 0.04,
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
                  source={require('../../../assets/images/img18.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* quiz section  */}
          <View style={{
            marginVertical: height * 0.012,
            paddingHorizontal: width * 0.02,
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.PRIMARY_3, Colors.PRIMARY_2]}
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

            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
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

          {/* team section  */}
          <TeamsContainer />
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
              source={require('../../../assets/images/img3.png')}
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
                source={require('../../../assets/icons/flag1.png')}
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
                      backgroundColor: Colors.PRIMARY_3,
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
                        source={require('../../../assets/images/abdev.png')}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('BrowsePlayer')}
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
                        source={require('../../../assets/images/chris.png')}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('BrowsePlayer')}
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
                        source={require('../../../assets/images/david.png')}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('BrowsePlayer')}
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
        <View style={{
          marginBottom: height * 0.1,
          backgroundColor: '#fff',
        }}>

          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={[Colors.PRIMARY_2, Colors.PRIMARY_1]}
            style={{
              width: '100%',
              alignSelf: 'center',
              padding: width * 0.014,
            }}>
            <View style={{
              paddingHorizontal: width * 0.01,
              marginTop: height * 0.056
            }}>
              <Text
                style={[styles.text_heading, { color: Colors.LIGHT_SKY }]}>
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
                  elevation: 10,

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
                  source={require('../../../assets/images/img8.png')}
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
                  bottom: height * 0.038,
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
                    source={require('../../../assets/images/img2.png')}
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
                    source={require('../../../assets/images/img6.png')}
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

              {/* inquiry form open  */}
              <View style={{
                marginTop: height * 0.02
              }}>
                <TouchableOpacity
                  onPress={() => setEnquiryModal(true)}
                  style={{
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

                <TouchableOpacity
                  onPress={() => setEnquiryModal(true)}
                  style={{
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
                    Win to Cash
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

                <TouchableOpacity
                  onPress={() => setEnquiryModal(true)}
                  style={{
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
                    Khelo and Jeeto
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

                <TouchableOpacity
                  onPress={() => navigation.navigate('VideoPlay')}
                  style={{
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

                <TouchableOpacity
                  onPress={() => navigation.navigate('Video')}
                  style={{
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

              {/* blue bg most watched  */}
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoPlay')}
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
                  source={require('../../../assets/images/img19.png')}
                />

              </TouchableOpacity>

              {/* blue bg gradian  */}
              <View style={{
                marginVertical: height * 0.012,
              }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Quiz')}>
                  <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={[Colors.PRIMARY_3, Colors.PRIMARY_2]}
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
                      Sint quia recusandae officiis neque eaque maiores is cupiditate tempora quiz.
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={{
                  width: '100%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginTop: height * 0.007
                }}>
                  <Text
                    style={[styles.text_heading, { color: Colors.LIGHT_SKY }]}>
                    Sportsdaddy's Games
                  </Text>
                  <View style={styles.game_card}>
                    <Animated.View style={[styles.anim_rotate, {
                      transform: [{ rotate: spin }],
                    }]}>
                    </Animated.View>
                    <Image
                      source={require('../../../assets/images/multigame/football.png')}
                      style={[styles.game_img, {
                        left: height * 0.07
                      }]}
                    />
                    <View style={{ justifyContent: 'center' }}>
                      <Text style={styles.game_txt}>FOOTBALL</Text>
                      <TouchableOpacity
                        style={styles.viewmore_btn}>
                        <Text style={styles.viewmore_btn_txt}>VIEW MORE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.game_card}>
                    <Animated.View style={[styles.anim_rotate, {
                      transform: [{ rotate: spin }],
                    }]}>
                    </Animated.View>
                    <Image
                      source={require('../../../assets/images/multigame/hockey.png')}
                      style={[styles.game_img, {
                        height: height * 0.12,
                        width: height * 0.12,
                        left: height * 0.07
                      }]}
                    />
                    <View style={{ justifyContent: 'center' }}>
                      <Text style={styles.game_txt}>HOCKEY</Text>
                      <TouchableOpacity
                        style={styles.viewmore_btn}>
                        <Text style={styles.viewmore_btn_txt}>VIEW MORE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.game_card}>
                    <Animated.View style={[styles.anim_rotate, {
                      transform: [{ rotate: spin }],
                    }]}>
                    </Animated.View>
                    <Image
                      source={require('../../../assets/images/multigame/kabaddi.png')}
                      style={[styles.game_img, {
                        height: height * 0.12,
                        width: height * 0.12,
                        left: height * 0.07
                      }]}
                    />
                    <View style={{ justifyContent: 'center' }}>
                      <Text style={styles.game_txt}>KABADDI</Text>
                      <TouchableOpacity
                        style={styles.viewmore_btn}>
                        <Text style={styles.viewmore_btn_txt}>VIEW MORE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.game_card}>
                    <Animated.View style={[styles.anim_rotate, {
                      transform: [{ rotate: spin }],
                    }]}>
                    </Animated.View>
                    <Image
                      source={require('../../../assets/images/multigame/tennis.png')}
                      style={[styles.game_img, {
                        left: height * 0.06
                      }]}
                    />
                    <View style={{ justifyContent: 'center' }}>
                      <Text style={styles.game_txt}>KABADDI</Text>
                      <TouchableOpacity
                        style={styles.viewmore_btn}>
                        <Text style={styles.viewmore_btn_txt}>VIEW MORE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>

                {/* most watched  */}
                <View style={{
                  marginTop: height * 0.035,

                }}>
                  <Text
                    style={[styles.text_heading, { color: Colors.LIGHT_SKY }]}>
                    Players Hub
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('BrowseTeams')}
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
                        source={require('../../../assets/images/img21.png')}
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
                    onPress={() => navigation.navigate('BrowseTeams')}
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
                        source={require('../../../assets/images/img22.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>

          {/* timeline section  */}
          <WorldCupTimelineCont />

          {/* ICC CRICKET Rankings section  */}
          {/* <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={[Colors.PRIMARY_2, Colors.LIGHT_BG]}
            style={{
              width: '100%',
              alignSelf: 'center',
              padding: width * 0.03,
            }}>
            <View style={{
              padding: 10,
              // backgroundColor: '#fff'
            }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '500',
                    color: '#000',
                    paddingTop: height * 0.012
                  }}>
                  ICC CRICKET Rankings
                </Text>
              </View>
              <ScrollView
                style={{ paddingTop: height * 0.025 }}
                horizontal={true}>

                <TouchableOpacity
                  style={styles.timeline_section}
                  onPress={handlePressContent}
                >
                  <Image
                    style={styles.timeline_img}
                    source={require('../../../assets/icons/flag1.png')}
                  />
                  <View style={{
                    padding: height * 0.005,
                    alignSelf: 'center'
                  }}>
                    <Text style={styles.timeline_title}>India</Text>
                    <Text style={styles.rating}>Rating: 129</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.timeline_section}
                  onPress={handlePressContent}
                >
                  <Image
                    style={styles.timeline_img}
                    source={require('../../../assets/icons/flag2.png')}
                  />
                  <View style={{
                    padding: height * 0.005,
                    alignSelf: 'center'
                  }}>
                    <Text style={styles.timeline_title}>Pakistan</Text>
                    <Text style={styles.rating}>Rating: 128</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.timeline_section}
                  onPress={handlePressContent}
                >
                  <Image
                    style={[styles.timeline_img,
                    ]}
                    source={require('../../../assets/icons/us.png')}
                  />
                  <View style={{
                    padding: height * 0.005,
                    alignSelf: 'center'
                  }}>
                    <Text style={styles.timeline_title}>America</Text>
                    <Text style={styles.rating}>Rating: 128</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.timeline_section}
                  onPress={handlePressContent}
                >
                  <Image
                    style={styles.timeline_img}
                    source={require('../../../assets/icons/flag1.png')}
                  />
                  <View style={{
                    padding: height * 0.005,
                    alignSelf: 'center'
                  }}>
                    <Text style={styles.timeline_title}>West Indies</Text>
                    <Text style={styles.rating}>Rating: 128</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.timeline_section}
                  onPress={handlePressContent}
                >
                  <Image
                    style={styles.timeline_img}
                    source={require('../../../assets/icons/flag2.png')}
                  />
                  <View style={{
                    padding: height * 0.005,
                    alignSelf: 'center'
                  }}>
                    <Text style={styles.timeline_title}>New Zealand</Text>
                    <Text style={styles.rating}>Rating: 128</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.timeline_section}
                  onPress={handlePressContent}
                >
                  <Image
                    style={[styles.timeline_img,
                    ]}
                    source={require('../../../assets/icons/us.png')}
                  />
                  <View style={{
                    padding: height * 0.005,
                    alignSelf: 'center'
                  }}>
                    <Text style={styles.timeline_title}>England</Text>
                    <Text style={styles.rating}>Rating: 129</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.timeline_section}
                  onPress={handlePressContent}
                >
                  <Image
                    style={styles.timeline_img}
                    source={require('../../../assets/icons/flag2.png')}
                  />
                  <View style={{
                    padding: height * 0.005,
                    alignSelf: 'center'
                  }}>
                    <Text style={styles.timeline_title}>Namibia</Text>
                    <Text style={styles.rating}>Rating: 129</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.timeline_section}
                  onPress={handlePressContent}
                >
                  <Image
                    style={[styles.timeline_img,
                    ]}
                    source={require('../../../assets/icons/us.png')}
                  />
                  <View style={{
                    padding: height * 0.005,
                    alignSelf: 'center'
                  }}>
                    <Text style={styles.timeline_title}>Banladesh</Text>
                    <Text style={styles.rating}>Rating: 129</Text>
                  </View>
                </TouchableOpacity>

              </ScrollView>
            </View>
          </ LinearGradient> */}

        </View>

      </ScrollView >

      <BottomTab {...props} />

      {/* enquiry Modal */}
      <Modal
        visible={enquiryModal}
        onDismiss={() => setEnquiryModal(false)}
        transparent={true}
        animationType={'fade'}
      >
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <View style={styles.modal}>

            <Text
              style={styles.enquiry_heading}>
              Enquiry Form
            </Text>

            <Image
              style={{
                width: height * 0.11,
                height: height * 0.11,
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
              source={require('../../../assets/images/logo.png')}
            />
            <ScrollView>
              <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                <Text style={styles.label_type}>Name</Text>
                <TextInput
                  style={styles.info_card}
                  placeholder="Enter your name"
                  placeholderTextColor="gray"
                  keyboardType='default'
                //   onChangeText={Login => setLogin(Login)}
                />
              </View>

              <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                <Text style={styles.label_type}>Mobile</Text>
                <TextInput
                  style={styles.info_card}
                  placeholder="Enter your mobile no."
                  placeholderTextColor="gray"
                  keyboardType='phone-pad'
                  maxLength={10}
                />
              </View>

              <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                <Text style={styles.label_type}>Email</Text>
                <TextInput
                  style={styles.info_card}
                  placeholder="Enter your e-mail"
                  placeholderTextColor="gray"
                  keyboardType='email-address'
                />
              </View>

              <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                <Text style={styles.label_type}>Your Interest for Sportsdaddy</Text>
                <Dropdown
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  labelStyle={styles.labelStyle}
                  itemTextStyle={styles.itemTextStyle}
                  iconStyle={styles.iconStyle}
                  style={styles.info_card}
                  data={Data}
                  search={false}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select"
                  searchPlaceholder="Search..."
                  value={interestType}
                  onChange={interestType => {
                    setInterestType(interestType);
                  }}
                />
              </View>

              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: height * 0.1
              }}>
                <TouchableOpacity style={[styles.modalBtn, { backgroundColor: '#000' }]} onPress={() => setEnquiryModal(false)}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.White,
                      fontWeight: '500',
                      textAlign: 'center',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalBtn}
                  onPress={() => setEnquiryModal(false)}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.White,
                      fontWeight: '500',
                      textAlign: 'center',
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

          </View>
        </View>

      </Modal>

      {/* enquiry button */}
      <TouchableOpacity
        onPress={() => setEnquiryModal(true)}
        style={{
          height: height * 0.072,
          width: height * 0.072,
          backgroundColor: Colors.PRIMARY_3,
          position: 'absolute',
          borderRadius: 50,
          bottom: height * 0.1,
          right: height * 0.008,
          justifyContent: 'center'
        }}>
        <AntDesign
          name='plus'
          size={30}
          color={'#fff'}
          style={{
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>

      <Modal
        visible={timeLineModal}
        onDismiss={() => setTimeLineModal(false)}
        transparent={true}
        animationType={'fade'}
      >
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <View style={styles.modal}>

            <Text
              style={styles.enquiry_heading}>
              Enquiry Form
            </Text>

            <Image
              style={{
                width: height * 0.11,
                height: height * 0.11,
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
              source={require('../../../assets/images/logo.png')}
            />
            <ScrollView>
              <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                <Text style={styles.label_type}>Name</Text>
                <TextInput
                  style={styles.info_card}
                  placeholder="Enter your name"
                  placeholderTextColor="gray"
                  keyboardType='default'
                //   onChangeText={Login => setLogin(Login)}
                />
              </View>

              <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                <Text style={styles.label_type}>Mobile</Text>
                <TextInput
                  style={styles.info_card}
                  placeholder="Enter your mobile no."
                  placeholderTextColor="gray"
                  keyboardType='phone-pad'
                  maxLength={10}
                />
              </View>


              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: height * 0.1
              }}>
                <TouchableOpacity style={[styles.modalBtn, { backgroundColor: '#000' }]}
                  onPress={() => setTimeLineModal(false)}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.White,
                      fontWeight: '500',
                      textAlign: 'center',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalBtn}
                  onPress={() => setTimeLineModal(false)}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.White,
                      fontWeight: '500',
                      textAlign: 'center',
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

          </View>
        </View>
      </Modal>
      {loader == true ?
        <View style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          position: 'absolute', top: 0, height: '100%', width: '100%',
          justifyContent: 'center',
          flex: 1
        }}>
          <Lottie source={require('../../../assets/animation/loader3.json')}
            autoPlay
            style={{
              height: height * 0.3, width: height * 0.3,
              alignSelf: 'center',
              // backgroundColor: 'red'
            }}
          />
        </View> : null
      }
    </SafeAreaView >
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  timeLine_modal: {
    width: '70%',
    height: '50%',
    elevation: 10,
    backgroundColor: '#fff'
  },
  info_card: {
    width: '100%',
    height: height * 0.065,
    backgroundColor: '#fff',
    elevation: 6,
    alignSelf: 'center',
    marginVertical: height * 0.006,
    paddingHorizontal: width * 0.03,
    borderRadius: 4,
    color: '#000', fontSize: 14, fontWeight: '500',
  },
  label_type: { color: '#fff', fontSize: 14, fontWeight: '500' },
  modalBtn: {
    width: '42%',
    backgroundColor: Colors.PRIMARY_3,
    alignSelf: 'center',
    borderRadius: 8,
    height: height * 0.068,
    justifyContent: 'center',
    // marginTop: height * 0.03,
    elevation: 10,
    margin: 4
  },
  modal: {
    backgroundColor: Colors.PRIMARY_2,
    margin: 10,
    borderRadius: 8,
    height: '90%'
  },
  premiumbtn: {
    backgroundColor: Colors.PRIMARY_3,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 6,
    opacity: 0.98
  },
  live_heading: {
    fontSize: 14,
    color: '#fff',
    top: 1,
    left: width * 0.02,
    fontWeight: '500',

  },
  para_text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    width: width * 0.7,
    paddingVertical: height * 0.012
  },
  title: { color: 'black', fontWeight: '500', fontSize: 15, },
  timeline_title: {
    color: 'black', fontWeight: '500', fontSize: 16,
    alignSelf: 'center',
  },
  quiz_img: {
    height: width * 0.4,
    width: '100%',
    borderRadius: 20
  },
  sub_title: { color: 'gray', fontSize: 13, fontWeight: '500', padding: 3 },
  timeline_year: {
    color: Colors.LIGHT_BG, fontSize: 13, fontWeight: '500', padding: 3,
    alignSelf: 'center',
  },
  rating: {
    color: Colors.PRIMARY_2, fontSize: 13, fontWeight: '500', padding: 3,
    alignSelf: 'center'
  },
  quiz_card: { backgroundColor: '#fff' },
  news_card: {
    width: width * 0.62,
    marginRight: width * 0.025
  },
  timeline_img: {
    height: height * 0.12,
    width: height * 0.12,
    borderWidth: 2.5,
    borderColor: '#fff',
    borderRadius: 70,
  },
  timeline_section: {
    paddingRight: width * 0.04,
  },
  placeholderStyle: {
    color: 'gray',
    fontSize: 14.5,
  },
  selectedTextStyle: {
    color: 'black',
    fontSize: 14.5,
  },
  inputSearchStyle: {
    color: 'gray'
  },
  labelStyle: {
    fontSize: 14,
    color: 'gray'
  },
  itemTextStyle: {
    color: 'gray',
    fontSize: 14.5
  },
  iconStyle: {
    color: 'gray'
  },
  game_card: {
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
    height: height * 0.2,
    marginVertical: height * 0.005,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  game_txt: {
    fontSize: 15,
    color: Colors.PRIMARY_3,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: height * 0.01

  },
  anim_rotate: {
    height: height * 0.18,
    width: height * 0.18,
    borderTopColor: Colors.PRIMARY_3,
    borderBottomColor: Colors.PRIMARY_3,
    borderWidth: 6,
    alignSelf: 'center',
    borderRadius: 100,
    opacity: 0.8
  },
  game_img: {
    height: height * 0.15,
    width: height * 0.15,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    left: height * 0.05
  },
  enquiry_heading: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    width: '85%',
    alignSelf: 'center',
    fontWeight: '500',
    marginVertical: height * 0.02
  },
  team_circle_img: {
    width: height * 0.115,
    height: height * 0.115,
    alignSelf: 'center',
    marginVertical: height * 0.01,
    position: 'absolute',
    right: -7,
    bottom: -18,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 50
  },
  team_card: {
    borderRadius: 10,
    elevation: 5,
    padding: 5,
    paddingHorizontal: width * 0.02,
  },
  white_boldtext: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
  icc_crick_type: {
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY_3,
    elevation: 10,
    width: height * 0.0895,
    height: height * 0.089,
    margin: height * 0.016,
    justifyContent: 'center',
  },
  primary_boldtext: {
    color: Colors.PRIMARY_2,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  icc_opt_section: {
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 10,
    width: '100%',
    height: height * 0.075,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: width * 0.031,
    marginTop: height * 0.01
  },
  side_space: { paddingHorizontal: width * 0.02 },
  short_country_text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    alignSelf: 'center',
    bottom: 5
  },
  country_flag: {
    width: width * 0.19,
    height: height * 0.075,
    alignSelf: 'center',
    marginVertical: height * 0.01,
    resizeMode: 'contain',
  },
  vdo_event: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.6,
    padding: 5,
    backgroundColor: Colors.PRIMARY_3,
    borderRadius: 8,
    width: width * 0.2,
    position: 'absolute',
    bottom: 2,
    left: 2
  },
  text_heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    paddingBottom: height * 0.002,
    paddingHorizontal: width * 0.01,
    borderBottomColor: Colors.PRIMARY_3,
    borderBottomWidth: 5,
    width: '98%',
    alignSelf: 'center',
    marginVertical: height * 0.008
  }
});