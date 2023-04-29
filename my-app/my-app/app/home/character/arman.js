import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const arman = () => {
  const screenWidth = Dimensions.get('window').width;
  const imageSize = screenWidth * 0.5; // 20% of screen width

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('./img/arman.png')}
            style={{ width: imageSize, height: imageSize, aspectRatio: 1, marginRight: 2 }}
          />
          <Text style={{ flex: 1 }}>
          Hi there, my name is Arman and I'm a 7-year-old game character. I'm so excited to meet you! I'm not like other characters you might have met before because I have autism.

Sometimes things can be a little overwhelming for me, like communication with others and loud noises, but I have some special tools and strategies that help me navigate my world. 
I love exploring new places and meeting new friends, and I hope we can have a lot of fun together in this game world!
          </Text>
        </View>
      

      <View style={{ paddingBottom: 1, flex:1,flexDirection: "column", alignItems:'center'}}>
        <Link href="home/character/count" asChild >
          <TouchableOpacity style={styles.button} >
            <View style={styles.containerm}>
              <View style={styles.imageContainer}>
                <Image source={require('./img/game.png')} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>counting</Text>
                <Text style={styles.description}>count how many objects </Text>
              </View>
            </View>
          </TouchableOpacity> 
        </Link>

        <Link href="home/character/twobox" asChild >
          <TouchableOpacity style={styles.button} >
            <View style={styles.containerm}>
              <View style={styles.imageContainer}>
                <Image source={require('./img/game.png')} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>two boxes</Text>
                <Text style={styles.description}>separate objects into two boxes</Text>
              </View>
            </View>
          </TouchableOpacity> 
        </Link>
      </View>
      </ScrollView>
    </View>
  );
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
    height: 100,
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
    marginTop: 5,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
  footer: {
    marginBottom: 20,
  }
});

export default arman;
