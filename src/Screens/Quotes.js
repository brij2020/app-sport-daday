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
import RBSheet from "react-native-raw-bottom-sheet";
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');

const Quotes = props => {
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
                    }}>Quotes</Text>
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

                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>

                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>

                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>

                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>

                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                    <View style={{ padding: height * 0.02, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's"</Text>
                        <Text style={{ color: '#000000', fontSize: 12, paddingTop: height * 0.01 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's</Text>
                    </View>
                </LinearGradient>
            </ScrollView>


        </SafeAreaView>
    );
};
export default Quotes;
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
        marginTop: height * 0.05
    },
    options_icon: {
        alignSelf: 'center',
        marginRight: width * 0.035
    },
    rbs_label: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 5,
        width: '100%',
        padding: 10,
        marginVertical: height * 0.0007,
        paddingHorizontal: width * 0.03
    },
    rbs_left_text: { width: '30%', fontSize: 13, color: 'gray' },
    rbs_right_text: { width: '70%', fontSize: 13, color: 'black' },
    rbs_first_cell: {
        width: '40%', fontSize: 13, color: 'gray'
    },
    rbs_row: {
        width: '20%', fontSize: 13, color: 'black'
    }

});