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
    Animated,
    Easing,
} from 'react-native';
import { Colors } from '../../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import Lottie from 'lottie-react-native';
import BasicTopBar from '../../navigations/BasicTopBar';
const { height, width } = Dimensions.get('window');

const MultiGames = props => {
    const navigation = props.navigation;
    const DirectorsRefRBSheet = useRef();

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

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
            {/* top nav tab  */}
            <BasicTopBar {...props} basicHeadingTxt={"Sportsdaddy Collection"} />

            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.LIGHT_SKY, Colors.PRIMARY_2]}
                style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                }}>
                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '500', color: '#fff', paddingVertical: height * 0.015, backgroundColor: Colors.PRIMARY_3, width: '95%', borderRadius: 8, alignSelf: 'center', marginVertical: height * 0.008 }}>Others Games</Text>
                <ScrollView>
                    <View style={{
                        width: '100%',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: width * 0.02,
                        // height: '90%'
                        marginBottom: height * 0.074
                    }}>
                        <View style={styles.game_card}>
                            <Animated.View style={[styles.anim_rotate, {
                                transform: [{ rotate: spin }],
                            }]}>
                            </Animated.View>
                            <Image
                                source={require('../../assets/images/multigame/football.png')}
                                style={styles.game_img}
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
                                source={require('../../assets/images/multigame/hockey.png')}
                                style={[styles.game_img, {
                                    height: height * 0.17,
                                    width: height * 0.17,
                                    left: height * 0.065
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
                                source={require('../../assets/images/multigame/kabaddi.png')}
                                style={[styles.game_img, {
                                    height: height * 0.17,
                                    width: height * 0.17,
                                    left: height * 0.055
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
                                source={require('../../assets/images/multigame/tennis.png')}
                                style={[styles.game_img, {
                                    left: height * 0.032
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
                </ScrollView>
            </LinearGradient>

        </SafeAreaView>
    );
};
export default MultiGames;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%'
    },
    game_card: {
        borderRadius: 8,
        backgroundColor: '#fff',
        width: '100%',
        height: height * 0.25,
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
        height: height * 0.23,
        width: height * 0.23,
        borderTopColor: Colors.PRIMARY_3,
        borderBottomColor: Colors.PRIMARY_3,
        borderWidth: 6,
        alignSelf: 'center',
        borderRadius: 100,
        opacity: 0.8
    },
    game_img: {
        height: height * 0.2,
        width: height * 0.2,
        resizeMode: 'contain',
        alignSelf: 'center',
        position: 'absolute',
        left: height * 0.05
    },
    viewmore_btn: { backgroundColor: '#000', width: width * 0.35, height: height * 0.056, justifyContent: 'center', borderRadius: 30 },
    viewmore_btn_txt: { color: '#fff', fontSize: 12, textAlign: 'center', letterSpacing: 1 }
});