import client from './client';

const movieFields= `
    _id,   
    title,
    'actor': actor->name
    `;

    export const getMovies = async () => {
        const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
        return data;
    };

    export default getMovies;

