import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, VStack, Stack, Checkbox, Button, Input, Select, Icon, Text, Image } from "native-base";

const NewEmployeeScreen = ({ navigation }) => {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
            <Stack p="4" space={1} />
            <Stack space={4} w="75%" maxW="300px">
                <Stack alignItems="center" justifyContent="center">
                  <Text fontSize="lg">
                      Please note that your information will need to be approved by your school prior to having access.
                  </Text>
                </Stack>
                <Stack alignItems="center" justifyContent="center">
                  <Image size={100} resizeMode={"contain"} borderRadius={100} alt="Profile Picture" 
                    source={require('../assets/no-profile-picture.jpg')}></Image>
                </Stack>
                <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
                  Choose Photo
                </Button>
                <Input variant="rounded" placeholder="First Name" />
                <Input variant="rounded" placeholder="Last Name" />
                <Input variant="rounded" placeholder="Email" />
                <Select variant="rounded" minWidth="200" accessibilityLabel="Role" placeholder="Role" >
                    <Select.Item label="Teacher" value="teacher" />
                    <Select.Item label="Bus Driver" value="busdriver" />
                </Select>
                <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
                    <Button w="50%" onPress={() => navigation.goBack()}>Cancel</Button>
                    <Button w="50%" onPress={() => navigation.navigate("FamilyMember")}>Next</Button>
                </Stack>
            </Stack>
            <Stack p="4" space={1} />
        </VStack>
      }
    </ScrollView>
  );
}

export default NewEmployeeScreen;