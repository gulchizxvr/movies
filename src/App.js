
import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {MoviesPage} from "./pages";

import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<MoviesPage/>}/>
            <Route path={'/:id'} element={<MovieDetailsPage/>}/>
            <Route path={'/:genre'} element={<MovieDetailsPage/>}/>

        </Route>
    </Routes>
  );
}

export default App;
