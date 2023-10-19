import React, { useEffect, useContext } from "react";
import { View, ScrollView, VStack, Stack, Checkbox, Button, Input, Select, Icon, Text, Image, Box } from "native-base";
import { AuthContext } from '../../context/AuthContext';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
import Ionicons from 'react-native-vector-icons/Ionicons';

const FamilyRegistrationWizardScreen = ({ navigation }) => {

    return (
        <View style={{flex: 1}}>
            <ProgressSteps>
                <ProgressStep label="Family Information">
                    <View style={{ alignItems: 'center' }}>
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
                            </Stack>
                            <Stack p="4" space={1} />
                        </VStack>                    
                    </View>
                </ProgressStep>
                <ProgressStep label="Your Information">
                    <View style={{ alignItems: 'center' }}>
                        <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
                            <Stack space={4} w="75%" maxW="300px">
                            <Stack alignItems="center" justifyContent="center">
                                <Image size={100} resizeMode={"contain"} borderRadius={100} alt="Profile Picture" 
                                source={require('../../assets/no-profile-picture.jpg')}></Image>
                            </Stack>
                            <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
                                Choose Photo
                            </Button>
                            <Input variant="rounded" placeholder="First Name" />
                            <Input variant="rounded" placeholder="Last Name" />
                            <Input variant="rounded" placeholder="Email" />
                            <Input variant="rounded" placeholder="Phone" />
                            </Stack>
                        </VStack>
                    </View>
                </ProgressStep>
                <ProgressStep label="Vehicles">
                    <View style={{ alignItems: 'center' }}>
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
                                <Input variant="rounded" placeholder="Color" value="" />
                                <Input variant="rounded" placeholder="License Plate" value=""/>
                            </Stack>
                        </VStack>
                    </View>
                </ProgressStep>
                <ProgressStep label="Review">
                    <View style={{ alignItems: 'center' }}>

                        <Text>Review Content</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>  
        );
}

export default FamilyRegistrationWizardScreen;