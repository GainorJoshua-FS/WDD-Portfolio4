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
                <input style={styles.search} name="searchInput" value={query} onChange={updateSearchQuery}/>
                <button type="submit">Search</button>
            </form>
        </section>
    )
}

export default SearchForm

const styles = {
    container:{
        position: "absolute",
        right: 0,
        top: 170
    },
    search:{
        backgroundColor: "#FFE6A7",
        color: "#633817"
    }
}
