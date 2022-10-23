import {MoviesList} from "../../components";
import Navigation from "../../components/navigation/Navigation";

import {Switcher} from "../../components/switcher/Switcher";
import {useSelector} from "react-redux";


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