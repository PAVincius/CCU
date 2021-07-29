import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
import { MonoText } from '../../components/StyledText';
import { Icon } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import styles from '../../constants/Styles';

export default function HomeScreen({navigation}) {

  return (
    <View style={{flex:1, alignItems: 'center', flexDirection: 'column'}}>
      <View style={styles.header}>
        <Icon
          name='menu'
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
      <View>
        <Text style={styles.homeTitleText}>
          Bem vinda !
        </Text>
        <Text>
          Enquanto esteve fora: 
        </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={styles.homeButton}>
          <Image 
            style={styles.imageHomeContainer}
            source={require('../../assets/images/icon1.png')}
            resizeMode='contain'
          />
        </View>
        <View style={styles.homeButton}>
          <Image
             style={styles.imageHomeContainer}
             source={require('../../assets/images/icon2.png')}
             resizeMode='contain'
          />
        </View>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={styles.homeButton}>
          <Image
             style={styles.imageHomeContainer}
             source={require('../../assets/images/icon3.png')}
             resizeMode='contain'
          />
        </View>
        <View style={styles.homeButton}>
          <Image
             style={styles.imageHomeContainer}
             source={require('../../assets/images/icon4.png')}
             resizeMode='contain'
          />
        </View>
      </View>
    </View>
  );
}

