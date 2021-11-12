import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'



function Home() {

    const { gid } = useParams()
    const randomURL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&random=true"
    // const testURL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&order_by=rank&ascending=true&limit=4"

    let [randomArray, setRandomArray] = useState([]);

    useEffect(()=>{
        showGames(gid)
    },[gid])

    function showGames(gameId){

        fetch(randomURL)
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            setRandomArray(data.games)
        })

    }

    //tried {JSON.stringify(randomArray)} since random only returns one game

    return (
        <div>
            {randomArray.map((e,i)=>{
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

export default Home
