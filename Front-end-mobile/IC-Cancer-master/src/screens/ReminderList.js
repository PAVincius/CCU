
import React,{Component} from 'react';
import { View, Text, TouchableWithoutFeedback, FlatList, StyleSheet, useContext, ScrollView, Button} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import axios from 'axios';
import Colors from '../../constants/Colors';
import { Icon } from 'native-base';
import { DrawerActions } from '@react-navigation/native';

export default class ReminderList extends Component {
  state = {
    ReminderList: []
  }
  componentDidMount() {
    axios.get("https://5ed94a7e4378690016c6aede.mockapi.io/api/v1/Reminder")
      .then((response) => {
        const ReminderList = response.data;
        this.setState({ ReminderList });
      })
  }

  render() {
   const {ReminderList} = this.state;
   const navigation = (this.props.navigation)
   return (
      <View>
          <View style={[styles.header, {height: 30, marginBottom: 20, }]}>
            <Icon
              name='menu'
              style={{marginLeft: 8, padding: 10, marginTop: 8}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </View>
          <ScrollView>
            <View style={styles.pad}>
              { 
              ReminderList.map(({id,hour,date,title,subtitle}) => (
                <TouchableWithoutFeedback key={id} onPress={() => navigation.navigate('Reminder')}>
                  <View>
                    <View style={styles.container}>
                      <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:1}}>
                        <Text>{hour}</Text>
                        <Text>{date}</Text>
                      </View>
                      <View>
                        <Text style={styles.title}>{title}</Text>
                      </View>
                      <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:5}}>
                        <Text style={styles.text}>{subtitle}</Text>
                        <TabBarIcon name="md-mail-unread"/>
                      </View>
                    </View>
                    <Text style={{height:8, backgroundColor: 'rgba(0,0,0, 0.0)'}}></Text>
                  </View>
                </TouchableWithoutFeedback>
              ))
              }
            </View>
          </ScrollView>    
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 100,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
  },
  title: {
    fontSize: 24,
  },
  imageReminder:{
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
  },
  textApp:{
    padding: 5,
  },
  pad:{
    padding:'2%'
  }
});