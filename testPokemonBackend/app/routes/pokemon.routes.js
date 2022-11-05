module.exports = app => {
  const Pokemon = require("../controllers/pokemon.controller.js");

  var router = require("express").Router();

  // Retrieve all Pokemon
  router.get("/", Pokemon.findAll);

   // Retrieve a single Pokemon with name
   router.get("/:name", Pokemon.findOne); 
   // Retrieve a Pokemons with Weaknesses
   router.get("/weak/:weaknesses", Pokemon.findByWeaknesses);
   // Retrieve a Pokemons without Weaknesses
   router.get("/strong/:weaknesses", Pokemon.findByStrong);
   router.post("/figth", Pokemon.battle);

  app.use("/", router);
};
