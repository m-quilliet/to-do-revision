import React, {useState} from "react";

export default function FruitForm({handleAdd}){
    //récupére le props handleAdd

    const [nouveauFruit,setNouveauFruit] = useState('');

const handleSubmit  = (event) => {
    //empécher le rechargement de la page
    event.preventDefault();

    //*** va ds HANDLEADD *** 
    //     //1. copie du state
    // const fruitsCopy = [...fruits];//nouveau tableau qui va avoir à l'int fruits//eclater via spread opérateur

        //2. manipulation sur la copie du state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = ({id: id, nom: nom});

    //ligne à ajouter si on a une fonction handleAdd
    handleAdd(fruitAAjouter);

    // *** va ds HANDLEADD car intéragie avec la copy du state
    // // ajoute à la fin du tableau;
    // fruitsCopy.push(fruitAAjouter);
    //     //modifie state avec le setter
    // setFruits(fruitsCopy);

    //ensuite pour avoir la case vide
    setNouveauFruit('');
    };
    
    
     //lrsq fonction est liée à un évenement, elle recoit cet événement en paramétre   
    const handleChange = (event)=> {
    //setter recoit la valeur juste aprés le chgmt
        setNouveauFruit(event.target.value);
    };
    return(
        <form action="submit" onSubmit={handleSubmit}>
            <input 
            //valeur de mon input reste coincé sur mon state //on change l'affichage 
            //sans lui donner la possibilité de changer
                value={nouveauFruit}
                type="text" 
                placeholder='Ajouter un fruit..'
                //au moment du changement //gére le chgmt
                onChange={handleChange}/>
            <button>Ajouter</button>
    </form>
    )    
}