import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const Ask = () => {
  const [message, setMessage] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };


  const handleSubmit = () => {
    // handle form submission
    console.log({
      message,
      imageUri,
    });
  };

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.headerSection}>
              <Text style={styles.shareText}>Ask A Question</Text>
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
        placeholder="Write your message"
        value={message}
        onChangeText={setMessage}
        multiline={true}
        numberOfLines={5}
      />
      
      

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
    textAlignVertical: 'top',
    height: 150
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

export default Ask;
