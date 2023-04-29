import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const IMAGES = [
  require('./img/me.png'),
  require('./img/you.png'),
  require('./img/help.png'),
  require('./img/want.png'),
  require('./img/notwant.png'),
  require('./img/hands.png'),

];


const communication = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.box, selected.includes(0) && styles.selectedBox]}
          onPress={() => toggleSelection(0)}
        >
          <Image style={styles.image} source={IMAGES[0]} />
          <Text style={styles.title}>Me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.box, selected.includes(1) && styles.selectedBox]}
          onPress={() => toggleSelection(1)}
        >
          <Image style={styles.image} source={IMAGES[1]} />
          <Text style={styles.title}>You</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.box, selected.includes(2) && styles.selectedBox]}
          onPress={() => toggleSelection(2)}
        >
          <Image style={styles.image} source={IMAGES[2]} />
          <Text style={styles.title}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.box, selected.includes(3) && styles.selectedBox]}
          onPress={() => toggleSelection(3)}
        >
          <Image style={styles.image} source={IMAGES[3]} />
          <Text style={styles.title}>I want</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.box, selected.includes(4) && styles.selectedBox]}
          onPress={() => toggleSelection(4)}
        >
          <Image style={styles.image} source={IMAGES[4]} />
          <Text style={styles.title}>I do not want</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.box, selected.includes(5) && styles.selectedBox]}
          onPress={() => toggleSelection(5)}
        >
          <Image style={styles.image} source={IMAGES[5]} />
          <Text style={styles.title}>Hold hands</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 120,
    height: 150,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBBC05',
  },

  selectedBox: {
    backgroundColor: '#037D2B',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
});
export default communication