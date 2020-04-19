import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainButton from './components/MainButton';
import DefaultStyles from './constants/deafultStyles';
import { Ionicons, Foundation } from '@expo/vector-icons';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={err => console.log(err)} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>EMERGENCY</Text>
          <Text style={styles.bodyText}>Rescue animals or call support for pets</Text>
        </View>
        <View styles={styles.buttonContainer}>
          <MainButton style={styles.button} onPress={() => { }}>Book Pet Ambulance</MainButton>
          <MainButton style={styles.button} onPress={() => { }}>Contact Vets</MainButton>
          <MainButton style={styles.button} onPress={() => { }}>Contact Pharmacy</MainButton>
          {/* <Button title="book Pet Ambulance" /> */}
        </View>
        <View>
          <Text style={{ ...DefaultStyles.bodyText, ...styles.contactext }}>Or Call us at 800-082-2800 for assistance</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.icons}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
            <Ionicons name="md-home" size={35} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
            <Foundation name="guide-dog" size={35} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.icons, ...styles.home }}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
            <Ionicons name="md-add-circle" size={60} color="rgb(82, 195, 210)" />
          </TouchableOpacity>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
            <Foundation name="first-aid" size={35} color="rgb(82, 195, 210)" />
          </TouchableOpacity>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
            <Ionicons name="md-chatboxes" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ccc'
  },
  content: {
    margin: 20,
    marginTop: 40,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    paddingHorizontal: 30,
    marginHorizontal:22
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: 'hidden',
    marginTop: 0,
    borderColor: 'black',
    borderWidth: 3
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24
  },
  bodyText: {
    fontFamily: 'open-sans'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red'
  },
  button: {
  },
  contactext: {
    fontSize: 12
  },
  iconContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 20
  },
  icons: {
    paddingHorizontal: 20,
  },
  home: {
    marginTop: -25,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 200,
    paddingBottom: 30
  }
});
