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

const AdressLab = ({navigation}) => {
    const formik = useFormik({
        initialValues: {
            nameLab: '',
            adressLab: '',
            complementLab: '',
            bairroLab: '',
            numberLab: '',
            cityLab: '',
            ufLab: '',
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
                    Nome do Laborátorio:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'Nome do Laborátorio'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.nameLab}
                    onChangeText={formik.handleChange('nameLab')}
                />
            </View>
            <View style={[styles.dataMargin, {width: '96%'}]}>
                <Text style={styles.dataLabel}>
                    Endereço do Laboratório:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'Endereço do Laboratório'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.adressLab}
                    onChangeText={formik.handleChange('adressLab')}
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
                    value={formik.values.complementLab}
                    onChangeText={formik.handleChange('complementLab')}
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
                    value={formik.values.bairroLab}
                    onChangeText={formik.handleChange('bairroLab')}
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
                    value={formik.values.numberLab}
                    onChangeText={formik.handleChange('numberLab')}
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
                    value={formik.values.cityLab}
                    onChangeText={formik.handleChange('cityLab')}
                />
            </View>
            <View style={[styles.dataMargin, {width: '18%'}]}>  
                <Text style={styles.dataLabel}>
                    UF:
                </Text>
                <TextInput  style={styles.dataInput}
                    placeholder={'UF'}
                    secureTextEntry={false}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={Colors.placeHolderColor}
                    value={formik.values.ufLab}
                    onChangeText={formik.handleChange('ufLab')}
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

export default AdressLab;