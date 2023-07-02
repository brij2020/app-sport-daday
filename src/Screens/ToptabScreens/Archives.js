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
    useWindowDimensions
} from 'react-native';
import { Colors } from '../../theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const International = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>

            <View>
                <Text style={styles.date}>2022</Text>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>West Indies tour of Australia, 2022</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>Englang tour of Australia, 2022</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
            </View>
        </ScrollView>
    )
};

const T20Leagues = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>

            <View>
                <Text style={styles.date}>2022</Text>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>West Indies tour of Australia, 2022</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>Englang tour of Australia, 2022</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
            </View>
        </ScrollView>
    )
};

const Domestic = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>

            <View>
                <Text style={styles.date}>2022</Text>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>West Indies tour of Australia, 2022</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>Englang tour of Australia, 2022</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
            </View>
        </ScrollView>
    )
};

const Women = () => {
    return (
        <ScrollView style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <View>
                <Text style={styles.date}>2022</Text>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>West Indies tour of Australia, 2022</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>Englang tour of Australia, 2022</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sub_title}>ICC Cricket World Cup League Two 2019-23</Text>
                    <Text style={styles.from_date}>Aug 14 - Dec 08</Text>
                </View>
            </View>
        </ScrollView>
    )
};

const renderScene = SceneMap({
    first: International,
    second: T20Leagues,
    third: Domestic,
    fourth: Women,
});

const BrowseSeries = props => {
    const navigation = props.navigation;
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'International' },
        { key: 'second', title: 'T20 Leagues' },
        { key: 'third', title: 'Domestic' },
        { key: 'fourth', title: 'Women' },
    ]);
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
                    }}>
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
                    }}>Archives</Text>
                </View>

            </View>
            <TabView
                style={{}}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => <TabBar {...props}
                    style={{ backgroundColor: Colors.PRIMARY_2, opacity: 0.9 }}
                    labelStyle={{ fontSize: 12, fontWeight: '500' }}
                    tabStyle={{ width: 'auto' }}
                    scrollEnabled={true}
                    bounces={true}
                    activeColor={'#fff'}
                    indicatorStyle={{ backgroundColor: '#fff' }}
                // inactiveColor={'#fff'}
                />}
            />
        </SafeAreaView>
    );
};
export default BrowseSeries;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_SKY,
        height: '100%'
    },
    options_icon: {
        alignSelf: 'center',
        marginRight: width * 0.035
    },
    section: {
        backgroundColor: '#fff',
        width: '100%',
        padding: height * 0.022,
        marginVertical: height * 0.0012,
        paddingHorizontal: width * 0.04
    },
    sub_title: { fontSize: 14, color: 'black' },
    from_date: { fontSize: 13, color: 'gray' },
    date: {
        fontSize: 14, color: 'black',
        paddingHorizontal: width * 0.04,
        padding: height * 0.011, fontWeight: '500'
    }

});