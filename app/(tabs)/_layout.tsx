import React from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import {Tabs} from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

const _Layout = () => {
        const TabIcon = ({focused, icon, title}: any) => {
            if (focused) {
                return (
                    <ImageBackground
                        source={images.highlight}
                        className="flex flex-row min-h-16 px-4 mt-5 items-center justify-center"
                        style={{minWidth: 112}}
                    >
                        <Image source={icon} tintColor="#151312" className="w-5 h-5"/>
                        <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
                    </ImageBackground>
                );
            }

            return (
                <View className="items-center justify-center mt-3">
                    <Image source={icon} tintColor="#A8B5DB" className="w-5 h-5"/>
                </View>
            );
        };

        return (
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarItemStyle: {
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    tabBarStyle:{
                        backgroundColor: '#0f0D23',
                        marginBottom: 37,
                        height: 50,
                        position: 'absolute',
                        overflow: 'hidden',
                        borderWidth: 1,
                        borderColor: '#0f0D23'
                    }
                }}
            >
                <Tabs.Screen
                    name={"index"}
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <TabIcon focused={focused} icon={icons.home} title="Home"/>
                        )
                    }}
                />
                <Tabs.Screen
                    name={"saved"}
                    options={{
                        title: 'Saved',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <TabIcon focused={focused} icon={icons.save} title="Saved"/>
                        )
                    }}
                />
                <Tabs.Screen
                    name={"search"}
                    options={{
                        title: 'Search',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <TabIcon focused={focused} icon={icons.search} title="Search"/>
                        )
                    }}
                />
                <Tabs.Screen
                    name={"profile"}
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <TabIcon focused={focused} icon={icons.person} title="Profile"/>
                        )
                    }}
                />
            </Tabs>
        );
    }
;

export default _Layout;