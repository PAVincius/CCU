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

const PersonalInformation = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      name: '', 
      parentName: '',
      sus: '',
      cpf: '',
      rg: '',
      dtEmissao: '',
      emissor: '',
      dateBirth: '',
      age: '',
      genre: '',
      nationality: '',
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
          Nome:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'Nome'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
        />
      </View>
      <View style={[styles.dataMargin, {width: '96%'}]}>
        <Text style={styles.dataLabel}>
          Genitor:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'Genitor'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.parentName}
            onChangeText={formik.handleChange('parentName')}
        />
      </View>
      <View style={[styles.dataMargin, {width: '52%'}]}>  
        <Text style={styles.dataLabel}>
          Cartão do SUS:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'Nr. do SUS'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.sus}
            onChangeText={formik.handleChange('sus')}
        />
      </View>
      <View style={[styles.dataMargin, {width: '42%'}]}>
        <Text style={styles.dataLabel}>
          CPF:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'CPF'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.cpf}
            onChangeText={formik.handleChange('cpf')}
        />
      </View>
      <View style={[styles.dataMargin, {width: '26%'}]}>
        <Text style={styles.dataLabel}>
          RG:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'RG'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.rg}
            onChangeText={formik.handleChange('rg')}
        />
      </View>
      <View style={styles.dataMargin}>
        <Text style={styles.dataLabel}>
          Dt. Emissão:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'Dt. de Emissão'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.dtEmissao}
            onChangeText={formik.handleChange('dtEmissao')}
        />
      </View>
      <View style={[styles.dataMargin, {width: '26%'}]}>  
        <Text style={styles.dataLabel}>
          Emissor:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'Emissor'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.emissor}
            onChangeText={formik.handleChange('emissor')}
        />
      </View>
      <View style={styles.dataMargin}>
        <Text style={styles.dataLabel}>
          Dt. Nascimento:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'Dt. de Nascimento'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.dateBirth}
            onChangeText={formik.handleChange('dateBirth')}
        />
      </View>
      <View style={styles.dataMargin}>
        <Text style={styles.dataLabel}>
          Idade:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'Idade'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.age}
            onChangeText={formik.handleChange('age')}
        />
      </View>
      <View style={[styles.dataMargin, {width: '35%'}]}>
        <Text style={styles.dataLabel}>
          Gênero:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'Gênero'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.genre}
            onChangeText={formik.handleChange('genre')}
        />
      </View>
      <View style={[styles.dataMargin, {marginBottom: 10}]}>
        <Text style={styles.dataLabel}>
          Nacionalidade:
        </Text>
        <TextInput  style={styles.dataInput}
            placeholder={'Nacionalidade'}
            secureTextEntry={false}
            underlineColorAndroid='transparent'
            placeholderTextColor={Colors.placeHolderColor}
            value={formik.values.nationality}
            onChangeText={formik.handleChange('nationality')}
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
export default PersonalInformation;