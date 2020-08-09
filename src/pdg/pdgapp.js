import React from "react";
import { Client } from "boardgame.io/react";
import { Debug } from "boardgame.io/debug";
import PokemonDrinkingGame from "./game";
import PokemonDrinkingGameBoard from "./board";

const App = Client({
  game: PokemonDrinkingGame,
  board: PokemonDrinkingGameBoard,
  debug: { impl: Debug },
});

const PdgApp = () => (
  <div>
    <h1>Pokemon Drinking Game</h1>
    <App gameID="single" />
  </div>
);

export default PdgApp;
