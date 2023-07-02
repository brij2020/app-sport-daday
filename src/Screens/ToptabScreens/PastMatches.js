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
    useWindowDimensions
} from 'react-native';
import { Colors } from '../../theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Info = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <View>
                <Text style={styles.date}>INFO</Text>
                <View style={styles.section}>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Match</Text>
                        <Text style={styles.right_text}>Final</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Series</Text>
                        <Text style={styles.right_text}>ICC Men T20 World Cup 2022</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Date</Text>
                        <Text style={styles.right_text}>Sun, Nov 13</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Time</Text>
                        <Text style={styles.right_text}>01:30 pm, Your Time</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Toss</Text>
                        <Text style={styles.right_text}>India opt to bowl</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Venue</Text>
                        <Text style={styles.right_text}>Melbourne Cricket Ground, Melbourne</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Umpires</Text>
                        <Text style={styles.right_text}>Kumar Dharmasena, Marais Erasmus</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>3rd Umpire</Text>
                        <Text style={styles.right_text}>Chris Gaffaney</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Referee</Text>
                        <Text style={styles.right_text}>Ranjan Madugalle</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.date}>VENUE GUIDE</Text>
                <View style={styles.section}>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Stadium</Text>
                        <Text style={styles.right_text}>Melbourne Cricket Ground</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>City</Text>
                        <Text style={styles.right_text}>Melbourne</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Capacity</Text>
                        <Text style={styles.right_text}>100000 (approx, including standing room)</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Ends</Text>
                        <Text style={styles.right_text}>Members End, Great Southern Stand End</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Hosts to</Text>
                        <Text style={styles.right_text}>Australia, Victoria</Text>
                    </View>

                </View>
            </View>

        </ScrollView>
    )
};

const Live = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <View style={{ padding: height * 0.015 }}>
                <Text style={{ color: '#000', fontSize: 22, padding: 2 }}>IND 138-5 (19)</Text>
                <Text style={{ color: 'gray', fontSize: 22, padding: 2 }}>PAK 137-8 (20)</Text>
                <Text style={{ color: 'teal', fontSize: 14, padding: 3 }}>India won by 5 wkts</Text>
            </View>
            <View style={{ borderTopColor: Colors.LIGHT_BG, borderTopWidth: 1.5, padding: height * 0.015 }}>
                <Text style={{ color: 'gray', fontSize: 13, padding: 5 }}>Player of the Match</Text>
                <Text style={{ color: '#000', fontSize: 16, padding: 5 }}>Sam Curran</Text>
            </View>
            <View style={{ borderTopColor: Colors.LIGHT_BG, borderTopWidth: 1.5, padding: height * 0.015, borderBottomColor: Colors.LIGHT_BG, borderBottomWidth: 1.5 }}>
                <Text style={{ color: 'gray', fontSize: 13, padding: 5 }}>Player of the Series</Text>
                <Text style={{ color: '#000', fontSize: 16, padding: 5 }}>Sam Curran</Text>
            </View>
            <View>
                <Text style={{ padding: height * 0.017, color: '#000', fontSize: 13, lineHeight: height * 0.025, textAlign: 'justify' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        </ScrollView>
    )
};

const Scorecard = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <View>
                <Text style={styles.date}>Pakistan</Text>
                <View style={styles.section}>
                    <View style={styles.flew_row_head}>
                        <Text style={styles.left_head}>Batter</Text>
                        <Text style={styles.right_head}>R</Text>
                        <Text style={styles.right_head}>B</Text>
                        <Text style={styles.right_head}>4s</Text>
                        <Text style={styles.right_head}>6s</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>SR</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Rizwan (wk)</Text>
                            <Text style={styles.player_name_2}>b Sam Curran</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Rizwan (wk)</Text>
                            <Text style={styles.player_name_2}>b Sam Curran</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Rizwan (wk)</Text>
                            <Text style={styles.player_name_2}>b Sam Curran</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Rizwan (wk)</Text>
                            <Text style={styles.player_name_2}>b Sam Curran</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Rizwan (wk)</Text>
                            <Text style={styles.player_name_2}>b Sam Curran</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Rizwan (wk)</Text>
                            <Text style={styles.player_name_2}>b Sam Curran</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Rizwan (wk)</Text>
                            <Text style={styles.player_name_2}>b Sam Curran</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Rizwan (wk)</Text>
                            <Text style={styles.player_name_2}>b Sam Curran</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.flew_row_head}>
                        <Text style={styles.left_head}>Bowler</Text>
                        <Text style={styles.right_head}>O</Text>
                        <Text style={styles.right_head}>M</Text>
                        <Text style={styles.right_head}>R</Text>
                        <Text style={styles.right_head}>W</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>ER</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={styles.right_head}>15</Text>
                        <Text style={styles.right_head}>14</Text>
                        <Text style={styles.right_head}>0</Text>
                        <Text style={styles.right_head}>1</Text>
                        <Text style={[styles.right_head, { width: '15%' }]}>107.14</Text>
                    </View>

                </View>

                <View style={styles.section}>
                    <View style={styles.flew_row_head}>
                        <Text style={styles.left_head}>Fall of Wickets</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>Score</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>Over</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={[styles.right_head, { width: '25%' }]}>29-1</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>4.2</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={[styles.right_head, { width: '25%' }]}>29-1</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>4.2</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={[styles.right_head, { width: '25%' }]}>29-1</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>4.2</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={[styles.right_head, { width: '25%' }]}>29-1</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>4.2</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={[styles.right_head, { width: '25%' }]}>29-1</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>4.2</Text>
                    </View>

                </View>

                <View style={styles.section}>
                    <View style={styles.flew_row_head}>
                        <Text style={styles.left_head}>Powerplay</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>R</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>SR</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <View style={{ width: '45%' }}>
                            <Text style={styles.player_name}>Stokes</Text>
                        </View>
                        <Text style={[styles.right_head, { width: '25%' }]}>0.1 - 0.6</Text>
                        <Text style={[styles.right_head, { width: '25%' }]}>39</Text>
                    </View>


                </View>
            </View>
            <View>
                <Text style={styles.date}>VENUE GUIDE</Text>
                <View style={styles.section}>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Stadium</Text>
                        <Text style={styles.right_text}>Melbourne Cricket Ground</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>City</Text>
                        <Text style={styles.right_text}>Melbourne</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Capacity</Text>
                        <Text style={styles.right_text}>100000 (approx, including standing room)</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Ends</Text>
                        <Text style={styles.right_text}>Members End, Great Southern Stand End</Text>
                    </View>
                    <View style={styles.flew_row}>
                        <Text style={styles.left_text}>Hosts to</Text>
                        <Text style={styles.right_text}>Australia, Victoria</Text>
                    </View>

                </View>
            </View>

        </ScrollView>
    )
};

const Squard = () => {
    return (
        <SafeAreaView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: height * 0.012, paddingHorizontal: height * 0.02, backgroundColor: '#CCCCFF' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{
                            width: height * 0.05,
                            height: height * 0.05,
                            alignSelf: 'center',
                        }}
                        source={require('../../assets/icons/flag1.png')}
                    />
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: '500', paddingLeft: height * 0.005, alignSelf: 'center' }}>IND</Text>
                </View>
                <Text style={{ color: 'gray', fontSize: 20, fontWeight: '500', alignSelf: 'center' }}>V/S</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: '500', paddingRight: height * 0.005, alignSelf: 'center' }}>PAK</Text>
                    <Image
                        style={{
                            width: height * 0.05,
                            height: height * 0.05,
                            alignSelf: 'center',
                        }}
                        source={require('../../assets/icons/flag2.png')}
                    />
                </View>
            </View>
            <ScrollView>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Rohit (c)</Text>
                        <Text style={styles.player_name_2}>Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Babar Azam (c)</Text>
                        <Text style={styles.player_squard_right_gray}>Batsman</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Shubman Gill</Text>
                        <Text style={styles.player_name_2}>Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Rizwan (wk)</Text>
                        <Text style={styles.player_squard_right_gray}>b Sam Curran</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Kohli</Text>
                        <Text style={styles.player_name_2}>Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Shaheen shah afridi</Text>
                        <Text style={styles.player_squard_right_gray}>Bowler</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Shreyas lyer</Text>
                        <Text style={styles.player_name_2}>Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Rizwan (wk)</Text>
                        <Text style={styles.player_squard_right_gray}>b Sam Curran</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Rahul (wk)</Text>
                        <Text style={styles.player_name_2}>WK-Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Rizwan (wk)</Text>
                        <Text style={styles.player_squard_right_gray}>b Sam Curran</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Suryakumar Yadav</Text>
                        <Text style={styles.player_name_2}>Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Rizwan (wk)</Text>
                        <Text style={styles.player_squard_right_gray}>b Sam Curran</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Axar</Text>
                        <Text style={styles.player_name_2}>Bowling Allrounder</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Rizwan (wk)</Text>
                        <Text style={styles.player_squard_right_gray}>b Sam Curran</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Kuldeep Yadav</Text>
                        <Text style={styles.player_name_2}>Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Rizwan (wk)</Text>
                        <Text style={styles.player_squard_right_gray}>b Sam Curran</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Rohit</Text>
                        <Text style={styles.player_name_2}>Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Rizwan (wk)</Text>
                        <Text style={styles.player_squard_right_gray}>b Sam Curran</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Rohit</Text>
                        <Text style={styles.player_name_2}>Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Rizwan (wk)</Text>
                        <Text style={styles.player_squard_right_gray}>b Sam Curran</Text>
                    </View>
                </View>
                <View style={styles.flew_row_squard}>
                    <View style={{ width: '50%', borderRightWidth: 1.5, borderRightColor: 'gray' }}>
                        <Text style={styles.player_name}>Rohit</Text>
                        <Text style={styles.player_name_2}>Batsman</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.player_squard_right_teal}>Rizwan (wk)</Text>
                        <Text style={styles.player_squard_right_gray}>b Sam Curran</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const Overs = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <View style={{ padding: height * 0.015 }}>
                <Text style={{ color: '#000', fontSize: 22, padding: 2 }}>IND 138-5 (19)</Text>
                <Text style={{ color: 'gray', fontSize: 22, padding: 2 }}>PAK 137-8 (20)</Text>
                <Text style={{ color: 'teal', fontSize: 14, padding: 3 }}>India won by 5 wkts</Text>
            </View>
            <View style={{ borderTopColor: Colors.LIGHT_BG, borderTopWidth: 1.5, padding: height * 0.015 }}>
                <Text style={{ color: 'gray', fontSize: 13, padding: 5 }}>Player of the Match</Text>
                <Text style={{ color: '#000', fontSize: 16, padding: 5 }}>Sam Curran</Text>
            </View>
            <View style={{ borderTopColor: Colors.LIGHT_BG, borderTopWidth: 1.5, padding: height * 0.015, borderBottomColor: Colors.LIGHT_BG, borderBottomWidth: 1.5 }}>
                <Text style={{ color: 'gray', fontSize: 13, padding: 5 }}>Player of the Series</Text>
                <Text style={{ color: '#000', fontSize: 16, padding: 5 }}>Sam Curran</Text>
            </View>
            <View>
                <Text style={{ padding: height * 0.017, color: '#000', fontSize: 13, lineHeight: height * 0.025, textAlign: 'justify' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        </ScrollView>
    )
};

const Highlights = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <Text style={{ padding: height * 0.02, color: '#000', fontSize: 14, lineHeight: height * 0.0245 }}>
                1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskt
            </Text>
            <Text style={{ padding: height * 0.02, color: '#000', fontSize: 14, lineHeight: height * 0.0245 }}>
                2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskt
            </Text>
            <Text style={{ padding: height * 0.02, color: '#000', fontSize: 14, lineHeight: height * 0.0245 }}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskt
            </Text>
            <Text style={{ padding: height * 0.02, color: '#000', fontSize: 14, lineHeight: height * 0.0245 }}>
                4. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskt
            </Text>
            <Text style={{ padding: height * 0.02, color: '#000', fontSize: 14, lineHeight: height * 0.0245 }}>
                5. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskt
            </Text>
            <Text style={{ padding: height * 0.02, color: '#000', fontSize: 14, lineHeight: height * 0.0245 }}>
                6. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskt
            </Text>
            <Text style={{ padding: height * 0.02, color: '#000', fontSize: 14, lineHeight: height * 0.0245 }}>
                7. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskt
            </Text>
        </ScrollView>
    )
};

const renderScene = SceneMap({
    first: Live,
    second: Info,
    third: Scorecard,
    fourth: Squard,
    fifth: Overs,
    sixth: Highlights,
});

const PastMatches = props => {
    const navigation = props.navigation;
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Live' },
        { key: 'second', title: 'Info' },
        { key: 'third', title: 'Scorecard' },
        { key: 'fourth', title: 'Squards' },
        { key: 'fifth', title: 'Overs' },
        { key: 'sixth', title: 'Highlights' },
    ]);
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
                    }}>India v Pakistan</Text>
                </View>

            </View>
            <TabView
                style={{}}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => <TabBar {...props}
                    style={{ backgroundColor: Colors.PRIMARY_2, opacity: 0.9 }}
                    labelStyle={{ fontSize: 12, fontWeight: '500' }}
                    tabStyle={{ width: 'auto' }}
                    scrollEnabled={true}
                    bounces={true}
                    activeColor={'#fff'}
                    indicatorStyle={{ backgroundColor: '#fff' }}
                // inactiveColor={'#fff'}
                />}
            />
        </SafeAreaView>
    );
};
export default PastMatches;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
        height: '100%'
    },
    options_icon: {
        alignSelf: 'center',
        marginRight: width * 0.035
    },
    section: {
        backgroundColor: '#fff',
        width: '100%',
        // padding: height * 0.002,
        marginVertical: height * 0.0012,
    },
    flew_row: {
        flexDirection: 'row',
        paddingVertical: height * 0.012,
        paddingHorizontal: width * 0.04,
        borderBottomColor: Colors.BG_COLOR,
        borderBottomWidth: 1.5
    },
    flew_row_squard: {
        flexDirection: 'row',
        paddingVertical: height * 0.012,
        paddingHorizontal: width * 0.04,
        borderBottomColor: Colors.BG_COLOR,
        borderBottomWidth: 1.5,
        justifyContent: 'space-between'
    },
    flew_row_head: {
        flexDirection: 'row',
        paddingVertical: height * 0.012,
        backgroundColor: Colors.PRIMARY_2,
        opacity: 0.5,
        paddingHorizontal: width * 0.04,

    },
    sub_title: { fontSize: 14, color: 'black' },
    from_date: { fontSize: 13, color: 'gray' },
    date: {
        fontSize: 13, color: 'black',
        paddingHorizontal: width * 0.04,
        padding: height * 0.011, fontWeight: '500'
    },
    left_head: {
        fontSize: 12,
        color: '#000000',
        width: '45%'
    },
    right_head: {
        fontSize: 12,
        color: '#000000',
        width: '10%'
    },
    left_text: {
        fontSize: 12,
        color: '#000000',
        width: '45%'
    },
    right_text: {
        fontSize: 12,
        color: '#000000',
        width: '50%'
    },
    player_name: {
        color: 'teal',
        fontSize: 13.5
    },
    player_name_2: {
        fontSize: 12,
        color: 'gray',
    },
    player_squard_right_teal: {
        fontSize: 13.5,
        color: 'teal',
        textAlign: 'right'
    },
    player_squard_right_gray: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'right'
    },

});