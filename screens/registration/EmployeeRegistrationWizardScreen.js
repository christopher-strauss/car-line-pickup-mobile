import React, { useEffect, useContext } from "react";
import { View, ScrollView, VStack, Stack, Checkbox, Button, Input, Select, Icon, Text, Image, Box } from "native-base";
import { AuthContext } from '../../context/AuthContext';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
import Ionicons from 'react-native-vector-icons/Ionicons';

const EmployeeRegistrationWizardScreen = ({ navigation }) => {

    return (
        <View style={{flex: 1}}>
            <ProgressSteps>
                <ProgressStep label="Empoyee Step 1">
                </ProgressStep>
                <ProgressStep label="Employee Step 2">
                </ProgressStep>
            </ProgressSteps>
        </View>  
        );
}

export default EmployeeRegistrationWizardScreen;