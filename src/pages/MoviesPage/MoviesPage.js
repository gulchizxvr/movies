import {MoviesList} from "../../components";
import Navigation from "../../components/navigation/Navigation";

import {Switcher} from "../../components/switcher/Switcher";


const MoviesPage = () => {


    return (
        <div>
           <Switcher/>
            <MoviesList/>
            <Navigation/>

        </div>
    );
};

export {MoviesPage};