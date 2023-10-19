import React from "react";
import { VStack, Box, Stack, Button } from 'native-base';

const ProfileScreen = ({ route, navigation }) => {
    return (
    <Box border="1" borderRadius="md">
        <VStack w="100%" h="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
            <Box px="4" pt="4" alignItems="center">
                Profile Screen
            </Box>
            <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
                <Button w="50%" onPress={() => navigation.goBack()}>Back</Button>
            </Stack>
        </VStack>
    </Box>
    );
}

export default ProfileScreen;