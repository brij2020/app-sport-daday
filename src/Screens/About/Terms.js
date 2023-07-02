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

const Terms = props => {
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
                    }}>Tearms and Conditions</Text>
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
                            marginVertical: height * 0.03,
                        }}
                    />

                    <View>
                        <Text style={styles.more_text}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                            of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
                            line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                            of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
                            line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                            of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
                            line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </Text>
                    </View>

                </LinearGradient>
            </ScrollView>

        </SafeAreaView>
    );
};
export default Terms;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_2,
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