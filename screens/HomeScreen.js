import React, { useEffect, useContext } from "react";
import { VStack, Stack, Box, Button, Image, Text } from 'native-base';
import QRCode from 'react-native-qrcode-svg';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = ({ route, navigation }) => {

  //TODO:  figure out how to Get this out of the session so we dont have to create a new auth context
  const { logout, userData } = useContext(AuthContext);

  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <Box border="1" borderRadius="md">
    <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
      <Box px="4" pt="4">
        Parent Name
      </Box>
      {userData && 
      <Stack p="4" space={1}>
      <Box px="4" pt="4">
        <Image size={100} resizeMode={"contain"} borderRadius={100} alt="Profile Picture" 
                    source={{ uri: userData.picture }}></Image>
      </Box> 
      <Box px="4" pt="4">
        <Text>{userData.name}</Text>
      </Box> 
      <Box px="4" pt="4">
        <Text>Provider Type :: {userData.providerType}</Text>
      </Box> 
      <Box px="4" pt="4">
        <Text>Provider Id :: {userData.providerId}</Text>
      </Box> 
      </Stack>
      } 
      <Box px="4">
        <QRCode
          value="http://www.google.com"
          logo={{uri: base64Logo}}
          logoSize={30}
          logoBackgroundColor='transparent'
        />
      </Box>
      <Box px="4" pt="4">
        Children Names
      </Box>
      <Box px="4" pb="4">
        Vehicle Information
      </Box>
      <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
        <Button w="50%">Print Pickup Code</Button>
      </Stack>
      <Box px="4" pt="4" alignItems="center">
           Read QR Code for admins only (Create Component)
        </Box>
        <Box px="4" pt="4">
          <Button w="50%" onPress={() => logout()}>Logout</Button>
        </Box>
    </VStack>
  </Box>
  );
};

export default HomeScreen;
