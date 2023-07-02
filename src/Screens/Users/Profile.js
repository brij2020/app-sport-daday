import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Colors } from '../../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const { height, width } = Dimensions.get('window');

const Profile = props => {
    const navigation = props.navigation;
    const DirectorsRefRBSheet = useRef();
    const [update, setUpdate] = useState(false);


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
            {/* top nav tab  */}
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: '4%',
                    // paddingVertical: height * 0.02,
                    // backgroundColor: Colors.PRIMARY_2,
                    height: height * 0.067,
                    justifyContent: 'space-between'
                }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ justifyContent: 'center' }}
                >
                    <MaterialIcons
                        name='keyboard-backspace'
                        size={30}
                        color={Colors.PRIMARY_2}
                    />
                </TouchableOpacity>
                <Text style={{
                    color: Colors.PRIMARY_2,
                    fontSize: 18,
                    fontWeight: '500',
                    // left: width * 0.05,
                    alignSelf: 'center'
                }}>Profile</Text>
                <TouchableOpacity
                    style={{ justifyContent: 'center' }}
                    onPress={() => navigation.navigate('Notifications')}>
                    <MaterialCommunityIcons
                        name='bell'
                        size={26}
                        color={Colors.PRIMARY_2}
                    />
                </TouchableOpacity>
            </View>

            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.LIGHT_SKY, Colors.PRIMARY_2]}
                style={{
                    width: '97%',
                    height: '24.5%',
                    alignSelf: 'center',
                    borderRadius: 12,
                }}>

                <View style={{
                    justifyContent: 'center',
                    flex: 1,
                    alignSelf: 'center'
                }}>
                    <EvilIcons
                        name='user'
                        size={115}
                        color={
                            Colors.LIGHT_SKY}
                        style={{ alignSelf: 'center' }}
                    />
                    <Text style={{
                        fontSize: 22,
                        color: Colors.PRIMARY_2,
                        textAlign: 'center',
                        paddingTop: height * 0.01
                    }}>Hello <Text
                        style={{
                            fontWeight: '500', color: '#fff'
                        }}>Buddy</Text></Text>
                </View>
            </LinearGradient>

            <View style={styles.premium_card_unloack}>
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>SPORTSDADDY PLUS</Text>
                <Text style={{ color: '#fff', fontSize: 15, paddingVertical: height * 0.005 }}>No Intrusive Ads, Premium Editorials & SportsDaddy Originals</Text>
                <TouchableOpacity style={styles.unlock_btn}
                    onPress={() => navigation.navigate('GetPremium')}>
                    <Text style={styles.btn_text}>Unlock now</Text>
                </TouchableOpacity>
            </View>

            <View style={{ paddingHorizontal: width * 0.04, marginTop: height * 0.004 }}>

                <View style={{ marginTop: height * 0.009 }}>
                    <Text style={styles.label_type}>Username</Text>
                    <View style={styles.info_card}>
                        <Text style={styles.label_txt}>buddy876807</Text>
                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() => setUpdate(true)}>
                            <Text style={styles.edit}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: height * 0.009 }}>
                    <Text style={styles.label_type}>Mobile</Text>
                    <View style={styles.info_card}>
                        <Text style={styles.label_txt}>9878656712</Text>
                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() => setUpdate(true)}>
                            <Text style={styles.edit}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: height * 0.009 }}>
                    <Text style={styles.label_type}>Email</Text>
                    <View style={styles.info_card}>
                        <Text style={styles.label_txt}>buddy8768@gmail.com</Text>
                        <AntDesign
                            name='checkcircle'
                            size={22}
                            color={'#007500'}
                            style={{ alignSelf: 'center' }}
                        />
                    </View>
                </View>

                {update == true ?
                    <TouchableOpacity style={styles.Primary_button}
                        onPress={() => setUpdate(false)}>
                        <Text style={[styles.btn_text, { fontSize: 13, fontWeight: '500' }]}>SAVE</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>

        </SafeAreaView>
    );
};
export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Primary_button: {
        height: height * 0.065,
        backgroundColor: Colors.PRIMARY_3,
        alignSelf: 'center',
        borderRadius: 4,
        paddingHorizontal: width * 0.09,
        justifyContent: 'center',
        marginTop: height * 0.02,
        width: '100%',
        opacity: 0.9
    },
    label_type: { color: 'gray', fontSize: 14, fontWeight: '500' },
    label_txt: { color: '#000', fontSize: 14, fontWeight: '500', alignSelf: 'center' },
    edit: { color: '#6495ED', fontSize: 14, fontWeight: '500' },
    more_sections: {
        backgroundColor: Colors.LIGHT_SKY,
        flexDirection: 'row',
        height: height * 0.075,
        paddingHorizontal: width * 0.03,
        marginVertical: height * 0.0009
    },
    premium_card_unloack: {
        width: '96.8%',
        backgroundColor: Colors.PRIMARY_2,
        elevation: 10,
        alignSelf: 'center',
        marginTop: height * 0.015,
        borderRadius: 12,
        padding: 16,
    },
    btn_text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
    },
    unlock_btn: {
        height: height * 0.058,
        backgroundColor: Colors.PRIMARY_3,
        borderRadius: 30,
        width: '52%',
        paddingHorizontal: width * 0.09,
        justifyContent: 'center',
        marginTop: height * 0.014
    },
    info_card: {
        width: '100%',
        height: height * 0.065,
        backgroundColor: '#fff',
        elevation: 6,
        alignSelf: 'center',
        marginVertical: height * 0.006,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: width * 0.04,
        borderRadius: 4
    },
    more_text: {
        color: '#000',
        fontSize: 15,
        alignSelf: 'center',
        paddingHorizontal: '3%'
    },

    options_icon: {
        alignSelf: 'center',
        marginRight: width * 0.035
    }
});

// -webkit-animation: border-animation 4s linear infinite;
// animation: border-animation 4s linear infinite;
// background: linear-gradient(315deg,#fff,red,#000);
// content: "";
// inset: -5px 70px;
// position: absolute;
// transition: .5s;