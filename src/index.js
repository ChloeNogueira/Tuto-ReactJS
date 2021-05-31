import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

import "./styles.css";

class App extends React.Component {
  //clientInpput = React.createRef(); //Création d'une variable qui fait référence à un élément du DOM
  state = {
    clients: [
      { id: 1, nom: "Chloé Nogueira" },
      { id: 2, nom: "Valentin Labat" },
      { id: 3, nom: "Toto" },
      { id: 4, nom: "Lardon" }
    ]
  };

  handleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);

    clients.splice(index, 1);

    this.setState({ clients });
  };

  handleAdd = (client) => {
    const clients = [...this.state.clients]; //copie le tableau
    clients.push(client);
    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";
    //const element = <li> Test var </li>;
    /*const elements = this.state.clients.map((client) => (
      <li>
        {client.nom} <button> X </button>
      </li>
    ));*/
    return (
      <div className="App">
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map((client) => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
