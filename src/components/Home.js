import { css } from 'glamor'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


function Home() {

    const year = new Date().getFullYear() - 1

    const { gid } = useParams()
    const testURL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&gt_discount=0.4&limit=5"
    const rankURL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&order_by=rank&limit=5"
    const DateURL = `https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&gt_year_published=${year}&limit=5&skip=1`

    let [discountArray, setDiscountArray] = useState([]);
    let [rankArray, setRankArray] = useState([]);
    let [dateArray, setDateArray] = useState([]);

    useEffect(()=>{
        showGames(gid)
    },[gid])

    function showGames(gameId){
        console.log(year)
        // for(let i=0;1<10;i++){
            // fetch(DateURL)
            fetch(testURL)
            .then(response => response.json())
            .then((data)=>{
                console.log(data)
                setDiscountArray(data.games)
            })

            fetch(rankURL)
            .then(response => response.json())
            .then((data)=>{
                console.log(data)
                setRankArray(data.games)
            })

            fetch(DateURL)
            .then(response => response.json())
            .then((data)=>{
                console.log(data)
                setDateArray(data.games)
            })
        // }
    }

    //tried {JSON.stringify(DateArray)} since random only returns one game

    return (
        <div>
            <div style={styles.div}>
                <h2 style={styles.p}>Best Discounts Right Now</h2>
                <div style={styles.div}>
                    {discountArray.map((e,i)=>{
                            return<article key={e.id} {...css(card)} >
                                    <h2 style={styles.gameTitle}>{e.name}</h2>
                                    <img style={styles.img} src={e.images.medium} alt={e.name + "'s box art"} /> 
                                    <ul style={styles.ul}>
                                        <li>Was: ${e.msrp}</li>
                                        <li>Now: ${e.price}</li>
                                    </ul>
                                    <a href={`/SelectedGame/${e.id}`}> <button {...css(btn)}></button></a>
                            </article>
                        })}
                </div>
            </div>
            <div style={styles.div}>
                <h2 style={styles.p}>Top Ranked Games</h2>
                <div style={styles.div}>
                    {rankArray.map((e,i)=>{
                            return<article key={e.id} {...css(card)} >
                                    <h2 style={styles.gameTitle}>{e.name}</h2>
                                    <img style={styles.img} src={e.images.medium} alt={e.name + "'s box art"} /> 
                                    {/* <h3>Was: ${e.msrp} - Now: ${e.price}</h3> */}
                                    <a href={`/SelectedGame/${e.id}`}> <button {...css(btn)}></button></a>
                                    {/* <a href={`/SelectedGame/${e.id}`}> <button style={styles.button}></button></a> */}
                            </article>
                        })}
                </div>
            </div>
            <div style={styles.div}>
                <h2 style={styles.p}>Games Published This Year!</h2>
                <div style={styles.div}>
                    {dateArray.map((e,i)=>{
                            return<article key={e.id} {...css(card)} >
                                    <h2 style={styles.gameTitle}>{e.name}</h2>
                                    <img style={styles.img} src={e.images.medium} alt={e.name + "'s box art"} /> 
                                    <a href={`/SelectedGame/${e.id}`}> <button {...css(btn)}></button></a>
                            </article>
                        })}
                </div>
            </div>
        </div>
    )
}

export default Home

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
        backgroundColor: "#99582A",
        display: "flex",
        flexDirection: "row",
        height: "75%",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop:"20px",
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
    p:{
        color:"#FFE6A7",
    },
    ul:{
        color:"#FFE6A7",
        textAlign: "center",
        padding: "10px",
        width: "100%",
        margin: "0 auto",
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