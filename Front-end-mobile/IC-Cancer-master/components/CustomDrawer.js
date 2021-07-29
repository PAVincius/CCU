import React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import { useAuth } from '../src/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP, heightPercentageToDP } from '../constants/Styles'

function CustomDrawer({...props}){
    const [, { logout }] = useAuth();
    
    return(
        <View style={styles.container}>
            <View style={styles.userArea}>
                <Image 
                    source={require('../assets/images/user.png')}
                    style={styles.user}
                />
                <Text style={styles.nome}>Paciente</Text>
                <Text style={styles.email}>paciente@email.com</Text>
            </View>
            <DrawerItemList {...props}/>
            <TouchableOpacity onPress={ logout } 
                style={styles.buttonSair}
            >
                <Text style={{color: 'gray'}}>Sair</Text>    
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 5
    },
    userArea:{
        marginTop: heightPercentageToDP('6%'),
        marginLeft: widthPercentageToDP('4%'),
        marginBottom: heightPercentageToDP('2%'),
    },
    user:{
        width: widthPercentageToDP('28%'),
        height: heightPercentageToDP('15%'),
        alignSelf: 'center',
        borderRadius: 50
    },
    nome:{
        marginTop: heightPercentageToDP('1.5%'),
        fontSize: 18,
        fontWeight: 'bold',
    }, 
    email:{
        fontSize: 15
    },
    buttonSair:{
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('6%'),
        padding: 5,
        marginLeft: widthPercentageToDP('4%'),
    }
});

export default CustomDrawer;