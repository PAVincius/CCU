import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../constants/Styles';

const FirstAcess = ({navigation}) => {
    /*const [state, setState] = useState(false)
    const [, { login }] = useAuth()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            password2: '',
        },

        onSubmit: async values => {
        try {
            const { data } = await api.login({name, senha})
            login(data)
        } catch (error) {
            setState('Login ou senha inválidos')
        }
        },
    })*/

    return(
        <LinearGradient 
            colors={[Colors.primary, Colors.secondaryLight]}
            style={{flex:1}}>
           <SafeAreaView style={{flexDirection: 'column',alignItems: 'center'}}>
               <Animatable.Image
                    animation="bounceIn"
                    duration={2000}
                    style={styles.imageContainer}
                    source={require('../../assets/images/logoicvetorizada.png')}
                />
                <KeyboardAvoidingView >
                    <View>
                        <View style={{flexDirection:'column'}}>
                            <Animatable.Text
                                animation="bounceIn"
                                //style={}
                                >
                                    Digite seu nome de usuário:
                            </Animatable.Text>
                            <Animatable.View
                                animation="bounceIn"
                                duration={2200}
                                style={styles.textInput}>
                                <Ionicons name="md-person" size={25}/>
                                <TextInput style={{marginLeft:10}}
                                    placeholder={'Usuário'}
                                    secureTextEntry={false}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor={Colors.placeHolderColor}
                                    value={formik.values.username}
                                    onChangeText={formik.handleChange('username')}
                                />
                            </Animatable.View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Animatable.Text 
                                animation="bounceIn"
                                //style={}
                                >
                                    Digite a senha:
                                </Animatable.Text>
                            <Animatable.View
                                animation="bounceIn"
                                duration={2200}
                                style={styles.textInput}>
                                <Ionicons name="md-key" size={25}/>
                                <TextInput style={{marginLeft:10}}
                                    placeholder={'Senha'}
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor={Colors.placeHolderColor}
                                    value={formik.values.password}
                                    onChangeText={formik.handleChange('password')}
                                />
                            </Animatable.View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Animatable.Text 
                                animation="bounceIn"
                                //style={}
                                >
                                    Confirme sua senha:
                                </Animatable.Text>
                            <Animatable.View
                                animation="bounceIn"
                                duration={2200}
                                style={styles.textInput}>
                                <Ionicons name="md-key" size={25}/>
                                <TextInput style={{marginLeft:10}}
                                    placeholder={'Senha'}
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor={Colors.placeHolderColor}
                                    value={formik.values.password2}
                                    onChangeText={formik.handleChange('password2')}
                                />
                            </Animatable.View>
                        </View>
                        <TouchableOpacity onPress={formik.handleSubmit}
                            style={styles.StyledButton}
                        >
                            {formik.isSubmitting ? (
                                <ActivityIndicator color="#FFF" />
                            ) : (
                                <Text style={styles.ButtonText}>CRIAR CONTA</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </LinearGradient>
    )
};
export default FirstAcess;