import * as React from 'react';
import { Platform, StyleSheet, ColorPropType} from 'react-native';

import {Dimensions, PixelRatio} from 'react-native';
import Colors from './Colors';
import { ThemeConsumer } from 'react-native-elements';
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
export {
  widthPercentageToDP,
  heightPercentageToDP
};

//Os styles estão em ordem alfabetica
const styles = StyleSheet.create({
    //B
    backgroundImage:{
      flex: 1,
      resizeMode: 'cover',
    },
    bar: {
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('6%'),
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    ButtonText: {
      fontSize: 28,
      color: Colors.LoginText,
      position: 'absolute',
      top: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    //C
    container: {
      flex: 1,
    },
    //D
    dataInput: {
      height: heightPercentageToDP('6%'),
      borderLeftWidth: 1.9,
      borderBottomWidth: 1.9,
      borderBottomColor: '#000',
      borderRadius: 8,
      padding: 8,
      fontSize: 15,
      backgroundColor: '#fff',
      marginRight: 3,
    },
    dataLabel: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    dataMargin: {
      marginHorizontal: heightPercentageToDP('0.6%'),
      marginLeft: widthPercentageToDP('1.6%')
    },
    //H
    header:{
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('10%'), 
      justifyContent: 'space-between',
      padding: 18,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
    homeButton:{
      margin: 15,
      borderRadius: 10,
      backgroundColor: Colors.white,
      alignItems: 'center',
      width: widthPercentageToDP('40%'),
      height: heightPercentageToDP('20%'),
      shadowColor: '#000',
      shadowOpacity: 0.8,
      shadowRadius: 0.1,
      shadowOffset: {
       width: 0,
       height: 8,
     },
      elevation: 7,
    },
    homeTitleText:{
      color: Colors.blue,
      fontSize: heightPercentageToDP('4.5%'),
      marginTop: heightPercentageToDP('4%')
    },
    //I
    imageContainer: {
      resizeMode: 'contain',
      height: heightPercentageToDP('20%'),
      marginBottom: '20%',
      marginTop: '30%'
    },
    imageContainerGreat: {
      resizeMode: 'contain',
      height: heightPercentageToDP('70%'),
      marginBottom: '20%',
      marginTop: '20%'
    },
    imageContainerMedium: {
      resizeMode: 'contain',
      height: heightPercentageToDP('35%')
    },
    imageHomeContainer: {
      resizeMode: 'contain',
      height: heightPercentageToDP('20%'),
    },
    //M
    marginBasic: {
      margin: 10,
      justifyContent: 'flex-start'
    },
    //N
    navigationFilename: {
      marginTop: 5,
    },
    //P
    primaryButton:{
      width: widthPercentageToDP('90%'),
      height: heightPercentageToDP('8%'),
      backgroundColor: Colors.secondaryLight,
      borderRadius: 20,
      margin:5,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent:'center',
      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowRadius: 0.5,
      shadowOffset: {
       width: 3,
       height: 3,
     },
      elevation: 5,
    },
    //S
    SafeView:{
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('30%'),
      resizeMode: 'contain'
    },
    StyledButton: {
      width: widthPercentageToDP('85%'),
      height: heightPercentageToDP('7%'),
      backgroundColor: Colors.blue,
      borderRadius: 10,
      alignContent: 'center',
      alignItems: 'center',
      marginTop: heightPercentageToDP('3%'),
      padding: 14,
    },
    subTextInput:{
      marginTop: heightPercentageToDP('2%'),
      fontSize: heightPercentageToDP('2.2%'),
      alignSelf: 'flex-end',
      margin:2,
      color: 'blue',
      textDecorationLine: 'underline',
    },
    //T
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    }, 
    textBasic: {
      textAlign: 'justify',
      fontSize: heightPercentageToDP('2%'),
      marginVertical: heightPercentageToDP('1%')
    },
    textInput:{
      width: widthPercentageToDP('85%'),
      height: heightPercentageToDP('6%'),
      marginTop: heightPercentageToDP('2.5%'),
      backgroundColor: Colors.white,
      borderRadius: 10,
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    titleText:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: heightPercentageToDP('2%'),
      marginVertical: heightPercentageToDP('5%')
    },
    tomTab: {
      borderRadius: 20,
      height: heightPercentageToDP('20%'),
    },
  });
  export default styles;