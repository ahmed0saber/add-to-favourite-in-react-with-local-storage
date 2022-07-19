import React from 'react'
import MovieCard from './MovieCard'

export default function Home(props) {
    return (
        <>
            <h2 className='title'>Home Page</h2>
            <div className='row'>
                {props.movies.map((movie, index) => <MovieCard data={movie} key={index} />)}
            </div>
        </>
    )
}
