import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const IMAGES = [
  require('./img/potty.png'),
  require('./img/play.png'),
  require('./img/eat.png'),
  require('./img/drink.png'),

];


const behaviour = () => {
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
          <Text style={styles.title}>Potty</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.box, selected.includes(1) && styles.selectedBox]}
          onPress={() => toggleSelection(1)}
        >
          <Image style={styles.image} source={IMAGES[1]} />
          <Text style={styles.title}>Play</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.box, selected.includes(2) && styles.selectedBox]}
          onPress={() => toggleSelection(2)}
        >
          <Image style={styles.image} source={IMAGES[2]} />
          <Text style={styles.title}>Eat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.box, selected.includes(3) && styles.selectedBox]}
          onPress={() => toggleSelection(3)}
        >
          <Image style={styles.image} source={IMAGES[3]} />
          <Text style={styles.title}>Drink</Text>
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
    backgroundColor: '#7B1FA2',
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
export default behaviour