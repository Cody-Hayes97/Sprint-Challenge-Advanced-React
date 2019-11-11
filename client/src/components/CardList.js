import React from "react";
import axios from "axios";
import { WWCCard } from "./WWCCard";

export class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({
          players: res.data
        });
        console.log(this.state.players);
      })
      .catch(err => [console.log(err)]);
  }

  render() {
    return (
      <div className="CardList">
        {this.state.players.map(play => (
          <WWCCard
            key={play.id}
            name={play.name}
            country={play.country}
            searches={play.searches}
          />
        ))}
      </div>
    );
  }
}
