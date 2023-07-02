// import React, { useState, useEffect, useRef } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     SafeAreaView,
//     StyleSheet,
//     StatusBar,
//     Animated,
//     TextInput,
//     TouchableOpacity,
//     Dimensions,
//     ScrollView,
// } from 'react-native';
// import { Colors } from '../../theme/color';
// import { Dropdown } from 'react-native-element-dropdown';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

// const { width, height } = Dimensions.get('window');

// const Otp = props => {
//     const navigation = props.navigation;
//     const [value, setValue] = useState("");

//     const LeftAnimate = new Animated.ValueXY({ x: -220, y: 200 })
//     const RightAnimate = new Animated.ValueXY({ x: -220, y: 200 })
//     const fadeAnimate = useRef(new Animated.Value(0)).current


//     useEffect(() => {
//         Animated.timing(
//             LeftAnimate,
//             {
//                 toValue: { x: 0, y: 0 },
//                 duration: 1000,
//                 useNativeDriver: true
//             }
//         ).start();

//         Animated.timing(
//             RightAnimate,
//             {
//                 toValue: { x: 10, y: 30 },
//                 duration: 1000,
//                 useNativeDriver: true
//             }
//         ).start();
//         Animated.timing(
//             fadeAnimate,
//             {
//                 toValue: 1,
//                 duration: 2000,
//                 useNativeDriver: true
//             }
//         ).start();
//     })


//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar backgroundColor={Colors.PRIMARY_1} barStyle="dark-content" />

//             <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 padding: height * 0.025,
//             }}>
//                 <TouchableOpacity
//                     onPress={() => navigation.goBack()}>
//                     <MaterialIcons
//                         name='keyboard-backspace'
//                         size={23}
//                         color={"#000"}
//                         style={{
//                             margin: height * 0.005
//                         }}
//                     />
//                 </TouchableOpacity>
//             </View>

//            
//         </SafeAreaView >
//     );
//     // }
// };
// export default Otp;
// const styles = StyleSheet.create({
// 
// });
import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Animated,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import { Colors } from '../../theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
import Lottie from 'lottie-react-native';
import axios from 'axios';
import { apiURL } from '../../util/Api';
const Otp = props => {
    const navigation = props.navigation;
    const LeftAnimate = new Animated.ValueXY({ x: -220, y: 200 })
    const RightAnimate = new Animated.ValueXY({ x: -220, y: 200 })
    const fadeAnimate = useRef(new Animated.Value(0)).current
    const [loader, setLoader] = useState(false);

    const VerifyOtpApi = async () => {
        setLoader(true)
        try {
            setLoader(false)
            const data = await axios.post(`${apiURL.otp_verify_api}`,
                {
                    "email": email,
                    "otp": password
                })
            console.log("kkkkk=====", data.data.response.statusCode);

            if (data.data.response.statusCode == 200) {
                SuccessfullLoginToast()
                navigation.navigate('Home')
            } else if (data.data.response.statusCode == 401) {
                alert('jshdjsg')
            }
        }
        catch (err) {
            setLoader(false)
            console.log("error%%%", err);
            if (err == 'AxiosError: Request failed wsssith status code 400') {
                EmptyCredentialsErrToast()
            } else if (err == 'AxiosError: Request failed with status code 401') {
                CorrectCredentialErrToast()
            } else if (err == 'AxiosError: Network Error') {
                InternetErrToast()
            } else {
                somethingErrToast()
            }
        }
    }

    useEffect(() => {
        Animated.timing(
            LeftAnimate,
            {
                toValue: { x: 0, y: 0 },
                duration: 1000,
                useNativeDriver: true
            }
        ).start();

        Animated.timing(
            RightAnimate,
            {
                toValue: { x: 10, y: 30 },
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(
            fadeAnimate,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }
        ).start();
    })

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="dark-content" />
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.LIGHT_SKY, Colors.PRIMARY_2]}
                style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                    paddingVertical: height * 0.02,
                    marginBottom: height * 0.015,
                    paddingHorizontal: width * 0.04
                }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <MaterialIcons
                            name='keyboard-backspace'
                            size={23}
                            color={"#000"}
                            style={{
                                padding: width * 0.03,
                                paddingBottom: height * 0.03
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{}}>
                    <Animated.View style={{
                        paddingHorizontal: width * 0.026,
                        marginTop: height * 0.05,
                        transform: [
                            { translateX: LeftAnimate.x },
                        ]
                    }}>
                        <View
                            style={{
                                height: height * 0.16,
                                width: height * 0.16,
                                backgroundColor: Colors.PRIMARY_2,
                                borderRadius: 80,
                                marginTop: height * 0.05,
                                justifyContent: 'center'
                            }}>
                            <MaterialIcons
                                name='mobile-friendly'
                                size={50}
                                color={Colors.LIGHT_SKY}
                                style={{
                                    textAlign: 'center',
                                }}
                            />
                        </View>

                        <Text style={{
                            color: Colors.LIGHT_SKY,
                            fontWeight: 'bold',
                            fontSize: 27,
                            marginTop: height * 0.024
                        }}><Text style={{ color: Colors.PRIMARY_2 }}>V</Text>erification Code</Text>
                        <Text style={{
                            color: Colors.LIGHT_SKY,
                            fontSize: 15,
                            marginTop: height * 0.005,
                            fontWeight: '500',
                        }}>Please enter verification code sent to your mobile.</Text>

                        <View style={styles.textinput_view}>
                            <TextInput
                                style={styles.textinput}
                                placeholder="*"
                                placeholderTextColor="gray"
                                keyboardType='phone-pad'
                                maxLength={1}
                                onChangeText={email => setEmail(email)}
                            />
                            <TextInput
                                style={styles.textinput}
                                placeholder="*"
                                placeholderTextColor="gray"
                                keyboardType='phone-pad'
                                maxLength={1}
                                onChangeText={email => setEmail(email)}
                            />
                            <TextInput
                                style={styles.textinput}
                                placeholder="*"
                                placeholderTextColor="gray"
                                keyboardType='phone-pad'
                                maxLength={1}
                                onChangeText={email => setEmail(email)}
                            />
                            <TextInput
                                style={styles.textinput}
                                placeholder="*"
                                placeholderTextColor="gray"
                                keyboardType='phone-pad'
                                maxLength={1}
                                onChangeText={email => setEmail(email)}
                            />
                            
                        </View>
                        <TouchableOpacity
                            style={{ justifyContent: 'center' }}>
                            <Text style={{
                                position: 'absolute',
                                color: Colors.PRIMARY_2,
                                right: width * 0.04,
                                fontSize: 12,
                                fontWeight: 'bold'
                            }}>RESEND OTP</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.primary_button}
                            onPress={VerifyOtpApi}>
                            <Text style={styles.primary_btn_text}>Verify</Text>
                        </TouchableOpacity>
                    </Animated.View>

                </ScrollView>

            </LinearGradient>

            {loader == true ?
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        position: 'absolute', top: 0, height: '100%', width: '100%',
                        justifyContent: 'center',
                        flex: 1,
                    }}>

                    <Lottie source={require('../../assets/animation/loader3.json')}
                        autoPlay loop
                        style={{
                            height: height * 0.25,
                            width: height * 0.25,
                            alignSelf: 'center'
                        }}
                    />

                </View>
                : null}
        </SafeAreaView >
    );
    // }
};
export default Otp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
    },
    textinput: {
        color: 'black',
        fontWeight: '400',
        fontSize: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 10,
        width: height * 0.0895,
        height: height * 0.0895,
        textAlign: 'center',
        marginHorizontal: width * 0.021,
        marginBottom: height * 0.03
    },
    textinput_view: {
        flexDirection: "row",
        marginTop: height * 0.08,
        alignSelf: 'center'
    },
    main_text: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 24,
        color: Colors.MAIN_TEXT,
    },
    login_section: {
        width: '92%',
        backgroundColor: Colors.PRIMARY_2,
        borderRadius: 10,
        paddingVertical: height * 0.05,
        alignSelf: 'center',
        marginTop: height * 0.03,

    },
    placeholderStyle: { color: 'gray' },
    selectedTextStyle: { color: 'gray' },
    inputSearchStyle: { color: 'gray' },
    primary_button: {
        width: '100%',
        backgroundColor: Colors.PRIMARY_2,
        alignSelf: 'center',
        borderRadius: 8,
        height: height * 0.07,
        marginTop: height * 0.055,
        elevation: 10,
        justifyContent: 'center',
        marginBottom: height * 0.03
    },
    primary_btn_text: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 13,
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: 0.8
    },
});
