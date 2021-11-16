import React from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom'

function PriceCard(props) {
    return (
        <article {...css(card)} >
            <h2 style={styles.gameTitle}>{props.name}</h2>
            <img style={styles.img} src={props.image} alt={props.name + "'s box art"} /> 
            <ul style={styles.ul}>
                <li><span style={styles.was}>Was: ${props.msrp}</span></li>
                <li>Now: ${props.price}</li>
            </ul>
            <Link to={`/SelectedGame/${props.id}`}><button {...css(btn)}></button></Link>
            {/* <a href={`/SelectedGame/${e.id}`}> <button {...css(btn)}></button></a> */}
        </article>
    )
}

export default PriceCard

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
        transition:"transform 0.25s",
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
    subHead:{
        color:"#FFE6A7",
        width: "100%"
    },
    ul:{
        color:"#FFE6A7",
        textAlign: "center",
        padding: "10px",
        width: "100%",
        margin: "0 auto",
    },
    was:{
        textDecoration: "line-through"
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
    width: "calc(85%/5)",
    paddingBottom:"10px",
    margin: "20px 0px",
    position: "relative",
    transition:"transform 0.25s",
    borderRadius: "12px",
    boxShadow: "10px 5px 5px #432818",
    ':hover':{
        transform: "scale(1.05)"
    }
})