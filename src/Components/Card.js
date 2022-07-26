import React from 'react';

const Card = ({ id, name, email }) => { //destructuring
    return (
        <div className='bg-dark-gray dib br3 pa3 ma3 grow bw2 shadow-5 tc'>
            <div className='white'>
                <h2>{name}</h2>
                <img src={`https://robohash.org/set_set3/${id}2361534?200x200`} alt='avatar'/>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card