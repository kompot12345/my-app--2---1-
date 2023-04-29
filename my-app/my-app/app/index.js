import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Image
    source={require('./img/logo.png')}
    style={{ width: 100, height: 100, marginBottom: 10, marginTop: 20, borderRadius: 25, }} />
      <Image
        source={require('./img/intro.png')}
        style={{ width: 300, height: 300, marginBottom: 10, marginTop: 20 }} />
      <View style={styles.content}>
        <Link style={styles.button} href="/registration">Let's start!</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "green",
    color: "white",
    padding: 16,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
