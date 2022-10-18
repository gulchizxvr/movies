import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services";

const MovieDetail = () => {

    let {id} = useParams();

    let [datas,setDatas] = useState({});

    useEffect( ()=>{movieService.getMovie(id).then(({data}) => setDatas(data))},[] )

       let {title,adult} = datas;


    return (
        <div>
            {title} --- {adult?.toString()}
        </div>
    );
};

export {MovieDetail}