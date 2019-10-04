import React from 'react'

function Player({country, id, name, searches}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{country}</p>
            <p>Searches: {searches}</p>
        </div>
    )
}

export default Player