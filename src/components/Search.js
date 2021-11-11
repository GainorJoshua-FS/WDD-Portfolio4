import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SearchForm from './SearchForm';

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
        <div style={styles.div}>
            <SearchForm/>
            {/* <input name="searchInput" onChange={updateSearchQuery}/>
                <button onClick={()=>doSearch(query)}>Search</button> */}
                {gameArray.map((e,i)=>{
                    return<article key={e.id} style={styles.card} >
                            <h2 style={styles.gameTitle}>{e.name}</h2>
                            <img style={styles.img} src={e.images.small} alt={e.name + "'s box art"} /> 
                            <a href={`/SelectedGame/${e.id}`}> <button style={styles.button}></button></a>
                        {/* <button style={styles.button}></button> */}
                    </article>
                })}
        </div>
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
        background: "transparent", //Change to transparent once figured out
        cursor: "pointer"
    },
    card:{
        backgroundColor: "#633817",
        display: "flex",
        flexDirection: "column",
        width: "calc(100%/4)",
        height: "calc(100%/2)",
        margin: "20px 0px",
        position: "relative"
    },
    div:{
        backgroundColor: "#FFE6A7",
        display: "flex",
        flexDirection: "row",
        height: "100%",
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
    newButton:{
        backgroundColor: "#432818",
        color: "#FFE6A7",
        fontFamily: "Montserrat"
    }
}