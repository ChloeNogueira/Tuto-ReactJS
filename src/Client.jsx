import React, { Component } from "react";

/*Composant fonctionnel, cad qu'il n'a pas besoin d'état, de données, 
il se suffit à lui-même avec les infos envoyées par le composant parent, 
Donc pas besoin de Class */

function Client(props) {
  //const details = this.props.details;
  //const onDelete = this.props.onDelete;

  const { details, onDelete } = props; //déstructuration, peut se faire directement dans les params de la fonction à la place de props
  return (
    <li>
      {details.nom}
      <button onClick={() => onDelete(details.id)}>X</button>
    </li>
  );
}

/*
const Client = ({details, onDelete}) => (
    <li>
      {details.nom}
      <button onClick={() => onDelete(details.id)}>X</button>
    </li>
 );
*/
export default Client;
