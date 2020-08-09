import { Client } from "boardgame.io/react";
import { TicTacToe } from "./tictactoe/Game";
import { TicTacToeBoard } from "./tictactoe/Board";

const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
});

export default App;
