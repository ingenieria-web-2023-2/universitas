const promesaApiPokemon = fetch('https://pokeapi.co/api/v2/type');

  promesaApiPokemon
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(data => {
    let bodyTableHtml = "";
    const resultados = data.results;
    resultados.forEach(element => {
      bodyTableHtml += `<tr>
                            <td>${element.name}</td>
                            <td><a href="${element.url}">${element.url}</a></td>
                        </tr>`;      
    });
    document.querySelector("#tbl_pokemon tbody").innerHTML = bodyTableHtml;
  });


  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Se presentó un error");
    }, 300);
  });

  myPromise
  .then(respusta => console.log("entro por el then ",respusta))
  .catch(error => console.log("entro por el catch ",error))
  .finally(() => console.log("Se ejecuta siempre"));