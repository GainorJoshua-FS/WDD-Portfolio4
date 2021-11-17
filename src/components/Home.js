import { css } from 'glamor'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import DateCard from './DateCard';
import PriceCard from './PriceCard';
import RankCard from './RankCard';


function Home() {

    //  TODO: 
    // Add Footer
    // Reactive design
    // Ratings and release dates on home page
    

    const year = new Date().getFullYear() - 1

    const { gid } = useParams()
    const discountURL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&gt_discount=0.4&limit=5"
    const rankURL = "https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&order_by=rank&limit=5"
    const DateURL = `https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&gt_year_published=${year}&limit=5&order_by=rank&ascending=true&skip=1`

    let [discountArray, setDiscountArray] = useState([]);
    let [rankArray, setRankArray] = useState([]);
    let [dateArray, setDateArray] = useState([]);

    useEffect(()=>{
        showGames(gid)
    },[gid])

    function showGames(gameId){
        console.log(year)
            fetch(discountURL)
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
                <h2 style={styles.subHead}>Best Discounts Right Now</h2>
                <div style={styles.div}>
                    {(discountArray.length === 0)?<h1 style={styles.loading}>Loading...</h1>:""}
                    {discountArray.map((e,i)=>{
                        return<PriceCard key={e.id} id={e.id} name={e.name} image={e.images.medium} msrp={e.msrp} price={e.price} />
                        })}
                </div>
            </div>
            <div style={styles.div}>
                <h2 style={styles.subHead}>Best Games Published This Year!</h2>
                <div style={styles.div}>
                    {(discountArray.length === 0)?<h1 style={styles.loading}>Loading...</h1>:""}
                    {dateArray.map((e,i)=>{
                            return <DateCard key={e.id} id={e.id} name={e.name} image={e.images.medium} info={e.msrp_text !== undefined ? e.msrp_text:"Price Unavailable"} />
                        })}
                </div>
            </div>
            <div style={styles.div}>
                <h2 style={styles.subHead}>Top Ranked Games</h2>
                <div style={styles.div}>
                    {(discountArray.length === 0)?<h1 style={styles.loading}>Loading...</h1>:""}
                    {rankArray.map((e,i)=>{
                            return <RankCard key={e.id} id={e.id} name={e.name} image={e.images.medium} rank={e.rank} rating={e.average_user_rating.toFixed(2)}  />
                        })}
                </div>
            </div>
        </div>
    )
}

export default Home

const styles ={
    div:{
        backgroundColor: "#99582A",
        display: "flex",
        flexDirection: "row",
        height: "75%",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop:"20px",
    },
    subHead:{
        color:"#FFE6A7",
        width: "100%"
    },
    loading:{
        color:"#FFE6A7",
        height: "250px",
    }
}
