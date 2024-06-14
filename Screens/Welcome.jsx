import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import welcome from '../assets/welcome.png'

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={welcome} style={{width: 420, height: 420}}/>
            <Text style={{fontSize: 48, color: 'white', fontWeight: '700'}}>GT Quiz </Text>
            <Text style={{color: 'white', fontSize: 18}}>Quiz, Learn, Repeat: The GT Way!</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Login")}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: "700"}}>Ready to GO!!</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#480ca8",
    },
    btn: {
        backgroundColor: "#4895ef",
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 150,
        padding: 20,
        borderRadius: 10,
    }
})