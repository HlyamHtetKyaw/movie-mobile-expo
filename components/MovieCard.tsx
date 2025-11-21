import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const MovieCard = ({Title,Year,imdbID,Type,Poster}:Movie) => {
    return (
        <Link href={`/movies/${imdbID}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{
                        uri:Poster?'https://t3.ftcdn.net/jpg/15/86/00/98/360_F_1586009869_9XALOHhtVDxmkrxIGnPK33ROxR5vL8ho.jpg':""
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />
                <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>{Title}</Text>
                <View className="flex-row items-center justify-start gap-x-1">
                    <Image source={icons.star} className="size-4"/>
                    <Text className="text-xs text-white font-bold uppercase">{Math.round(Math.random()+10)/2}</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="text-xs text-light-300 font-medium mt-1">{Year}</Text>
                    <Text className="text-xs font-medium text-light-300 uppercase">{Type}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
};

export default MovieCard;