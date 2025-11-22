import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";
import {images} from "@/constants/images";

const TrendingCard = ({movie: {movieId, title}, index}: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movieId}`} asChild>
            <TouchableOpacity className="w-32 relative pl-5">
                <Image
                    source={{
                        uri:'https://t3.ftcdn.net/jpg/15/86/00/98/360_F_1586009869_9XALOHhtVDxmkrxIGnPK33ROxR5vL8ho.jpg'
                    }}
                    className="w-32 h-48 rounded-lg"
                    resizeMode="cover"/>
                <View className="absolute bottom-14 -left-3.5 px-2 py-1 rounded-full">
                    <MaskedView maskElement={
                        <Text className="font-bold text-6xl">{index+1}</Text>
                    }>
                    <Image
                        source={images.rankingGradient}
                        className="size-14"
                        resizeMode="cover"
                    />
                    </MaskedView>
                </View>
                <Text className="text-sm font-bold mt-2 text-light-200" numberOfLines={2}>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

export default TrendingCard;