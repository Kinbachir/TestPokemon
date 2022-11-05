module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id:Number,
        num:String,
        name:String,
        img:String,
        type:Array,
        height:String,
        weight:String,
        candy:String,
        candy_count:Number,
        egg:String,
        spawn_chance:Number,
        avg_spawns:Number,
        spawn_time:String,
        multipliers:Array,
        weaknesses:Array,
        next_evolution:Array
      }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const pokemon = mongoose.model("pokemon", schema);
    return pokemon;
  };
  