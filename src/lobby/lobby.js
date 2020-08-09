// src/lobby.js

import React from "react";
import { Lobby } from "boardgame.io/react";
// import { Client } from "boardgame.io/react";
// import { SocketIO } from "boardgame.io/multiplayer";
import { TicTacToe } from "../tictactoe/Game";
import { TicTacToeBoard } from "../tictactoe/Board";
import { PokemonDrinkingGame } from "../pdg/Game";
import { PokemonDrinkingGameBoard } from "../pdg/Board";
import "./lobby.css";

PokemonDrinkingGame.minPlayers = 1; // This is set to 1 for testing purposes only
PokemonDrinkingGame.maxPlayers = 20;

const hostname = window.location.hostname;
const importedGames = [
  { game: TicTacToe, board: TicTacToeBoard },
  { game: PokemonDrinkingGame, board: PokemonDrinkingGameBoard },
];

// const TicTacToeClient = Client({
//   game: TicTacToe,
//   board: TicTacToeBoard,
//   multiplayer: SocketIO({ server: "localhost:8000" }),
// });

// const App = () => (
//   <div>
//     <TicTacToeClient playerID="0" />
//     <TicTacToeClient playerID="1" />
//   </div>
// );

const LobbyView = () => (
  <div style={{ padding: 50 }}>
    <h1>Lobby</h1>

    <Lobby
      gameServer={`http://${hostname}:8000`}
      lobbyServer={`http://${hostname}:8000`}
      gameComponents={importedGames}
    />
  </div>
);
export default LobbyView;
