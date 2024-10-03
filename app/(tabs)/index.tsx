import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PostCard from '@/components/PostCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Footer from '@/components/Footer';


export default function HomeScreen() {
  return (
    
      <ScrollView
        style={styles.container}
    >
      <SafeAreaView style={{padding: 20}}>
        {/* Header */}
        <View style={styles.header} >
          <Text style={styles.headerTitle}>Business & First Class Reviews</Text>
          <FontAwesome name="bars" size={24} color="black" style={styles.menuIcon} />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { router.replace('/post') }}>
            <Text style={styles.buttonText}>Share Your Experience</Text>
            <FontAwesome name="pencil" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { router.replace('/ask') }}>
            <Text style={styles.buttonText}>Ask A Question</Text>
            <FontAwesome name="question-circle" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput placeholder="Search anything..." style={styles.searchInput} />
          <FontAwesome name="search" size={20} color="gray" />
        </View>
        <View style={styles.addSection}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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'
            
           }} 
          style={styles.addImage}
        />
        </View>
        <PostCard />
        <View style={styles.addSection}>
          <Text >ADS</Text>
        </View>
        <PostCard />
        
        </SafeAreaView>
        <Footer/>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuIcon: {
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    marginRight: 8,
    fontSize: 12,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
  },
  addSection: {
    height: 150,
    width: '100%',
    backgroundColor: '#ffff',
    marginBottom: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  }
});