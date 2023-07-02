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
    useWindowDimensions,
    FlatList
} from 'react-native';
import { Colors } from '../../theme/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const { height, width } = Dimensions.get('window');
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
const data = [
    {
        id: 1,
        country: "Netherlands"
    },
    {
        id: 2,
        country: "India"
    },
    {
        id: 3,
        country: "South Africa"
    },
    {
        id: 4,
        country: "Pakistan"
    },
    {
        id: 5,
        country: "Pakistan"
    },
    {
        id: 6,
        country: "South Africa"
    },
    {
        id: 7,
        country: "Pakistan"
    },
    {
        id: 8,
        country: "India"
    },
    {
        id: 9,
        country: "New Zeland"
    },
    {
        id: 10,
        country: "New Zeland"
    },
    {
        id: 11,
        country: "India"
    },
    {
        id: 12,
        country: "South Africa"
    },
    {
        id: 13,
        country: "Australia"
    },
    {
        id: 14,
        country: "Australia"
    },
    {
        id: 15,
        country: "Australia"
    },
    {
        id: 16,
        name: "Chris gayle",
        country: "Jamaican"
    },
    {
        id: 17,
        country: "Jamaican"
    },
    {
        id: 18,
        country: "Jamaican"
    },
    {
        id: 19,
        country: "England"
    },
    {
        id: 20,
        country: "England"
    },

]
const International = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.section}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../assets/icons/flag1.png')}
                    style={{
                        height: height * 0.05,
                        width: height * 0.05,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                    }}
                />
                <Text style={styles.sub_title}>{item.country}</Text>
            </View>
            <Fontisto
                name='bell'
                size={20}
                color={'gray'}
                style={{ alignSelf: 'center' }}
            />
        </TouchableOpacity>
    );
    return (
        <View style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <Text style={styles.date}>Test Teams</Text>
            <FlatList
                style={{ marginBottom: height * 0.005 }}
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

        </View>
    )
};

const T20Leagues = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.section}>

            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../assets/icons/flag1.png')}
                    style={{
                        height: height * 0.05,
                        width: height * 0.05,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                    }}
                />
                <Text style={styles.sub_title}>{item.country}</Text>
            </View>
            <Fontisto
                name='bell'
                size={20}
                color={'gray'}
                style={{ alignSelf: 'center' }}
            />
        </TouchableOpacity>
    );
    return (
        <View style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <Text style={styles.date}>League Teams</Text>
            <FlatList
                style={{ marginBottom: height * 0.005 }}
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

        </View>
    )
};

const Domestic = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.section}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../assets/icons/flag1.png')}
                    style={{
                        height: height * 0.05,
                        width: height * 0.05,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                    }}
                />
                <Text style={styles.sub_title}>{item.country}</Text>
            </View>
            <Fontisto
                name='bell'
                size={20}
                color={'gray'}
                style={{ alignSelf: 'center' }}
            />
        </TouchableOpacity>
    );
    return (
        <View style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <Text style={styles.date}>Domestic Teams</Text>
            <FlatList
                style={{ marginBottom: height * 0.005 }}
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

        </View>
    )
};

const Women = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.section}>

            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../assets/icons/flag1.png')}
                    style={{
                        height: height * 0.05,
                        width: height * 0.05,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                    }}
                />
                <Text style={styles.sub_title}>{item.country}</Text>
            </View>
            <Fontisto
                name='bell'
                size={20}
                color={'gray'}
                style={{ alignSelf: 'center' }}
            />
        </TouchableOpacity>
    );
    return (
        <View style={{ backgroundColor: Colors.LIGHT_SKY, flex: 1 }}>
            <Text style={styles.date}>Women Teams</Text>
            <FlatList
                style={{ marginBottom: height * 0.005 }}
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

        </View>
    )
};

const renderScene = SceneMap({
    first: International,
    second: T20Leagues,
    third: Domestic,
    fourth: Women,
});

const BrowseTeams = props => {
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
                    }}>Browse Teams</Text>
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
export default BrowseTeams;
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
    section: {
        backgroundColor: '#fff',
        width: '100%',
        padding: height * 0.015,
        paddingHorizontal: width * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: width * 0.003
    },
    sub_title: { fontSize: 14, color: 'black', alignSelf: 'center', paddingLeft: width * 0.03 },
    from_date: { fontSize: 13, color: 'gray' },
    date: {
        fontSize: 14, color: 'black',
        paddingHorizontal: width * 0.04,
        padding: height * 0.011, fontWeight: '500'
    }

});