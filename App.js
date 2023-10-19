import React from "react";
import type {Node} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import TabNavigator from './navigation/TabNavigator';
import {LoginStackNavigator} from './navigation/StackNavigator';
import {AuthContextProvider} from './context/AuthContext';
import { Init } from 'react-services';
import { BASE_SERVICES_URL } from "@env";


const App: () => Node = () => {


  const settings = { baseUrl: BASE_SERVICES_URL }
  new Init(settings);

  return (
      <AuthContextProvider>
        <NavigationContainer>
          <LoginStackNavigator />
        </NavigationContainer>
      </AuthContextProvider>
  );
}

export default App;
