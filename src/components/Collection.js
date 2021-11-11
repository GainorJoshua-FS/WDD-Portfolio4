import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CollectionHelper from './CollectionHelper';

function Collection() {

    const { gid } = useParams()
    // let [idList,setIds] = useState("")
    // let [btnDisabled,setBtnDisabled] = useState(false);
    // let navigate = useNavigate();

    // let gameList = new CollectionHelper("test")

    // function updateGameList(e){
    //     setIds(e.target.vlaue);
    //     setBtnDisabled(gameList.exists(e.target.value))
    // }


    console.log(gid)
    // const API_KEY = "lkziTbYVbS"
    const BASE_URL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&ids="

    useEffect(()=>{
        showGames(gid);
    },[])

    function showGames(gameIds){

    }




    return (
        <div>

        </div>
    )
}

export default Collection
