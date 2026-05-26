/* js/app.js
   Inicialização da aplicação e handlers de formulário.
*/

(function () {
  function init() {
    // Popular datalist e configurar autofill
    if (typeof CONFIG !== 'undefined') CONFIG.populateDatalist();
    if (typeof CONFIG !== 'undefined') CONFIG.setupDistanceAutofill();

    var form = document.getElementById('calculator-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var origin = (document.getElementById('origin') && document.getElementById('origin').value.trim()) || '';
      var destination = (document.getElementById('destination') && document.getElementById('destination').value.trim()) || '';
      var distance = parseFloat(document.getElementById('distance') && document.getElementById('distance').value) || 0;
      var transportModeEl = document.querySelector('input[name="transport-mode"]:checked');
      var transportMode = transportModeEl ? transportModeEl.value : null;

      if (!origin || !destination || !distance || distance <= 0 || !transportMode) {
        alert('Preencha origem, destino, distância válida e modo de transporte.');
        return;
      }

      var submitBtn = document.querySelector('#calculator-form button[type="submit"]');
      UI.showLoading(submitBtn);
      UI.hideElement('results');
      UI.hideElement('comparison');
      UI.hideElement('carbon-credits');

      setTimeout(function () {
        try {
          var emission = Calculator.calculateEmission(distance, transportMode);
          var carEmission = Calculator.calculateEmission(distance, 'car');
          var savings = Calculator.calculateSavings(emission, carEmission);
          var comparison = Calculator.calculateAllModes(distance);
          var credits = Calculator.calculateCarbonCredits(emission);
          var price = Calculator.estimateCreditPrice(credits);

          var resultsData = { origin: origin, destination: destination, distance: distance, emission: emission, mode: transportMode, savings: savings };
          var comparisonHtml = UI.renderComparison(comparison, transportMode);
          var resultsHtml = UI.renderResults(resultsData);
          var creditsHtml = UI.renderCarbonCredits({ credits: credits, price: price });

          var resultsContainer = document.getElementById('results-content');
          var comparisonContainer = document.getElementById('comparison-content');
          var creditsContainer = document.getElementById('carbon-credits-content');

          if (resultsContainer) resultsContainer.innerHTML = resultsHtml;
          if (comparisonContainer) comparisonContainer.innerHTML = comparisonHtml;
          if (creditsContainer) creditsContainer.innerHTML = creditsHtml;

          UI.showElement('results');
          UI.showElement('comparison');
          UI.showElement('carbon-credits');
          UI.scrollToElement('results');
          UI.hideLoading(submitBtn);
        } catch (err) {
          console.error(err);
          alert('Houve um erro ao calcular. Tente novamente.');
          UI.hideLoading(submitBtn);
        }
      }, 1500);
    });
    console.log('Calculadora inicializada!');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
