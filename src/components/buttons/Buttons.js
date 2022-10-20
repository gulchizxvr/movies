import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Buttons = () => {
    let [query, setQuery] = useSearchParams();


    const setGenre = (id) => {
        id > 0 ? query.set('genre', id) : query.delete('genre')
        query.set('page', 1)
        setQuery(query)
    }




    // const {genres: data} = useSelector(state => state.movieReducer)
    //
    // const array = data.genres ? data.genres : []
    // console.log(array);
    // const [id,name] = Object.keys(array[0])
    //
    // console.log(id);
    // console.log(name);


    // array.map(value => console.log(Object.keys(value)))


    return (
        <div>
            <button onClick={() => setGenre(0)}>all</button>
        </div>
    );
};

export {Buttons}