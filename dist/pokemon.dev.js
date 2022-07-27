"use strict";

/*Nombre
Foto
Tipo
Height
weight
Stats (Nombre y Valor)
Movimientos
*/
function submit() {
  var search = document.getElementById("search").value;
  fetch("https://pokeapi.co/api/v2/pokemon/".concat(search)).then(function (response) {
    return response.json();
  }).then(function (data) {
    var name = data.name;
    var image = data.sprites.front_default;
    var types = data.types.map(function (element) {
      return element.type.name;
    });
    var height = data.height;
    var weight = data.weight;
    var moves = data.moves.map(function (element) {
      return element.move.name;
    });
    console.log(data);
    var result = document.getElementById("result");
    result.innerHTML = "<div class=\"container\">\n          <div class=\"column1\">\n              <h1>".concat(name, "</h1>\n                <br>\n                <div class=\"img\"><img src=\"").concat(image, "\" alt=\"pokeImage\"></div>\n                <div class=\"column2\">\n                <h2>Altura: ").concat(height, "</h2>\n                    <div class=\"type\">\n                      <ul>\n                        ").concat(types.map(function (type) {
      return "<li>".concat(type, "</li>");
    }).join(""), "\n                        </ul>\n                    </div>\n                      <h2>Peso: ").concat(weight, "</h2>\n                </div>\n          </div>\n            <br>\n            <h2>Stats</h2>\n            <div class=\"avatar-container p-").concat(data.stats[0].base_stat, "\">\n            <img src=\"https://s3.amazonaws.com/uifaces/faces/twitter/_shahedk/128.jpg\" alt=\"\" class=\"avatar\"/>\n          </div><!--.avatar-container-->\n          \n          <div class=\"avatar-container p-").concat(data.stats[1].base_stat, "\">\n            <img src=\"https://s3.amazonaws.com/uifaces/faces/twitter/mattchevy/128.jpg\" alt=\"\" class=\"avatar\"/>\n          </div><!--.avatar-container-->\n          \n          <div class=\"avatar-container p-").concat(data.stats[2].base_stat, "\">\n            <img src=\"https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg\" alt=\"\" class=\"avatar\"/>\n          </div><!--.avatar-container-->\n            </div>\n          <div class=\"avatar-container p-").concat(data.stats[3].base_stat, "\">\n            <img src=\"https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg\" alt=\"\" class=\"avatar\"/>\n          </div><!--.avatar-container-->\n            </div>\n          <div class=\"avatar-container p-").concat(data.stats[4].base_stat, "\">\n            <img src=\"https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg\" alt=\"\" class=\"avatar\"/>\n          </div><!--.avatar-container-->\n            </div>\n          <div class=\"avatar-container p-").concat(data.stats[5].base_stat, "\">\n            <img src=\"https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg\" alt=\"\" class=\"avatar\"/>\n          </div><!--.avatar-container-->\n            </div>               \n              </div>\n      </div>");
  })["catch"](function (error) {
    return console.log(error);
  });
}