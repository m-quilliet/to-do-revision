import React, {useState} from 'react'

const ClientForm = ({onClientAdd}) => {
    const [newClient,setNewClient]= useState("");

    const handleChange = event => {
        //on que se soit ce que contient la valeur de notre input
        setNewClient(event.currentTarget.value);
    }
    const handleSubmit = event => {
        event.preventDefault();

        const id= new Date().getTime();
        const nom= newClient;

        onClientAdd({id,nom});

        setNewClient("");
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                value={newClient}
                onChange={handleChange}
                type="text"
                placeholder='Nouveau client'
            />
            <button>Ajouter</button>
        </form>

    )
}

export default ClientForm;