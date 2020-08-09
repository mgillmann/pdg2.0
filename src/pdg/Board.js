import React from "react";

export class PokemonDrinkingGameBoard extends React.Component {
  render() {
    return (
      <div id="board">
        <img src={require(`../assets/wall-old.png`)} alt="game board" />
      </div>
    );
  }
}
