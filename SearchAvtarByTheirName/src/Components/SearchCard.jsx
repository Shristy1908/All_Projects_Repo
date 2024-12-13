import "./SearchCard.css";

function SearchCard({results}){

    console.log(results);
    return (
        <div className="search-list">
            {
                results.map((result,index)=>{
                    return (

                      <div className="cards" key={index}>
                        {/* <div className="card"> */}
                          <div className="individualCard">
                            <p>{result.id}</p>
                            <img src={result.avatar} alt="avatar" />

                            <h3 className="cardText">
                              {result.first_name}
                              {result.last_name}
                            </h3>
                          </div>
                        {/* </div> */}
                      </div>
                    );
                })
            }
        </div>
    )
}

export default SearchCard;