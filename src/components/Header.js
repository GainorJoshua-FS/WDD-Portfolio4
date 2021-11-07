import React from 'react'
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import Logo from '../images/logo.png';

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Board <img src={Logo} alt="Board Debut Logo"/> Debut</h1>
            <div style={styles.links}>
                <Link style={styles.link} to="/">Home</Link>
                <Link style={styles.link} to="/search/hill">Search</Link>
                <Link style={styles.link} to="/Collection">My Collection</Link>
                {/* <SearchForm /> */}
            </div>
        </header>
    )
}

export default Header

const styles ={
    header:{
        backgroundColor: "#633817"
    },
    link:{
        backgroundColor: "#432818",
        color: "#FFE6A7",
        margin: "1rem",
        padding: "5px",
    },
    title:{
        fontFamily: "Baskerville",
        fontWeight: "bold",
        color: "#FFE6A7"
    },
    links:{
        display: "inline-block",
        textAlign: "right"
    }
}
