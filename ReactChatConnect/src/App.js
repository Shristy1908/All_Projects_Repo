import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatpage from './Components/Chatpage';
import Home from './Components/Home';
import { useState } from 'react';
import Login from './Components/Login';
import { auth } from './firebase';

function App() {

  const [user, setUser]=useState(JSON.parse(localStorage.getItem('user')));

  const signOut= () =>{
     auth.signOut()
     .then(()=>{
        setUser(null);
        localStorage.removeItem('user');
     })
     .catch((err)=> alert(err.message));
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/chatpage",
  //     element: <Chatpage />,
  //   },
  // ]);


  return (
    //<div className="App">
    // {/* {
    //     user ?  <RouterProvider router={router}/> : <Login setUser={setUser}/>
    //   } */}

    <Router>
      <div className="App">
        {user ? (
          <Routes>
            <Route
              path="/:emailID"
              element={<Chatpage currentUser={user} signOut={signOut} />}
            />
            <Route
              path="/"
              element={<Home currentUser={user} signOut={signOut} />}
            />
          </Routes>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </Router>

    // </div>
  );
}

export default App;
