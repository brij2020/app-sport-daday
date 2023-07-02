import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Colors } from '../theme/color';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Lottie from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const BottomTab = props => {
    const navigation = props.navigation;

    const [ChangeTabHome, setChangeTabHome] = useState(true);
    const [ChangeTabSeries, setChangeTabSeries] = useState(false);
    const [ChangeTabSchedule, setChangeTabSchedule] = useState(false);
    const [ChangeTabVideo, setChangeTabVideo] = useState(false);
    const [ChangeTabMore, setChangeTabMore] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    height: height * 0.085,
                    width: '98%',
                    backgroundColor: Colors.LIGHT_SKY,
                    borderRadius: 25,
                    flexDirection: 'row',
                    marginHorizontal: '6%',
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: 3,
                    elevation: 10
                }}>
                {
                    ChangeTabHome == true ?
                        <Lottie source={require('../assets/animation/home.json')}
                            autoPlay loop
                            style={{
                                // bottom: 30,
                                marginRight: width * 0.392
                            }}
                        />
                        :
                        <TouchableOpacity
                            onPress={() => {
                                setChangeTabSeries(false);
                                setChangeTabHome(true);
                                setChangeTabSchedule(false);
                                setChangeTabVideo(false);
                                setChangeTabMore(false);
                                navigation.navigate('Home')
                            }}
                            style={{
                                paddingVertical: height * 0.026,
                                position: 'absolute',
                                left: width * 0.067,
                                bottom: height * -0.0002,
                                zIndex: 4

                            }}>
                            <Foundation
                                name='home'
                                size={29}
                                color='#000'
                                style={{}}

                            />
                        </TouchableOpacity>
                }

                {
                    ChangeTabSeries == true ?
                        <Lottie source={require('../assets/animation/cup.json')}
                            autoPlay loop
                            style={{
                                // bottom: 30,
                                marginRight: width * 0.21
                            }}
                        />
                        :
                        <TouchableOpacity
                            onPress={() => {
                                setChangeTabSeries(true);
                                setChangeTabHome(false);
                                setChangeTabSchedule(false);
                                setChangeTabVideo(false);
                                setChangeTabMore(false);
                                navigation.navigate('BrowseSeries')
                            }}
                            style={{
                                paddingVertical: height * 0.026,
                                bottom: height * -0.0002,
                                position: 'absolute',
                                left: width * 0.24,
                                zIndex: 4
                            }}>
                            <Ionicons
                                name='trophy-sharp'
                                size={28}
                                color='#000'
                            />
                        </TouchableOpacity>
                }

                {
                    ChangeTabSchedule == true ?
                        <Lottie source={require('../assets/animation/schedule1.json')}
                            autoPlay loop
                            style={{
                                right: width * 0.003,
                            }}
                        />
                        :
                        <TouchableOpacity
                            onPress={() => {
                                setChangeTabSeries(false);
                                setChangeTabHome(false);
                                setChangeTabSchedule(true);
                                setChangeTabVideo(false);
                                setChangeTabMore(false);
                                navigation.navigate('Schedule')
                            }}
                            style={{
                                paddingVertical: height * 0.026,
                                position: 'absolute',
                                left: width * 0.453,
                                zIndex: 3,
                                bottom: height * -0.0002,
                            }}>
                            <FontAwesome5
                                name='calendar-alt'
                                size={28}
                                color='#000'
                                style={{}}
                            />
                        </TouchableOpacity>
                }

                {
                    ChangeTabVideo == true ?
                        <Lottie source={require('../assets/animation/video.json')}
                            autoPlay loop
                            style={{
                                left: width * 0.2,
                            }}
                        />
                        :
                        <TouchableOpacity
                            onPress={() => {
                                setChangeTabSeries(false);
                                setChangeTabHome(false);
                                setChangeTabSchedule(false);
                                setChangeTabVideo(true);
                                setChangeTabMore(false);
                                navigation.navigate('Video')
                            }}
                            style={{
                                paddingVertical: height * 0.026,
                                position: 'absolute',
                                right: width * 0.24,
                                zIndex: 2,
                                bottom: height * -0.0002,
                            }}>
                            <MaterialIcons
                                name='play-circle-fill'
                                size={29}
                                color='#000'
                                style={{
                                }}
                            />
                        </TouchableOpacity>
                }

                {
                    ChangeTabMore == true ?
                        // <Lottie source={require('../assets/animation/more.json')}
                        //     autoPlay loop
                        //     style={{
                        //         marginLeft: width * 0.392,
                        //         zIndex: 1,
                        //         // transform: [{ rotate: '90deg' }],
                        //         // backgroundColor: 'red',
                        //         // bottom: 60
                        //     }}
                        // />
                        <Entypo
                            name='dots-three-vertical'
                            size={26.5}
                            color={Colors.PRIMARY_2}
                            style={{
                                marginLeft: width * 0.840,
                                alignSelf: 'center'
                            }}
                        />
                        :
                        <TouchableOpacity
                            onPress={() => {
                                setChangeTabSeries(false);
                                setChangeTabHome(false);
                                setChangeTabSchedule(false);
                                setChangeTabVideo(false);
                                setChangeTabMore(true);
                                navigation.navigate('More')
                            }}
                            style={{
                                paddingVertical: height * 0.026,
                                position: 'absolute',
                                right: width * 0.067,
                                bottom: height * -0.0002,
                            }}>
                            <Entypo
                                name='dots-three-vertical'
                                size={26.5}
                                color='#000'
                                style={{
                                }}
                            />
                        </TouchableOpacity>
                }

            </View>
        </SafeAreaView >
    );
    // }
};
export default BottomTab;
const styles = StyleSheet.create({
    container: {

        backgroundColor: Colors.LIGHT_SKY,
    },

});
