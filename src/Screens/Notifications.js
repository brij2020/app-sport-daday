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
    FlatList
} from 'react-native';
import { Colors } from '../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import BasicTopBar from '../navigations/BasicTopBar';
const { height, width } = Dimensions.get('window');

const Notifications = props => {
    const navigation = props.navigation;
    const DirectorsRefRBSheet = useRef();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
            {/* top nav tab  */}
            <BasicTopBar {...props} basicHeadingTxt={"Notifications"} />

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
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quiz_card}>
                        <View style={{
                            padding: height * 0.018,
                        }}>
                            <Text style={styles.title}>Lorem Ipsum</Text>
                            <Text style={styles.sub_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's</Text>
                        </View>
                    </TouchableOpacity>

                </LinearGradient>
            </ScrollView>


        </SafeAreaView>
    );
};
export default Notifications;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
        height: '100%'
    },
    title: { color: 'black', fontWeight: '500', fontSize: 14 },
    quiz_img: {
        width: width * 1,
        height: width * 0.55,
        alignSelf: 'center',
    },
    sub_title: { color: '#000000', fontSize: 12, paddingTop: height * 0.005 },
    quiz_card: { marginTop: height * 0.012, backgroundColor: '#fff' }
});