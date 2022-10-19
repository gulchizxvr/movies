import React from 'react';
import {useSearchParams} from "react-router-dom";


const Navigation = () => {
    const [query,setQuery] = useSearchParams({page:'1'})

    const prevPage = () => {
        setQuery(value => ({page:value.get("page")-1}))
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }
    const nextPage = () => {
        setQuery(value => ({page:+value.get("page")+1}))
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }

    return (
        <div>
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export default Navigation;