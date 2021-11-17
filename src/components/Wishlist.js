import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CollectionHelper from './CollectionHelper';
import { css } from 'glamor';


function Wishlist() {

    const { gid } = useParams()

    let BASE_URL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&ids="
    let [wishlistArray, setWishlistArray] = useState([]);
    let wishlist = new CollectionHelper("Wishlist");

    useEffect(()=>{
        showGames(gid);
    },[gid])

    function showGames(gameIds){
        gameIds = wishlist.getGames();
        for(let i = 0; i < gameIds.length; i++){
            BASE_URL += gameIds[i] + ","
        }
        fetch(BASE_URL)
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            setWishlistArray(data.games)
        })
    }

    return (
        <div style={styles.div}>
            {wishlistArray.map((e,i)=>{
                return <article key={e.id} {...css(card)} >
                <h2 className="subHead" style={styles.gameTitle}>{e.name}</h2>
                <img style={styles.img} src={e.images.medium} alt={e.name + "'s box art"} /> 
                <h3 style={styles.gameTitle}>{e.msrp_text}</h3>
                <Link to={`/SelectedGame/${e.id}`}><button {...css(btn)}></button></Link>
                {/* <a href={`/SelectedGame/${e.id}`}> <button {...css(btn)}></button></a> */}
        </article>
            })}
        </div>
    )
}

export default Wishlist

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
    border: "none",
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