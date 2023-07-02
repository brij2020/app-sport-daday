import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Animated,
    Platform,
    StatusBar,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Alert,
    Dimensions,
} from 'react-native';
import { Colors } from '../../theme/color';
import Entypo from 'react-native-vector-icons/Entypo';
import Lottie from 'lottie-react-native';
const { width, height } = Dimensions.get('window');

const Onboarding3 = props => {
    const navigation = props.navigation;

    const LeftAnimate = new Animated.ValueXY({ x: 220, y: 200 })

    useEffect(() => {
        Animated.timing(
            LeftAnimate,
            {
                toValue: { x: 0, y: 0 },
                duration: 800,
                useNativeDriver: true
            }
        ).start();


    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="dark-content" />

            <Lottie source={require('../../assets/animation/live1.json')}
                autoPlay loop
                style={{
                    zIndex: 1,
                    bottom: height * 0.22

                }}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{
                    position: 'absolute',
                    top: height * 0.03,
                    right: width * 0.05,
                    flexDirection: 'row',
                    zIndex: 2
                }}>

                <Text style={{
                    fontSize: 14,
                    color: '#fff',

                }}>Skip</Text>
                <Entypo
                    name='chevron-small-right'
                    size={22}
                    color={"#fff"}
                    style={{
                    }}
                />
            </TouchableOpacity>

            <Animated.View
                style={{
                    backgroundColor: Colors.LIGHT_SKY,
                    height: height * 0.48,
                    paddingTop: height * 0.04,
                    borderTopLeftRadius: 120,
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    transform: [
                        { translateX: LeftAnimate.x },
                    ]
                }}>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                    <View style={{
                        height: height * 0.0085,
                        width: width * 0.03,
                        backgroundColor: Colors.MUTE_ICON,
                        marginHorizontal: height * 0.002,
                        borderRadius: 10,
                    }}></View>
                    <View style={{
                        height: height * 0.0085,
                        width: width * 0.12,
                        backgroundColor: Colors.PRIMARY_2,
                        borderRadius: 10,
                        marginHorizontal: height * 0.002
                    }}>
                    </View>
                    <View style={{
                        height: height * 0.0085,
                        width: width * 0.03,
                        backgroundColor: Colors.MUTE_ICON,
                        marginHorizontal: height * 0.002,
                        borderRadius: 10,
                    }}></View>
                </View>
                <Animated.View
                    style={{
                        marginHorizontal: width * 0.07,
                        padding: 18,
                        marginTop: height * 0.026,
                        transform: [
                            { translateX: LeftAnimate.x },
                        ]
                    }}>

                    <Text style={styles.onboarding_text}>See
                        <Text style={{ color: Colors.PRIMARY_2 }}> Live</Text> Score & </Text>
                    <Text style={styles.onboarding_text}><Text style={{ color: Colors.PRIMARY_2 }}>Commentry</Text> of </Text>
                    <Text style={styles.onboarding_text}>every second </Text>

                </Animated.View>

                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: width * 0.08,
                    paddingVertical: height * 0.07,
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Onboarding2')}
                        style={{
                            flexDirection: 'row',
                            zIndex: 2,
                            alignSelf: 'flex-end',
                            height: height * 0.09,
                            width: height * 0.09,
                            justifyContent: 'center',
                        }}>
                        <Entypo
                            name='chevron-small-left'
                            size={22}
                            color={Colors.PRIMARY_2}
                            style={{
                                top: height * 0.003,
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}
                        />
                        <Text style={{
                            fontSize: 15,
                            color: Colors.PRIMARY_2,
                            fontWeight: '500',
                            justifyContent: 'center',
                            alignSelf: 'center',
                        }}>previous</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Onboarding4')}
                        style={{
                            zIndex: 2,
                            alignSelf: 'flex-end',
                            height: height * 0.09,
                            width: height * 0.09,
                            backgroundColor: Colors.PRIMARY_2,
                            borderRadius: 50,
                            justifyContent: 'center',
                        }}>
                        <View style={{
                            height: height * 0.045,
                            width: height * 0.045,
                            backgroundColor: Colors.LIGHT_SKY,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignSelf: 'center',
                        }}>
                            <Entypo
                                name='chevron-small-right'
                                size={27}
                                color={Colors.PRIMARY_2}
                                style={{
                                    alignSelf: 'center',
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </Animated.View>

        </SafeAreaView>
    );
    // }
};
export default Onboarding3;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_2,
    },
    onboarding_text: {
        fontWeight: 'bold',
        fontSize: 28,
        color: Colors.PLACEHOLDER,
        marginTop: height * 0.001,
        textAlign: 'right'
    },
});
