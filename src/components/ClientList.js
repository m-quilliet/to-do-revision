
import React, {useState} from 'react'
import ClientForm from './ClientForm'
import Client from './Client'

const ClientList = () => {
    const [clients,setClients] =  useState([])

    const handleDelete = id => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex(client => client.id === id);

    updatedClients.splice(index, 1);
    setClients(updatedClients);
    };
    const handleAdd = client => {
    const updatedClients = [...clients];//[constante client qui contient ma liste des clients]

    updatedClients.push(client);
    setClients(updatedClients);

    };

    const title= "Listes des clients";

    return (
    <div className='list-client'>
        <h1>{title}</h1>
        <ul>
        {clients.map(client => (
            <Client
            key={client.id}
            details={client}
            onDelete={handleDelete}
            />
        ))}
        </ul>
        <ClientForm onClientAdd={handleAdd}/>
    </div>
    );
}

export default ClientList