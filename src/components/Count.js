import React, { useState, useEffect } from 'react';

function Count() {
    //déclaration d'une variable d'état "count" 
    //retourne la valeur de l'état actuel et une fonction qui vous permet de la mettre à jour
    const [count, setCount] = useState(0);

    // lancé votre fonction d'effet aprés maj du DOM 
    // ont accés à ses props et son état car déclaré au sein du composant
    //react nettoie les effets du rendu précédent avant d'exécuter une nouvelle fois
    useEffect(() => {
        // Mettre à jour le titre du document en utilisant l'API du navigateur
        document.title = `Vous avez cliqué ${count} fois`;
    },[count]);//n'éxéxcute l'effet que si count a changé

    return (
        <div>
        <p>Vous avez cliqué sur ajouter {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
            Ajouter
        </button>
        <button onClick={() => setCount(count - 1)}>
            Retirer
        </button>
        </div>
    );
}

export default Count;