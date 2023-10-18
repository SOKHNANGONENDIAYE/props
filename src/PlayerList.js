import React from 'react';
import joueurs from "./Joueurs"
import Players from './Players';
function PlayerList() {
    return (
      <div className='play'>
      {
            joueurs.map((joueur)=>(
               <Players {...joueur} /> 
              ))
        }
      </div>
    );
  }
  
  export default PlayerList;