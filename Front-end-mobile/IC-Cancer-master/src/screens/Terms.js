import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, TextInput, View, Button, Text, useState, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';
import TabBarIcon from '../../components/TabBarIcon';
import styles from '../../constants/Styles';
import { color } from 'react-native-reanimated';
import { ColorPropType } from 'react-native';
import Colors from '../../constants/Colors';

function Terms({navigation}){
    return(
        <View style={{flex:1,flexDirection:'column', alignItems: 'center', justifyContent:'space-between'}}>
            <View style={styles.marginBasic}>
                <Text style={styles.titleText}>
                    Olá, seja muito bem vinda !
                </Text>
                <Text style={styles.textBasic}>
                    Este aplicativo foi feito por você e para você. Foi feito com muito carinho para te servir como um guia durantes sua história de vida. Por isso, estamos aqui para lhe apoiar com lembretes, dicas e um canal aberto para esclarecer suas dúvidas quanto a saúde da mulher.
                </Text>
                <Text style={styles.textBasic}>
                    Pergunta: Que tipo de lembretes nós lhe enviaremos?
                    Resposta: Nós enviaremos lembrets de consultas que estão se aproximando, confirmação de agendamento de consultas, examtes dentre outros.
                </Text>
                <Text style={styles.textBasic}>
                    Porém, para continuarmos, e por causa da Lei Geral da Proteção de Dados (LGPD), MP n° 869/2018, solicitamos para que você nos permita guardar alguns dados. Esses dados serão utilizados em pleno sigilo pelo Ministério da Saúde e Redes de Atenção à Saúde para lhe oferecer um atendimento mais direcionado e com mais qualidade.
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={()  => {navigation.navigate('Auth')}} style={styles.primaryButton}>
                    <View style={{margin:5}}>
                        <Text style={{textAlign:'center',color:Colors.white, fontWeight:'bold'}}>ACEITO COMPARTILHAR MEUS DADOS COM O MINISTÉRIO DA SAÚDE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Terms