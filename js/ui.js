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
    html += '<div class="results__value">' + formatNumber(data.emission, 2) + ' kg CO2</div>';
    html += '<p class="results__distance muted">Distância: ' + formatNumber(data.distance, 0) + ' km</p>';
    html += '<p class="results__transport muted">' + (modeMeta.icon || '') + ' ' + (modeMeta.label || data.mode) + '</p>';
    if (data.savings && data.savings.savedKg > 0) {
      html += '<div class="results__savings">';
      html += '<div class="icon">⚡</div>';
      html += '<div class="content"><div class="kicker">Economia vs Carro</div>';
      html += '<div>' + formatNumber(data.savings.savedKg, 2) + ' kg <span class="muted">(' + formatNumber(data.savings.percentage, 2) + '%)</span></div>';
      html += '</div></div>';
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
      html += '<div class="comparison__header">';
      html += '<div class="comparison__meta">' + (CONFIG.TRANSPORT_MODES[m.mode]?.icon || '') + ' ' + (CONFIG.TRANSPORT_MODES[m.mode]?.label || m.mode) + '</div>';
      html += '<div class="comparison__percentage">' + formatNumber(m.percentageVsCar, 2) + '%</div>';
      html += '</div>';
      html += '<div class="comparison__bar-container"><div class="comparison__bar" style="width: ' + Math.min(100, m.percentageVsCar) + '%; background: ' + (CONFIG.TRANSPORT_MODES[m.mode]?.color || 'var(--primary)') + ';"></div></div>';
      html += '<div class="comparison__meta muted">' + formatNumber(m.emission, 2) + ' kg</div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  // Renderiza créditos de carbono
  function renderCarbonCredits(creditsData) {
    var html = '<div class="carbon-credits__grid">';
    html += '<div class="carbon-credits__card">';
    html += '<div class="carbon-credits__label">CRÉDITOS NECESSÁRIOS</div>';
    html += '<div class="carbon-credits__value">' + formatNumber(creditsData.credits, 4) + '</div>';
    html += '<div class="muted">1 crédito = ' + (CONFIG.CARBON_CREDIT.KG_PER_CREDIT || 1000) + ' kg CO2</div>';
    html += '</div>';
    html += '<div class="carbon-credits__card">';
    html += '<div class="carbon-credits__label">CUSTO ESTIMADO</div>';
    html += '<div class="carbon-credits__value">' + formatCurrency(creditsData.price.average) + '</div>';
    html += '<div class="muted">Variação: ' + formatCurrency(creditsData.price.min) + ' - ' + formatCurrency(creditsData.price.max) + '</div>';
    html += '</div>';
    html += '</div>';

    // informative dashed box
    html += '<div class="carbon-credits__info">';
    html += '<h4>O que são Créditos de Carbono?</h4>';
    html += '<p>Créditos de carbono são certificados que representam a redução de uma tonelada de CO₂ da atmosfera. Ao comprar créditos, você compensa suas emissões financando projetos de preservação ambiental, reflorestamento e energia renovável.</p>';
    html += '</div>';

    // compensate button (link placeholder)
    html += '<div class="carbon-credits__actions">';
    html += '<a href="https://www.gov.br/fazenda/pt-br/composicao/orgaos/mercado-de-carbono/mercado-de-carbono" id="compensate-link" class="button button--primary button--large" target="_blank" rel="noopener noreferrer">Compensar Emissões</a>';
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
