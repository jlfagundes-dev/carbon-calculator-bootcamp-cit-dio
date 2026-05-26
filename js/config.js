/* js/config.js
   Define um objeto global CONFIG com constantes e helpers para popular o datalist
   e configurar o autofill de distância.
*/

var CONFIG = (function () {
  var EMISSION_FACTORS = {
    bicycle: 0,
    car: 0.12,
    bus: 0.089,
    truck: 0.96
  };

  var TRANSPORT_MODES = {
    bicycle: { label: 'Bicicleta', icon: '🚲', color: '#10b981' },
    car: { label: 'Carro', icon: '🚗', color: '#059669' },
    bus: { label: 'Ônibus', icon: '🚌', color: '#34d399' },
    truck: { label: 'Caminhão', icon: '🚚', color: '#0590a6' }
  };

  var CARBON_CREDIT = {
    KG_PER_CREDIT: 1000,
    PRICE_MIN_BRL: 50,
    PRICE_MAX_BRL: 150
  };

  // Preenche o <datalist id="cities-list"> com cidades obtidas em RoutesDB
  function populateDatalist() {
    if (typeof RoutesDB === 'undefined' || typeof RoutesDB.getAllCities !== 'function') return;
    var cities = RoutesDB.getAllCities();
    var datalist = document.getElementById('cities-list');
    if (!datalist) return;
    // limpar
    datalist.innerHTML = '';
    cities.forEach(function (city) {
      var opt = document.createElement('option');
      opt.value = city;
      datalist.appendChild(opt);
    });
  }

  // Configura listeners para preencher automaticamente a distância quando possível
  function setupDistanceAutofill() {
    var originInput = document.getElementById('origin');
    var destinationInput = document.getElementById('destination');
    var distanceInput = document.getElementById('distance');
    var manualCheckbox = document.getElementById('distance-manual');
    var helper = document.getElementById('distance-helper');

    function tryFill() {
      if (!originInput || !destinationInput || !distanceInput) return;
      var o = originInput.value && originInput.value.trim();
      var d = destinationInput.value && destinationInput.value.trim();
      if (o && d && !manualCheckbox?.checked) {
        var dist = RoutesDB.findDistance(o, d);
        if (dist !== null && dist !== undefined) {
          distanceInput.value = dist;
          distanceInput.readOnly = true;
          if (helper) helper.textContent = 'Distância preenchida automaticamente';
          if (helper) helper.style.color = 'green';
        } else {
          distanceInput.value = '';
          distanceInput.readOnly = false;
          if (helper) helper.textContent = 'Rota não encontrada — insira manualmente';
          if (helper) helper.style.color = '';
        }
      }
    }

    if (originInput) originInput.addEventListener('change', tryFill);
    if (destinationInput) destinationInput.addEventListener('change', tryFill);
    if (manualCheckbox) {
      manualCheckbox.addEventListener('change', function () {
        if (manualCheckbox.checked) {
          if (distanceInput) distanceInput.readOnly = false;
        } else {
          if (distanceInput) distanceInput.readOnly = true;
          tryFill();
        }
      });
    }
  }

  return {
    EMISSION_FACTORS: EMISSION_FACTORS,
    TRANSPORT_MODES: TRANSPORT_MODES,
    CARBON_CREDIT: CARBON_CREDIT,
    populateDatalist: populateDatalist,
    setupDistanceAutofill: setupDistanceAutofill
  };
})();

// Obs.: tudo está dentro do objeto global CONFIG.
