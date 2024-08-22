import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Form2= () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!address || !city || !state || !zip) {
      Alert.alert('Please fill in all fields');
      return;
    }

    
    if (isNaN(zip) || zip.length < 4) {
      Alert.alert('Please enter a valid zip code');
      return;
    }

    
    navigation.navigate('Form3');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter address"
      />
      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Enter your city"
        keyboardType="email-address"
      />
      <Text style={styles.label}>State:</Text>
      <TextInput
        style={styles.input}
        value={state}
        onChangeText={setState}
        placeholder="Enter your state"
        
      />
      <Text style={styles.label}>Zip:</Text>
      <TextInput
        style={styles.input}
        value={zip}
        onChangeText={setZip}
        placeholder="Enter your zipcode"
        keyboardType="phone-pad"
        
      />
      <TouchableOpacity title="Submit" onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: 50,
      backgroundColor: '#80AF81',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 8,
      marginBottom: 16,
    },
    button: {
        backgroundColor: '#D6EFD8', 
        paddingVertical: 12, 
        paddingHorizontal: 20, 
        borderRadius: 8, 
        alignItems: 'center', 
        justifyContent: 'center', 
      },
      buttonText: {
        color: 'black', 
        fontSize: 16, 
        fontWeight: 'bold', 
      },
  });