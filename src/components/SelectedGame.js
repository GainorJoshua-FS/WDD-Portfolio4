import { css } from 'glamor';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CollectionHelper from './CollectionHelper';

function SelectedGame() {


    let [isGameListed,setGameListed] = useState(false);
    let [isWishListed,setWishListed] = useState(false);
    let [selGame, setSelGame] = useState([]);
    let collectionList = new CollectionHelper("Collection")
    let wishlistList = new CollectionHelper("Wishlist")
    const { gid } = useParams()
    const API_KEY = "lkziTbYVbS"
    const BASE_URL = "https://api.boardgameatlas.com/api/"

    function toggleColGame(e,q){
        e.preventDefault();
        console.log("Add Game: ",e,q)
        collectionList.saveGames(q)
        if(isGameListed){
            //Game is already added
            collectionList.removeGame(q)
            setGameListed(false)
        }
        else{
            //Game is not already added
            collectionList.saveGames(q)
            setGameListed(true)
        }
    }

    function toggleWishGame(e,q){
        e.preventDefault();
        console.log("Add Game: ",e,q)
        wishlistList.saveGames(q)
        if(isWishListed){
            //Game is already added
            wishlistList.removeGame(q)
            setWishListed(false)
        }
        else{
            //Game is not already added
            wishlistList.saveGames(q)
            setWishListed(true)
        }
    }

    useEffect(()=>{
        showGame(gid);
        setGameListed(collectionList.exists(gid))
        setWishListed(wishlistList.exists(gid))
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
        <div className="selectPage" style={styles.container}>
            {selGame.map((obj,i)=>{
                return <section key={obj.id} style={styles.container}>
                     {/* IMAGE  */}
                    <div className="imgBox" style={styles.imgBox}>
                        <img style={styles.img} src={obj.images.medium} alt={obj.name + "'s box art"} />
                    </div>
                    {/* INFO */}
                    <div className="infoBox" style={styles.infoBox}>
                        <h2 style={styles.title}>{obj.name}</h2>
                        <dl className="dl" style={styles.dl}>
                            <dd className="subHead" style={styles.dd}>Players:</dd>
                            {/* <dt className="info" style={styles.dt}>{" " + obj.min_players + "-" + obj.max_players}</dt> */}
                            <dt className="info" style={styles.dt}>{(obj.min_players && obj.max_players) ? obj.min_players + "-" + obj.max_players : "Unavailable"}</dt>

                            <dd className="subHead" style={styles.dd}>Time:</dd>
                            {/* <dt className="info" style={styles.dt}>{obj.min_playtime + "-" + obj.max_playtime + "mins"}</dt> */}
                            <dt className="info" style={styles.dt}>{(obj.min_playtime && obj.max_playtime)? obj.min_playtime + "-" + obj.max_playtime + "mins" : "Unavailable"}</dt>

                            <dd className="subHead" style={styles.dd}>Price:</dd>
                            {/* <dt className="info" style={styles.dt}>{obj.msrp_text}</dt> */}
                            <dt className="info" style={styles.dt}>{(obj.msrp_text)? obj.msrp_text : "Unavailable"}</dt>

                            <dd className="subHead" style={styles.dd}>Ages:</dd>
                            {/* <dt className="info" style={styles.dt}>{obj.min_age + "+"}</dt> */}
                            <dt className="info" style={styles.dt}>{(obj.min_age) ? obj.min_age + "+" : "Unavailable"}</dt>
                        </dl>
                        {/* <p className="info" style={styles.desc}>{obj.description_preview}</p> */}
                        <div className="info" style={styles.desc} dangerouslySetInnerHTML={{ __html: obj.description }}>
                        </div>
                        <div style={styles.btns}>
                            <form onSubmit={(e)=>{toggleColGame(e,obj.id)}}>
                                {/* <button style={styles.button} type="submit" >{(!isGameListed) ? "Add to Collection":"Remove from collection"}</button> */}
                                {(!isGameListed) ? <button {...css(btn1)} type="submit">Add to Collection</button> : <button {...css(btn2)} type="submit">remove from my Collection</button> }
                            </form>
                            <form onSubmit={(e)=>{toggleWishGame(e,obj.id)}}>
                                {/* <button style={styles.button} type="submit" >{(!isWishListed) ? "Add to Wishlist":"Remove from Wishlist"}</button>  */}
                                {(!isWishListed) ? <button className="info" {...css(btn1)} type="submit">Add to Wishlist</button> : <button className="info" {...css(btn2)} type="submit">remove from my Wishlist</button> }
                            </form>
                        </div>
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
        backgroundColor: "white",
        margin: "20px 20px 0px 100px",
        height: "75%",
    },
    img:{
        width: "100%",
        marginTop: "40px",
    },
    infoBox:{
        width: "calc(100%/2 - 1rem)",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color: "#633817",
        marginRight: "100px"
    },
    title:{
        textAlign: "center",
        fontSize: "45px",
        marginTop: "20px"
    },
    dl:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // gap: "10px 100px",
        flexWrap: "wrap"
    },
    dd:{
        fontFamily: "Futura PT",
        fontWeight: "bold",
        fontSize: "24px",
    },
    dt:{
        fontFamily: "Montserrat",
        fontSize: "20px",
        marginLeft: "10px",
        marginTop: "6px",
    },
    desc:{
        fontSize: "20px",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        textAlign: "left"
    },
    button:{
        backgroundColor: "#633817",
        color: "#FFE6A7",
        fontFamily: "Montserrat",
        padding: "15px",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        marginRight: "10px"
    },
    button2:{
        backgroundColor: "#9E2A2B",
        color: "#FFE6A7",
        fontFamily: "Montserrat",
        padding: "15px",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        marginRight: "10px"
    },
    btns:{
        display: "flex"
    }
}

let btn1 = css({
    backgroundColor: "#633817",
    color: "#FFE6A7",
    fontFamily: "Montserrat",
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: "10px",
    ':hover':{
        textDecoration: "underline"
    }
})

let btn2 = css({
    backgroundColor: "#9E2A2B",
    color: "#FFE6A7",
    fontFamily: "Montserrat",
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: "10px",
    ':hover':{
        textDecoration: "underline"
    }
})