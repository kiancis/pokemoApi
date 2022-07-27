/*Nombre
Foto
Tipo
Height
weight
Stats (Nombre y Valor)
Movimientos
*/

function submit() {
  const search = document.getElementById("search").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const image = data.sprites.front_default;
      const types = data.types.map((element) => {
        return element.type.name;
      });
      const height = data.height;
      const weight = data.weight;
      const moves = data.moves.map((element) => {
        return element.move.name;
      });

      console.log(data);

      const result = document.getElementById("result");
      result.innerHTML = `<div class="container">
          <div class="column1">
              <h1>${name}</h1>
                <br>
                <div class="img"><img src="${image}" alt="pokeImage"></div>
                <div class="column2">
                <h2>Altura: ${height}</h2>
                    <div class="type">
                      <ul>
                        ${types.map((type) => `<li>${type}</li>`).join("")}
                        </ul>
                    </div>
                      <h2>Peso: ${weight}</h2>
                </div>
          </div>
            <br>
            <h2>Stats</h2>
            <div class="avatar-container p-${data.stats[0].base_stat}">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/_shahedk/128.jpg" alt="" class="avatar"/>
          </div><!--.avatar-container-->
          
          <div class="avatar-container p-${data.stats[1].base_stat}">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mattchevy/128.jpg" alt="" class="avatar"/>
          </div><!--.avatar-container-->
          
          <div class="avatar-container p-${data.stats[2].base_stat}">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg" alt="" class="avatar"/>
          </div><!--.avatar-container-->
            </div>
          <div class="avatar-container p-${data.stats[3].base_stat}">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg" alt="" class="avatar"/>
          </div><!--.avatar-container-->
            </div>
          <div class="avatar-container p-${data.stats[4].base_stat}">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg" alt="" class="avatar"/>
          </div><!--.avatar-container-->
            </div>
          <div class="avatar-container p-${data.stats[5].base_stat}">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg" alt="" class="avatar"/>
          </div><!--.avatar-container-->
            </div>               
              </div>
      </div>`;
    })
    .catch((error) => console.log(error));
}
