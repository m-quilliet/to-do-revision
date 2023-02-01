import './App.css';
import React, {useState} from 'react';
import Fruit from './components/Fruit';
import FruitForm from './components/FruitForm';



function App () {
   /////////state (état, donées)///////
    //modifie jms un state directement
  const [fruits, setFruits] = useState([
    {id: 1, nom: "Abricot"},
    {id: 2, nom: "Banane"},
  ]);
// RELIÉ AU FROMULAIRE
  // const [nouveauFruit,setNouveauFruit] = useState('');

   //////comportements///////
   //reçoit id en paramétre
  const handleDelete = (id) => {
     // 1. copie du state // copie un autre tableau indep
    //  const fruitsCopy= fruits.slice();
      //ou avec spread operator
    const fruitsCopy = [...fruits];

     // 2. manipuler le state
     // filter crée tableau en filtrant le premier selon la condition 
     //conserver uniquement ceux dont id est diffférent de id donnée en paramétre
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id)

     //3 .actualiser mon state avec le setter et qui prend en compte la nouvelle valeur du state
     setFruits(fruitsCopyUpdated);
  };
//refactorisation du code pour HANDLEADD s'occupe du fruits ajouter
  const handleAdd = (fruitAAjouter) =>{
    //1. Copie du state
    const fruitsCopy = [...fruits];//nouveau tableau qui va avoir à l'int fruits//eclater via spread opérateur
    //2.  Manipulation de la copie du state
      // ajoute à la fin du tableau;
    fruitsCopy.push(fruitAAjouter);
    //3. modifier le state avec setter
    setFruits(fruitsCopy);
  };

// RELIER AU FORMULAIRE
//   const handleSubmit  = (event) => {
//     //empécher le rechargement de la page
//     event.preventDefault();
//       //1. copie du state
//     const fruitsCopy = [...fruits];//nouveau tableau qui va avoir à l'int fruits//eclater via spread opérateur
//       //2. manipulation sur la copie du state
//     const id = new Date().getTime();
//     const nom = nouveauFruit;
//     const fruitAAjouter = ({id: id, nom: nom});
//     // ajoute à la fin du tableau;
//     fruitsCopy.push(fruitAAjouter);
//       //modifie state avec le setter
//     setFruits(fruitsCopy);
//     //ensuite pour avoir la case vide
//     setNouveauFruit('');
//   };


//  //lrsq fonction est liée à un évenement, elle recoit cet événement en paramétre   
//   const handleChange = (event)=> {
//     //setter recoit la valeur juste aprés le chgmt
//         setNouveauFruit(event.target.value);
//   };
  
  return (
    <div>
      <h1> Listes</h1>
      {/* //créer un 2e tableau avec les éléments du 1er. */}
        <ul>
          {fruits.map((fruit) => (
          //   <li key={fruit.id}> 
          //   {fruit.nom} <button onClick={() => handleDelete(fruit.id)}>X</button>
          //   {/* //lrsq fct lié à un événement, recoit d'événement clic// événement recoit tjr une fct fléchée */}
          // </li>
          <Fruit fruitInfo={fruit} 
                onFruitDelete={handleDelete} 
                key={fruits.id}/>
          //fruit composant enfant qui contient tte la logique d'affichage du parent
          ))}
             {/* //passe un props à mon composant le props (fruit)
             //composant FRUIT va avoir de la liste de fruit et de la fonctioh handleDelete */}
        </ul>
        <FruitForm handleAdd={handleAdd} />
        {/* //envoie handleadd en props ds le composant form  */}


        {/* <form action="submit" onSubmit={handleSubmit}>
            <input 
            //valeur de mon input reste coincé sur mon state //on change l'affichage 
            //sans lui donner la possibilité de changer
                value={nouveauFruit}
                type="text" 
                placeholder='Ajouter un fruit..'
                //au moment du changement //gére le chgmt
                onChange={handleChange}/>
            <button>Ajouter</button>
        </form> */}
    </div>
  );
}
export default App
