import React, { useEffect, useContext } from "react";
import { VStack, Box, FlatList, Heading, Center, Stack } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator } from 'react-native';
import { MyFamilyStackNavigator, MyVehiclesStackNavigator, MoreStackNavigator } from '../navigation/StackNavigator';

import HomeScreen from '../screens/HomeScreen';
import GenerateQRCodeScreen from '../screens/GenerateQRCodeScreen';
import PickupHistoryScreen from '../screens/PickupHistoryScreen';
import { AuthContext } from '../context/AuthContext';

const headerImageStyle = {
  userImage:{
    height: 50,
    width: 50,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  }
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  
  const { loading } = useContext(AuthContext);

  return (
    <VStack h="100%">
    {
      loading ? (
        <Stack w="100%" h="100%" alignItems="center" justifyContent="center">
          <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center"> 
            <ActivityIndicator size="large" color="#0000ff" />
          </VStack>
        </Stack>
      ):(    
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
              iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'My Family') {
              iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'My Vehicles') {
              iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Pickup History') {
              iconName = focused ? 'reload' : 'reload-outline';
          } else if (route.name === 'Generate') {
              iconName = focused ? 'qr-code' : 'qr-code-outline';
          }  else if (route.name === 'More') {
            iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
          }  

          return <Ionicons name={ iconName } size={ size } color={ color } />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerShown: true
      })}
      >
      {/* If a tab has more then one screen to navigate to create a stack and configure it */}
      <Tab.Screen name="Home" component={ HomeScreen } />
      <Tab.Screen name="My Family" component={ MyFamilyStackNavigator } />
      <Tab.Screen name="My Vehicles" component={ MyVehiclesStackNavigator } />
      <Tab.Screen name="Pickup History" component={ PickupHistoryScreen } />
      <Tab.Screen name="Generate" component={ GenerateQRCodeScreen } />
      <Tab.Screen name="More" component={ MoreStackNavigator } />
    </Tab.Navigator> 
          )
        }
   </VStack>         
  );
};

export default TabNavigator;