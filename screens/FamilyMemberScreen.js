import React, { useState, useEffect } from 'react';
import { useAxios } from '../hooks/useAxios';
import { ScrollView, VStack, Stack, Checkbox, Button, Input, Select, Icon, Text, Image } from "native-base";
import { ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FamilyMemberScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [familyMember, setFamilyMember] = useState([]);

  //TODO:  Need to add the dev base url in the global config settings and append it here
  const { response, loading, error } = useAxios({
    method: 'get',
    url: `/api/v1.0/familymembers/${id}`,
  });

  useEffect(() => {
      if (response !== null) {
        setFamilyMember(response);
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
              <Stack alignItems="center" justifyContent="center">
                <Image size={100} resizeMode={"contain"} borderRadius={100} alt="Profile Picture" 
                  source={require('../assets/no-profile-picture.jpg')}></Image>
              </Stack>
              <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
                Choose Photo
              </Button>
              <Select variant="rounded" minWidth="200" accessibilityLabel="Choose Family Member Type" placeholder="Choose Family Member Type" >
                <Select.Item label="Parent" value="parent" />
                <Select.Item label="Child" value="child" />
              </Select>
              <Input variant="rounded" placeholder="First Name" value={familyMember != null ? familyMember.firstName : ''} />
              <Input variant="rounded" placeholder="Last Name" value={familyMember != null ? familyMember.lastName : ''}/>
              <Input variant="rounded" placeholder="Email" value={familyMember != null ? familyMember.email : ''} />
              <Input variant="rounded" placeholder="Phone" value={familyMember != null ? familyMember.phone : ''} />
              <Input variant="rounded" placeholder="Description" />
              <Select variant="rounded" minWidth="200" accessibilityLabel="Choose Travel Preference" placeholder="Choose Travel Preference" >
                <Select.Item label="Vehicle" value="vehicle" />
                <Select.Item label="Bus" value="bus" />
                <Select.Item label="Walker" value="walker" />
              </Select>
              <Checkbox value="1">
                Administrator?
              </Checkbox>
              <Text fontSize="sm">
                  Adminstrators will be allowed to modify all information associated with this account.
              </Text>
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

export default FamilyMemberScreen;