import React, { useState } from "react";
import { View, ScrollView, VStack, Stack, Checkbox, Button, Input, Select, Icon, Text, Image, Box } from "native-base";
import { AuthContext } from '../../context/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegistrationTypeScreen = ({ navigation }) => {

    const [registrationType, setRegistrationType] = useState();

    const nextScreen = () => {
        if(registrationType == 'parent'){
            navigation.navigate('FamilyRegistrationWizardScreen');
        }
        else if(registrationType == 'employee'){
            navigation.navigate('EmployeeRegistrationWizardScreen');
        }
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Stack space={4} w="75%" maxW="300px">
                <Text>Please select your registration type</Text>
                <Select id="registrationTypes" value={registrationType} variant="rounded" minWidth="200" accessibilityLabel="Registration Type" placeholder="Registration Type" onValueChange={(itemValue, itemIndex) => setRegistrationType(itemValue)}>
                    <Select.Item label="Parent" value="parent" />
                    <Select.Item label="School Employee" value="employee" />
                </Select>
                <Stack w="100%" direction={{ base: "row", md: "row"}} space={4} alignItems="center" justifyContent="center">
                <Button w="50%" onPress={() => nextScreen()}>Continue</Button>
              </Stack>                
            </Stack>                    
        </View>  
        );
}

export default RegistrationTypeScreen;