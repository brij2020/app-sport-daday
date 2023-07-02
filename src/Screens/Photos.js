import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import { Colors } from '../theme/color';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
const { height, width } = Dimensions.get('window');
import { Modal, Portal, Button, Provider } from 'react-native-paper';
const Photos = props => {

    const images = [
        {
            url:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
        },
        {
            url:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        },
    ];
    const navigation = props.navigation;
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const kk = 'http://52.205.83.44:1337/uploads/wp7419423_sri_lanka_national_cricket_team_wallpapers_eb4029be09.jpg';

    const RowCard = () => {
        return (
            <>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <TouchableOpacity onPress={showModal}
                        style={{ height: height * 0.17, width: "33.33%" }}>
                        {/* <FastImage
                        style={{ width: "100%", height: "100%" }}
                        source={{
                            uri: 'https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg',
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    /> */}
                        <Image
                            style={styles.quiz_img}
                            source={{ uri: kk }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showModal}
                        style={{ height: height * 0.17, width: "33.33%" }}>
                        <Image
                            style={styles.quiz_img}
                            source={{ uri: kk }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showModal}
                        style={{ height: height * 0.17, width: "33.33%" }}>
                        <Image
                            style={styles.quiz_img}
                            source={{ uri: kk }}
                        />
                    </TouchableOpacity>
                </View>
            </>
        )
    }
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
                    }}>Photos</Text>
                </View>

            </View>

            <ScrollView>
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
            </ScrollView>


        </SafeAreaView>
    );
};
export default Photos;
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
    },
    quiz_img: {
        height: '100%',
        width: '100%',
        borderColor: '#fff',
        borderWidth: 2
    },
});