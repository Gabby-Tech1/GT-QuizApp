import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Avatar from '../assets/avatar.jpg'
import { LineChart } from 'react-native-chart-kit'


const data =[
  {
    title: 'Maths Challenge',
    score: 100,
    date: '2022-12-01'
  },
  {
    title: 'Science Challenge',
    score: 100,
    date: '2024-04-01'
  },
  {
    title: 'History Challenge',
    score: 100,
    date: '2021-06-19'
  },
  {
    title: 'Geography Challenge',
    score: 100,
    date: '2021-04-01'
  },
]
const Home = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#480ca8"}}>
      <ScrollView>
      <View style={styles.welcome}>
        <View>
          <Text style={{color: 'white', fontSize: 20}}>Welcome,</Text>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>John Doe</Text>
        </View>
        
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
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Quiz")}>
        <Text style={{color: 'white', fontSize: 18}}>Start Challenge</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 24, padding: 15, marginTop: 25, fontWeight: 'bold', color: 'white'}}>Premuim Challenges</Text>
      <View style={{display: 'flex', gap: 20, marginBottom: 40}}>
        {
          data.map((item, index)=> {
            return (
              <View key={index} style={styles.premuim}>
                <View style={{gap: 10}}>
                  <Text style={{fontSize: 20, fontWeight: '500',}}>{item.title}</Text>
                  <Text style={{fontSize: 16, fontWeight: '400',}}>Max. Score: {item.score}</Text>
                </View>
                <View style={{}}>
                  <TouchableOpacity style={{padding: 10, backgroundColor: '#4895ef', borderRadius: 10 }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Unlock</Text>
                  </TouchableOpacity>
                  <Text style={{fontSize: 16, fontWeight: '700',}}>{item.date}</Text>
                </View>
              </View>
            )
          })
        }
      </View>
      </ScrollView>
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

  },
  btn: {
    backgroundColor: "#4895ef",
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 10,
  },
  premuim: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 10
    
  }
})