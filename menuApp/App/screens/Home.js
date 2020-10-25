import React, { Component } from "react";
import { Text,Image,TouchableOpacity, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper';
import { ScrollView } from "react-native-gesture-handler";
//import { SafeAreaView } from "react-native-safe-area-context";
//import styles from '../components/styles';
import { createStackNavigator } from '@react-navigation/stack'
//import MyStack from './MyStack';
export default class HomeScreen extends Component
{
  render(){
    const {navigation}=this.props;
    return(
      
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={true}
            height={200}
            activeDotColor="#FF6347">
            <View style={styles.slide}>
              <Image
                source={require('../images/banners/b1.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../images/banners/b2.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../images/banners/b3.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.push("Appetizer")
            }
            >
              <View style={styles.categoryIcon}>
                <Icon name="apple" size={35} color="#FF6347"></Icon>
              </View>
              <Text style={styles.categoryBtnTxt}>Món khai vị</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.push('MainCourse')
            }
            >
              <View style={styles.categoryIcon}>
                <Icon name="apple" size={35} color="#FF6347"></Icon>
              </View>
              <Text style={styles.categoryBtnTxt}>Món chính</Text>
          </TouchableOpacity>
        
        </View>
        <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
                navigation.push('Dessert')
            }
            >
              <View style={styles.categoryIcon}>
                <Icon name="apple" size={35} color="#FF6347"></Icon>
              </View>
              <Text style={styles.categoryBtnTxt}>Món tráng miệng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
                navigation.push('Drink')
            }
            >
              <View style={styles.categoryIcon}>
                <Icon name="apple" size={35} color="#FF6347"></Icon>
              </View>
              <Text style={styles.categoryBtnTxt}>Đồ uống</Text>
          </TouchableOpacity>
        </View>
  
        </ScrollView>
        
      </View>
    );
  }
  
}

//export default HomeScreen;
const styles=StyleSheet.create({
  container:{
    flex:1,
    
  },
  text:{
    fontSize:50
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#CC9900' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
});
