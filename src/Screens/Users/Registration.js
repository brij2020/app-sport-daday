import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Animated,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal
} from 'react-native';
import { Colors } from '../../theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { apiURL } from '../../util/Api';
const { width, height } = Dimensions.get('window');
const eyeClose = <Entypo name="eye" size={22} color={'gray'} />;
const eyeOpen = <Entypo name="eye-with-line" size={22} color={'gray'} />;
import axios from 'axios';
import { InternetErrToast, UserAlreadyExistToast, ValidEmailToast, somethingErrToast, SuccessfullLoginToast } from '../../components/Toast';
import Lottie from 'lottie-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Registration = props => {
  const navigation = props.navigation;
  const [toasterModal, settoasterModal] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [loader, setLoader] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const LeftAnimate = new Animated.ValueXY({ x: -220, y: 200 })
  const RightAnimate = new Animated.ValueXY({ x: -220, y: 200 })
  const fadeAnimate = useRef(new Animated.Value(0)).current

  const RegistrationApi = async () => {
    setLoader(true)
    if (!username || !email || !password) {
      setLoader(false)
      username == "" ? (
        settoasterModal(true),
        seterrorMsg("Please enter username !"),
        setTimeout(() => settoasterModal(false), 2200))
        :
        email == "" ? (
          settoasterModal(true),
          seterrorMsg("Please enter mail id !"),
          setTimeout(() => settoasterModal(false), 2200))
          :
          password == "" ? (
            settoasterModal(true),
            seterrorMsg("Please enter Password !"),
            setTimeout(() => settoasterModal(false), 2200))
            : null
    }
    else {
      try {
        setLoader(false)
        const data = await axios.post(`${apiURL.signup_api}`,
          {
            "username": username,
            "email": email,
            "password": password
          })
        console.log("kkkkk=====", data.data.response.statusCode);

        if (data.data.response.statusCode == 200) {
          setSuccessModal(true)
        }
      }
      catch (err) {
        setLoader(false)
        console.log("error%%%", err);
        if (err == 'AxiosError: Request failed with status code 400') {
          UserAlreadyExistToast()
        } else if (err == 'AxiosError: Request failed with status code 500') {
          ValidEmailToast()
        } else if (err == 'AxiosError: Network Error') {
          InternetErrToast()
        }
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
            flexDirection: 'row',
            marginHorizontal: width * 0.026,
            // opacity: fadeAnimate
          }}>
            <TouchableOpacity
              style={{
                borderColor: Colors.MUTE_ICON,
                borderRadius: 30,
                borderWidth: 1.5,
                padding: 10,
                elevation: 10,
                backgroundColor: Colors.LIGHT_SKY,
                width: width * 0.25,
                margin: width * 0.005
              }}
              onPress={() => navigation.navigate('Login')}>

              <Text
                style={{
                  color: Colors.MUTE_ICON,
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: Colors.PRIMARY_2,
                borderRadius: 30,
                borderWidth: 2,
                padding: 10,
                elevation: 10,
                backgroundColor: Colors.LIGHT_SKY,
                width: width * 0.25,
                margin: width * 0.005
              }}
              onPress={() => navigation.navigate('Registration')}>
              <Text
                style={{
                  color: Colors.PRIMARY_2,
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>Sign up</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{
            marginHorizontal: width * 0.026,
            marginTop: height * 0.085,
            transform: [
              // { translateX: LeftAnimate.x },
            ]
          }}>
            <View
              style={{
                height: height * 0.14,
                width: height * 0.14,
                backgroundColor: 'black',
                borderRadius: 80,
                padding: 10
              }}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{
                  height: height * 0.11,
                  width: height * 0.11,
                  resizeMode: 'contain',
                  alignSelf: 'center',

                }}
              />
            </View>

            <Text style={{
              color: Colors.LIGHT_SKY,
              fontWeight: 'bold',
              fontSize: 27,
              marginTop: height * 0.02
            }}><Text style={{ color: Colors.PRIMARY_2 }}>H</Text>ey! Buddy</Text>
            <Text style={{
              color: Colors.PRIMARY_2,
              fontSize: 16,
              marginTop: height * 0.005,
              fontWeight: '500',
            }}>Sign up to Continue</Text>

            <View style={{
              borderRadius: 8,
              width: '100%',
              backgroundColor: '#fff',
              marginTop: height * 0.035
            }}>
              <View style={[styles.textinput_view, { borderTopRightRadius: 8, borderTopLeftRadius: 8 }]}>
                <View
                  style={{
                    backgroundColor: Colors.PRIMARY_2,
                    height: '100%',
                    width: width * 0.15,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 8
                  }}>
                  <Feather
                    name='user'
                    size={21}
                    color={Colors.LIGHT_SKY}
                    style={{
                      textAlign: 'center',
                    }}
                  />
                </View>
                <TextInput
                  style={[styles.textinput, { borderTopRightRadius: 8, width: '77%' }]}
                  placeholder="Username"
                  placeholderTextColor={Colors.PLACEHOLDER}
                  value={username}
                  onChangeText={username => setUsername(username)}
                />
              </View>

              <View style={styles.textinput_view}>
                <View
                  style={{
                    backgroundColor: Colors.PRIMARY_2,
                    height: '100%',
                    width: width * 0.15,
                    alignSelf: 'center',
                    justifyContent: 'center'
                  }}>
                  <Feather
                    // name='phone'
                    name='mail'
                    size={21}
                    color={Colors.LIGHT_SKY}
                    style={{
                      textAlign: 'center',
                    }}
                  />
                </View>
                <TextInput
                  style={[styles.textinput, { borderTopColor: Colors.LIGHT_BG, borderTopWidth: 1, width: '77%' }]}
                  placeholder="Mail Id"
                  placeholderTextColor={Colors.PLACEHOLDER}
                  keyboardType='email-address'
                  value={email}
                  onChangeText={email => setEmail(email)}
                />
                {/* <TouchableOpacity
                  style={{ justifyContent: 'center' }}>
                  <Text style={{
                    position: 'absolute',
                    color: Colors.PRIMARY_2,
                    right: width * 0.04,
                    fontSize: 14,
                    fontWeight: '500'
                  }}>sent otp</Text>
                </TouchableOpacity> */}
              </View>

              <View style={[styles.textinput_view, {
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
              }]}>
                <View
                  style={{
                    backgroundColor: Colors.PRIMARY_2,
                    height: '100%',
                    width: width * 0.15,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    borderBottomLeftRadius: 8,

                  }}>
                  <Feather
                    name='key'
                    size={21}
                    color={Colors.LIGHT_SKY}
                    style={{
                      textAlign: 'center',
                    }}
                  />
                </View>
                <TextInput
                  style={[styles.textinput, { borderTopColor: Colors.LIGHT_BG, borderTopWidth: 1, width: '65%' }]}
                  placeholder="Password"
                  placeholderTextColor={Colors.PLACEHOLDER}
                  keyboardType='default'
                  secureTextEntry={passwordVisible}
                  value={password}
                  onChangeText={password => setPassword(password)}
                />

                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    color: Colors.PRIMARY_2,
                    right: width * 0.04,
                    fontSize: 14,
                    fontWeight: '500',
                    alignSelf: 'center'
                  }}
                  onPress={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? eyeOpen : eyeClose}
                </TouchableOpacity>

              </View>
            </View>

            <TouchableOpacity
              style={styles.primary_button}
              onPress={RegistrationApi}>
              <Text style={styles.primary_btn_text}>Sign up</Text>
            </TouchableOpacity>
          </Animated.View>

        </ScrollView>
      </LinearGradient>

      {/* Toaster  */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={toasterModal}
        onRequestClose={() => {
          settoasterModal(!toasterModal);
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}>
          <View style={{ position: 'absolute', bottom: height * 0.08, alignSelf: 'center' }}>
            <View style={styles.alertModalView}>
              <Text style={styles.alertModalText}>{errorMsg}</Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* Toaster  */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={successModal}
        onRequestClose={() => {
          setSuccessModal(!successModal);
        }}
      >
        <View style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          position: 'absolute', top: 0, height: '100%', width: '100%',
          justifyContent: 'center',
          flex: 1, paddingHorizontal: width * 0.045
        }}>
          <View style={styles.success_modal}>
            <View style={[styles.success_modal_innerpart]}>
              <AntDesign name="checkcircleo" size={80} color={'#fff'} style={{ alignSelf: 'center' }} />
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, paddingTop: 6 }}>Success</Text>
            </View>
            <View style={styles.success_modal_innerpart2}>
              <Text style={[styles.alertModalText, { color: Colors.PRIMARY_2 }]}>Congratulations, your account has been successfully created.
                please Continue Login</Text>
              <TouchableOpacity
                onPress={() => { setSuccessModal(false); navigation.navigate('Login') }}
                style={[styles.primary_button, { backgroundColor: Colors.PRIMARY_2, width: '60%' }]}>
                <Text style={[styles.primary_btn_text, { color: '#fff' }]}>Continue</Text>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>
        </View>
      </Modal>

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
export default Registration;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_SKY,
  },
  textinput: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: width * 0.021,
    letterSpacing: 0.5
  },
  success_modal: {
    height: height * 0.5,
    width: '100%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 8
  },
  success_modal_innerpart: {
    height: height * 0.25,
    width: '100%',
    backgroundColor: Colors.PRIMARY_2,
    alignSelf: 'center',
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    justifyContent: 'center'
  },
  success_modal_innerpart2: {
    height: height * 0.25,
    width: '100%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: height * 0.03
  },

  textinput_view: {
    flexDirection: "row",
    backgroundColor: '#fff',
    width: '100%',
    height: height * 0.085,
    elevation: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
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
  alertModalView: {
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: width * 0.1,
    justifyContent: 'center',
    width: '100%',
    paddingVertical: height * 0.013
  },
  alertModalText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
    color: '#fff',
  },
  placeholderStyle: { color: 'gray' },
  selectedTextStyle: { color: 'gray' },
  inputSearchStyle: { color: 'gray' },
  primary_button: {
    width: '100%',
    height: height * 0.07,
    backgroundColor: Colors.PRIMARY_2,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: height * 0.03,
    elevation: 10,
    marginBottom: 20,
    justifyContent: 'center'
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

