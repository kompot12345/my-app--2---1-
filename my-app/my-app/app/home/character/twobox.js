import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const picturesArray = [
    { link: require('./img/pizza.png'), type: 'food' },
    { link: require('./img/shark.png'), type: 'aqua' },
    { link: require('./img/taco.png'), type: 'food' },
    { link: require('./img/dolphin.png'), type: 'aqua' },
    { link: require('./img/milk.png'), type: 'food' },
    { link: require('./img/fish.png'), type: 'aqua' },
    { link: require('./img/grapes.png'), type: 'food' },
    { link: require('./img/turtle.png'), type: 'aqua' },
    { link: require('./img/meat.png'), type: 'food' },
    { link: require('./img/octopus.png'), type: 'aqua' },
  ];

const twobox = () => {
    const [level, setLevel] = useState(1);
    const [points, setPoints] = useState(0);
    const [mainPic, setMainPic] = useState(picturesArray[0]);
  
    const handleBackpackClick = () => {
      if (mainPic.type === 'aqua') {
        setPoints(points + 1);
      }
      nextLevel();
    };
  
    const handleFridgeClick = () => {
      if (mainPic.type === 'food') {
        setPoints(points + 1);
      }
      nextLevel();
    };
  
    const nextLevel = () => {
      if (level < 5) {
        if(level!=5){
        setLevel(level + 1);}
        setMainPic(picturesArray[Math.floor(Math.random() * picturesArray.length)]);
      } else {
        // game finished
        alert(`Game over. You scored ${points} out of 5 points.`);
        setLevel(1);
        setPoints(0);
        setMainPic(picturesArray[0]);
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Level: {level}</Text>
          <Text style={styles.title}>Points: {points}</Text>
        </View>
        <View style={styles.middle}>
          <Image style={styles.mainPic} source={mainPic.link} />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={handleBackpackClick}>
            <Image style={styles.choicePic} source={require('./img/aqua.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFridgeClick}>
            <Image style={styles.choicePic} source={require('./img/fridge.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    top: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: 50,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    middle: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainPic: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    bottom: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: 50,
    },
    choicePic: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
  });

export default twobox