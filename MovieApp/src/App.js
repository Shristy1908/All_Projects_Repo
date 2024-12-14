// import MovieCard from "./MovieCard";
import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesData";

class App extends React.Component {

  constructor(){
    super()
    this.state={
        movies : movies,
        cartCount:0
    }
}

handleIncStar=(movie)=>{

    const {movies}=this.state;

    let mid=movies.indexOf(movie);

    if(movies[mid].stars>=5){
        return;
    }

    movies[mid].stars+=0.5;
    this.setState({
        movies:movies
    })
    
}

handleDecStar=(movie)=>{

    const {movies}=this.state;

    let mid=movies.indexOf(movie);

    if(movies[mid].stars <= 0){
        return;
    }
    
    movies[mid].stars-=0.5;

    this.setState({
          movies:movies
    })

}

handleFav=(movie)=>{

    const {movies}=this.state;

    const mid=movies.indexOf(movie);
    movies[mid].fav=!movies[mid].fav

    this.setState({
        movies:movies
    })
}

handleCart=(movie)=>{

    let {movies,cartCount}=this.state;

    const mid=movies.indexOf(movie);
    movies[mid].isInCart=!movies[mid].isInCart
    
    if(movies[mid].isInCart){
        cartCount=cartCount+1;
    }
    else{
        cartCount=cartCount-1;
    }
    console.log(cartCount);

    this.setState({
        movies:movies,
        cartCount:cartCount
    })
}

  render(){

    const {movies,cartCount}=this.state;
    

    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList movies={movies}
          addStar={this.handleIncStar}
          removeStar={this.handleDecStar} 
          handleToggleFav={this.handleFav}
          handleToggleCart={this.handleCart}
        />
      </>
    );
  }
 
}

export default App;
