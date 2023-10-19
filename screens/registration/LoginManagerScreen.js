import React, { useEffect, useContext } from "react";
import axios from 'axios';
import { VStack, Box, FlatList, Heading, Center, Stack } from 'native-base';
import { ActivityIndicator } from 'react-native';
import { AuthenticationUserService } from 'react-services';
import { StackActions } from "@react-navigation/native";
import { AuthContext } from '../../context/AuthContext';


const LoginManagerScreen = ({ navigation }) => {

  //TODO:  Can we get these from session
  const { loading, loggedIn, userData } = useContext(AuthContext);
  const authenticationUserService = new AuthenticationUserService();

  useEffect(() => {
    if (loggedIn && !loading && userData) {
          //Create an IIFE to get the user info 
          (async () => {            
            const authenticationUser = await authenticationUserService.get(userData.providerId, userData.providerType);

            //If the user was found and they are associated to a family member record or and employee 
            //record then send them to the app else send them to the registration wizard
            if(authenticationUser && (authenticationUser.familyMemberId || authenticationUser.employeeId)) {
              navigation.dispatch(StackActions.replace("TabNavigator"));              
            }
            else {
              navigation.dispatch(StackActions.replace("RegistrationTypeScreen"));
            }
          })();
    }
  }, [loggedIn, userData]);

  return (
    <Stack w="100%" h="100%" alignItems="center" justifyContent="center">
    <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center"> 
        {loading && (
                  <Stack space={4} w="75%" maxW="300px">
          <ActivityIndicator size="large" color="#0000ff" />
          </Stack>
        )}
    </VStack>
    </Stack>
  );
}

export default LoginManagerScreen;