import React, { useState, useEffect } from 'react';
import { useAxios } from '../hooks/useAxios';
import { ScrollView, VStack, Stack, Button, Input, Select } from "native-base";
import { ActivityIndicator } from 'react-native';

const VehicleScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [vehicle, setVehicle] = useState([]);

  const { response, loading, error } = useAxios({
    method: 'get',
    url: `/api/v1.0/vehicles/${id}`,
  });

  useEffect(() => {
      if (response !== null) {
        setVehicle(response);
      }
  }, [response]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        loading ? (
          <Stack>
            <ActivityIndicator size="large" color="#0000ff" />
          </Stack>
        ):(
          <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
            <Stack space={4} w="75%" maxW="300px">
              <Select variant="rounded" minWidth="200" accessibilityLabel="Vehicle Year" placeholder="Vehicle Year" >
                <Select.Item label="Parent" value="parent" />
                <Select.Item label="Child" value="child" />
              </Select>
              <Select variant="rounded" minWidth="200" accessibilityLabel="Vehicle Make" placeholder="Vehicle Make" >
                <Select.Item label="Parent" value="parent" />
                <Select.Item label="Child" value="child" />
              </Select>
              <Select variant="rounded" minWidth="200" accessibilityLabel="Vehicle Model" placeholder="Vehicle Model" >
                <Select.Item label="Parent" value="parent" />
                <Select.Item label="Child" value="child" />
              </Select>
              <Input variant="rounded" placeholder="Color" value={vehicle != null ? vehicle.color : ''} />
              <Input variant="rounded" placeholder="License Plate" value={vehicle != null ? vehicle.licensePlate : ''}/>
              <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
                <Button w="50%" onPress={() => navigation.goBack()}>Cancel</Button>
                <Button w="50%" isDisabled>Save</Button>
              </Stack>
            </Stack>
            <Stack p="4" space={1} />
          </VStack>
        )
      }
    </ScrollView>
  );
}

export default VehicleScreen;