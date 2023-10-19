import React from "react";
import { VStack, Box, Stack, Button } from 'native-base';

const MoreScreen = ({ route, navigation }) => {
    return (
    <Box border="1" borderRadius="md">
        <VStack w="100%" h="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
            <Box px="4" pt="4" alignItems="center">
                More Screen
            </Box>
            <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
                <Button w="50%" onPress={() => navigation.navigate('ProfileScreen')}>Profile</Button>
            </Stack>
            <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
                <Button w="50%" onPress={() => navigation.navigate('SettingsScreen')}>Settings</Button>
            </Stack>
            <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
                <Button w="50%" onPress={() => navigation.navigate('AboutScreen')}>About</Button>
            </Stack>
            <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
                <Button w="50%" onPress={() => navigation.navigate('HelpScreen')}>Help</Button>
            </Stack>
            <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
                <Button w="50%" onPress={() => navigation.navigate('HelpScreen')}>Logout</Button>
            </Stack> 
        </VStack>
    </Box>
    );
}

export default MoreScreen;