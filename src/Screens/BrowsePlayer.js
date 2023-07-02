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

const BrowsePlayer = props => {
    const navigation = props.navigation;
    const DirectorsRefRBSheet = useRef();

    const data = [
        {
            id: 1,
            name: "Aadil Raza",
            country: "Netherlands"
        },
        {
            id: 2,
            name: "Surya Kumar Yadav",
            country: "India"
        },
        {
            id: 3,
            name: "AB de Villiers",
            country: "South Africa"
        },
        {
            id: 4,
            name: "Shaheen Shah Afridi",
            country: "Pakistan"
        },
        {
            id: 5,
            name: "Babar Azam",
            country: "Pakistan"
        },
        {
            id: 6,
            name: "Chris Morris",
            country: "South Africa"
        },
        {
            id: 7,
            name: "Mohammad Rizwan",
            country: "Pakistan"
        },
        {
            id: 8,
            name: "KL Rahul",
            country: "India"
        },
        {
            id: 9,
            name: "Trentboult",
            country: "New Zeland"
        },
        {
            id: 10,
            name: "Kanewilliamson",
            country: "New Zeland"
        },
        {
            id: 11,
            name: "Rohit Sharma",
            country: "India"
        },
        {
            id: 12,
            name: "David Miller",
            country: "South Africa"
        },
        {
            id: 13,
            name: "David Warner",
            country: "Australia"
        },
        {
            id: 14,
            name: "Stevesmith",
            country: "Australia"
        },
        {
            id: 15,
            name: "Aaronfinch",
            country: "Australia"
        },
        {
            id: 16,
            name: "Chris gayle",
            country: "Jamaican"
        },
        {
            id: 17,
            name: "Andrerussell",
            country: "Jamaican"
        },
        {
            id: 18,
            name: "Sheldoncottrell",
            country: "Jamaican"
        },
        {
            id: 19,
            name: "Benstokes",
            country: "England"
        },
        {
            id: 20,
            name: "Josbuttler",
            country: "England"
        },

    ]

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => DirectorsRefRBSheet.current.open()}
            style={{
                // marginTop: height * 0.002,
            }} >
            <View style={{
                flexDirection: 'row',
                marginTop: height * 0.04,
                alignSelf: 'center'
            }}>
                <View style={{
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    elevation: 10,
                    width: '22%',
                    height: '100%',
                    marginRight: width * 0.035
                }}>
                    <Image
                        style={{
                            width: width * 0.3,
                            height: width * 0.3,
                            alignSelf: 'center',
                            position: 'absolute',
                            bottom: -8
                        }}
                        source={require('../assets/images/abdev.png')}
                    />
                </View>
                <View style={{
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    elevation: 10,
                    width: height * 0.33,
                    height: height * 0.099,
                    padding: height * 0.023
                }}>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}>
                        <Text
                            style={{
                                color: Colors.PRIMARY_2,
                                fontSize: 14,
                                fontWeight: 'bold',
                            }}>
                            {item.name}
                        </Text>
                        <Feather
                            name='arrow-right-circle'
                            size={20}
                            color={'green'}
                            style={{
                                marginTop: height * 0.004,
                            }}
                        />
                    </View>
                    <Text style={{ color: 'gray', fontSize: 12 }}>{item.country}</Text>
                </View>

            </View>
        </TouchableOpacity>
    );

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
                    }}>Browser Player</Text>
                </View>

            </View>
            {/* <ScrollView> */}
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
                <FlatList
                    style={{ marginBottom: height * 0.06 }}
                    data={data}
                    key={'-'}
                    // numColumns={1}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    // refreshControl={
                    //     <RefreshControl
                    //         refreshing={refreshing}
                    //         onRefresh={onRefresh}
                    //     />}
                    ListEmptyComponent={() => listEmptyComponent()}
                />
            </LinearGradient>
            {/* </ScrollView> */}

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
                        backgroundColor: Colors.LIGHT_SKY,
                        borderTopStartRadius: 20,
                        borderTopEndRadius: 20,
                    }
                }}
            >
                <View style={{ padding: 2, height: '100%', paddingBottom: height * 0.02 }}>
                    <TouchableOpacity onPress={() => DirectorsRefRBSheet.current.close()}>
                        <Feather
                            name='chevrons-down'
                            size={28}
                            color={Colors.PRIMARY_2}
                            style={{
                                marginTop: height * 0.004,
                                alignSelf: 'flex-end',
                                padding: height * 0.023
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{
                        alignSelf: 'center',
                        marginTop: height * -0.05
                    }}>
                        <Image
                            style={{
                                width: width * 0.28,
                                height: width * 0.25,

                            }}
                            source={require('../assets/images/abdev.png')}
                        />
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', textAlign: 'center' }}>Aadil Raza</Text>
                        <Text style={{ color: 'gray', fontSize: 12, textAlign: 'center' }}>Netherlands</Text>
                    </View>

                    <ScrollView style={{ marginTop: height * 0.01 }}>
                        <View>
                            <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15, padding: 10 }}>Personal Information</Text>
                            <View style={{ alignSelf: 'center' }}>
                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_left_text}>Born</Text>
                                    <Text style={styles.rbs_right_text}>August 15, 1980 (42 years)</Text>
                                </View>

                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_left_text}>Birth Place</Text>
                                    <Text style={styles.rbs_right_text}>Lahore, Punjab, Pakistan</Text>
                                </View>

                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_left_text}>Nickname</Text>
                                    <Text style={styles.rbs_right_text}>Raja</Text>
                                </View>

                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_left_text}>Role</Text>
                                    <Text style={styles.rbs_right_text}>Bowler</Text>
                                </View>

                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_left_text}>Batting Style</Text>
                                    <Text style={styles.rbs_right_text}>Right Handed Bat</Text>
                                </View>

                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_left_text}>Bowling Style</Text>
                                    <Text style={styles.rbs_right_text}>Right-arm offbreak</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: height * 0.01 }}>
                            <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15, padding: 10 }}>ICC Rankings</Text>
                            <View style={{ alignSelf: 'center' }}>
                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_first_cell}></Text>
                                    <Text style={styles.rbs_row}>TEST</Text>
                                    <Text style={styles.rbs_row}>ODI</Text>
                                    <Text style={styles.rbs_row}>T20I</Text>
                                </View>
                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_first_cell}>Bat</Text>
                                    <Text style={styles.rbs_row}>Best</Text>
                                    <Text style={styles.rbs_row}>Best</Text>
                                    <Text style={styles.rbs_row}>Best</Text>
                                </View>

                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_first_cell}>Bowl</Text>
                                    <Text style={styles.rbs_row}>Best</Text>
                                    <Text style={styles.rbs_row}>Best</Text>
                                    <Text style={styles.rbs_row}>Best</Text>
                                </View>

                                <View style={styles.rbs_label}>
                                    <Text style={styles.rbs_first_cell}>All Round</Text>
                                    <Text style={styles.rbs_row}>Best</Text>
                                    <Text style={styles.rbs_row}>Best</Text>
                                    <Text style={styles.rbs_row}>Best</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: height * 0.01 }}>
                            <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15, padding: 10 }}>Teams</Text>
                            <View style={{ alignSelf: 'center' }}>
                                <View style={styles.rbs_label}>
                                    <Text style={[styles.rbs_left_text, { width: '100%' }]}>Netherlands, Spain</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: height * 0.01 }}>
                            <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15, padding: 10 }}>Profile</Text>
                            <Text style={{ color: 'gray', fontSize: 13, textAlign: 'justify', paddingHorizontal: height * 0.01 }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                            </Text>
                            <Text style={{ color: 'gray', fontSize: 13, textAlign: 'justify', paddingHorizontal: height * 0.01, paddingTop: height * 0.005 }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type,
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};
export default BrowsePlayer;
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