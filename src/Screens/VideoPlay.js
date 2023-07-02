// React Native Video Library to Play Video in Android and IOS
// https://aboutreact.com/react-native-video/

// import React in our code
import React, { useState, useRef } from 'react';
import { Colors } from '../theme/color';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';

import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video';
import videod from './test.mp4';
const { height } = Dimensions.get('window');

const VideoPlay = () => {
    const videoPlayer = React.useRef();

    const goFullScreen = () => {
        if (videoPlayer.current) {
            videoPlayer.current.presentFullscreenPlayer();
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.video_card}>
                <View>
                    <Text style={{
                        color: '#fff',
                        // textAlign: 'center',
                        fontSize: 15,
                        fontWeight: '500',
                        padding: height * 0.02
                    }}>
                        2019- The year of the Cricket World Cup
                    </Text>

                    <VideoPlayer
                        video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        // thumbnail={{ uri: 'https://c.ndtvimg.com/2022-11/jsjh3gbc_virat-kohli-ani-650_625x300_11_November_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605' }}
                        thumbnail={require('../assets/images/img4.jpg')}
                        resizeMode={'cover'}
                        fullScreenOnLongPress={true}
                        // customStyles={{playIcon: true}}
                        loop={true}
                        showDuration={true}
                        autoplay={true}
                        controlsTimeout={2000}
                        disableControlsAutoHide={false}
                        defaultMuted={false}
                        pauseOnPress={true}
                    />
                    <Text style={{
                        color: Colors.PRIMARY_3,
                        fontSize: 15,
                        fontWeight: '700',
                        padding: height * 0.02,
                        textAlign: 'center'
                    }}>
                       -------- 01 Jan 2019 --------
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default VideoPlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    video_card: {
        height: height * 0.44,
        backgroundColor: Colors.PRIMARY_2,
        justifyContent: 'center'
    }
});