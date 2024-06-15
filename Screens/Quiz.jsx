import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(20)

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

  useEffect(() => {
    let timerInterval;
  
    if (ques < 15 && !selectedAnswer) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
  
    if (timer === 0) {
      clearInterval(timerInterval);
      handleTimerEnd() // Automatically select the correct answer
    }
  
    return () => {
      clearInterval(timerInterval);
    };
  }, [ques, selectedAnswer, timer]);


  const handleNextPress = () => {
    if (ques < 14) {
      setQues((prevQues) => prevQues + 1);
      setOption(generateOptionsAndShuffle(questions[ques + 1]));
      setSelectedAnswer(null); // Reset selected answer
      setTimer(20); // Reset timer
    } else {
      handleShowResults();
    } 
  };

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
    setSelectedAnswer(_option);
    if (_option === questions[ques].correct_answer) {
      setScore((prevScore) => prevScore + 5);
    }

    if (ques === 14) {
      handleShowResults();
    }
  };

  const handleTimerEnd = () => {
    Alert.alert(
      'Time Up!',
      'You ran out of time to answer the question.',
      [
        {
          text: 'Next Question',
          onPress: handleNextPress,
          onDismiss: () => {
            clearInterval(timerInterval);
            setTimer(20);
          },
        },
      ],
    );
    setSelectedAnswer(questions[ques].incorrect_answers[0]); // Set the selected answer to an incorrect option
  };


  
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
        <TouchableOpacity
          style={[styles.optionButton, selectedAnswer === option[0] && {backgroundColor: '#1A759F'}]}
          onPress={() => handleSelectOption(option[0])}
        >
          <Text style={styles.option}>{decodeURIComponent(option[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedAnswer === option[1] && {backgroundColor: '#1A759F'}]}
          onPress={() => handleSelectOption(option[1])}
        >
          <Text style={styles.option}>{decodeURIComponent(option[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedAnswer === option[2] && {backgroundColor: '#1A759F'}]}
          onPress={() => handleSelectOption(option[2])}
        >
          <Text style={styles.option}>{decodeURIComponent(option[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedAnswer === option[3] && {backgroundColor: '#1A759F'}]}
          onPress={() => handleSelectOption(option[3])}
        >
          <Text style={styles.option}>{decodeURIComponent(option[3])}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white', paddingBottom: 30 }}>
          Time Remaining: {timer} seconds
        </Text>
      </View> 
    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {selectedAnswer && (
          <Text style={[styles.answerText, questions[ques].correct_answer === selectedAnswer && {color: 'green'}]}>
            {questions[ques].correct_answer === selectedAnswer ? 'Correct' : 'Incorrect'}
          </Text>
        )}
      </View>
      <View style={styles.answer}>
      {selectedAnswer && (
        <Text style={[styles.answerText, questions[ques].correct_answer === selectedAnswer && {color: 'green'}]}>
          Correct Answer: {decodeURIComponent(questions[ques].correct_answer)}
        </Text>
      )} 
      </View>
      <View style={styles.bottom}>
        {ques > 0 &&
          <TouchableOpacity style={styles.button} onPress={handlePrevPress}>
            <Text style={styles.buttonText}>PREV</Text>
          </TouchableOpacity>
        }
        {ques!==14 &&
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>}
        {ques===14 &&
        <TouchableOpacity style={styles.button} onPress={handleShowResults}>
            <Text style={styles.buttonText}>SHOW RESULTS</Text>
        </TouchableOpacity>} 
        {timer === 0 && (
          <TouchableOpacity style={styles.button} onPress={handleTimerEnd}>
            <Text style={styles.buttonText}>Time's Up</Text>
          </TouchableOpacity>
        )}
        
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
      backgroundColor: '#480ca8'
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
      color: 'white'
    },
    option:{
      fontSize: 16,
      fontWeight: '500',
      color: 'white',
    },
    optionButton: {
      padding: 12,
      marginVertical: 6,
      backgroundColor: '#34A0A4',
      borderRadius: 12,
    },
    answer: {
      backgroundColor: '#34A0A4',
      padding: 12,
      borderRadius: 12,
      marginBottom: 16,
    },
    answerText: {
      fontSize: 16,
      fontWeight: '500',
      color: 'white',
    },
    parent:{
      height: '100%',
    },
    loader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    loaderText: {
      fontSize: 24,
      color: 'white'

    }
})