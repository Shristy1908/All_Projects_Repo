function MovieCard(props){
        //const {movies : data}=this.props;
        const {title,plot,poster,price,rating,stars,fav,isInCart}=props.movies;
        const {movies,addStar,removeStar,handleToggleFav,handleToggleCart}=props;

        return(
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img alt="poster " src={poster}/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                   
                                    <img className="str-btn" 
                                    alt="decrease"
                                    src="https://cdn.iconscout.com/icon/free/png-256/free-minus-1912213-1617682.png?f=avif&w=128"
                                    onClick={()=>{removeStar(movies)}}
                                    />
                            
                                    <img  src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-like-32386.png?f=avif&w=128" 
                                    alt="star" 
                                    className="stars"/>

                                    <img className="str-btn" 
                                    alt="increase"
                                    src="https://cdn.iconscout.com/icon/free/png-256/free-plus-1768089-1502262.png?f=avif&w=128"
                                    onClick={()=>{addStar(movies)}}
                                    />

                                    <span>{stars}</span>
                            
                            </div>

                            {fav?<button className="fav-btn" onClick={()=>{handleToggleFav(movies)}}>Favourite</button>:<button className="unfav-btn" onClick={()=>{handleToggleFav(movies)}}>Un-Favourite</button>} 
                            

                            {isInCart?<button className="removecart-btn" onClick={()=>{handleToggleCart(movies)}}>Remove from cart</button>:<button className="cart-btn" onClick={()=>{handleToggleCart(movies)}}>Add to cart</button>}
                           
                        
                        </div>
                    </div>

                </div>
            </div>
        )
}

export default MovieCard;