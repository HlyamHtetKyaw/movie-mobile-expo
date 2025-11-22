import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

const Saved = () => {
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError
    } = useFetch(() => fetchMovies({
        query: 'iron man',
        page: 1
    }));
    const movieArray = movies?.Search || [];
    return (
        <View className="bg-primary flex-1">
            <Image source={images.bg} className={"absolute w-full z-0"}/>
            <View className="flex-1 justify-center items-center flex-col gap-10">
                {/*<Image source={icons.save} tintColor="#fff" className="size-10"/>*/}
                {/*<Text className="text-gray-500 text-base">Save</Text>*/}
                <View className="flex-1 w-full h">

                </View>
                <FlatList
                    data={movieArray}
                    numColumns={3}
                    columnWrapperStyle={{
                        justifyContent: 'flex-start',
                        gap: 20,
                        paddingRight: 10,
                        marginBottom: 20
                    }}
                    renderItem={({item}) => (
                        <MovieCard {...item}/>
                    )}
                    ListHeaderComponent={
                        <>
                            <View className="w-full flex-row justify-center my-5">
                                <Image source={icons.save} className="w-12 h-10"/>
                            </View>
                            {moviesLoading &&
                                <ActivityIndicator size="large" color="#0000ff"/>
                            }
                            {moviesError &&
                                <Text className="text-red-500 px-5 py-3">
                                    Error: {moviesError.message}
                                </Text>
                            }
                        </>
                    }/>
            </View>
        </View>
    );
};

export default Saved;