import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    Linking,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Animated,
} from 'react-native';
import { ScrollView, State } from 'react-native-gesture-handler';
import { Colors } from '../../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
const { height, width } = Dimensions.get('window');

const AboutApp = props => {
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
                        size={30}
                        color={Colors.LIGHT_SKY}
                    />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{
                        color: Colors.LIGHT_SKY,
                        fontSize: 19,
                        fontWeight: '400',
                        left: width * 0.05,
                    }}>About Sports Daddy</Text>
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
                    paddingVertical: height * 0.01,
                    paddingBottom: height * 0.085,
                }}>

                <Image
                    source={require('../../assets/images/logo.png')}
                    style={{
                        height: height * 0.12,
                        width: height * 0.12,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        marginVertical: height * 0.04,
                    }}
                />

                <View style={styles.group}>
                    <TouchableOpacity style={styles.more_sections}
                        onPress={() => DirectorsRefRBSheet.current.open()}
                    >
                        <AntDesign
                            name='infocirlceo'
                            size={22}
                            color={"#000000"}
                            style={styles.options_icon}
                        />
                        <Text style={styles.more_text}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.more_sections}
                        onPress={() => navigation.navigate('PrivacyPolicy')}>
                        <MaterialCommunityIcons
                            name='lock'
                            size={22}
                            color={"#000000"}
                            style={styles.options_icon}
                        />
                        <Text style={styles.more_text}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.more_sections}>
                        <MaterialCommunityIcons
                            name='copyright'
                            size={22}
                            color={"#000000"}
                            style={styles.options_icon}
                        />
                        <Text style={styles.more_text}>Copyright</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.more_sections}
                        onPress={() => navigation.navigate('Terms')}>
                        <MaterialCommunityIcons
                            name='file-document-edit-outline'
                            size={22}
                            color={"#000000"}
                            style={styles.options_icon}
                        />
                        <Text style={styles.more_text}>Terms of Use</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>

            <RBSheet
                ref={DirectorsRefRBSheet}
                closeOnDragDown={false}
                closeOnPressMask={false}
                height={700}
                openDuration={950}
                customStyles={{
                    wrapper: {
                        backgroundColor: ' rgba(0,0,0,0.6)',
                    },
                    draggableIcon: {
                        backgroundColor: Colors.PRIMARY_2,
                        width: width * 0.115,
                        height: height * 0.00838
                    },
                    container: {
                        backgroundColor: '#fff',
                        borderTopStartRadius: 20,
                        borderTopEndRadius: 20,
                    }
                }}
            >
                <View style={{ padding: 20 }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', marginBottom: height * 0.01
                    }}>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>About Us</Text>
                        <TouchableOpacity onPress={() => DirectorsRefRBSheet.current.close()}>
                            <Feather
                                name='chevrons-down'
                                size={28}
                                color={Colors.PRIMARY_2}
                                style={{
                                    alignSelf: 'flex-end',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ marginTop: height * 0.01 }}>
                        <Text style={{ color: 'gray', fontSize: 15, textAlign: 'justify' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Text>
                    </ScrollView>
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};
export default AboutApp;
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
    }
});