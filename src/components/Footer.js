import React from 'react'

function Footer() {
    return (
        <footer style={styles.footer}>
            <h2 className="heading" style={styles.header}>Contact Us</h2>
            <form action="#urlfordata" method="POST">
                <div>
                    <input style={styles.input} type="text" id="name" name="name" placeholder="Name" required="required"/>
                </div>
                <div>
                    <input style={styles.input} type="email" id="email" name="email" placeholder="Email" required="required"/>
                </div>
                <div>
                    <textarea style={styles.input} name="message" id="message" placeholder="Message" cols="40" rows="3"></textarea>
                </div>
                <div>
                    <button style={styles.btn} type="submit">
                        + Send Message
                    </button>
                </div>
            </form>
            <ul style={styles.links}>
                <li><a style={styles.link} href="/">LinkedIn</a></li>
                <li><a style={styles.link} href="/">Twitter</a></li>
                <li><a style={styles.link} href="/">Facebook</a></li>
                <li><a style={styles.link} href="/">Instagram</a></li>
            </ul>
            <p>© 2021 BoardDebut. All rights reserved. <a style={styles.link} href="/">Terms and Conditions</a></p>
            <p><a style={styles.link} href="/">Privacy Policy</a></p>
        </footer>
    )
}

export default Footer

const styles = {
    footer:{
        backgroundColor: "#633817",
        color: "#FFE6A7",
        paddingBottom: "100px",  
    },
    header:{
        fontFamily: "Baskerville",
        fontWeight: "bold",
        color: "#FFE6A7",
        fontSize: "40px",
        marginBottom: "5px",
        paddingTop: "10px"
    },
    links:{
        display: "flex",
        justifyContent: "center",
        
    },
    link:{
        color: "#FFE6A7",
        marginLeft: "10px",
    },
    input:{
        color: "#633817",
        backgroundColor: "#BB9457",
        border: "none",
        fontWeight: "900",
        marginTop: "10px",
        padding: "5px",
        fontSize: "16px",
    },
    btn:{
        backgroundColor: "#432818",
        color: "#FFE6A7",
        fontFamily: "Montserrat",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        margin: "10px 30px 0px 0px",
        padding: "5px"
    }
}