import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { color } from 'react-native-reanimated'


const ReminderBox = ({item }) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:1}}>
                <Text>{item.hour}</Text>
                <Text>{item.date}</Text>
            </View>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={{flex: 1,flexDirection: "row", justifyContent: "space-between", padding:1}}>
                <Text style={styles.text}>{item.subtitle}</Text>
            </View>
        </View>       
    )
}
export const styles = StyleSheet.create({
    Listcontainer: {
      padding: 5,
      backgroundColor: '#cfd8dc',
      borderRadius: 10,
      borderColor: '#fbfbfb',
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
  });
export default ReminderBox;