import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Result from '../assets/results.png'
import Fail from '../assets/fail.png'

const Results = ({navigation, route}) => {

  const {score} = route.params

  const resultBanner = score>30? <Image source={Result}  style={styles.banner} resizeMode='contain'/> : <Image source={Fail}  style={styles.banner} resizeMode='contain'/>

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Your Results:</Text>
        <Text style={styles.score}>{score}/75</Text>
      </View>
      <View style={styles.bannerContainer}>
        {resultBanner}
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
            <Text style={{color: 'white', fontSize: 20}}>Back To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    banner: {
        height: 500,
        width: 450,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    container: {
      paddingTop: 40,
      paddingHorizontal: 20,
      height: '100%',
      backgroundColor: "#480ca8"
    },
    button:{
      backgroundColor: '#1A759F',
      padding: 12,
      paddingHorizontal: 16,
      borderRadius: 18,
      alignItems: 'center',
      marginBottom: 30,
      maxWidth: '60%',
      alignSelf: 'center'
    },
    titleText:{
      fontSize: 45,
      fontWeight: '700',
      textAlign: 'center',
      color: 'white'
    },
    score:{
      fontSize: 60,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
      paddingTop: 30
    }
})