import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './Components/Card';
import CardDetail from './Components/CardDetail';
import Header from './Components/Header';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
         <Header />
        <Routes>
           <Route  path= "/" element={<Cards/>}></Route> 
           <Route  path= "/cart/:id" element={<CardDetail/>}></Route>
           <Route path='/cardDetail/:id' element={<CardDetail/>}></Route>
        </Routes>
    </>
  );
}

export default App;
