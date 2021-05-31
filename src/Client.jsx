import React, { Component } from "react";

class Client extends Component {
  render() {
    //const details = this.props.details;
    //const onDelete = this.props.onDelete;

    const { details, onDelete } = this.props; //déstructuration
    return (
      <li>
        {details.nom}
        <button onClick={() => onDelete(details.id)}>X</button>
      </li>
    );
  }
}

export default Client;
