import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'
import login from '../assets/login.png'

const Login = ({navigation}) => {
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{display: 'flex', alignItems: "center", justifyContent: 'center', marginTop: 10}}>
        <Image source={login} style={{width: 380, height: 300}}/>
      </View>
      
        <View style={styles.login}>
          <Text style={{fontSize: 40, color: '#dee2e6', fontWeight: '700'}}>Hi there,</Text>
          <Text style={{fontSize: 30, color: '#dee2e6', fontWeight: '700'}}>Login to GT Quiz</Text>
          <Text style={{color: '#dee2e6'}}>A step to start your journey</Text>
          <LoginForm navigation={navigation}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adb5bd'
  },
  login: {
    width: '100%',
    padding: 10,
    backgroundColor: '#480ca8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 550,
    marginTop: -20,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
})