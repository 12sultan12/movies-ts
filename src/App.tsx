import React from 'react';
import {Routes, Route} from "react-router-dom"
import Popular from "./components/pages/Popular";
import Header from "./components/Header";
import Home from "./components/Home";
import TopRated from "./components/pages/TopRated";
import Upcoming from "./components/pages/Upcoming";
import DetailPage from "./components/pages/DetailPage";
import MovieActors from "./components/pages/DetailPage/MovieActors";
function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/popular'} element={<Popular/>}/>
                <Route path={'/top-rated'} element={<TopRated/>}/>
                <Route path={'/upcoming'} element={<Upcoming/>}/>
                <Route path={'/movie-detail/:movieId'} element={<DetailPage/>}/>
                <Route path={'/movie-actors/:ActorsId'} element={<MovieActors/>}/>
            </Routes>
        </div>
    );
}

export default App;
