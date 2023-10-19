import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MyFamilyScreen from '../screens/MyFamilyScreen';
import FamilyMemberScreen from '../screens/FamilyMemberScreen';
import MyVehiclesScreen from '../screens/MyVehiclesScreen';
import VehicleScreen from '../screens/VehicleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import HelpScreen from '../screens/HelpScreen';
import LoginManagerScreen from '../screens/registration/LoginManagerScreen';
import FamilyRegistrationWizardScreen from '../screens/registration/FamilyRegistrationWizardScreen';
import EmployeeRegistrationWizardScreen from '../screens/registration/EmployeeRegistrationWizardScreen';
import RegistrationTypeScreen from '../screens/registration/RegistrationTypeScreen';
import MoreScreen from '../screens/MoreScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false
};

const MyFamilyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MyFamilyScreen" component={MyFamilyScreen} />
      <Stack.Screen name="FamilyMemberScreen" component={FamilyMemberScreen} />
    </Stack.Navigator>
  );
}

const MyVehiclesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MyVehiclesScreen" component={MyVehiclesScreen} />
      <Stack.Screen name="VehicleScreen" component={VehicleScreen} />
    </Stack.Navigator>
  );
}

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MoreScreen" component={MoreScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />            
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />      
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
    </Stack.Navigator>
  );
}

const LoginStackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={screenOptionStyle}>  
        <Stack.Screen name="LoginManagerScreen" component={LoginManagerScreen} />        
        <Stack.Screen name="TabNavigator" component={TabNavigator} />   
        <Stack.Screen name="FamilyRegistrationWizardScreen" component={FamilyRegistrationWizardScreen} />
        <Stack.Screen name="EmployeeRegistrationWizardScreen" component={EmployeeRegistrationWizardScreen} /> 
        <Stack.Screen name="RegistrationTypeScreen" component={RegistrationTypeScreen} /> 
      </Stack.Navigator> 
  );
}

export { LoginStackNavigator, MyFamilyStackNavigator, MyVehiclesStackNavigator, MoreStackNavigator };