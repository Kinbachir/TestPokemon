const db = require("../models");
const Pokemon = db.pokemon;

// Retrieve all pokemon from the database.
exports.findAll = (req, res) => {
  Pokemon.find({  }, { name: 1,_id: 0 })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pokemon."
      });
    });
};

// Find a single Pokemon with an name
 exports.findOne = (req, res) => {
   const name = req.params.name;

   Pokemon.find({ name:name }, { img: 1,type: 1,spawn_chance: 1,_id: 0 })
     .then(data => {
       if (!data)
         res.status(404).send({ message: "Not found Pokemon with name " + name });
       else res.send(data);
     })
     .catch(err => {
       res
         .status(500)
         .send({ message: "Error retrieving Pokemon with name = " + name });
     });
 };
 // Find a single Pokemon with an weaknesses
 exports.findByWeaknesses = (req, res) => {
  const weaknesses = req.params.weaknesses;

  Pokemon.find({ weaknesses: { $in: [weaknesses ] } })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Pokemons with weaknesses " + weaknesses });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Pokemons with weaknesses = " + weaknesses });
    });
};
// Find a single Pokemon with an strong 
exports.findByStrong  = (req, res) => {
  const weaknesses = req.params.weaknesses;

  Pokemon.find({ weaknesses: { $nin: [weaknesses ] } })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Pokemons without weaknesses " + weaknesses });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Pokemons without weaknesses = " + weaknesses });
    });
};
// battle result of Pokemons
exports.battle = async (req, res) => {
  var result="";
  const myPokemon = req.body.myPokemon;
  const enemyPokemon = req.body.enemyPokemon;
  const myPokemonDetail=await Pokemon.find({ name:myPokemon }, { type: 1,weaknesses: 1,_id: 0 });
  const enemyPokemonDetail=await Pokemon.find({ name:enemyPokemon }, { type: 1,weaknesses: 1,_id: 0 });
  console.log(myPokemonDetail[0])
  console.log(enemyPokemonDetail[0])
  myPokemonDetail[0].type.forEach(element => {
    if(enemyPokemonDetail[0].weaknesses.includes(element))
    result={result:"win"};
  });
  enemyPokemonDetail[0].type.forEach(element => {
    if(myPokemonDetail[0].weaknesses.includes(element))
    result={result:"lose"};
  });
  if(result==="")
  {
    if(myPokemonDetail[0].weaknesses.length==enemyPokemonDetail[0].weaknesses.length)
      return res.send({result:"draw"});
    else if(myPokemonDetail[0].weaknesses.length>enemyPokemonDetail[0].weaknesses.length)
      return res.send({result:"win"});
    else
      return res.send({result:"lose"});
  }
  else
    return res.send(result);
};