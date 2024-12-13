import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./SearchBar.css"

function Searchbar({setResults}) {

    const [input,setInput]=useState("")

    const fetchData=(value)=>{
        fetch("https://reqres.in/api/users?page=2")
          .then((response) => response.json())
          .then((json) => {
            const results = json.data.filter((user) => {
              return (
                value &&
                user &&
                user.first_name &&
                user.first_name.toLowerCase().includes(value)
              );
            });
            setResults(results)
          });
    }

    // useEffect(()=>{
    //     fetchData()
    // },[])

    const handleChange=(value)=>{
       setInput(value);
       fetchData(value)
    }

    // fetchData(value);
   

  return <div className="input-wrapper">
    <FaSearch className="search-icon"/>
    <input placeholder="Type to search...." value={input} onChange={(e)=>handleChange(e.target.value)}/>
 
  </div>;
}

export default Searchbar;
