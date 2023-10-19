/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NativeBaseProvider, extendTheme} from 'native-base';

const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };
  
const theme = extendTheme({ colors: newColorTheme });

export default function Main() {
    return (
        <NativeBaseProvider theme={theme}>
            <App />
        </NativeBaseProvider>
    );
  }
  
AppRegistry.registerComponent(appName, () => Main);
