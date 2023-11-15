fetch('https://pokeapi.co/api/v2/type')
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(data => console.log(data));