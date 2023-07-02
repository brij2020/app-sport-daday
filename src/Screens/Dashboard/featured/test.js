<ImageBackground source={require('../../../assets/images/bgimg.png')}
resizeMode="cover"
style={{
  alignSelf: 'center',
  padding: width * 0.03,
  paddingVertical: height * 0.02,
  marginBottom: height * 0.01,
  margin: 2
}}
imageStyle={{ borderRadius: 25 }}>
<TouchableOpacity onPress={() => navigation.navigate('PastMatches')}>
  {/* <LinearGradient
start={{ x: 0, y: 1 }}
end={{ x: 1, y: 2 }}
colors={[Colors.PRIMARY_2, '#fff']}
style={{
  width: '98%',
  elevation: 10,
  borderRadius: 25,
  alignSelf: 'center',
  padding: width * 0.03,
  paddingVertical: height * 0.02,
  marginBottom: height * 0.015
}}> */}
  <View>
    <View style={{
      flexDirection: 'row',
      height: height * 0.06,
      borderTopLeftRadius: 8,
      borderTopEndRadius: 8,
      justifyContent: 'space-between',
      padding: 10
    }}>
      <Text
        style={styles.live_heading}>
        2 days ago Match
      </Text>
      <MaterialCommunityIcons
        name='bell'
        size={20}
        color={'#fff'}
      />
    </View>
    <View
      style={{
        flexDirection: 'row',
        height: height * 0.1,
        borderTopColor: '#CBC3E3',
        borderTopWidth: 1,
        justifyContent: 'space-between',
        padding: 27
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
            width: width * 0.12,
            height: height * 0.065,
            alignSelf: 'center',
            marginVertical: height * 0.01,
            marginVertical: height * 0.01,
          }}
          source={require('../../../assets/icons/flag1.png')}
        />
        <View
          style={{
            left: 10,
            bottom: 7
          }}>

          <Text style={{
            color: '#fff',
            width: width * 0.25,
            fontSize: 13,
            fontWeight: '500',
          }}>IND</Text>
          <Text style={{
            fontSize: 12,
            color: '#fff'
          }}>137-8 (20)</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            bottom: 7,
            left: width * 0.08
          }}>

          <Text style={{
            color: '#fff',
            width: width * 0.25,
            fontSize: 13,
            fontWeight: '500',
          }}>PAK</Text>
          <Text style={{
            fontSize: 12,
            color: 'yellow'
          }}>138-5 (19)</Text>
        </View>
        <Image
          style={{
            width: width * 0.12,
            height: height * 0.065,
            alignSelf: 'center',
            marginVertical: height * 0.01,
            marginVertical: height * 0.01,
          }}
          source={require('../../../assets/icons/flag2.png')}
        />

      </View>
    </View>
    <View style={{
      borderTopColor: '#CBC3E3',
      borderTopWidth: 1,
      padding: 8,
      borderBottomLeftRadius: 8,
      borderBottomEndRadius: 8
    }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 14,
        }}>India won by 5 wkts
      </Text>
    </View>
  </View>
  {/* </LinearGradient> */}
</TouchableOpacity>
</ImageBackground>

<ImageBackground source={require('../../../assets/images/bgimg.png')}
resizeMode="cover"
style={{
  alignSelf: 'center',
  padding: width * 0.03,
  paddingVertical: height * 0.02,
  marginBottom: height * 0.01,
  margin: 2
}}
imageStyle={{ borderRadius: 25 }}>
<TouchableOpacity onPress={() => navigation.navigate('LiveMatches')}>
  {/* <LinearGradient
start={{ x: 0, y: 1 }}
end={{ x: 1, y: 2 }}
colors={[Colors.PRIMARY_2, '#fff']}
style={{
  width: '98%',
  elevation: 10,
  borderRadius: 25,
  alignSelf: 'center',
  padding: width * 0.03,
  paddingVertical: height * 0.02,
  marginBottom: height * 0.015
}}> */}
  <View>
    <View style={{
      flexDirection: 'row',
      height: height * 0.06,
      borderTopLeftRadius: 8,
      borderTopEndRadius: 8,
      justifyContent: 'space-between',
      padding: 10
    }}>
      <Text
        style={styles.live_heading}>
        Live Matche
      </Text>
      <MaterialCommunityIcons
        name='bell'
        size={20}
        color={'#fff'}
      />
    </View>
    <View
      style={{
        flexDirection: 'row',
        height: height * 0.1,
        borderTopColor: '#CBC3E3',
        borderTopWidth: 1,
        justifyContent: 'space-between',
        padding: 30
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
            width: width * 0.12,
            height: height * 0.065,
            alignSelf: 'center',
            marginVertical: height * 0.01,
            marginVertical: height * 0.01,
          }}
          source={require('../../../assets/icons/flag1.png')}
        />
        <View
          style={{
            left: 10,
            bottom: 7
          }}>

          <Text style={{
            color: '#fff',
            width: width * 0.25,
            fontSize: 13,
            fontWeight: '500',
          }}>IND</Text>
          <Text style={{
            fontSize: 12,
            color: "#fff"
          }}>Bat to yet</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            bottom: 7,
            left: width * 0.1
          }}>
          <Text style={{
            color: '#fff',
            width: width * 0.25,
            fontSize: 13,
            fontWeight: '500',
          }}>PAK</Text>
          <Text style={{
            fontSize: 12,
            color: 'yellow'
          }}>51-1 (6.5)</Text>
        </View>
        <Image
          style={{
            width: width * 0.12,
            height: height * 0.065,
            alignSelf: 'center',
            marginVertical: height * 0.01,
            marginVertical: height * 0.01,
          }}
          source={require('../../../assets/icons/flag2.png')}
        />

      </View>
    </View>
    <View style={{
      borderTopColor: '#CBC3E3',
      borderTopWidth: 1,
      padding: 8,
      borderBottomLeftRadius: 8,
      borderBottomEndRadius: 8
    }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 14,
        }}>Match postponed
      </Text>
    </View>
  </View>
  {/* </LinearGradient> */}
</TouchableOpacity>
</ImageBackground>