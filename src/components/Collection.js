import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CollectionHelper from './CollectionHelper';
import { css } from 'glamor';

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
        // if(gameIds.length === 0){
        //     BASE_URL = ""
        // }
        // else{
            for(let i = 0; i < gameIds.length; i++){
                BASE_URL += gameIds[i] + ","
            }
            // console.log("Base URL: " + BASE_URL)
            fetch(BASE_URL)
            .then(response => response.json())
            .then((data)=>{
                console.log(data)
                setCollectionArray(data.games)
                console.log("GAME: " + data[1])
            })
        // }
    }




    return (
        <div style={styles.div}>
            {collectionArray.map((e,i)=>{
                return <article key={e.id} {...css(card)} >
                <h2 style={styles.gameTitle}>{e.name}</h2>
                <img style={styles.img} src={e.images.medium} alt={e.name + "'s box art"} /> 
                <a href={`/SelectedGame/${e.id}`}> <button {...css(btn)}></button></a>
        </article>
            })}
        </div>
    )
}

export default Collection

const styles ={
    div:{
        backgroundColor: "#FFE6A7",
        display: "flex",
        flexDirection: "row",
        height: "75%",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    img:{
        objectFit: "contain",
        height: "75%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40%"
    },
    gameTitle:{
        color:"#FFE6A7",
        fontFamily: "Futura PT"
    },
}

let btn = css({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    background: "transparent",
    cursor: "pointer",
})

let card = css({
    backgroundColor: "#633817",
    display: "flex",
    flexDirection: "column",
    width: "calc(85%/5)",
    paddingBottom:"10px",
    margin: "20px 0px",
    position: "relative",
    transition:"transform 0.25s",
    ':hover':{
        transform: "scale(1.05)"
    }
})