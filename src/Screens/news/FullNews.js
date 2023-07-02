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

const FullNews = props => {
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
                    }}>Latest News</Text>
                </View>

            </View>

            <View style={{ height: '110%' }}>
                <Image
                    style={styles.quiz_main_img}
                    source={require('../../assets/images/news.jpg')}
                />
                <ScrollView style={{
                    padding: height * 0.018,
                    bottom: height * 0.15,
                    backgroundColor: '#fff',
                    borderTopRightRadius: 40,
                    borderTopLeftRadius: 40,
                }}>
                    <Text style={styles.title}>Following their stunning victory in the first ODI, New Zealand will</Text>
                    <Text style={styles.text_para}>Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                        McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>


                    {/* Latest News  */}
                    <View style={{
                        // paddingVertical: 5
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: '500',
                                    color: '#000',
                                }}>
                                Latest News
                            </Text>

                        </View>
                        <ScrollView
                            style={{ paddingTop: height * 0.016, marginBottom: height * 0.055 }}
                            horizontal={true}>
                            <TouchableOpacity
                                style={styles.news_card}
                                onPress={() => navigation.navigate('FullNews')}
                            >
                                <View >
                                    <Image
                                        style={styles.quiz_img}
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
                                        style={styles.quiz_img}
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
                                        style={styles.quiz_img}
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
                                        style={styles.quiz_img}
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
                                        style={styles.quiz_img}
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
                                        style={styles.quiz_img}
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
                                        style={styles.quiz_img}
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
                                        style={styles.quiz_img}
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
                                        style={styles.quiz_img}
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
                </ScrollView>

            </View>
        </SafeAreaView>
    );
};
export default FullNews;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // height: '100%'
    },
    title: { color: 'black', fontWeight: '500', fontSize: 15, marginTop: height * 0.01 },
    quiz_img: {
        height: width * 0.4,
        width: '100%',
        borderRadius: 20
    },
    quiz_main_img: {
        width: '100%',
        height: width * 0.85,
        alignSelf: 'center',
        opacity: 0.7,
        backgroundColor: Colors.PRIMARY_2
    },
    text_para: { color: 'gray', fontSize: 15, paddingTop: height * 0.01 },
    sub_title: { color: 'gray', fontSize: 13, paddingTop: height * 0.01 },
    quiz_card: { backgroundColor: '#fff', height: '100%' },
    news_card: {
        width: width * 0.6,
        marginRight: width * 0.025
    },
});