import React, { useRef, useEffect} from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Animated,
    Text,
} from 'react-native';
import { Colors } from '../theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');

const BasicTopBar = props => {
    const navigation = props.navigation;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY_2} barStyle="light-content" />
            {/* top nav tab  */}
            <View
                style={styles.basic_topbar_contain}>
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
                        fontSize: 18,
                        fontWeight: '400',
                        left: width * 0.05,
                    }}>{props.basicHeadingTxt}</Text>
                </View>

            </View>
        </SafeAreaView>
    );
};
export default BasicTopBar;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LIGHT_SKY,
    },
    basic_topbar_contain: {
        flexDirection: 'row',
        paddingHorizontal: '4%',
        backgroundColor: Colors.PRIMARY_2,
        height: height * 0.068
    },

});