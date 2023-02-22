var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    console.log("second");
    return fullname;
  },
};

var pokemonName = function () {
  console.log(this.getPokeName() + "I choose you!");
  console.log("third");
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
console.log("first");

logPokemon(); // 'Pika Chu I choose you!'
