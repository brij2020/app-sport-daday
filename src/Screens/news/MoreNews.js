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
import { Colors } from '../../theme/color';
import RBSheet from "react-native-raw-bottom-sheet";
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');

const MoreNews = props => {
    const navigation = props.navigation;
    const DirectorsRefRBSheet = useRef();

    // context 
    const handlePressContent = useCallback(async () => {
        await Linking.openURL("https://www.hindustantimes.com/cricket/babar-azam-equals-virat-kohli-rohit-sharma-s-spectacular-t20i-records-with-incredible-match-winning-79-vs-new-zealand-101665222602208.html");
    }, []);

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
                    }}>News</Text>
                </View>

            </View>

            {/* Latest News  */}
            <ScrollView>
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={[Colors.PRIMARY_2, Colors.LIGHT_SKY]}
                    style={{
                        width: '100%',
                        height: '100%',
                        alignSelf: 'center',
                        marginBottom: height * 0.015,
                    }}>

                    {/* latest news  */}
                    <View style={{
                        paddingHorizontal: width * 0.025,
                        backgroundColor: Colors.LIGHT_SKY,
                        paddingTop: height * 0.006
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: '#000',
                                }}>
                                Latest News
                            </Text>

                        </View>
                        <ScrollView
                            style={{ paddingTop: height * 0.006 }}
                            horizontal={true}>
                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img6.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('FullNews')}
                                style={styles.news_card}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('FullNews')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../assets/images/img2.png')}
                            />
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Women's T20 World Cup */}
                    <View style={{
                        paddingHorizontal: width * 0.025,
                        marginTop: height * 0.01,
                        backgroundColor: Colors.LIGHT_SKY,
                        paddingTop: height * 0.006
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: '#000',
                                }}>
                                Women's T20 World Cup
                            </Text>
                        </View>
                        <ScrollView
                            style={{ paddingTop: height * 0.006 }}
                            horizontal={true}>
                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img6.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('FullNews')}
                                style={styles.news_card}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* India News */}
                    <View style={{
                        paddingHorizontal: width * 0.025,
                        marginTop: height * 0.01,
                        backgroundColor: Colors.LIGHT_SKY,
                        paddingTop: height * 0.006
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: '#000',
                                }}>
                                India News
                            </Text>

                        </View>
                        <ScrollView
                            style={{ paddingTop: height * 0.006 }}
                            horizontal={true}>
                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img6.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('FullNews')}
                                style={styles.news_card}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('FullNews')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../assets/images/img8.png')}
                            />
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('FullNews')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../assets/images/img2.png')}
                            />
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* WTC, IND v AUS, Second Test */}
                    <View style={{
                        paddingHorizontal: width * 0.025,
                        marginTop: height * 0.01,
                        backgroundColor: Colors.LIGHT_SKY,
                        paddingTop: height * 0.006
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: '#000',
                                }}>
                                WTC, IND v AUS, Second Test
                            </Text>

                        </View>
                        <ScrollView
                            style={{ paddingTop: height * 0.006 }}
                            horizontal={true}>
                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img6.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('FullNews')}
                                style={styles.news_card}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* Top Stories */}
                    <View style={{
                        paddingHorizontal: width * 0.025,
                        marginTop: height * 0.01,
                        backgroundColor: Colors.LIGHT_SKY,
                        paddingTop: height * 0.006
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: '#000',
                                }}>
                                Top Stories
                            </Text>

                        </View>
                        <ScrollView
                            style={{ paddingTop: height * 0.006 }}
                            horizontal={true}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('FullNews')}
                                style={styles.news_card}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img6.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img8.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img3.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img2.png')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../assets/images/img4.jpg')}
                                    />
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
};
export default MoreNews;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
        height: '100%'
    },
    title: { color: 'black', fontWeight: '500', fontSize: 15, },
    full_news_card: {
        width: '100%',
        paddingTop: height * 0.01,
    },
    full_news_img: {
        width: '100%',
        height: width * 0.55,
    },
    sub_title: { color: '#000000', fontSize: 12, paddingTop: height * 0.01 },
    quiz_card: { marginTop: height * 0.015, backgroundColor: '#fff' },
    news_card: {
        width: width * 0.62,
        marginRight: width * 0.025
    },
    news_img: {
        height: width * 0.4,
        width: '100%',
        borderRadius: 20
    },
    sub_title: { color: 'gray', fontSize: 12, fontWeight: '500', padding: 3, paddingTop: height * 0.01 },
});