
import React, {useState} from 'react'

export default function App() {
  //state (état, donnée)
  //définit un state que j'ai initialisé à un et stocker ds une variable compteur
    const [compteur, setCompteur]=useState(1);

  //comportements
  //brancher comportement à mon affichage
  //modifie un state en passant tjr sur son setter
  //setter c'est asynchrone

    const handleClick = () => {
        setCompteur(compteur + 1);
    };  
    
    return(
        <div className="list">
            <h1>{compteur}</h1>
            <button onClick={handleClick}>Incrément</button>
        </div>

    )
}