import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Animated,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import { Colors } from '../../theme/color';
import Lottie from 'lottie-react-native';
const { width, height } = Dimensions.get('window');

const OtpOk = props => {
    const navigation = props.navigation;
    const LeftAnimate = new Animated.ValueXY({ x: -220, y: 200 })
    const RightAnimate = new Animated.ValueXY({ x: -220, y: 200 })
    const fadeAnimate = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            LeftAnimate,
            {
                toValue: { x: 0, y: 0 },
                duration: 1000,
                useNativeDriver: true
            }
        ).start();

        Animated.timing(
            RightAnimate,
            {
                toValue: { x: 10, y: 30 },
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(
            fadeAnimate,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }
        ).start();
    })

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="dark-content" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: width * 0.05 }}>
                <View style={{
                    marginHorizontal: width * 0.026,
                    marginTop: height * 0.18,
                    // transform: [
                    //     { translateX: LeftAnimate.x },
                    // ]
                }}>
                    <Lottie source={require('../../assets/animation/ok.json')}
                        autoPlay loop
                        style={{
                            bottom: height * 0.132
                        }}
                    />
                    <View style={{
                        marginTop: height * 0.29,
                        alignSelf: 'center'
                    }}>
                        <Text style={{
                            color: Colors.PRIMARY_2,
                            fontWeight: 'bold',
                            fontSize: 20,
                            textAlign: 'center'
                        }}>Verified</Text>
                        <Text style={{
                            color: Colors.MUTE_ICON,
                            fontSize: 15,
                            marginTop: height * 0.015,
                            fontWeight: '500',
                            textAlign: 'center'
                        }}>You have successfully verified!</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.primary_button}
                        onPress={()=> navigation.navigate('Home')}>
                        <Text style={styles.primary_btn_text}>Done</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView >
    );
    // }
};
export default OtpOk;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
    },
    textinput: {
        color: 'black',
        fontWeight: '400',
        fontSize: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 10,
        width: height * 0.0895,
        height: height * 0.0895,
        textAlign: 'center',
        marginHorizontal: width * 0.021,
        marginBottom: height * 0.03
    },
    textinput_view: {
        flexDirection: "row",
        marginTop: height * 0.07,
        alignSelf: 'center'
    },
    main_text: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 24,
        color: Colors.MAIN_TEXT,
    },
    login_section: {
        width: '92%',
        backgroundColor: Colors.PRIMARY_2,
        borderRadius: 10,
        paddingVertical: height * 0.05,
        alignSelf: 'center',
        marginTop: height * 0.03,

    },
    placeholderStyle: { color: 'gray' },
    selectedTextStyle: { color: 'gray' },
    inputSearchStyle: { color: 'gray' },
    primary_button: {
        width: '100%',
        backgroundColor: Colors.PRIMARY_2,
        alignSelf: 'center',
        borderRadius: 8,
        height: height * 0.07,
        marginVertical: height * 0.05,
        elevation: 10,
        justifyContent: 'center'
    },
    primary_btn_text: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 13,
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: 0.8
    },
});
