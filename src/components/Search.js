import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import SearchForm from './SearchForm';
import { css } from 'glamor'

function Search(){
    const API_KEY = "lkziTbYVbS"
    const BASE_URL = "https://api.boardgameatlas.com/api/"

    let [gameArray, setGameArray] = useState([]);
    // let [query, setQuery] = useState("");

    //Grab URL Params
    let {searchQuery} = useParams()

    //Triggers placeholder search apon page load 
    useEffect(()=>{
        doSearch(searchQuery);
    },[searchQuery])

    // function updateSearchQuery(e){
    //     setQuery(e.target.value)
    // }

    function doSearch(query){
        let url = BASE_URL + "search?name=" + query + "&client_id=" + API_KEY
        fetch(url)
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            setGameArray(data.games)
        })
    }
    return(
        <section style={styles.container}>
            <SearchForm/>
            <div style={styles.div}>
                {gameArray.map((e,i)=>{
                    return<article key={e.id} {...css(card)} >
                            <h2 class="subHead" style={styles.gameTitle}>{e.name}</h2>
                            <img style={styles.img} src={e.images.medium} alt={e.name + "'s box art"} /> 
                            <Link to={`/SelectedGame/${e.id}`}><button {...css(btn)}></button></Link>
                            {/* <a href={`/SelectedGame/${e.id}`}> <button {...css(btn)}></button></a> */}
                    </article>
                })}
            </div>
        </section>
    )
}

export default Search

const styles ={
    button:{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        background: "transparent",
        cursor: "pointer",
    },
    card:{
        backgroundColor: "#633817",
        display: "flex",
        flexDirection: "column",
        width: "calc(85%/5)",
        paddingBottom:"10px",
        margin: "20px 0px",
        position: "relative",
        transition:"transform 0.25s"
    },
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
    container:{
        backgroundColor: "#FFE6A7",
        display: "flex",
        flexDirection: "column",
        height: "75%",
        flexWrap: "wrap",
        justifyContent: "space-around",
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