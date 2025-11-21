// const url = "";
// const options ={
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer '
//     }
// };
// fetch(url,options)
//     .then(res=>res.json())
//     .then(json=>console.log(json))
//     .catch(err=>console.log)

export const MOVIE_API_CONFIG={
    BASE_URL: 'https://www.omdbapi.com/',
    API_KEY: process.env.MOVIE_API_KEY as string,
    headers: {
        accept: 'application/json'
    }
}

const buildUrl = (params: Record<string, string | number>) => {
    const query = new URLSearchParams({
        apikey: MOVIE_API_CONFIG.API_KEY,
        ...params,
    });
    return `${MOVIE_API_CONFIG.BASE_URL}?${query.toString()}`;
};

export const fetchMovies = async ({ query,page }: { query: string,page:number }) => {
    try {
        const endpoint = buildUrl({
            s: query,
            page: page,
        });

        const response = await fetch(endpoint);
        if(!response.ok){
            throw new Error('Failed to fetch movies')
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("OMDb fetch error:", error);
        return null;
    }
};
