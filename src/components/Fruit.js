import React from 'react'


export default function Fruit({fruitInfo, onFruitDelete})  {

    return(
    <li> 
        {fruitInfo.nom}{""} 
        <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    {/* //lrsq fct lié à un événement, recoit d'événement clic// événement recoit tjr une fct fléchée */}
    </li>
    )
}

