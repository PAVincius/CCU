import React from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import styles from '../../constants/Styles';

const Adress = ({navigation}) => {
    const formik = useFormik({
        initialValues: {
            adress: '',
            complement: '',
            number: '',
            bairro: '',
            city: '',
            uf: '',
            cep: '',
        }
    });
    
      return(
        <LinearGradient 
            colors={[Colors.primary, Colors.secondaryLight]}
            style={{flex:1}}> 
        <SafeAreaView style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <View style={[styles.header, {padding: 15, height: 50, backgroundColor: '#fff'}]}>
                <Icon
                    name='menu'
                    style={{marginTop: 3}}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                />
            </View>
            <View style={[styles.dataMargin, {width: '96%'}]}>
                <Text style={styles.dataLabel}>
                    Endereço:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'Endereço'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.adress}
                    onChangeText={formik.handleChange('adress')}
                />
            </View>
            <View style={[styles.dataMargin, {width: '96%'}]}>
                <Text style={styles.dataLabel}>
                    Complemento:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'Complemento'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.complement}
                    onChangeText={formik.handleChange('complement')}
                />
            </View>
            <View style={styles.dataMargin}>  
                <Text style={styles.dataLabel}>
                    Número:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'Número'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.number}
                    onChangeText={formik.handleChange('number')}
                />
            </View>
            <View style={[styles.dataMargin, {width: '60%'}]}>
                <Text style={styles.dataLabel}>
                    Bairro:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'Bairro'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.bairro}
                    onChangeText={formik.handleChange('bairro')}
                />
            </View>
            <View style={[styles.dataMargin, {width: '50%'}]}>
                <Text style={styles.dataLabel}>
                    Cidade:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'Cidade'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.city}
                    onChangeText={formik.handleChange('city')}
                />
            </View>
            <View style={[styles.dataMargin, {width: '15%'}]}>
                <Text style={styles.dataLabel}>
                    UF:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'UF'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.uf}
                    onChangeText={formik.handleChange('uf')}
                />
            </View>
            <View style={[styles.dataMargin, {width: '40%'}]}>  
                <Text style={styles.dataLabel}>
                    CEP:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'CEP'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.cep}
                    onChangeText={formik.handleChange('cep')}
                />
            </View>
            <TouchableOpacity onPress={formik.handleSubmit}
                style={[styles.StyledButton, {marginLeft: '8%'}]}
            >
                {formik.isSubmitting ? (
                    <ActivityIndicator color="#FFF" />
                ) : (
                    <Text style={styles.ButtonText}>Atualizar</Text>
                )}
            </TouchableOpacity>
        </SafeAreaView>
        </LinearGradient>
    );
}

export default Adress;