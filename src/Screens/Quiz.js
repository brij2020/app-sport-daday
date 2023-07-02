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

const Quiz = props => {
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
                    }}>Quiz</Text>
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
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img6.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>World Test Championship 2021 quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img18.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Rawalpindi express' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img11.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Rawalpindi express' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img12.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'ever-cool-kane' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img21.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'ever-cool-kane' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img7.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>How well do you know "Jimmy"?</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img22.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>World Test Championship 2021 quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img6.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>"The long walk back": Unwanted Records</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img13.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Can you connect the DSR dots?</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img2.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'mighty Murali' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img3.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Smriti Mandhana' special</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img22.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Rawalpindi express' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img2.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>World Test Championship 2021 quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img8.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Rawalpindi express' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img6.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>World Test Championship 2021 quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img5.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'mighty Murali' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img7.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Smriti Mandhana' special</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img2.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Rawalpindi express' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img4.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>World Test Championship 2021 quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img18.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Rawalpindi express' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img2.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>World Test Championship 2021 quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img4.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'mighty Murali' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img6.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Smriti Mandhana' special</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img7.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Rawalpindi express' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img11.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>World Test Championship 2021 quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img6.png')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>The 'Rawalpindi express' quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}
                    onPress={()=> navigation.navigate('QuizQuestion')}>
                        <Image
                            style={styles.quiz_img}
                            source={require('../assets/images/img7.jpg')}
                        />
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>World Test Championship 2021 quiz</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Quiz;
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