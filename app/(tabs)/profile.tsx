import React from 'react';
import {Image, Text, View} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

const Profile = () => {
    return (
        <View className="bg-primary flex-1">
            <Image source={images.bg} className={"absolute w-full z-0"}/>
            <View className="flex-1 justify-center items-center flex-col gap-10 bg-black p-3 min-w-full">
                <Image source={icons.person} tintColor="#fff" className="size-10"/>
                <Text className="text-gray-500 text-base">Profile</Text>
            </View>
        </View>
    );
};

export default Profile;