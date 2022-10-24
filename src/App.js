
import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {MovieDetailsPage, MoviesPage} from "./pages";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<MoviesPage/>}/>
            <Route path={'/:id'} element={<MovieDetailsPage/>}/>

        </Route>
    </Routes>
  );
}

export default App;
