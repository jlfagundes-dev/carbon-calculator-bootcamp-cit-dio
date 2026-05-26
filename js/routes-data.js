/* js/routes-data.js
   Define uma variável global RoutesDB com um array de rotas e métodos utilitários.
   Estrutura de cada rota: { origin: "Cidade, UF", destination: "Cidade, UF", distanceKM: number }
*/

var RoutesDB = (function () {
  // Lista de rotas (30 entradas) - distâncias aproximadas em km
  var routes = [
    { origin: "São Paulo, SP", destination: "Rio de Janeiro, RJ", distanceKM: 430 },
    { origin: "São Paulo, SP", destination: "Brasília, DF", distanceKM: 1015 },
    { origin: "Rio de Janeiro, RJ", destination: "Brasília, DF", distanceKM: 1148 },
    { origin: "São Paulo, SP", destination: "Belo Horizonte, MG", distanceKM: 586 },
    { origin: "Belo Horizonte, MG", destination: "Brasília, DF", distanceKM: 716 },
    { origin: "Porto Alegre, RS", destination: "Curitiba, PR", distanceKM: 710 },
    { origin: "Curitiba, PR", destination: "São Paulo, SP", distanceKM: 408 },
    { origin: "Fortaleza, CE", destination: "Recife, PE", distanceKM: 803 },
    { origin: "Salvador, BA", destination: "Fortaleza, CE", distanceKM: 1330 },
    { origin: "Salvador, BA", destination: "Rio de Janeiro, RJ", distanceKM: 1600 },
    { origin: "Manaus, AM", destination: "Belém, PA", distanceKM: 1140 },
    { origin: "Goiânia, GO", destination: "Brasília, DF", distanceKM: 209 },
    { origin: "Curitiba, PR", destination: "Florianópolis, SC", distanceKM: 300 },
    { origin: "Natal, RN", destination: "Fortaleza, CE", distanceKM: 531 },
    { origin: "Campinas, SP", destination: "São Paulo, SP", distanceKM: 99 },
    { origin: "Ribeirão Preto, SP", destination: "Belo Horizonte, MG", distanceKM: 350 },
    { origin: "São Luís, MA", destination: "Teresina, PI", distanceKM: 419 },
    { origin: "João Pessoa, PB", destination: "Recife, PE", distanceKM: 118 },
    { origin: "Cuiabá, MT", destination: "Campo Grande, MS", distanceKM: 700 },
    { origin: "Vitória, ES", destination: "Rio de Janeiro, RJ", distanceKM: 520 },
    { origin: "Belém, PA", destination: "São Luís, MA", distanceKM: 1100 },
    { origin: "Florianópolis, SC", destination: "Porto Alegre, RS", distanceKM: 300 },
    { origin: "Belo Horizonte, MG", destination: "Curitiba, PR", distanceKM: 910 },
    { origin: "São Paulo, SP", destination: "Campina Grande, PB", distanceKM: 2650 },
    { origin: "Recife, PE", destination: "Maceió, AL", distanceKM: 245 },
    { origin: "Aracaju, SE", destination: "Salvador, BA", distanceKM: 325 },
    { origin: "Teresina, PI", destination: "Fortaleza, CE", distanceKM: 520 },
    { origin: "Campo Grande, MS", destination: "Goiânia, GO", distanceKM: 800 },
    { origin: "Campina Grande, PB", destination: "João Pessoa, PB", distanceKM: 120 },
    { origin: "Porto Velho, RO", destination: "Rio Branco, AC", distanceKM: 520 }
  ];

  // Normaliza nome de cidade para comparação (trim + lowercase)
  function _normalize(s) {
    return String(s || "").trim().toLowerCase();
  }

  return {
    // expõe as rotas (somente leitura sugestiva)
    routes: routes,

    // Retorna array único e ordenado alfabeticamente com todos os nomes de cidades
    getAllCities: function () {
      var cities = [];
      routes.forEach(function (r) {
        cities.push(r.origin);
        cities.push(r.destination);
      });
      // remover duplicatas
      var unique = Array.from(new Set(cities));
      // ordenar alfabeticamente
      unique.sort(function (a, b) {
        return a.localeCompare(b, 'pt-BR');
      });
      return unique;
    },

    // Encontra distância entre duas cidades (procura em ambas as direções)
    findDistance: function (origin, destination) {
      var o = _normalize(origin);
      var d = _normalize(destination);
      for (var i = 0; i < routes.length; i++) {
        var r = routes[i];
        if (_normalize(r.origin) === o && _normalize(r.destination) === d) return r.distanceKM;
        if (_normalize(r.origin) === d && _normalize(r.destination) === o) return r.distanceKM;
      }
      return null;
    }
  };
})();

// Comentário: este arquivo define apenas a variável global RoutesDB.
