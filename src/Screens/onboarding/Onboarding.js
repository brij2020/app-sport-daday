import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Animated,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Colors } from '../../theme/color';
import Feather from 'react-native-vector-icons/Feather';
const { width, height } = Dimensions.get('window');

const Onboarding = props => {
    const navigation = props.navigation;

    const LeftAnimate = new Animated.ValueXY({ x: -220, y: 200 })
    const RightAnimate = new Animated.ValueXY({ x: -220, y: 200 })

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
    })

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="dark-content" />

            <ScrollView style={{ height: '100%' }}>
                <View
                    style={{
                        width: '100%',
                        backgroundColor: Colors.PRIMARY_2,
                        paddingVertical: height * 0.1,
                        borderBottomLeftRadius: 30,
                        borderBottomEndRadius: 30,
                        height: height * 0.55,
                        opacity: 0.9,
                        zIndex: 1
                    }}>
                    <Animated.Image
                        source={require('../../assets/images/logo.png')}
                        style={{
                            height: height * 0.3,
                            width: height * 0.3,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            borderRadius: 15,
                            zIndex: 2,
                            marginTop: height * 0.02,
                            transform: [
                                { translateX: LeftAnimate.x },
                                // { translateY: LeftAnimate.y }
                            ]
                        }}
                    />
                </View>

                <Animated.View style={{
                    transform: [
                        // { translateX: LeftAnimate.x },
                        { translateY: LeftAnimate.y }
                    ]
                }}>
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: height * 0.08,
                        }}>
                        <Text style={styles.main_text}>Get instant live scores</Text>
                        <Text style={styles.para_text}>Accusantium dolorum et occaecati facere. Omnis nisi itaque.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: height * 0.048 }}>
                        <TouchableOpacity
                            style={styles.Primary_button}
                            onPress={() => navigation.navigate('Registration')}>
                            <Text style={styles.Primary_button_text}>Sign up</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.secondary_button}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.secondary_button_text}>Sign in</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: height * 0.014 }}>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: Colors.PLACEHOLDER, letterSpacing: 0.3 }}>
                            Continue as a
                        </Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}
                            onPress={() => navigation.navigate('Home')}>
                            <Text style={{ color: Colors.PRIMARY_2, letterSpacing: 0.3, fontWeight: '500', fontSize: 14, }}> Guest</Text>

                            <Feather
                                name='arrow-right'
                                size={18}
                                color={Colors.PRIMARY_2}
                                style={{
                                    marginTop: height * 0.002,
                                    marginLeft: width * 0.01
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </ScrollView>
        </SafeAreaView>
    );
    // }
};
export default Onboarding;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
    },
    main_text: {
        fontWeight: '600',
        fontSize: 24,
        color: Colors.PRIMARY_2,
    },
    para_text: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 16,
        color: Colors.PLACEHOLDER,
        textAlign: 'center',
        width: width * 0.7,
        paddingVertical: height * 0.014
    },
    Primary_button: {
        height: height * 0.068,
        width: width * 0.41,
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 8,
        margin: 7,
        elevation: 10,
        justifyContent: 'center'
    },
    secondary_button: {
        height: height * 0.07,
        width: width * 0.41,
        backgroundColor: Colors.PRIMARY_2,
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        margin: 7
    },
    Primary_button_text: {
        textAlign: 'center',
        color: Colors.PRIMARY_2,
        fontSize: 15,
        fontWeight: '500',
    },
    secondary_button_text: {
        textAlign: 'center',
        color: Colors.LIGHT_SKY,
        fontSize: 15,
        fontWeight: '500'
    }
});
