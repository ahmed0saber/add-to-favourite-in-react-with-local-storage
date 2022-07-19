import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourite from './components/Favourite';
import Home from './components/Home';
import {useState} from 'react'

function App() {
  const [movies, setMovies] = useState([
    {id:1, title:"Movie 1", desc:"The first movie."},
    {id:2, title:"Movie 2", desc:"The second movie."},
    {id:3, title:"Movie 3", desc:"The third movie."},
    {id:4, title:"Movie 4", desc:"The fourth movie."},
    {id:5, title:"Movie 5", desc:"The fifth movie."},
    {id:6, title:"Movie 6", desc:"The sixth movie."}
  ])
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home movies={movies}/>} />
        <Route path="/favourite" element={<Favourite/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
