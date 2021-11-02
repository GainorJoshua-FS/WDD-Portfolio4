import React, { useEffect, useState } from 'react'

function Search(){
    let API_KEY = "lkziTbYVbS"
    let BASE_URL = "https://api.boardgameatlas.com/api/"

    let [gameArray, setGameArray] = useState([]);
    let [query, setQuery] = useState("");

    useEffect(()=>{
        doSearch('Catan');
    },[])

    function updateSearchQuery(e){
        setQuery(e.target.value)
    }

    function doSearch(query){
        let url = BASE_URL + "search?name=" + query + "&client_id=" + API_KEY
        fetch(url)
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            setGameArray(data.games)
        })
    }
    return(
        <div>
            <input name="searchInput" onChange={updateSearchQuery}/>
                <button onClick={()=>doSearch(query)}>Search</button>
                <p>Test</p>
                {gameArray.map((e,i)=>{
                    return <p key={e.id}>{e.name}
                    <img src={e.images.small} alt={e.name + "'s box art"} /> </p>
                })}
        </div>
    )
}
// "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg"

// function Search() {
//     let API_KEY = "2070be36357de0168514237b9b739168"
//     let BASE_URL = "https://api.themoviedb.org/3/"
//     let IMG_BASE = "https://image.tmdb.org/t/p/w200"

//     let [movieArray, setMovieArray] = useState([]);
//     let [query,setQuery] = useState("");

// useEffect(() =>{
//     doSearch('Jaws');
// },[])

// function updateSearchQuery(e){
//     setQuery(e.target.value)
// }

// function doSearch(query){
//     let url = BASE_URL + "search/movie?api_key=" + API_KEY + "&query=" + query
//     fetch(url)
//     .then(response => response.json())
//     .then((data)=>{
//         console.log(data)
//         setMovieArray(data.results);
//     })
// }

//     return (
//         <div>
//             <input name="searchInput" onChange={updateSearchQuery}/>
//             <button onClick={()=>doSearch(query)}>Search</button>
//             <p>Test</p>
//             {movieArray.map((e,i)=>{
//                 return <p key={e.id}>{e.title} ({e.release_date})
//                 <img src={IMG_BASE + e.poster_path}/> </p>
//             })}
//         </div>
//     )
// }

export default Search
