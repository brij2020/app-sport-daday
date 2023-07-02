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
    FlatList,
    Button
} from 'react-native';
import { Colors } from '../theme/color';
import RBSheet from "react-native-raw-bottom-sheet";
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');

const AllGames = props => {
    const navigation = props.navigation;
    const DirectorsRefRBSheet = useRef();


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
            {/* top nav tab  */}

            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: '4%',
                    borderBottomColor: Colors.PRIMARY_1,
                    borderBottomWidth: 0.7,
                    paddingVertical: height * 0.02,
                    backgroundColor: Colors.PRIMARY_2
                }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        justifyContent: 'center'
                    }}
                >
                    <MaterialIcons
                        name='keyboard-backspace'
                        size={28}
                        color={Colors.LIGHT_SKY}
                    />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{
                        color: Colors.LIGHT_SKY,
                        fontSize: 18,
                        fontWeight: '400',
                        left: width * 0.05,
                    }}>Games and Fun</Text>
                </View>

            </View>

            <ScrollView>
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={[Colors.LIGHT_SKY, Colors.PRIMARY_2]}
                    style={{
                        width: '100%',
                        height: '100%',
                        alignSelf: 'center',
                        paddingBottom: height * 0.03,
                    }}>
                    <TouchableOpacity style={styles.quiz_card}
                        onPress={() => navigation.navigate('Game')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/game1.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>BUGSNAX</Text>
                            <Text style={styles.sub_title}>Kind of bugs and kind of ’snax!</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quiz_card}
                        onPress={() => navigation.navigate('Game2')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/game6.webp')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Cricket</Text>
                            <Text style={styles.sub_title}>Cricket and fun</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quiz_card}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/game2.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>NO MAN’S SKY</Text>
                            <Text style={styles.sub_title}>No Man’s Sky has been a success story of online games since 2018, when Hello Games launched the enormous overhaul known as Next.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quiz_card}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/game3.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>DOOM ETERNAL</Text>
                            <Text style={styles.sub_title}>Doom took top honors in our 2016 game of the year deathmatch with an incredibly confident reimagining of the classic shooter franchise that started it all.</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quiz_card}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/game4.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Gems of War</Text>
                            <Text style={styles.sub_title}>Kind of war Game!</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quiz_card}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/game5.webp')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Super Mario</Text>
                            <Text style={styles.sub_title}>Super Mario is a platform game series created by Nintendo starring their mascot, Mario.</Text>
                        </View>
                    </TouchableOpacity>

                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
};
export default AllGames;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
        height: '100%'
    },
    title: { color: 'black', fontWeight: '500', fontSize: 18 },
    quiz_img: {
        width: width * 1,
        height: width * 0.55,
        alignSelf: 'center',
    },
    sub_title: { color: '#000000', fontSize: 12, paddingTop: height * 0.01 },
    quiz_card: { marginTop: height * 0.015, backgroundColor: '#fff' }
});