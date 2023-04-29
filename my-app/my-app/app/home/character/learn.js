import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const images = [
  { title: 'Stop', uri: require('./img/stop.jpg') },
  { title: 'Deaf', uri: require('./img/deaf.jpg') },
  { title: 'Hearing', uri: require('./img/hearing.jpg') },
  { title: 'Sorry', uri: require('./img/sorry.jpg') },
];

const GameScreen = () => {
  const [points, setPoints] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [roundImages, setRoundImages] = useState([]);
  const [showInitialImage, setShowInitialImage] = useState(true);

  const startGame = () => {
    const shuffledImages = shuffleArray(images);
    const roundImages = shuffledImages.slice(0, 4);
    setRoundImages(roundImages);
    setCurrentRound(currentRound + 1);
    setShowInitialImage(false);
  };

  const handleAnswer = (answer) => {
    const currentImage = roundImages[currentRound - 1];
    if (answer === currentImage.title) {
      setPoints(points + 1);
    }
    if (currentRound === 4) {
      endGame();
    } else {
      setCurrentRound(currentRound + 1);
    }
  };

  const endGame = () => {
    alert(`You scored ${points} points!`);
    setPoints(0);
    setCurrentRound(0);
    setShowInitialImage(true);
  };

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <View style={styles.container}>
      {showInitialImage && (
        <Image source={require('./img/answers.jpg')} style={styles.image} />
      )}
      {!showInitialImage && (
        <Image source={roundImages[currentRound - 1] ? roundImages[currentRound - 1].uri : null} style={styles.image} />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer('Stop')}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer('Deaf')}>
          <Text style={styles.buttonText}>Deaf</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer('Hearing')}>
          <Text style={styles.buttonText}>Hearing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer('Sorry')}>
          <Text style={styles.buttonText}>Sorry</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={startGame}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 300,
      height: 300,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    startButton: {
      backgroundColor: '#008CBA',
      padding: 10,
      borderRadius: 5,
    },
    startButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
export default GameScreen  