import React, { Component } from 'react';
import { 
Text,
View,
StyleSheet,
Image,
ImageBackground,
SafeAreaView,
Platform,
StatusBar 
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
      return (
        <View >
          <SafeAreaView />
          <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
            <View style={styles.titleBar}>
              <Image source={require('../assets/main-icon.png')} style={{ width: 150, height: 150 }} />
              <Text style={styles.titleText}>App</Text>
              <Text style={styles.titleText}>Estelar</Text>
            </View>
  
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SpaceCraft')}>
              <Text style={styles.routeText}>Naves Espaciais</Text>
              <Image source={require('../assets/space-crafts.png')} style={styles.routeImage} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
  }



 const styles=StyleSheet({
    bacKgroundimage:{
    flex: 1,
    resizeMode: 'cover',
    },
    routeImage: {
    position: 'absolute',
    top: -20,
    right: -15,
    height: 80,
    width: 80,
    resizeMode: 'contain',
    }
    
 })