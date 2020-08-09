// src/server.js
const { Server } = require("boardgame.io/server");
const { TicTacToe } = require("../tictactoe/Game");
const { PokemonDrinkingGame } = require("../pdg/Game");

const server = Server({ games: [TicTacToe, PokemonDrinkingGame] });

server.run(8000);
