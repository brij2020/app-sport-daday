import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { ScrollView, State } from 'react-native-gesture-handler';
import { Colors } from '../../../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import BasicTopBar from '../../../navigations/BasicTopBar';
const { height, width } = Dimensions.get('window');

const GetPremium = props => {
    const navigation = props.navigation;
    const DirectorsRefRBSheet = useRef();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
            {/* top nav tab  */}
            <BasicTopBar {...props} basicHeadingTxt={"Get Premium"} />

            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.LIGHT_SKY, Colors.PRIMARY_2]}
                style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                    paddingVertical: height * 0.01,
                    paddingBottom: height * 0.085,
                }}>

                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={{
                        height: height * 0.14,
                        width: height * 0.14,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        marginTop: height * 0.02,
                    }}
                />
                <Text style={{ color: '#A38A00', fontSize: 16, fontWeight: '500', textAlign: 'center' }}>PREMIUM</Text>
                <Text style={{ color: Colors.PRIMARY_1, fontSize: 15, textAlign: 'center', paddingTop: height * 0.01, paddingHorizontal: width * 0.1, fontWeight: '500' }}>Subscribe to premium and get access to our ads free plan and enjoy cricket without interruptions and Get Sportsdaddy Plus</Text>
                <View style={styles.group}>
                    <TouchableOpacity
                        style={[styles.premium_card, {
                            backgroundColor: '#A9A9A9',
                            marginBottom: height * 0.012
                        }]}>
                        <View style={styles.flex_row}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.existing_price}>₹ 199</Text>
                                <Text style={{ backgroundColor: '#A9A9A9', color: '#808080', borderColor: '#808080', borderWidth: 1, fontSize: 10, padding: 3, alignSelf: 'center', borderRadius: 15, paddingHorizontal: width * 0.03, fontWeight: '500', marginLeft: width * 0.025 }}>You Save 33%</Text>
                            </View>
                            <Text style={{ backgroundColor: '#808080', color: '#fff', fontSize: 10, padding: 4, alignSelf: 'center', borderRadius: 5, paddingHorizontal: width * 0.03 }}>SILVER</Text>
                        </View>
                        <View style={styles.flex_row}>
                            <Text style={styles.preType_txt}>₹ 99</Text>
                            <Text style={styles.preType_txt}>1 Month</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.premium_card, {
                            marginBottom: height * 0.012
                        }]}>
                        <View style={styles.flex_row}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.existing_price}>₹ 299</Text>
                                <Text style={{ backgroundColor: '#A38A00', color: '#756300', borderColor: '#756300', borderWidth: 1, fontSize: 10, padding: 3, alignSelf: 'center', borderRadius: 15, paddingHorizontal: width * 0.03, fontWeight: '500', marginLeft: width * 0.025 }}>You Save 50%</Text>
                            </View>
                            <Text style={{ backgroundColor: '#756300', color: '#fff', fontSize: 10, padding: 4, alignSelf: 'center', borderRadius: 5, paddingHorizontal: width * 0.03 }}>GOLD</Text>
                        </View>
                        <View style={styles.flex_row}>
                            <Text style={styles.preType_txt}>₹ 199</Text>
                            <Text style={styles.preType_txt}>3 Months</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.premium_card, { backgroundColor: '#189AB4' }]}>
                        <View style={styles.flex_row}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.existing_price}>₹ 1199</Text>
                                <Text style={{ backgroundColor: '#189AB4', color: '#05445E', borderColor: '#05445E', borderWidth: 1, fontSize: 10, padding: 3, alignSelf: 'center', borderRadius: 15, paddingHorizontal: width * 0.03, fontWeight: '500', marginLeft: width * 0.025 }}>You Save 50%</Text>
                            </View>
                            <Text style={{ backgroundColor: '#05445E', color: '#fff', fontSize: 10, padding: 4, alignSelf: 'center', borderRadius: 5, paddingHorizontal: width * 0.03 }}>PREMIUM</Text>
                        </View>
                        <View style={styles.flex_row}>
                            <Text style={styles.preType_txt}>₹ 599</Text>
                            <Text style={styles.preType_txt}>12 Months</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </SafeAreaView>
    );
};
export default GetPremium;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
        height: '100%'
    },
    more_sections: {
        backgroundColor: Colors.LIGHT_SKY,
        flexDirection: 'row',
        height: height * 0.075,
        paddingHorizontal: width * 0.03,
        marginVertical: height * 0.0009
    },
    more_text: {
        color: '#000000',
        fontSize: 15,
        alignSelf: 'center',
    },
    group: {
        marginBottom: height * 0.014,
        marginTop: height * 0.03,
        backgroundColor: '#fff',
        padding: height * 0.012,
        width: '97%',
        alignSelf: 'center',
        borderRadius: 8
    },
    options_icon: {
        alignSelf: 'center',
        marginRight: width * 0.035
    },
    preType_txt: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000'
    },
    flex_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        marginVertical: height * 0.002
    },
    existing_price: {
        color: Colors.PRIMARY_1,
        fontSize: 16,
        textDecorationLine: 'line-through',
        textDecorationColor: 'red',
    },
    premium_card: {
        width: '100%',
        height: height * 0.15,
        backgroundColor: '#A38A00',
        borderRadius: 8,
        alignSelf: 'center',
        justifyContent: 'center',
    }
});