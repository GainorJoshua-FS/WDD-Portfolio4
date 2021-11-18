import { css } from 'glamor';
import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

function Header() {
    return (
        <header style={styles.header}>
            <h1 className="heading" style={styles.title}>Board <Link to="/"><img src={Logo} alt="Board Debut Logo"/></Link> Debut</h1>
            <div className="headLinks" style={styles.links}>
                <Link className="info" {...css(link)} to="/">Home</Link>
                <Link className="info" {...css(link)} to="/search/hill">Search</Link>
                <Link className="info" {...css(link)} to="/Collection">My Collection</Link>
                <Link className="info" {...css(link)} to="/Wishlist">Wishlist</Link>
            </div>
        </header>
    )
}

export default Header

const styles ={
    header:{
        backgroundColor: "#633817",
        paddingTop: "1px",
        marginTop: "-20px",
        display: "flex",
        flexDirection: "column",
    },
    link:{
        color: "#FFE6A7",
        margin: "1rem",
        padding: "5px",
        fontFamily: "Futura PT",
        fontWeight: "bold",
        border: "none",
        textDecoration: "none"
    },
    title:{
        fontFamily: "Baskerville",
        fontWeight: "bold",
        color: "#FFE6A7",
        fontSize: "40px",
        marginBottom: "5px",
        
    },
    links:{
        display: "inline-block",
        // textAlign: "right",
        marginBottom:"5px"
        // width: "30%"
    }
}

let link = css({
    color: "#FFE6A7",
    margin: "1rem",
    padding: "0px 15px",
    fontFamily: "Futura PT",
    fontWeight: "bold",
    border: "none",
    textDecoration: "none",
    fontSize: "20px",
    ':hover':{
        backgroundColor: "#432818",
        borderRadius: "12px",
    }
})