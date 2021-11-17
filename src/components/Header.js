import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

function Header() {
    return (
        <header style={styles.header}>
            <h1 className="heading" style={styles.title}>Board <a href="/"><img src={Logo} alt="Board Debut Logo"/></a> Debut</h1>
            <div style={styles.links}>
                <Link className="info" style={styles.link} to="/">Home</Link>
                <Link className="info" style={styles.link} to="/search/hill">Search</Link>
                <Link className="info" style={styles.link} to="/Collection">My Collection</Link>
                <Link className="info" style={styles.link} to="/Wishlist">Wishlist</Link>
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
        backgroundColor: "#432818",
        color: "#FFE6A7",
        margin: "1rem",
        padding: "5px",
        fontFamily: "Montserrat",
        fontWeight: "bold"
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
        textAlign: "right",
        marginBottom:"5px"
        // width: "30%"
    }
}
