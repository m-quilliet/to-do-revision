import React from 'react'

const Client = ({details, onDelete}) => {
  return (
    <li>
    {details.nom} <button onClick={() => onDelete(details.id)}>X</button>
  </li>
  )
}

export default Client