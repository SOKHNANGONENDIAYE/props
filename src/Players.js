import React from 'react';
const Players = ({nom,équipe,nationalité,numero,url}) => {
    return < >
     <div className='div' >

        <h1> {nom} </h1>
        <h2> {nationalité} </h2>
        <h2> {équipe} </h2>
        <h2> {numero} </h2>
        <img src= {url} />

    </div>;
    </>
     
}
export default Players;