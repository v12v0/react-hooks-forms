import React from 'react';

export default function DisplayData({firstName,lastName}){
    return(
        <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        </div>
    )
}