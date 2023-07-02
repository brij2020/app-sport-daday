import React, { useRef, useEffect, useState } from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Animated,
    Text,
    Image,
    Easing
} from 'react-native';
import { Colors } from '../theme/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const { height, width } = Dimensions.get('window');

const Toptab = props => {
    const navigation = props.navigation;

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
                duration: 3000,
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
            <View
                style={styles.topbar_container}>
                <Animated.Image
                    style={{
                        width: height * 0.09,
                        height: height * 0.082,
                        resizeMode: 'contain',
                        opacity: fadeAnimate,
                        alignSelf: 'center'
                    }}
                    source={require('../assets/images/logo.png')}
                />
                {/* <Text style={{
                    alignSelf: 'center',
                    color: '#fff',
                    fontSize: 16.5,
                    fontWeight: '500',
                }}>{props.heading}</Text> */}
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center'
                }}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}
                        onPress={() => navigation.navigate('MultiGames')}>

                        <Animated.View style={{
                            height: height * 0.069,
                            width: height * 0.069,
                            borderColor: Colors.PRIMARY_3,
                            borderWidth: 2,
                            borderRadius: 50,
                            // transform: [{ rotate: spin }],
                            justifyContent: 'center'
                        }}>
                            <Animated.Image
                                style={{
                                    width: height * 0.06,
                                    height: height * 0.06,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    transform: [{ rotate: spin }],
                                }}
                                source={require('../assets/images/multigame.png')}
                            />
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <Feather
                            name='search'
                            size={26}
                            color={
                                Colors.LIGHT_SKY}
                            style={{
                                paddingHorizontal: width * 0.024,
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: 'center' }}
                        onPress={() => navigation.navigate('Notifications')}>
                        <MaterialCommunityIcons
                            name='bell'
                            size={23}
                            color={
                                Colors.LIGHT_SKY}
                            style={{
                                paddingHorizontal: width * 0.024
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: 'center' }}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <EvilIcons
                            name='user'
                            size={36}
                            color={
                                Colors.LIGHT_SKY}
                            style={{
                                paddingRight: width * 0.008
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Toptab;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LIGHT_SKY,
    },
    topbar_container: {
        backgroundColor: Colors.PRIMARY_2,
        height: height * 0.09,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.02
    },

});