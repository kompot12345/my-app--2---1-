import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

const imageSources = [
  require('./img/fish.png'),
  require('./img/taco.png'),
  require('./img/pizza.png'),
  require('./img/milk.png'),
];

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomImageSource = () => {
  return imageSources[generateRandomNumber(0, imageSources.length - 1)];
};

const generateRandomImages = (count) => {
  const images = [];
  const imageSource = generateRandomImageSource();
  for (let i = 0; i < count; i++) {
    images.push(imageSource);
  }
  return images;
};

const count = () => {
  const [level, setLevel] = useState(1);
  const [points, setPoints] = useState(0);
  const [numberToMatch, setNumberToMatch] = useState(null);
  const [imagesToMatch, setImagesToMatch] = useState([]);

  useEffect(() => {
    n=generateRandomNumber(1, 9)
    setNumberToMatch(n);
    setImagesToMatch(generateRandomImages(n));
  }, [level]);

  const handleButtonClick = (number) => {
    if (number === numberToMatch) {
      setPoints((prevPoints) => prevPoints + 1);
    }
    setLevel((prevLevel) => prevLevel + 1);
  };

  useEffect(() => {
    if (level === 6) {
      setLevel(1);
      setPoints(0);
    }
  }, [level]);


  const CustomButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    
    <View style={styles.container}>
        
      <View style={styles.imagesContainer}>
        {imagesToMatch.map((imageSource, index) => (
          <Image key={index} source={imageSource} style={styles.image} />
        ))}
      </View>
      
      <View style={styles.containerm}>
      <View style={styles.square}>
      <Text>Level: {level}</Text>
        </View>
      <View style={styles.square} />
      <View style={styles.square}><Text>Points: {points}</Text></View>
    </View>

  {/* <View style={styles.infoContainer}>
        <Text>Level: {level}</Text>
        <Text>Points: {points}</Text>
      </View> */}
      <View style={styles.buttonsContainer}>
  <View style={styles.row}>
    {[1, 2, 3].map((number) => (
      <CustomButton key={number} title={number.toString()} onPress={() => handleButtonClick(number)} />
    ))}
  </View>
  <View style={styles.row}>
    {[4, 5, 6].map((number) => (
      <CustomButton key={number} title={number.toString()} onPress={() => handleButtonClick(number)} />
    ))}
  </View>
  <View style={styles.row}>
    {[7, 8, 9].map((number) => (
      <CustomButton key={number} title={number.toString()} onPress={() => handleButtonClick(number)} />
    ))}
  </View>
</View>
    </View>
  );
};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagesContainer: {
      flex: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
      margin: 5,
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonsContainer: {
   
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
      },
      button: {
        width: 40,
        height: 40,
        margin: 5,
        backgroundColor: '#037D2B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
      },
      buttonText: {
        color: 'white',
        fontSize: 30,
      },
      containerm: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      square: {
        flex: 1,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
      },
  });
  export default count