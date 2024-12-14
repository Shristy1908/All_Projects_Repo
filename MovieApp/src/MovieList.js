import MovieCard from "./MovieCard";

function MovieList(props){


        //const {title,plot,price,rating,stars,fav,cart}=this.state;

        const {movies,addStar,removeStar,handleToggleFav,handleToggleCart}=props;
    
        return(
            <>

                {movies.map((movie)=><MovieCard movies={movie} addStar={addStar} 
                removeStar={removeStar} 
                handleToggleFav={handleToggleFav}
                handleToggleCart={handleToggleCart}
                key={movie.id} />)}
                

            </>
        )
}

export default MovieList;