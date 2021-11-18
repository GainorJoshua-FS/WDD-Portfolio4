import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer style={styles.footer}>
            <ul style={styles.links}>
                <li><Link style={styles.link} to="/">LinkedIn</Link></li>
                <li><Link style={styles.link} to="/">Twitter</Link></li>
                <li><Link style={styles.link} to="/">Facebook</Link></li>
                <li><Link style={styles.link} to="/">Instagram</Link></li>
            </ul>
            <p>© 2021 BoardDebut. All rights reserved. <a style={styles.link} href="/">Terms and Conditions</a></p>
            <p><Link style={styles.link} to="/">Privacy Policy</Link></p>
        </footer>
    )
}

export default Footer

const styles = {
    footer:{
        backgroundColor: "#633817",
        color: "#FFE6A7",
        paddingBottom: "20px", 
        paddingTop: "20px" 
    },
    links:{
        display: "flex",
        justifyContent: "center",
        
    },
    link:{
        color: "#FFE6A7",
        marginLeft: "10px",
    },
}