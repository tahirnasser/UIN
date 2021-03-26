import {useState} from 'react';
import Movie from './Movie';
import {getMovies} from '../utils/movieService'

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const handleClick = async () => {
        const data = await getMovies();
        setMovies(data);
    }
    return(
        <div>
            <button onClick={handleClick} type="button"> Get movies </button>
                 {movies?.length >0 && movies.map((movie =>
                 <Movie key={movie._id} title={movie.title} actor={movie.actor} />
                 ))}
        </div>
    );               
};

export default Movies;

