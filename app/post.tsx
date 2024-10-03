import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AirbnbRating } from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const Post = () => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [airline, setAirline] = useState('');
  const [flightClass, setFlightClass] = useState('');
  const [travelDate, setTravelDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [rating, setRating] = useState(4);
  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || travelDate;
    setShowDatePicker(Platform.OS === 'ios');
    setTravelDate(currentDate);
  };

  const handleSubmit = () => {
    // handle form submission
    console.log({
      departureAirport,
      arrivalAirport,
      airline,
      flightClass,
      travelDate,
      rating,
      imageUri,
    });
  };

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.headerSection}>
              <Text style={styles.shareText}>Share</Text>
              <TouchableOpacity onPress={()=> router.replace('/')}>
                  <FontAwesome name="close" size={24} color="black" />
              </TouchableOpacity>
          </View>
      {/* User Profile */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // Replace with real user image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Dianne Russell</Text>
      </View>

      {/* Image Upload */}
      <TouchableOpacity style={styles.imageUpload} onPress={selectImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
        ) : (
            
          <Text style={styles.uploadText}>Drop Your Image Here Or Browse</Text>
        )}
      </TouchableOpacity>

      {/* Form Fields */}
      <TextInput
        style={styles.input}
        placeholder="Departure Airport"
        value={departureAirport}
        onChangeText={setDepartureAirport}
      />
      <TextInput
        style={styles.input}
        placeholder="Arrival Airport"
        value={arrivalAirport}
        onChangeText={setArrivalAirport}
      />
      <TextInput
        style={styles.input}
        placeholder="Airline"
        value={airline}
        onChangeText={setAirline}
      />
      <TextInput
        style={styles.input}
        placeholder="Class"
        value={flightClass}
        onChangeText={setFlightClass}
      />

      {/* Date Picker */}
      <View style={styles.datePickerContainer}>
        {/* <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
          <Text style={styles.dateText}>Travel Date: {travelDate.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={travelDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )} */}
              <View>
                  
              </View>
              <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>Rating</Text>
                    <AirbnbRating
                    defaultRating={rating}
                    onFinishRating={setRating}
                    size={20}
                    showRating={false}
                    />
                </View>
      </View>

      {/* Rating */}
      

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  shareText: {
    fontSize: 25,
    fontWeight: 800
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageUpload: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 150,
  },
  uploadText: {
    color: '#888',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  datePickerContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  dateText: {
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  ratingText: {
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Post;
