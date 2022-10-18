
import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {MoviesPage} from "./pages";
import {MovieDetail} from "./components";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<MoviesPage/>}/>
            <Route path={'/:id'} element={<MovieDetail/>}/>
        </Route>
    </Routes>
  );
}

export default App;
