/* js/ui.js
   Define um objeto global UI com utilitários de formatação, renderização
   e helpers de loading/DOM.
*/

var UI = (function () {
  function formatNumber(number, decimals) {
    if (isNaN(number)) return '0';
    return Number(number).toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }

  function formatCurrency(value) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function showElement(elementId) {
    var el = document.getElementById(elementId);
    if (el) el.classList.remove('hidden');
  }

  function hideElement(elementId) {
    var el = document.getElementById(elementId);
    if (el) el.classList.add('hidden');
  }

  function scrollToElement(elementId) {
    var el = document.getElementById(elementId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // Renderiza resultados principais
  function renderResults(data) {
    var modeMeta = (CONFIG && CONFIG.TRANSPORT_MODES && CONFIG.TRANSPORT_MODES[data.mode]) || {};
    var html = '';
    html += '<div class="results__card">';
    html += '<h3 class="results__title">' + (data.origin || '') + ' → ' + (data.destination || '') + '</h3>';
    html += '<p class="results__distance">Distância: ' + formatNumber(data.distance, 0) + ' km</p>';
    html += '<p class="results__emission">Emissão: ' + formatNumber(data.emission, 2) + ' kg CO2</p>';
    html += '<p class="results__transport">Modo: ' + (modeMeta.icon || '') + ' ' + (modeMeta.label || data.mode) + '</p>';
    if (data.savings && data.mode === 'car' && data.savings.savedKg > 0) {
      html += '<p class="results__savings">Economia: ' + formatNumber(data.savings.savedKg, 2) + ' kg (' + formatNumber(data.savings.percentage, 2) + '%)</p>';
    }
    html += '</div>';
    return html;
  }

  // Renderiza comparação entre modos
  function renderComparison(modesArray, selectedMode) {
    var html = '<div class="comparison__list">';
    modesArray.forEach(function (m) {
      var selectedClass = m.mode === selectedMode ? ' comparison__item--selected' : '';
      html += '<div class="comparison__item' + selectedClass + '">';
      html += '<div class="comparison__bar" style="width: ' + Math.min(100, m.percentageVsCar) + '%; background: #10b981; height: 12px; border-radius: 6px;"></div>';
      html += '<div class="comparison__meta">' + (CONFIG.TRANSPORT_MODES[m.mode]?.icon || '') + ' ' + (CONFIG.TRANSPORT_MODES[m.mode]?.label || m.mode) + ' — ' + formatNumber(m.emission, 2) + ' kg</div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  // Renderiza créditos de carbono
  function renderCarbonCredits(creditsData) {
    var html = '<div class="credits__grid">';
    html += '<div class="credits__card">';
    html += '<h4>' + formatNumber(creditsData.credits, 4) + ' créditos</h4>';
    html += '<p>1 crédito = ' + (CONFIG.CARBON_CREDIT.KG_PER_CREDIT || 1000) + ' kg CO2</p>';
    html += '</div>';
    html += '<div class="credits__card">';
    html += '<h4>Preço estimado</h4>';
    html += '<p>Min: ' + formatCurrency(creditsData.price.min) + '</p>';
    html += '<p>Max: ' + formatCurrency(creditsData.price.max) + '</p>';
    html += '<p>Média: ' + formatCurrency(creditsData.price.average) + '</p>';
    html += '</div>';
    html += '</div>';
    return html;
  }

  function showLoading(buttonElement) {
    if (!buttonElement) return;
    buttonElement.dataset.originalText = buttonElement.innerHTML;
    buttonElement.disabled = true;
    buttonElement.innerHTML = '<span class="spinner"></span> Calculando...';
  }

  function hideLoading(buttonElement) {
    if (!buttonElement) return;
    buttonElement.disabled = false;
    if (buttonElement.dataset.originalText) buttonElement.innerHTML = buttonElement.dataset.originalText;
  }

  return {
    formatNumber: formatNumber,
    formatCurrency: formatCurrency,
    showElement: showElement,
    hideElement: hideElement,
    scrollToElement: scrollToElement,
    renderResults: renderResults,
    renderComparison: renderComparison,
    renderCarbonCredits: renderCarbonCredits,
    showLoading: showLoading,
    hideLoading: hideLoading
  };
})();

// Observação: métodos usam funções globais do CONFIG e Calculator.
