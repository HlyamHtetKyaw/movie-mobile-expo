import {Client, Databases, ID, Query} from "react-native-appwrite";

const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const DATABASE_ID = process.env.EXPO_PUBLIC_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_TABLE_ID!;
const API_ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;

const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID)
;
const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        const result = await database.listDocuments({
            databaseId: DATABASE_ID, collectionId: TABLE_ID, queries: [
                Query.equal('searchTerm', query)
            ]
        });
        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];
            await database.updateDocument({
                databaseId: DATABASE_ID, collectionId: TABLE_ID,
                documentId: existingMovie.$id,
                data: {
                    count: existingMovie.count + 1
                }
            });
        } else {
            await database.createDocument({
                databaseId: DATABASE_ID, collectionId: TABLE_ID,
                documentId: ID.unique(), data: {
                    searchTerm: query,
                    movieId: movie.imdbID as string,
                    count: 1,
                    title: movie.Title
                }
            })
        }
    } catch (err) {
        console.log(err)
        throw err;
    }
}

export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
    try{
        const result = await database.listDocuments({
            databaseId:DATABASE_ID,
            collectionId:TABLE_ID,
            queries:[
                Query.limit(5),
                Query.orderDesc('count'),
            ]
        });
        return result.documents as unknown as TrendingMovie[];
    }catch(err){
        console.log(err);
        return undefined;
    }
};