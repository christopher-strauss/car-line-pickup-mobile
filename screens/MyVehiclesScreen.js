import React, { useState, useEffect } from 'react';
import { useAxios } from '../hooks/useAxios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
  VStack, 
  Box, 
  FlatList, 
  Heading, 
  Center, 
  Stack
} from 'native-base';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';

const MyVehiclesScreen = ({navigation}) => {

  const [myFamily, setData] = useState([]);

  const { response, loading, error } = useAxios({
      method: 'get',
      url: '/api/v1.0/families/16B8147F-B7EC-4836-9488-9BDC4351CAFC',
    });

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

  return (
      <VStack h="100%">
        <Stack p="4" space={1} />
        {
          loading ? (
            <Box alignItems="center">
              <ActivityIndicator size="large" color="#0000ff" />
            </Box>
          ):(
            <Box>
              <FlatList data={myFamily.vehicles} renderItem={({ item }) => 
                <Box alignItems="center">                
                  <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                  }} _web={{
                    shadow: 2,
                    borderWidth: 0
                  }} _light={{
                    backgroundColor: "gray.50"
                  }}>
                  <TouchableOpacity 
                    onPress={() => {
                    navigation.navigate('Vehicle', {
                      id: item.id
                    });
                  }}>
                    <Box>
                      <Image size="m" resizeMode={"contain"} 
                        source={require('../assets/no-profile-picture.jpg')} alt="image" />
                      <Center bg="violet.500" _dark={{
                        bg: "violet.400"
                        }} _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            {item.year}
                      </Center>
                    </Box>
                    <Stack p="4" space={1}>
                      <Heading size="md" ml="-1">
                        {item.color} {item.make} {item.model}
                      </Heading>
                      <Text fontSize="xs" _light={{
                          color: "violet.500"
                        }} _dark={{
                          color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            License Plate: {item.licensePlate}
                      </Text>
                  </Stack>
                </TouchableOpacity> 
                </Box>
                <Stack p="4" space={1} />
              </Box> } keyExtractor={item => item.id} />
            </Box>
          )
        }
        <TouchableOpacity style={styles.plusbutton} 
                onPress={() => {
                  navigation.navigate('VehicleScreen', {
                    id: ''
                  });
                }}>
          <Ionicons name='add-outline' size={30} color='#000000' />
        </TouchableOpacity>
        <Stack p="4" space={1} />
      </VStack>
    );
  }

export default MyVehiclesScreen;

const styles = StyleSheet.create({
 plusbutton: {
  borderWidth: 1,
  borderColor: 'rgba(0,0,0,0.2)',
  alignItems: 'center',
  justifyContent: 'center',
  width: 70,
  position: 'absolute',
  bottom: 10,
  right: 10,
  height: 70,
  backgroundColor: '#fff',
  borderRadius: 100,
}
});    