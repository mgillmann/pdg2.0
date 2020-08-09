export const PokemonDrinkingGame = {
  name: "pokemon-drinking-game",
  setup: () => ({ pgn: "" }),
  turn: {
    moveLimit: 1,
  },
  moves: {
    rollDie: (G, ctx) => {
      G.dieRoll = ctx.random.D6();
    },
  },
  // endIf: // TODO
};
