import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const shuffleArray=(array)=>{
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState()
  const [option, setOption] = useState([])
  const [ques, setQues] = useState(0)
  const [score, setScore] = useState(0)
  const [isloading, setIsloading] = useState(false)

  const getQuiz = async () => {
    setIsloading(true)
    const url = 'https://opentdb.com/api.php?amount=15&category=19&type=multiple&encode=url3986'
    const res = await fetch(url)
    const data = await res.json()
    setQuestions(data.results)
    setOption(generateOptionsAndShuffle(data.results[0]))
    setIsloading(false)
  }

  useEffect(()=>{
    getQuiz()
  },[])

  const handleNextPress = () => {
    setQues(ques+1)
    setOption(generateOptionsAndShuffle(questions[ques+1]))

  }
  const handlePrevPress = () => {
    setQues(ques-1)
    setOption(generateOptionsAndShuffle(questions[ques-1]))

  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options  
  }

  const handleSelectOption = (_option) => {
    if(_option===questions[ques].correct_answer){
      setScore(score+5)
    }
    if (ques!==14) {
      setQues(ques+1)
      setOption(generateOptionsAndShuffle(questions[ques+1]))
    }
    if (ques===14) {
      handleShowResults()
    }
  }

  const handleShowResults = () => {
    navigation.navigate("Results", {
      score: score
    })
  }

  return (
    <View style={styles.container}>
      {isloading ? <View style={styles.loader}><Text style={styles.loaderText}>Get prepared while we are preparing your question...</Text></View> : questions && 
      <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(option[0])}>
            <Text style={styles.option}>{decodeURIComponent(option[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(option[1])}>
            <Text style={styles.option}>{decodeURIComponent(option[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(option[2])}>
            <Text style={styles.option}>{decodeURIComponent(option[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(option[3])}>
            <Text style={styles.option}>{decodeURIComponent(option[3])}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={handlePrevPress}>
            <Text style={styles.buttonText}>PREV</Text>
        </TouchableOpacity>
        {ques!==14 &&
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>}
        {ques===14 &&
        <TouchableOpacity style={styles.button} onPress={handleShowResults}>
            <Text style={styles.buttonText}>SHOW RESULTS</Text>
        </TouchableOpacity>}
        
      </View>
      </View>}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
      paddingTop: 40,
      paddingHorizontal: 20,
      height: '100%',
    },
    top:{
        marginVertical: 16,
    },
    options:{
        marginVertical: 16,
        flex: 1,
    },
    bottom:{
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button:{
      backgroundColor: '#1A759F',
      padding: 12,
      paddingHorizontal: 18,
      borderRadius: 16,
      alignItems: 'center',
      marginBottom: 30
    },
    buttonText:{
      fontSize: 18,
      fontWeight:'600',
      color: 'white',

    },
    question:{
      fontSize: 26,
    },
    option:{
      fontSize: 16,
      fontWeight: '500',
      color: 'white',
    },
    optionButton:{
      padding: 12,
      marginVertical: 6,
      backgroundColor: '#34A0A4',
      borderRadius: 12,
    },
    parent:{
      height: '100%',
    },
    loader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
    loaderText: {
      fontSize: 24,

    }
})