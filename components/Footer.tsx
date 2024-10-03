import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.title}>Business & First Class Reviews</Text>
      
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>FAQ's</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Terms Of Service</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Cookie Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Contact</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.copyright}>
            <Text style={styles.copyrightText}>
                © 2024 Business & First Class Reviews
            </Text>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#1E1E1E',
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  linkText: {
    color: '#FFF',
    fontSize: 16,
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: '#ffff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  copyrightText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default Footer;
