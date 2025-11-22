const MOVIE_API_CONFIG={
    BASE_URL: 'https://www.omdbapi.com/',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY as string,
    headers: {
        accept: 'application/json'
    }
}
export default MOVIE_API_CONFIG

const buildUrl = (params: Record<string, string | number>) => {
    const query = new URLSearchParams({
        apikey: MOVIE_API_CONFIG.API_KEY,
        ...params,
    });
    let url = `${MOVIE_API_CONFIG.BASE_URL}?${query.toString()}`;
    console.log("calling url "+url)
    return url;
};

export const fetchMovies = async ({ query,page }: { query: string,page:number }) => {
    try {
        const endpoint = buildUrl({
            s: query,
            page: page,
        });

        const response = await fetch(endpoint);
        return await response.json();
    } catch (error) {
        console.error("OMDb fetch error ", error);
        return null;
    }
};

export const fetchMoviesDetails = async (movieId:string):Promise<MovieDetails>=>{
    try{
        const endpoint = buildUrl({
            i: movieId
        });
        const response = await fetch(endpoint);
        return await response.json();
    }catch(err){
        console.log(err);
        throw err;
    }
};