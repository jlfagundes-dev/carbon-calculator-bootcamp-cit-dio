/* js/calculator.js
   Define um objeto global Calculator com funções para cálculo de emissões,
   comparações, economia e créditos de carbono.
*/

var Calculator = (function () {
  function _round(value, decimals) {
    var factor = Math.pow(10, decimals || 0);
    return Math.round((value + Number.EPSILON) * factor) / factor;
  }

  return {
    // Calcula emissão (kg CO2) para uma distância e modo de transporte
    calculateEmission: function (distanceKm, transportMode) {
      var factor = (CONFIG && CONFIG.EMISSION_FACTORS && CONFIG.EMISSION_FACTORS[transportMode]) || 0;
      var emission = Number(distanceKm) * Number(factor);
      return _round(emission, 2);
    },

    // Calcula emissões para todos os modos e retorna array ordenado por emissão
    calculateAllModes: function (distanceKm) {
      var results = [];
      var factors = CONFIG.EMISSION_FACTORS || {};
      var carEmission = this.calculateEmission(distanceKm, 'car');
      Object.keys(factors).forEach(function (mode) {
        var emission = Number(distanceKm) * Number(factors[mode]);
        var percentageVsCar = carEmission ? (emission / carEmission) * 100 : 0;
        results.push({ mode: mode, emission: _round(emission, 2), percentageVsCar: _round(percentageVsCar, 2) });
      });
      // ordenar do menor para o maior
      results.sort(function (a, b) {
        return a.emission - b.emission;
      });
      return results;
    },

    // Calcula economia em kg e porcentagem vs baseline
    calculateSavings: function (emission, baselineEmission) {
      var savedKg = baselineEmission - emission;
      var percentage = baselineEmission ? (savedKg / baselineEmission) * 100 : 0;
      return { savedKg: _round(savedKg, 2), percentage: _round(percentage, 2) };
    },

    // Calcula créditos de carbono (emissões / KG_PER_CREDIT)
    calculateCarbonCredits: function (emissionKg) {
      var kgPer = (CONFIG && CONFIG.CARBON_CREDIT && CONFIG.CARBON_CREDIT.KG_PER_CREDIT) || 1000;
      var credits = Number(emissionKg) / Number(kgPer);
      return Number(credits.toFixed(4));
    },

    // Estima preço dos créditos: retorna objeto com min,max,average
    estimateCreditPrice: function (credits) {
      var min = credits * (CONFIG.CARBON_CREDIT.PRICE_MIN_BRL || 0);
      var max = credits * (CONFIG.CARBON_CREDIT.PRICE_MAX_BRL || 0);
      var average = (min + max) / 2;
      return { min: Number(min.toFixed(2)), max: Number(max.toFixed(2)), average: Number(average.toFixed(2)) };
    }
  };
})();

// Comentários: cada método retorna valores arredondados conforme especificado.
