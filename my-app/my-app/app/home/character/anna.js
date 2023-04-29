import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const anna = () => {
  const screenWidth = Dimensions.get('window').width;
  const imageSize = screenWidth * 0.5; // 20% of screen width

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('./img/anna.png')}
            style={{ width: imageSize, height: imageSize, aspectRatio: 1, marginRight: 2 }}
          />
          <Text style={{ flex: 1 }}>
          Hello, my name is Anna. I'm 8 years old and I'm a deaf character in this game. I might not be able to hear like everyone else, but I'm just like you in every other way. I have dreams, fears, and feelings just like any other person.

I might communicate differently than you, but that doesn't mean we can't be friends or work together to achieve our goals in this game. I use American Sign Language to communicate

I hope that as we play this game together, you will get to know me for who I am and not just for my disability. Thank you for taking the time to understand my perspective. Let's have fun and make the most of our time together!
          </Text>
        </View>
      

      <View style={{ paddingBottom: 1, flex:1,flexDirection: "column", alignItems:'center'}}>
        <Link href="home/character/learn" asChild >
          <TouchableOpacity style={styles.button} >
            <View style={styles.containerm}>
              <View style={styles.imageContainer}>
                <Image source={require('./img/game.png')} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>learn</Text>
                <Text style={styles.description}>learn few words in sign language</Text>
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

export default anna;
