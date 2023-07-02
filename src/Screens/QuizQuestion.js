import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Modal,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
import { Colors } from '../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');
import { Dropdown } from 'react-native-element-dropdown';

const Data = [
    {
        label: 'Basket ball',
        value: 1
    },
    {
        label: 'Tennis',
        value: 2
    },
    {
        label: 'Cricket',
        value: 3
    },
    {
        label: 'Football',
        value: 4
    },
    {
        label: 'Badminton',
        value: 5
    },
    {
        label: 'Rugby',
        value: 6
    },
    {
        label: 'Soccer',
        value: 6
    }
]

const QuizQuestion = props => {
    const navigation = props.navigation;
    const [enquiryModal, setEnquiryModal] = useState(true);
    const [interestType, setInterestType] = useState("");


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

                <View style={{ paddingHorizontal: '3%', marginTop: height * 0.08 }}>
                    <Text style={styles.title}>The first official international match of cricket was held in 1844 between...</Text>
                    <View style={{ marginTop: height * 0.03 }}>
                        <TouchableOpacity style={styles.quiz_opt}>
                            <Text style={styles.quiz_opt_text}>England & Australia</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quiz_opt}>
                            <Text style={styles.quiz_opt_text}>India & Pakistan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quiz_opt}>
                            <Text style={styles.quiz_opt_text}>USA & Canada</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quiz_opt}>
                            <Text style={styles.quiz_opt_text}>England & India</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.quiz_btn}>
                        <Text style={styles.quiz_btn_text}>Next</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>

            <Modal
                visible={enquiryModal}
                onDismiss={() => setEnquiryModal(false)}
                transparent={true}
                animationType={'slide'}
            >
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={styles.modal}>

                        <Text
                            style={{
                                fontSize: 20,
                                color: '#fff',
                                textAlign: 'center',
                                width: '85%',
                                alignSelf: 'center',
                                fontWeight: '500',
                                marginVertical: height * 0.02
                            }}>
                            Enquiry Form
                        </Text>

                        <Image
                            style={{
                                width: height * 0.11,
                                height: height * 0.11,
                                resizeMode: 'contain',
                                alignSelf: 'center'
                            }}
                            source={require('../assets/images/logo.png')}
                        />
                        <ScrollView>
                            <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                                <Text style={styles.label_type}>Name</Text>
                                <TextInput
                                    style={styles.info_card}
                                    placeholder="Enter your name"
                                    placeholderTextColor="gray"
                                    keyboardType='default'
                                //   onChangeText={Login => setLogin(Login)}
                                />
                            </View>

                            <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                                <Text style={styles.label_type}>Mobile</Text>
                                <TextInput
                                    style={styles.info_card}
                                    placeholder="Enter your mobile no."
                                    placeholderTextColor="gray"
                                    keyboardType='phone-pad'
                                    maxLength={10}
                                />
                            </View>

                            <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                                <Text style={styles.label_type}>Email</Text>
                                <TextInput
                                    style={styles.info_card}
                                    placeholder="Enter your e-mail"
                                    placeholderTextColor="gray"
                                    keyboardType='email-address'
                                />
                            </View>

                            <View style={{ marginTop: height * 0.013, width: '88%', alignSelf: 'center' }}>
                                <Text style={styles.label_type}>Your Interest for Sportsdaddy</Text>
                                <Dropdown
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    labelStyle={styles.labelStyle}
                                    itemTextStyle={styles.itemTextStyle}
                                    iconStyle={styles.iconStyle}
                                    style={styles.info_card}
                                    data={Data}
                                    search={false}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select"
                                    searchPlaceholder="Search..."
                                    value={interestType}
                                    onChange={interestType => {
                                        setInterestType(interestType);
                                    }}
                                />
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginTop: height * 0.1
                            }}>
                                <TouchableOpacity style={[styles.modalBtn, { backgroundColor: '#000' }]} onPress={() => setEnquiryModal(false)}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: Colors.White,
                                            fontWeight: '500',
                                            textAlign: 'center',
                                        }}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalBtn}
                                    onPress={() => setEnquiryModal(false)}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: Colors.White,
                                            fontWeight: '500',
                                            textAlign: 'center',
                                        }}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>

            </Modal>
        </SafeAreaView>
    );
};
export default QuizQuestion;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
        height: '100%'
    },
    info_card: {
        width: '100%',
        height: height * 0.065,
        backgroundColor: '#fff',
        elevation: 6,
        alignSelf: 'center',
        marginVertical: height * 0.006,
        paddingHorizontal: width * 0.03,
        borderRadius: 4,
        color: '#000', fontSize: 14, fontWeight: '500',
    },
    label_type: { color: '#fff', fontSize: 14, fontWeight: '500' },
    modalBtn: {
        width: '42%',
        backgroundColor: Colors.PRIMARY_3,
        alignSelf: 'center',
        borderRadius: 8,
        height: height * 0.068,
        justifyContent: 'center',
        // marginTop: height * 0.03,
        elevation: 10,
        margin: 4
    },
    modal: {
        backgroundColor: Colors.PRIMARY_2,
        margin: 10,
        borderRadius: 8,
        height: '90%'
    },
    title: { color: 'black', fontWeight: '500', fontSize: 18, },
    quiz_opt: {
        height: height * 0.065, width: '100%', backgroundColor: Colors.PRIMARY_2,
        borderRadius: 10, justifyContent: 'center', marginTop: height * 0.02
    },
    quiz_opt_text: { color: '#fff', fontSize: 15, paddingLeft: height * 0.022, fontWeight: '500' },
    quiz_card: { marginTop: height * 0.015, backgroundColor: '#fff' },
    quiz_btn: {
        height: height * 0.065, width: '40%', backgroundColor: Colors.PRIMARY_1,
        borderRadius: 10, justifyContent: 'center', alignSelf: 'center', marginTop: height * 0.08
    },
    quiz_btn_text: {
        color: '#fff', fontSize: 15, fontWeight: '500', textAlign: 'center'
    },
    placeholderStyle: {
        color: 'gray',
        fontSize: 14.5,
    },
    selectedTextStyle: {
        color: 'black',
        fontSize: 14.5,
    },
    inputSearchStyle: {
        color: 'gray'
    },
    labelStyle: {
        fontSize: 14,
        color: 'gray'
    },
    itemTextStyle: {
        color: 'gray',
        fontSize: 14.5
    },
    iconStyle: {
        color: 'gray'
    },
});