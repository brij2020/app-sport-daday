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
} from 'react-native';
import { Colors } from '../../../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import Lottie from 'lottie-react-native';
import Toptab from '../../../navigations/Toptab';
const { height, width } = Dimensions.get('window');

const PlusDashboard = props => {
    const navigation = props.navigation;
    const DirectorsRefRBSheet = useRef();

    // context 
    const handlePressContent = useCallback(async () => {
        await Linking.openURL("https://www.hindustantimes.com/cricket/babar-azam-equals-virat-kohli-rohit-sharma-s-spectacular-t20i-records-with-incredible-match-winning-79-vs-new-zealand-101665222602208.html");
    }, []);

    const pluspremiumicon = <Lottie source={require('../../../assets/animation/premium.json')}
        autoPlay loop
        style={{
            height: 35,
            width: 35,
            position: 'absolute',
            right: width * 0
        }}
    />
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
            {/* top nav tab  */}
            <Toptab {...props} heading={"Sportsdaddy Plus"} />

            {/* premium News  */}
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

                    {/* trending */}
                    <View style={{
                        paddingHorizontal: width * 0.025,
                        backgroundColor: Colors.LIGHT_SKY,
                        paddingTop: height * 0.01
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: '#000',
                                }}>
                                TRENDING
                            </Text>
                            <TouchableOpacity style={styles.premium_opt}
                                onPress={() => navigation.navigate('GetPremium')}>
                                <Text style={styles.premium_opttxt}>GET PREMIUM</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView
                            style={{ paddingTop: height * 0.006 }}
                            horizontal={true}>
                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View>
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img6.png')}
                                    />
                                    {pluspremiumicon}
                                    {pluspremiumicon}
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('GetPremium')}
                                style={styles.news_card}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img8.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img3.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img2.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img4.jpg')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img8.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img3.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img2.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img4.jpg')}
                                    />
                                    {pluspremiumicon}
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

                    {/* featured video */}
                    <View style={{
                        paddingHorizontal: width * 0.025,
                        marginTop: height * 0.01,
                        backgroundColor: Colors.LIGHT_SKY,
                        paddingTop: height * 0.01
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: '#000',
                                }}>
                                FEATURED VIDEOS
                            </Text>
                        </View>
                        <ScrollView
                            style={{ paddingTop: height * 0.006 }}
                            horizontal={true}>
                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img2.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img6.png')}
                                    />
                                    {pluspremiumicon}
                                    <View style={{
                                        padding: height * 0.01,
                                    }}>
                                        <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                        <Text style={styles.sub_title}>22:13 (IST) Jan 18</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('GetPremium')}
                                style={styles.news_card}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img8.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img3.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img4.jpg')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img8.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img3.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img2.png')}
                                    />
                                    {pluspremiumicon}
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
                                onPress={() => navigation.navigate('GetPremium')}
                            >
                                <View >
                                    <Image
                                        style={styles.news_img}
                                        source={require('../../../assets/images/img4.jpg')}
                                    />
                                    {pluspremiumicon}
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
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img8.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={[styles.title_para, { color: 'gray' }]}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: 'gray' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img2.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={[styles.title_para, { color: 'gray' }]}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: 'gray' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img2.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={[styles.title_para, { color: 'gray' }]}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: 'gray' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img8.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img8.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img2.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img6.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img2.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img3.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img8.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img2.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img4.jpg')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img2.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img6.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img3.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img2.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img6.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* full frame news  */}
                    <TouchableOpacity
                        style={styles.full_news_card}
                        onPress={() => navigation.navigate('GetPremium')}
                    >
                        <View >
                            <Image
                                style={styles.full_news_img}
                                source={require('../../../assets/images/img8.png')}
                            />
                            {pluspremiumicon}
                            <View style={{
                                padding: height * 0.01,
                            }}>
                                <Text style={styles.title}>IND vs NZ Live 1st ODI Highlights: Bracewell heroics in vain as India edge NZ in high-scoring thriller</Text>
                                <Text style={styles.title_para}>Lyon (5/67) helped Australia reign supreme in the first half of the second day of the second Test, however, Axar Patel and Ravichandran Ashwin inspired a brilliant rearguard action for India.</Text>
                                <Text style={[styles.sub_title, { color: '#fff' }]}>22:13 (IST) Jan 18</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
};
export default PlusDashboard;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
        height: '100%'
    },
    premium_opt: {
        alignSelf: 'center',
        borderColor: Colors.PRIMARY_3,
        borderWidth: 1.5,
        borderRadius: 5,
    },
    premium_opttxt: {
        alignSelf: 'center',
        color: Colors.PRIMARY_3,
        fontSize: 12,
        padding: 4.5,
        paddingHorizontal: width * 0.027,
        fontWeight: '500'
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
    title_para: {
        color: '#fff',
        fontSize: 14,
        paddingTop: height * 0.005
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
        borderRadius: 7
    },
    sub_title: { color: 'gray', fontSize: 12, fontWeight: '500', padding: 3, paddingTop: height * 0.01 },
});