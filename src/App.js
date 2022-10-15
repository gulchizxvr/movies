
import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {MoviesPage} from "./pages";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route path={'movies'} element={<MoviesPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
