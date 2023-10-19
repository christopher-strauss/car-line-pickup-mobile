//https://openbase.com/js/react-native-qrcode-svg

import React from "react";
import { VStack, Box } from 'native-base';
import QRCode from 'react-native-qrcode-svg';

const GenerateQRCodeScreen = ({ route, navigation }) => {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

  return ( 
    <Box border="1" borderRadius="md">
        <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
          <Box px="4" pt="4" alignItems="center">
            <QRCode
              value="Just some string value"
              logo={{uri: base64Logo}}
              logoSize={30}
              logoBackgroundColor='transparent'
            />4
          </Box>
          <Box px="4" pt="4" alignItems="center">
               Generate temp code goes here
            </Box>            
        </VStack>
    </Box>
    );
  };

export default GenerateQRCodeScreen;