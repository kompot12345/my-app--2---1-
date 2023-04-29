import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'

const Cards = () => {
  return (
    <View style={styles.container}>
      

      <Link href="home/cards/communication" asChild >
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <View style={[styles.box, styles.communicationBox]}>
            <Text style={styles.title}>Communication</Text>
          </View>
        </TouchableOpacity> 
      </Link>

      <Link href="home/cards/emotions" asChild >
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <View style={[styles.box, styles.emotionsBox]}>
            <Text style={styles.title}>Emotions</Text>
          </View>
        </TouchableOpacity> 
      </Link>

      <Link href="home/cards/behaviour" asChild >
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <View style={[styles.box, styles.behaviourBox]}>
            <Text style={styles.title}>Behaviour</Text>
          </View>
        </TouchableOpacity> 
      </Link>

      <Link href="home/cards/senses" asChild >
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <View style={[styles.box, styles.sensesBox]}>
            <Text style={styles.title}>Senses</Text>
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginVertical: 5,
  },
  box: {
    width: 300,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  emotionsBox: {
    backgroundColor: '#FF8934',
  },
  communicationBox: {
    backgroundColor: '#FBBC05',
  },
  sensesBox: {
    backgroundColor: '#1A73E8',
  },
  behaviourBox: {
    backgroundColor: '#7B1FA2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Cards;
