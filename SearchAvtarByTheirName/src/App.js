import { useState,useEffect } from 'react';
import './App.css';
import Searchbar from './Components/SearchBar';
import SearchCard from './Components/SearchCard';

function App() {

  const [results,setResults]=useState([]);

  
  const url = "https://reqres.in/api/users?page=2";
  const [data, setData] = useState([]);

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(
          json.data.map((data) => {
            return data;
          })
        );
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="container">
      <div className="searchbar-container">
        <Searchbar setResults={setResults} />
        {
          (results.length===0) ? <SearchCard results={data}/> : <SearchCard results={results}/>
        }
        
      </div>
    </div>
  );
}

export default App;
