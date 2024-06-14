import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import register from '../assets/register.png'
import RegisterForm from '../components/RegisterForm'

const Register = ({navigation}) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const handleKeyboardDidShow = (event) => {
    setKeyboardHeight(event.endCoordinates.height);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardHeight(0);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    // return () => {
    //   Keyboard.removeListener('keyboardDidShow', handleKeyboardDidShow);
    //   Keyboard.removeListener('keyboardDidHide', handleKeyboardDidHide);
    // };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{display: 'flex', alignItems: "center", justifyContent: 'center', marginTop: 10}}>
        <Image source={register} style={{width: 380, height: 300}}/>
      </View>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-keyboardHeight}>
        <View style={styles.register}>
          <Text style={{fontSize: 40, color: '#dee2e6', fontWeight: '700'}}>Hi there,</Text>
          <Text style={{fontSize: 30, color: '#dee2e6', fontWeight: '700'}}>Register to Join GT Quiz</Text>
          <Text style={{color: '#dee2e6'}}>A step to start your journey</Text>
          <RegisterForm navigation={navigation}/>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adb5bd'
  },
  register: {
    width: '100%',
    padding: 10,
    backgroundColor: '#480ca8',
    borderRadius: 30,
    height: 570,
    marginTop: -80,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
})