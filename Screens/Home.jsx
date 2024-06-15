import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from '../assets/avatar.jpg'
import { LineChart } from 'react-native-chart-kit'

const Home = () => {
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#480ca8"}}>
      <View style={styles.welcome}>
        <Text style={{color: 'white', fontSize: 20}}>Welcome</Text>
        <Image source={Avatar} style={{width: 70, height: 70, borderRadius: 50}}/>
      </View>
      <View style={{padding: 30,}}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: '700'}}>Starting up the challenge</Text>
      </View>
      <View style={styles.card}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>Ready to take challenge</Text>
        <LineChart
    data={{
      labels: ["Mon", "Tues", "Wed", "April", "May", "June"],
      datasets: [
        {
          data: [
            1,3,2,0,1
          ]
        }
      ]
    }}
    width={350} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  welcome: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
    paddingHorizontal: 20, 
    paddingVertical: 10
  }, 
  card: {
    display: "flex",
    alignItems: 'center',
    height: 280,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  }
})