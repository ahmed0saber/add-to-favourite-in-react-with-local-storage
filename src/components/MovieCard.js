import React, {useState} from 'react'

export default function MovieCard(props) {
    const [favourites, setFavourites] = useState([])
    const [firstLoad, setFirstLoad] = useState(true)
    function getDataFromLocalStorage() {
        setFirstLoad(false)
        if(localStorage.getItem("favouritesData") === null){
            localStorage.setItem("favouritesData", JSON.stringify([]))
        }
        setFavourites(JSON.parse(localStorage.getItem("favouritesData")))
    }
    if(firstLoad){
        getDataFromLocalStorage()
    }
    function addToFav(movieData) {
        let tempArray = JSON.parse(localStorage.getItem("favouritesData"))
        tempArray.push(movieData)
        localStorage.setItem("favouritesData", JSON.stringify(tempArray))
        setFavourites(tempArray)
    }
    function isFavourite(movieId) {
        for(let i=0; i<favourites.length; i++){
            if(movieId == favourites[i].id){
                return true
            }
        }
        return false
    }
    function removeFromFav(movieId) {
        for(let i=0; i<favourites.length; i++){
            if(movieId == favourites[i].id){
                let tempArray = JSON.parse(localStorage.getItem("favouritesData"))
                tempArray.splice(i, 1)
                localStorage.setItem("favouritesData", JSON.stringify(tempArray))
                setFavourites(tempArray)
            }
        }
    }
    return (
        <div className='card'>
            <h3>Title: {props.data.title}</h3>
            <p>Desc: {props.data.desc}</p>
            <p>Id: {props.data.id}</p>
            {isFavourite(props.data.id) ? <button className='remove' onClick={() => removeFromFav(props.data.id)}>Remove from favourite</button> :
            <button className='add' onClick={() => addToFav(props.data)}>Add to favourite</button>}
        </div>
    )
}
