import react from 'react';

// Config
import {
        SEARCH_BASE_URL,
        POPULAR_BASE_URL,
        POSTER_SIZE,
        API_URL, 
        API_KEY, 
        IMAGE_BASE_URL, 
        BACKDROP_SIZE, 
        REQUEST_TOKEN_URL, 
        LOGIN_URL, 
        SESSION_ID_URL
  } from '../config'
  
// Router
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

// Components
import { HeroImage } from './HeroImage';
import {Grid} from './Grid';
import { Thumb } from './Thumb';
import Spinner from './Sprinner';
import SearchBar from './SearchBar'
import Button from './Button';

// Hoosk
import { useHomeFetch } from '../hooks/useHomeFetch'; 


// Image
import NoImage from '../images/no_image.jpg';


const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore} = useHomeFetch();

        console.log(state);

        if(error) return <div>  </div>

    return (
        <>   
            {!searchTerm && state.results[0]? (
                <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
              />
            ) :null}

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? 'Search result': 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb 
                        key={movie.id}
                        clickable
                        image ={movie.backdrop_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path: NoImage } 
                        movieId = { movie.id }
                    />
                    
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            )}
        </>
        
    );
}

export default Home;
