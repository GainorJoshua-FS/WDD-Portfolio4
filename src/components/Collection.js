import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CollectionHelper from './CollectionHelper';
import { css } from 'glamor';

function Collection() {

    const { gid } = useParams()

    let BASE_URL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&ids="
    let [collectionArray, setCollectionArray] = useState([]);
    let collection = new CollectionHelper("Collection");

    useEffect(()=>{
        showGames(gid);
    },[gid])

    function showGames(gameIds){
        gameIds = collection.getGames();
        console.log(gameIds)
        if(gameIds.length === 0){
            return
        }
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
    }




    return (
        <div style={styles.div}>
            {(collectionArray.length === 0)?<h1 style={styles.empty}>Looks like your collection is empty...</h1>:""}
            {collectionArray.map((e,i)=>{
                return <article className="cardArt" key={e.id} {...css(card)} >
                <h2 className="suHead" style={styles.gameTitle}>{e.name}</h2>
                <img style={styles.img} src={e.images.medium} alt={e.name + "'s box art"} /> 
                <Link to={`/SelectedGame/${e.id}`}><button {...css(btn)}></button></Link>
                {/* <a href={`/SelectedGame/${e.id}`}> <button {...css(btn)}></button></a> */}
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
    empty:{
        backgroundColor: "#633817",
        paddingBottom:"10px",
        margin: "20px 0px",
        position: "relative",
        color:"#FFE6A7",
        padding: "5px 20px",
        boxShadow: "10px 5px 5px #432818",
        borderRadius: "12px", 
        marginBottom:"200px",
    }
}

let btn = css({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    background: "transparent",
    cursor: "pointer",
    border: "none",
})

let card = css({
    backgroundColor: "#633817",
    display: "flex",
    flexDirection: "column",
    // width: "calc(85%/5)",
    paddingBottom:"10px",
    margin: "20px 0px",
    position: "relative",
    transition:"transform 0.25s",
    boxShadow: "10px 5px 5px #432818",
    borderRadius: "12px",
    ':hover':{
        transform: "scale(1.05)"
    }
})