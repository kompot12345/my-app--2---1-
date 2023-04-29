import React, { useState } from 'react';
import { View, Text,StyleSheet, TextInput, FlatList, TouchableOpacity, Linking } from 'react-native';

const data = [
  {
    city: 'Астана',
    links: [
      {
        url: 'https://go.2gis.com/xynsl6',
        description: 'ABA-центр Alua'
      },
      {
        url: 'https://go.2gis.com/ndx6ee',
        description: 'Реабилитационный центр «Қамқорлық»'
      },
      {
        url: 'https://go.2gis.com/xo3u7',
        description: 'Жас Ұрпақ, центр развития детей с особенностями развития'
      },
      
    ]
  },
  {
    city: 'Атырау',
    links: [
      {
        url: 'https://go.2gis.com/9712t',
        description: 'Зейін'
      },
      {
        url: 'https://go.2gis.com/3gpzh',
        description: 'Қамқорлық'
      },
      {
        url: 'https://go.2gis.com/e9j9z3',
        description: 'Областной детский реабилитационный центр'
      }
    ]
  },
  {
    city: 'Қарағанды',
    links: [
      {
        url: 'https://go.2gis.com/6yfpfb',
        description: 'Шипагер'
      },
      {
        url: 'https://go.2gis.com/6119a',
        description: 'Бала'
      }
    ]
  },
  {
    city: 'Ақтөбе',
    links: [
      {
        url: 'https://go.2gis.com/cw5qa',
        description: 'Жас Ұрпақ, центр развития детей с особенностями развития'
      }
    ]
  },
  {
    city: 'Ақтау',
    links: [
      {
        url: 'https://go.2gis.com/yic4w',
        description: 'Специальная (коррекционная) школа №2 для детей с умственной отсталостью'
      },
      {
        url: 'https://go.2gis.com/zdepyx',
        description: 'Періште ​Центр психологии, коррекции и развития детей'
      },
      {
        url: 'https://go.2gis.com/wrxntg',
        description: 'Талпын ​Инклюзивный детский сад'
      }
    ]
  }
];

const App = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = text => {
    const filtered = data.filter(item => item.city.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
    setQuery(text);
  };

  const handleLinkPress = url => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cityContainer}>
        <Text style={styles.cityName}>{item.city}</Text>
        {item.links.map(link => (
          <TouchableOpacity key={link.url} onPress={() => handleLinkPress(link.url)}>
            <View style={styles.linkContainer}>
              <Text style={styles.linkDescription}>{link.description}</Text>
              <Text style={styles.linkUrl}>{link.url}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search cities"
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.city}
        renderItem={renderItem}
        ListEmptyComponent={() => <Text style={styles.emptyList}>No cities found</Text>}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 16,
  },
  cityContainer: {
    marginBottom: 16,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#037D2B'
  },
  linkContainer: {
    marginVertical: 8,
  },
  linkDescription: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  linkUrl: {
    fontSize: 14,
    color: 'gray',
  },
  emptyList: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
export default App;
