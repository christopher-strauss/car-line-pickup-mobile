import React from 'react';
import { ScrollView, VStack, Stack, Checkbox, Button, Input, Select, Icon, Text, Image } from "native-base";

const NewFamilyScreen = ({ navigation }) => {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
            <Stack p="4" space={1} />
            <Stack space={4} w="75%" maxW="300px">
                <Input variant="rounded" placeholder="Family Name" />
                <Input variant="rounded" placeholder="Address Line 1" />
                <Input variant="rounded" placeholder="Address Line 2" />
                <Input variant="rounded" placeholder="City" />
                <Select variant="rounded" minWidth="200" accessibilityLabel="State" placeholder="State">
                    <Select.Item label="Florida" value="FL" />
                </Select>
                <Select variant="rounded" minWidth="200" accessibilityLabel="County" placeholder="County" >
                    <Select.Item label="Palm Beach" value="palmbeach" />
                    <Select.Item label="Broward" value="broward" />
                </Select>
                <Input variant="rounded" placeholder="Zip" />
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

export default NewFamilyScreen;