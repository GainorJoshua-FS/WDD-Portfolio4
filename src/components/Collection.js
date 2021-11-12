import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CollectionHelper from './CollectionHelper';

function Collection() {

    const { gid } = useParams()

    let BASE_URL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&ids="
    let [collectionArray, setCollectionArray] = useState([]);
    let collection = new CollectionHelper("Collection")



    useEffect(()=>{
        showGames(gid);
    },[gid])

    function showGames(gameIds){
        gameIds = collection.getGames();
        // console.log(gameIds)
        for(let i = 0; i < gameIds.length; i++){
            BASE_URL += gameIds[i] + ","
        }
        // console.log("Base URL: " + BASE_URL)
        fetch(BASE_URL)
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            setCollectionArray(data.games)
        })
    }




    return (
        <div>
            {collectionArray.map((e,i)=>{
                return <article key={e.id}>
                    <h2>
                        {e.name}
                    </h2>
                    <img src={e.images.small} alt={e.name + "'s box art"} />
                </article>
            })}
        </div>
    )
}

export default Collection
