import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function SearchForm() {

    let [query, setQuery] = useState("");

    let navigate = useNavigate();

    //TODO: Grab current search query from URL to pre-populate the form, if appliciple
    // let {searchQuery} = useParams()

    // useEffect(()=>{
    //     setQuery(searchQuery || "")
    // },[searchQuery])

    //Update the query in state before search is triggered
    function updateSearchQuery(e){
        setQuery(e.target.value)
    }

    //Compiles search form data into a url and redirects to that url
    function doSearch(e,q){
        e.preventDefault();
        console.log("boop-", q)
        let url = '/search/' + q;
        navigate(url);
    }

    return (
        <section style={styles.container}>
            <form onSubmit={(e)=>doSearch(e,query)}>
                <input className="subHead" style={styles.search} name="searchInput" value={query} onChange={updateSearchQuery}/>
                <button className="info" style={styles.btn} type="submit">Search</button>
            </form>
        </section>
    )
}

export default SearchForm

const styles = {
    container:{
        textAlign: "right"
    },
    search:{
        // backgroundColor: "#",
        color: "#633817",
        backgroundColor: "#BB9457",
        border: "none",
        fontWeight: "900",
        marginTop: "10px",
        padding: "5px",
        borderRadius: "10px",
        fontFamily: "Futura PT",
        fontSize: "16px"
    },
    btn:{
        backgroundColor: "#633817",
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
