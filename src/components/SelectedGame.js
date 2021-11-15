import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CollectionHelper from './CollectionHelper';

function SelectedGame() {


    let [isGameListed,setGameListed] = useState(false);
    let gameList = new CollectionHelper("Collection")

    function toggleGame(e,q){
        e.preventDefault();
        console.log("Add Game: ",e,q)
        gameList.saveGames(q)
        if(isGameListed){
            //Game is already added
            gameList.removeGame(q)
            setGameListed(false)
        }
        else{
            //Game is not already added
            gameList.saveGames(q)
            setGameListed(true)
        }
    }



    const { gid } = useParams()
    console.log(gid)
    const API_KEY = "lkziTbYVbS"
    const BASE_URL = "https://api.boardgameatlas.com/api/"

    let [selGame, setSelGame] = useState([]);

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
                    <div style={styles.imgBox}>
                        <img style={styles.img} src={obj.images.medium} alt={obj.name + "'s box art"} />
                    </div>
                    {/* INFO */}
                    <div style={styles.infoBox}>
                        <h2 style={styles.title}>{obj.name}</h2>
                        <dl style={styles.dl}>
                            <dd style={styles.dd}>Players:</dd>
                            <dt style={styles.dt}>{" " + obj.min_players + "-" + obj.max_players}</dt>

                            <dd style={styles.dd}>Time:</dd>
                            <dt style={styles.dt}>{obj.min_playtime + "-" + obj.max_playtime + "mins"}</dt>

                            <dd style={styles.dd}>Price:</dd>
                            <dt style={styles.dt}>{obj.msrp_text}</dt>

                            <dd style={styles.dd}>Ages:</dd>
                            <dt style={styles.dt}>{obj.min_age + "+"}</dt>
                        </dl>
                        <p style={styles.desc}>{obj.description_preview}</p>
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
        width: "calc(100%/2 - 20px)",
        marginTop: "20px",
        marginRight: "20px"
    },
    img:{
        width: "80%",
    },
    infoBox:{
        width: "calc(100%/2 - 1rem)",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        color: "#633817"
    },
    dl:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    title:{
        textAlign: "center",
        fontSize: "45px"
    },
    dd:{
        fontFamily: "Futura PT",
        fontWeight: "bold",
        fontSize: "24px"
    },
    dt:{
        fontFamily: "Montserrat",
        fontSize: "20px",
        marginLeft: "10px",
        marginTop: "6px"
    },
    desc:{
        fontSize: "20px",
        fontFamily: "Montserrat",
        fontWeight: "bold"
    }
}