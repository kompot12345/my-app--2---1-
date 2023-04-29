import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';
import { Link } from 'expo-router';
const character = () => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.button} >
        <Image
          source={require('./img/game.jpg')}
          style={styles.buttonImage}
        />
      </TouchableOpacity> */}
      <Link href="home/character/arman" asChild >
      <TouchableOpacity style={styles.button} >
      <View style={styles.containerm}>
      <View style={styles.imageContainer}>
        <Image source={require('./img/arman.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Arman</Text>
        
      </View>
    </View>
      </TouchableOpacity> 
      </Link>
      <Link href="home/character/anna" asChild >
      <TouchableOpacity style={styles.button} >
      <View style={styles.containerm}>
      <View style={styles.imageContainer}>
        <Image source={require('./img/anna.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Anna</Text>
       
      </View>
    </View>
      </TouchableOpacity> 
    </Link>
    

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    button: {
      width: 300,
      height: 200,
    },
    buttonImage: {
      flex: 1,
      width: undefined,
      height: undefined,
      resizeMode: 'contain',
    }, 
    containerm: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      imageContainer: {
        marginRight: 10,
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 5,
      },
      textContainer: {
        flex: 1,
        marginLeft:40,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'#037D2B'
      },
      description: {
        fontSize: 14,
      },
  });
export default character