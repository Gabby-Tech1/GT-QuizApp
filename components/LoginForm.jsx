import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'


const LoginForm = () => {
  return (
    <View style={{marginTop: 30, display: 'flex', gap: 15}}>
        <TextInput placeholder="Username" style={styles.input}/>
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
        <TouchableOpacity style={styles.btn}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>LOGIN</Text>
        </TouchableOpacity>
        <View>
            <Text style={{textAlign: 'center', color: '#dee2e6'}}>Or continue with</Text>
        </View>
        
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -10}}>
            <TouchableOpacity>
                <Image source={Google} style={{width: 85, height: 85}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Facebook} style={{width: 85, height: 85}}/>
            </TouchableOpacity>
        </View>
        <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 5, marginTop: -20}}>
            <Text style={{color: '#dee2e6'}}>New Here?</Text>
            <TouchableOpacity>
                <Text style={{color: "#4895ef"}}>Register</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: "#4895ef",
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 50,
        padding: 10,
        borderRadius: 10,
    }
})