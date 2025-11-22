import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {fetchMoviesDetails} from "@/services/api";
import {useLocalSearchParams, useRouter} from "expo-router";
import useFetch from "@/services/useFetch";
import {icons} from "@/constants/icons";

interface MovieProps {
    label: string;
    value?: string | number | null;
}

const MovieInfo = ({label, value}: MovieProps) => (
    <View className="flex-col items-start justify-center mt-5">
        <Text className="text-light-200 font-normal text-sm">
            {label}
        </Text>
        <Text className="text-light-100 font-bold text-sm mt-2">
            {value||'N/A'}
        </Text>
    </View>
)
const MovieDetails = () => {
    const {id} = useLocalSearchParams();
    const route = useRouter();
    const {data: movie, loading} = useFetch(() => fetchMoviesDetails(id as string));
    return (
        <View className="bg-primary flex-1">
            <ScrollView contentContainerStyle={{
                paddingBottom: 80
            }}>
                <View>
                    <Image source={{
                        uri: 'https://t3.ftcdn.net/jpg/15/86/00/98/360_F_1586009869_9XALOHhtVDxmkrxIGnPK33ROxR5vL8ho.jpg'
                    }}
                           className="h-[450px] w-full" resizeMode="cover"/>
                </View>
                <View className="flex-col items-start justify-center mt-5 px-5">
                    <Text className="text-white text-bold text-xl">{movie?.Title}</Text>
                    <View className="flex-row items-center gap-x-1 mt-2">
                        <Text className="text-light-200 text-sm">{movie?.Released?.split(' ').reverse()[0]}</Text>
                        <Text className="text-light-200 text-sm">{movie?.Runtime}</Text>
                    </View>
                    <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-3">
                        <Image source={icons.star} className="size-4"/>
                        <Text
                            className="text-white font-bold text-sm">{Math.round(movie?.imdbRating as unknown as number)}</Text>
                        <Text className="text-white text-sm">votes: {movie?.imdbVotes}</Text>
                    </View>
                    <MovieInfo label="Overview" value={movie?.Plot}/>
                    <MovieInfo label="Genres" value={movie?.Genre?.split(',').join(' - ')}/>
                    <View className="flex flex-row justify-between w-1/2">
                        <MovieInfo label="Box Office" value={`$${Number(movie?.BoxOffice.replace(/[\$,]/g,""))/1_000_000} million`}/>
                    </View>
                    <MovieInfo label="Production Companies" value={movie?.Production}/>
                </View>
            </ScrollView>

            <TouchableOpacity onPress={route.back} className="absolute bottom-10 z-50 left-0 right-0 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center mx-5">
                <Image source={icons.arrow} className="size-5 mr-1 mt-0.5 rotate-180" tintColor="#fff"/>
                <Text className="text-white font-semibold text-base">Go back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MovieDetails;