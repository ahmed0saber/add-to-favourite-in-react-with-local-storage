import React, {useState} from 'react'
import MovieCard from './MovieCard'

export default function Favourite() {
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
    return (
        <>
            <h2 className='title'>Favourite Page</h2>
            <div className='row'>
                {favourites.length < 1 ? <p>There are no movies added to favourites.</p> :
                favourites.map((favourite, index) => <MovieCard data={favourite} key={index} />)}
            </div>
        </>
    )
}
