import { css } from 'glamor'
import React from 'react'
import { Link } from 'react-router-dom'

function DateCard(props) {
    return (
        <article {...css(card)} >
            <h2 class="subHead" style={styles.gameTitle}>{props.name}</h2>
            <img style={styles.img} src={props.image} alt={props.name + "'s box art"} /> 
            <h3 style={styles.subInfo}>{props.info}</h3>
            <Link to={`/SelectedGame/${props.id}`}><button {...css(btn)}></button></Link>
            {/* <a href={`/SelectedGame/${e.id}`}> <button {...css(btn)}></button></a> */}
        </article>
    )
}

export default DateCard

const styles ={
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
    subInfo:{
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