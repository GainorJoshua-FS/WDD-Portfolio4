import React, { useState } from 'react'
import HelperNotes from './HelperNotes';
import { useNavigate, useParams } from 'react-router-dom';

function UseHelperNotes() {

    let [query,setQuery] = useState("");

    let [btnDisabled,setBtnDisabled] = useState(false);

    let navigate = useNavigate();

    let historyList = new HelperNotes("otherTest")

    function updateSearchQuery(e){
        setQuery(e.target.value);
        setBtnDisabled(historyList.exists(e.target.value))
    }

    function doSearch(e,q){
        e.preventDefault();
        if(historyList.exists(q)){
            alert("already searched for " + q)
        }
        historyList.saveItem(q)
        let url = "/search/" + q;
        navigate(url);
    }

    return (
        <form onSubmit={(e)=>doSearch(e,query)}>
            <input name="search" value={query} onChange={updateSearchQuery}></input>
            <button type="submit" disabled={btnDisabled}>Test</button>
            {/* Or */}
            { (btnDisabled) ? <p>No Sir</p>:<button type="submit" disabled={btnDisabled}>Test2</button> }
        </form>
    )
}

export default UseHelperNotes
