import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, TextInput, View, Button, Text, KeyboardAvoidingView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from '../../constants/Styles';
import Colors from '../../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SplashScreen = ({navigation}) => {
    return(
        <LinearGradient 
            colors={[Colors.primary, Colors.secondaryLight]}
            style={{flex:1}}>
            <SafeAreaView style={{flexDirection: 'column',alignItems: 'center' }}>
                <Animatable.Image
                    animation="fadeIn"
                    duration={3000}
                    iterationCount={1}
                    iterationDelay={2000}
                    delay={2000}
                    style={styles.imageContainerGreat}
                    onAnimationEnd={()=> {navigation.navigate('Terms')}}
                    source={require('../../assets/images/splashScreen.png')}
                />
            </SafeAreaView>
        </LinearGradient>
    );
}
export default SplashScreen