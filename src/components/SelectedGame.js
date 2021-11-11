import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CollectionHelper from './CollectionHelper';

function SelectedGame() {


    let [idList,setIds] = useState("")
    let [isGameListed,setGameListed] = useState(false);
    // let navigate = useNavigate();
    let gameList = new CollectionHelper("Collection")

    // function updateGameList(e){
    //     e.preventDefault()
    //     setIds(e);
    //     setGameListed(gameList.exists(e))
    //     console.log("UPDATE GAME LIST: " + e)
    // }

    function toggleGame(e,q){
        e.preventDefault();
        console.log("Add Game: ",e,q)
        gameList.saveGames(q)
        if(isGameListed){
            // alert("Game Already Added: " + q)
            gameList.removeGame(q)
            setGameListed(false)
        }
        else{
            gameList.saveGames(q)
            setGameListed(true)
        }
    }



    const { gid } = useParams()
    console.log(gid)
    const API_KEY = "lkziTbYVbS"
    const BASE_URL = "https://api.boardgameatlas.com/api/"

    let [selGame, setSelGame] = useState([]);
    // let [gameId, setId] = useState("");

    useEffect(()=>{
        showGame(gid);
        setGameListed(gameList.exists(gid))
    },[])

    function showGame(gameId){
        let url = BASE_URL + "search?ids=" + gid + "&client_id=" + API_KEY
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            setSelGame(data.games)
        })
    }

    return (
        <div style={styles.container}>
            {selGame.map((obj,i)=>{
                return <section key={obj.id} style={styles.container}>
                     {/* IMAGE  */}
                    <div>
                        <img src={obj.images.medium} alt={obj.name + "'s box art"} />
                    </div>
                    {/* INFO */}
                    <div style={styles.infoBox}>
                        <h2>{obj.name}</h2>
                        <dl>
                            <dd>Players:</dd>
                            <dt>{obj.min_players + "-" + obj.max_players}</dt>

                            <dd>Time:</dd>
                            <dt>{obj.min_playtime + "-" + obj.max_playtime + "mins"}</dt>

                            <dd>Price:</dd>
                            <dt>{obj.msrp_text}</dt>

                            <dd>Ages:</dd>
                            <dt>{obj.min_age + "+"}</dt>
                        </dl>
                        <p>{obj.description_preview}</p>
                        <form onSubmit={(e)=>{toggleGame(e,obj.id)}}>
                            <button type="submit" >{(!isGameListed) ? "Add to Collection":"remove from collection"}</button> 
                        </form>
                    </div>
                </section>
            })}
                <div>
    
                </div>
        </div>
    )
}

export default SelectedGame

const styles ={
    container:{
        display: "flex",
        flexDirection: "row"
    },
    imgBox:{

    },
    infoBox:{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        color: "#633817"
    }
}