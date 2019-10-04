import React from 'react'

function Player({country, id, name, searches}) {
    return (
        <div className="col-sm-4">
            <h3 data-testid='name'>{name}</h3>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
        </div>
    )
}

export default Player