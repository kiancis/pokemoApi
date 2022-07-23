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
      const stats = data.stats.map((element) => {
        return element.stat.name + ": " + element.base_stat;
      });
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
          </div>
            <br>
            <div class="column2">
                <h2>Tipos</h2>
                <ul>
                  ${types.map((type) => `<li>${type}</li>`).join("")}
                  </ul>
                  <h2>Altura: ${height}</h2>
                  <h2>Peso: ${weight}</h2>
            </div>
              <div class="column3">
                  <div class="stats">
                  <h2>Stats</h2>
                      <ul>
                        ${stats.map((stat) => `<li>${stat}</li>`).join("")}
                        </ul>
                  </div>
                    <div class="moves">
                        <h2>Movimientos</h2>
                        <ul>
                            ${moves.map((move) => `<li>${move}</li>`).join("")}
                          </ul>
                    </div>
              </div>
      </div>`;
    })
    .catch((error) => console.log(error));
}
