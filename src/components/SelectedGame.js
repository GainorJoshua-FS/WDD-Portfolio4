import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function SelectedGame() {
    const { gid } = useParams()
    console.log(gid)
    const API_KEY = "lkziTbYVbS"
    const BASE_URL = "https://api.boardgameatlas.com/api/"

    let [selGame, setSelGame] = useState([]);
    // let [gameId, setId] = useState("");

    useEffect(()=>{
        showGame(gid);
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
            {selGame.map((e,i)=>{
                return <section key={e.id} style={styles.container}>
                     {/* IMAGE  */}
                    <div>
                        <img src={e.images.medium} alt={e.name + "'s box art"} />
                    </div>
                    {/* INFO */}
                    <div style={styles.infoBox}>
                        <h2>{e.name}</h2>
                        <dl>
                            <dd>Players:</dd>
                            <dt>{e.min_players + "-" + e.max_players}</dt>

                            <dd>Time:</dd>
                            <dt>{e.min_playtime + "-" + e.max_playtime + "mins"}</dt>

                            <dd>Price:</dd>
                            <dt>{e.msrp_text}</dt>

                            <dd>Ages:</dd>
                            <dt>{e.min_age + "+"}</dt>
                        </dl>
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