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
    useWindowDimensions,
    ImageBackground
} from 'react-native';
import { Colors } from '../../theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
const { height, width } = Dimensions.get('window');
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Lottie from 'lottie-react-native';
import Tts from 'react-native-tts';
import { TextInput } from 'react-native-gesture-handler';

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

    const [Comments, SetComments] = useState([]);
    const [commentValue, setCommentValue] = useState('');
    const [showComment, setShowComment] = useState(false);
    const [commentryEmoji, setCommentryEmoji] = useState(false);
    const [heart, setHeart] = useState(false);
    const [thumbCommentry, setThumbCommentry] = useState(false);
    const InputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setHeart(false)
            setThumbCommentry(false)
        }, 3800);
    });

    // Function to add comments to array
    const AddToComments = () => {
        let temp = {
            id: GenerateUniqueID(),
            commentValue: commentValue,
        };
        SetComments([...Comments, temp]); // Adds comment to Array
        InputRef.current.clear(); // This clears the TextInput Field
    };

    // Function to Generate a Unique ID for array elements
    const GenerateUniqueID = () => {
        return Math.floor(Math.random() * Date.now()).toString();
    };

    const [mute, setmute] = useState(false);
    const [fourScore, setfourScore] = useState(true);

    // Tts.speak('Batting');

    // Tts.speak('1 wicket', {
    //     androidParams: {
    //         KEY_PARAM_PAN: -1,
    //         KEY_PARAM_VOLUME: 0.5,
    //         KEY_PARAM_STREAM: 'STREAM_MUSIC',
    //     },
    // });
    useEffect(() => {
        setTimeout(() =>
            setfourScore(false), 3500,
        );
    });
    Tts.setDefaultLanguage('hi')
    Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact')
    const VoiceStart = () => {
        setmute(!mute)
        Tts.getInitStatus().then(() => {
            Tts.speak('Batting by Rohit sharma......, Rohit sharma to mohammad rizwan: No Run');
            Tts.speak('Rohit sharma...... Six...');
            Tts.speak('Rohit sharma...... 0 run...');
            Tts.speak('shaheen shah afridi bowling...... No run no wicket...');
            Tts.speak('Shaheen shah afridi to Kohli: Wicket! caught By afridi. No Run');
            Tts.speak('Rohit sharma...... Four run...');
            Tts.setDucking(true);
            Tts.quality(500)
        }
        );
    }
    return (
        <SafeAreaView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>

            {/* <View style={{ backgroundColor: '#000', height: '27%', width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: height * 0.02 }}>
                    <TouchableOpacity onPress={VoiceStart}>
                        {!mute ?
                            <Octicons
                                name='mute'
                                size={26}
                                color={Colors.LIGHT_SKY}
                            />
                            :
                            <Octicons
                                name='unmute'
                                size={26}
                                color={Colors.LIGHT_SKY}
                            />
                        }
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', borderBottomColor: 'red', borderBottomWidth: 2 }}>Live</Text>
                </View>
                <View style={{}}>
                    {fourScore ?
                        // <Text style={{ fontSize: 32, color: '#fff', alignSelf: 'center', textAlign: 'center' }}>1 Run</Text>
                        // :
                        <Lottie source={require('../../assets/animation/score.json')}
                            autoPlay loop
                            style={{
                                height: height * 0.085,
                                width: height * 0.085,
                                alignSelf: 'center'
                            }}
                        /> :
                        <Text style={{ fontSize: 30, color: '#fff', alignSelf: 'center', textAlign: 'center' }}>2 Runs</Text>
                    }

                </View>

            </View> */}

            <ImageBackground
                style={{
                    width: height * 0.46,
                    height: height * 0.25,
                    alignSelf: 'center',
                }}
                source={require('../../assets/images/tv.png')}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: height * 0.02, paddingHorizontal: height * 0.063 }}>
                    <TouchableOpacity onPress={VoiceStart}>
                        {!mute ?
                            <Octicons
                                name='mute'
                                size={26}
                                color={Colors.LIGHT_SKY}
                            />
                            :
                            <Octicons
                                name='unmute'
                                size={26}
                                color={Colors.LIGHT_SKY}
                            />
                        }
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', borderBottomColor: 'green', borderBottomWidth: 3 }}>Live</Text>
                </View>
                <View style={{}}>
                    {fourScore ?
                        // <Text style={{ fontSize: 32, color: '#fff', alignSelf: 'center', textAlign: 'center' }}>1 Run</Text>
                        // :
                        <Lottie source={require('../../assets/animation/score.json')}
                            autoPlay loop
                            style={{
                                height: height * 0.085,
                                width: height * 0.085,
                                alignSelf: 'center'
                            }}
                        /> :
                        <Text style={{ fontSize: 27, color: '#fff', alignSelf: 'center', textAlign: 'center' }}>2 Runs</Text>
                    }

                </View>
                {/* <View style={{
                    backgroundColor: 'green',
                    height: height * 0.023,
                    width: height * 0.023,
                    borderRadius: 50,
                    alignItems: 'center'
                }}></View> */}
            </ImageBackground>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: height * 0.008, paddingHorizontal: height * 0.02, backgroundColor: '#CCCCFF' }}>
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
                <Text style={{ color: 'gray', fontSize: 18, fontWeight: '500', alignSelf: 'center' }}>V/S</Text>
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
                {/* <Text style={{ padding: height * 0.017, color: '#000', fontSize: 13, lineHeight: height * 0.025, textAlign: 'justify' }}>
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
                </Text> */}
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.6</Text>
                    <Text style={styles.live_commentry_score}>4</Text>
                    <Text style={[styles.right_text, { width: '65%', }]}>Rahul sharma to mohammad rizwan: Four run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.5</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>0</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Rahul sharma to mohammad rizwan: No Run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.4</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'orange' }]}>W</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Shaheen shah afridi to Kohli: Wicket! caught By afridi. No Run</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.3</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'green' }]}>6</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Six run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.2</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'purple' }]}>3</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Three run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'green' }]}>6</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Six run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>0</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: No Run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>N</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: No Ball. One Run.Free hit</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'purple' }]}>1</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: One run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'purple' }]}>2</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Two run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>wd</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Wide ball. One run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'green' }]}>6</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Six run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>0</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: No Run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>N</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: No Ball. One Run.Free hit</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'purple' }]}>1</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: One run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'purple' }]}>2</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Two run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>wd</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Wide ball. One run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'green' }]}>6</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Six run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>0</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: No Run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>N</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: No Ball. One Run.Free hit</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'purple' }]}>1</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: One run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'purple' }]}>2</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Two run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.1</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>wd</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Kohli to mohammad rizwan: Wide ball. One run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.6</Text>
                    <Text style={styles.live_commentry_score}>4</Text>
                    <Text style={[styles.right_text, { width: '65%', }]}>Rahul sharma to mohammad rizwan: Four run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.5</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>0</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Rahul sharma to mohammad rizwan: No Run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.4</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'orange' }]}>W</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Shaheen shah afridi to Kohli: Wicket! caught By afridi. No Run</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.6</Text>
                    <Text style={styles.live_commentry_score}>4</Text>
                    <Text style={[styles.right_text, { width: '65%', }]}>Rahul sharma to mohammad rizwan: Four run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.5</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>0</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Rahul sharma to mohammad rizwan: No Run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.4</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'orange' }]}>W</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Shaheen shah afridi to Kohli: Wicket! caught By afridi. No Run</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.6</Text>
                    <Text style={styles.live_commentry_score}>4</Text>
                    <Text style={[styles.right_text, { width: '65%', }]}>Rahul sharma to mohammad rizwan: Four run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.5</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>0</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Rahul sharma to mohammad rizwan: No Run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.4</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'orange' }]}>W</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Shaheen shah afridi to Kohli: Wicket! caught By afridi. No Run</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.6</Text>
                    <Text style={styles.live_commentry_score}>4</Text>
                    <Text style={[styles.right_text, { width: '65%', }]}>Rahul sharma to mohammad rizwan: Four run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.5</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>0</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Rahul sharma to mohammad rizwan: No Run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.4</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'orange' }]}>W</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Shaheen shah afridi to Kohli: Wicket! caught By afridi. No Run</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.6</Text>
                    <Text style={styles.live_commentry_score}>4</Text>
                    <Text style={[styles.right_text, { width: '65%', }]}>Rahul sharma to mohammad rizwan: Four run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.5</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'gray' }]}>0</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Rahul sharma to mohammad rizwan: No Run.</Text>
                </View>
                <View style={[styles.flew_row, { paddingVertical: height * 0.018 }]}>
                    <Text style={styles.live_commentry_sr}>19.4</Text>
                    <Text style={[styles.live_commentry_score, { backgroundColor: 'orange' }]}>W</Text>
                    <Text style={[styles.right_text, { width: '65%' }]}>Shaheen shah afridi to Kohli: Wicket! caught By afridi. No Run</Text>
                </View>

            </ScrollView>

            <View style={styles.comment_section}>
                {
                    showComment == true ?
                        <View style={{
                            backgroundColor: '#fff',
                            height: height * 0.45,
                            width: '100%',
                            elevation: 10,
                            padding: 15,
                            borderRadius: 29,
                            marginVertical: height * 0.007,
                        }}>
                            <TouchableOpacity onPress={() => setShowComment(false)}>
                                <Feather
                                    name='chevrons-down'
                                    size={28}
                                    color={Colors.PRIMARY_2}
                                    style={{
                                        alignSelf: 'flex-end',
                                        paddingHorizontal: height * 0.01
                                    }}
                                />
                            </TouchableOpacity>
                            <ScrollView style={{

                            }}>
                                {Comments.map((c) => (
                                    <View style={styles.showComment_container} key={c.id}>
                                        <View style={{ justifyContent: 'center' }}>
                                            <View style={{
                                                backgroundColor: Colors.PRIMARY_2,
                                                height: height * 0.034,
                                                width: height * 0.034,
                                                borderRadius: 50,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    color: '#fff',
                                                    fontSize: 10,
                                                }}>
                                                    JP
                                                </Text>
                                            </View>
                                        </View>
                                        <Text style={{
                                            color: 'gray', fontSize: 15,
                                            alignSelf: 'center', paddingLeft: height * 0.007, width: '81%'
                                        }}>{c.commentValue}
                                        </Text>
                                        <Text style={{ color: '#000', fontSize: 11, alignItems: 'center', alignSelf: 'center', fontWeight: '500' }}>
                                            {moment(new Date()).format("hh:mm")}
                                        </Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        :
                        null
                }
                <View style={styles.chatbox_section}>
                    <View style={{
                        backgroundColor: Colors.PRIMARY_2,
                        height: height * 0.06,
                        width: height * 0.06,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: '500'
                        }}>
                            JP
                        </Text>
                    </View>
                    <View style={{
                        justifyContent: 'center', flex: 1,
                    }}>
                        <TextInput
                            style={styles.input_txt}
                            onChangeText={(text) => { setCommentValue(text); setShowComment(true); setCommentryEmoji(false) }}
                            placeholder="Add a Comment..."
                            ref={InputRef}
                            placeholderTextColor='gray'
                            value={commentValue}
                        />
                    </View>
                    {/* <EmojiSelector
                        category={Categories.symbols}
                        // onEmojiSelected={emoji => console.log(emoji)}
                        style={{color: '#000'}}
                    /> */}
                    <TouchableOpacity
                        onPress={() => { AddToComments() }}>
                        <Ionicons
                            name='md-send-outline'
                            size={26}
                            color={Colors.PRIMARY_2}
                            style={{ marginRight: width * 0.025 }}
                        />
                    </TouchableOpacity>

                    {commentryEmoji == true ?
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => setHeart(true)}>
                                <Text style={{ fontSize: 20, color: 'red', paddingHorizontal: width * 0.006 }}>❤️</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20, paddingHorizontal: width * 0.006 }}>😂</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setThumbCommentry(true)}>
                                <Text style={{ fontSize: 20, paddingHorizontal: width * 0.006 }}>👍</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20, paddingHorizontal: width * 0.006 }}>😫</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20, paddingHorizontal: width * 0.006 }}>💯</Text>
                            </TouchableOpacity>
                        </View> :
                        <TouchableOpacity
                            onPress={() => setCommentryEmoji(true)}
                        >
                            <Text style={{ fontSize: 20, color: 'red', marginRight: width * 0.03 }}>❤️</Text>
                        </TouchableOpacity>
                    }
                    {
                        heart == true ?
                            <Lottie source={require('../../assets/animation/heart.json')}
                                autoPlay loop
                                style={{
                                    width: height * 0.3,
                                    bottom: 50,
                                    color: 'red',
                                    right: 10
                                }}
                            />
                            :
                            thumbCommentry == true ?
                                <Lottie source={require('../../assets/animation/thumbup.json')}
                                    autoPlay loop
                                    style={{
                                        width: height * 0.4,
                                        bottom: 50,
                                        color: 'red',
                                        right: width * 0.1
                                    }}
                                />
                                :
                                null
                    }

                </View>
            </View>

        </SafeAreaView >
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
                <Text style={{ color: 'gray', fontSize: 22, padding: 2 }}>PAK 137-8 (20)</Text>
                <Text style={{ color: '#000', fontSize: 22, padding: 2 }}>ENG 138-5 (19)</Text>
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

const LiveMatches = props => {
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
                    paddingVertical: height * 0.018,
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
                    }}>India v/s Pakistan</Text>
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
export default LiveMatches;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
        height: '100%'
    },
    showComment_container: {
        flexDirection: 'row',
        paddingVertical: height * 0.008,
    },
    input_txt: {
        width: '95%',
        fontSize: 13,
        color: '#000',
        paddingLeft: height * 0.008
    },
    comment_section: {
        position: 'absolute',
        bottom: height * 0.012,
        width: '100%',
        marginHorizontal: '7%',
        alignSelf: 'center',
    },
    chatbox_section: {
        width: '100%',
        height: height * 0.074,
        backgroundColor: '#fff',
        borderRadius: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.016,
        elevation: 10
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
        width: '10%',
        alignSelf: 'center'
    },
    left_text: {
        fontSize: 12,
        color: '#000000',
        width: '45%'
    },
    right_text: {
        fontSize: 12,
        color: '#000000',
        width: '50%',
        alignSelf: 'center'
    },
    live_commentry_sr: {
        fontSize: 13,
        color: '#000000',
        width: '13%',
        fontWeight: '500',
        alignSelf: 'center'
    },
    live_commentry_score: {
        fontSize: 12.5,
        color: '#fff',
        fontWeight: '400',
        alignSelf: 'center',
        backgroundColor: '#0096FF',
        padding: 5,
        borderRadius: 50,
        height: height * 0.041,
        width: height * 0.041,
        textAlign: 'center',
        marginRight: height * 0.03
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