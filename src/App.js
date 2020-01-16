import React from 'react';
import './App.css';
import MovieList from './Component/MovieList'
import Header from './Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <MovieList/>
    </div>
  );
}

export default App;
