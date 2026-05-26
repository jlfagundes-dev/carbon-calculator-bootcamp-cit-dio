DESCRIÇÃO DO PROJETO
Calculadora EcoTrip é um projeto que simula o impacto ambiental de viagens, estimando a emissão de carbono com base em fatores como distância, meio de transporte e perfil do trajeto, ajudando o usuário a tomar decisões mais conscientes e sustentáveis.
 
ESTRUTURA DE ARQUIVOS E PASTAS
carbon-calculator/
├─ index.html    # Estrutura + todos os scripts inline ou linkados
├─ css/
│  └─ style.css  # Estilos completos
├─ js/
│  ├─ routes-data.js   # Dados de rotas (objeto global)
│  ├─ config.js        # Constantes CO2 (objeto global)
│  ├─ calculator.js    # Lógica de cálculos (funções globais)
│  ├─ ui.js            # Manipulação DOM (funções globais)
│  └─ app.js           # Inicialização e eventos
└─ README.md

ESTRUTURA DO PROJETO:

INDEX.HTML
  - Título com emoji de folha: "🍃 Calculadora de Emissão de CO2"
  - Subtítulo explicando o objetivo sustentável da calculadora em liguagem que gere engajamento.
  - Formulário principal (id="calculator-form")
  - Campo de origem com datalist (id="cities-list")
  - Campo de destino compartilhando o mesmo datalist
  - Campo de distância (id="distance", tipo number, readonly) preenchido automaticamente
  - Checkbox com rótulo "Inserir distância manualmente"
  - Modo de transporte em grade visual com 4 botões: bicicleta, carro (selecionado), ônibus e caminhão.
  - Cada opção deve ter ícone e texto, usando name e value consistentes: bicycle, car, bus, truck
  - Botão de envio com texto "Calcular Emissão de CO2"
  - Constantes de emissão (kg CO2/km): bicycle = 0.00, car = 0.20, bus = 0.05, truck = 0.30
  - Fórmula de cálculo: emissão = distância (km) * fator do transporte (kg CO2/km)
  - Ao clicar em calcular, validar se distância > 0 e se há modo de transporte selecionado; caso inválido, exibir mensagem de erro e impedir o cálculo.

  SEÇÕES DE RESULTADOS (todas ocultas por padrão com class="hidden"):
  - Seção id="results" com div vazia id="results-content"
  - Seção id="comparison" com div vazia id="comparison-content"
  - Seção id="carbon-credits" com div vazia id="carbon-credits-content"

  FOOTER
  - Projeto desenvolvido durante o Bootcamp da CI&T - Do Prompt ao Agente em parceria com a DIO.

  NO FINAL DO BODY (nesta ordem):
  - Tags de script carregando os arquivos JavaScript nesta ordem:
  - <script src="js/routes-data.js"></script>
  - <script src="js/config.js"></script>
  - <script src="js/calculator.js"></script>
  - <script src="js/ui.js"></script>
  - <script src="js/app.js"></script>

  REQUISITOS:
  - Usar convenção de nomenclatura BEM para as classes.
  - Incluir meta viewport para design responsivo.
  - Referenciar `css/style.css` dentro do `head`.
  - O `datalist` deve iniciar vazio (será preenchido via JavaScript).
  - Adicionar texto de apoio abaixo do campo de distância: "A distância será preenchida automaticamente".


STYLE.CSS
  PROPRIEDADES CSS (em `:root`) — orientações para o `style.css` a ser gerado:
  - Paleta de cores (eco-friendly):
    - `--primary`: #10b981
    - `--secondary`: #059669
    - `--accent`: #34d399
    - `--danger`: #ef4444
    - `--warning`: #f59e0b
    - `--info`: #3b82f6
    - `--text`: #1f2937
    - `--text-light`: #6b7280
    - `--bg`: #f3f4f6

  - Escala de espaçamento (`--spacing-xs` … `--spacing-xl`):
    - `--spacing-xs`: 0.5rem
    - `--spacing-sm`: 1rem
    - `--spacing-md`: 1.5rem
    - `--spacing-lg`: 2rem
    - `--spacing-xl`: 3rem

  - Raios e sombras:
    - `--radius`: 0.5rem
    - `--radius-lg`: 1rem
    - `--shadow-sm`: 0 1px 2px rgba(0,0,0,0.05)
    - `--shadow-md`: 0 4px 6px rgba(0,0,0,0.1)
    - `--shadow-lg`: 0 10px 15px rgba(0,0,0,0.15)
  
  ESTILOS BASE (orientações para `style.css`):
    - Reset universal: aplicar `margin: 0; padding: 0; box-sizing: border-box;` a todos os elementos.
    - `body` com fundo em gradiente: `background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);`
    - `body` com `min-height: 100vh;` e `font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;`
    - Classe de container (`.container`): `max-width: 1200px; margin: 0 auto; padding: var(--spacing-md);`
    - Recomendações adicionais: usar `border-radius` e variáveis de sombra (`--shadow-sm`, `--shadow-md`) para elementos eleváveis.

  CLASSES E ESTILOS ÚTEIS (orientações rápidas):

  - Classes utilitárias:
    - `.hidden` : `display: none !important;` (usar para ocultar seções por padrão)
    - `.section-title` : estilo para títulos grandes (ex.: tamanho de fonte maior, peso semibold)

  - Cabeçalho (`header`):
    - Fundo branco, sombra e padding (card leve)
    - Título com cor `--primary` e tamanho aproximado de `2rem`
    - Subtítulo em cinza (`--text-light`) com fonte menor

  - Estilização do formulário (classe `.calculator`):
    - Card branco com cantos arredondados (`--radius`), sombra (`--shadow-md`) e padding interno
    - Agrupamentos de campos com `margin-bottom` consistente (usar `--spacing-sm`)
    - Inputs e botões com padding e border-radius consistentes; usar variáveis de cor para estado ativo/desabilitado'

  ESTILIZAÇÃO DO FORMULÁRIO (detalhes e utilitários):
  - Labels:
    - Devem estar em negrito, `display: block` e com `margin-bottom` consistente para separar do input.

  - Inputs de texto e número:
    - Largura completa (100%), padding interno, borda leve e canto arredondado.
    - Foco visível: ao receber foco, alterar borda para `--primary` e aplicar sombra leve para destaque.
    - Helper text: texto pequeno e cinza abaixo dos inputs para instruções/erros.

  - Agrupamentos de campos:
    - Usar containers com `margin-bottom` igual a `--spacing-sm` para espaçamento consistente.

  TRANSPORTE MODE (GRID DE OPÇÕES):
    - Container: `display: grid` com `grid-template-columns: repeat(4, 1fr)` em desktop e `repeat(2, 1fr)` em mobile; usar `gap` com `--spacing-sm`.
    - Esconder os inputs `radio` reais mantendo-os acessíveis: `position: absolute; opacity: 0;` (não removê-los do DOM).
    - Estilizar o `label` associado como um cartão clicável: `cursor: pointer; padding: var(--spacing-sm); border-radius: var(--radius); box-shadow: var(--shadow-sm); display: flex; align-items: center; gap: 0.75rem;`.
    - Estado selecionado (quando o radio está marcado): destacar o cartão com `border: 2px solid var(--primary)` e `box-shadow: var(--shadow-md)`.

    - Outros detalhes:
    - Textos e legendas: usar `--text` e `--text-light` para hierarquia visual.
    - Use classes BEM para os blocos do formulário (ex.: `calculator__field`, `calculator__helper`, `transport__option`).
    - Estilização detalhada dos cartões clicáveis:
      - Borda, padding, cantos arredondados, cursor pointer e alinhamento central do texto: use `border`, `padding`, `border-radius`, `cursor: pointer`, `text-align: center`.
      - Layout interno: mostrar o ícone e o rótulo em coluna (`flex-direction: column`), com o ícone em tamanho aprox. `3rem` e o texto abaixo.
      - Efeito de hover: elevar o cartão com `transform: translateY(-2px)` e aumentar a sombra (`--shadow-md`).
      - Quando o `radio` estiver marcado (estado selecionado): aplicar `border: 2px solid var(--primary)` e um fundo leve em `--accent` ou `rgba(16,185,129,0.08)` para indicar seleção.
      - No background: Use o seletor de irmão adjacente para estados visuais de seleção do cartão: `input:checked + .card-class { /* estilos de seleção (borda, fundo) */ }`.


  CHECKBOX:
    - Checkbox padrão com label; aplicar `margin-top` consistente nos grupos de checkbox.

  BOTÃO:
    - Botão com largura total, fundo `--primary`, texto em branco, padding e cantos arredondados.
    - Estado hover: usar `--secondary` como cor de fundo e aplicar efeito de elevação (`transform: translateY(-2px)` e `box-shadow: var(--shadow-md)`).
    - Estado focus: contorno visível (por exemplo `outline: 3px solid rgba(16,185,129,0.15)`) para acessibilidade.


  SPINNER E RESPONSIVIDADE:
  - Spinner de carregamento:
    - Classe `spinner` exemplo: `display: inline-block; width: 40px; height: 40px; border: 4px solid rgba(0,0,0,0.08); border-top-color: var(--primary); border-radius: 50%;`
    - Animação com `@keyframes spin` e `animation: spin 1s linear infinite;` para rotação contínua.

  - RESPONSIVO:
    - Use `@media (min-width: 768px)` para ajustes de layout em desktop (ex.: alterar `grid-template-columns`, espaçamentos e tamanhos de fonte).
    - Grid de transporte responsivo: 4 colunas no desktop e 2 colunas no mobile (usar `max-width: 767px` para o breakpoint móvel).

ROUTRES-DATA.JS - JS / DADOS DE ROTAS:
  - Criar `js/routes-data.js` com um objeto global chamado `RoutesDB` contendo:
    - uma propriedade `routes` como um array de objetos de rota com a seguinte estrutura:
      - `origin`: string (nome da cidade com estado, ex.: "São Paulo, SP")
      - `destination`: string (nome da cidade com estado)
      - `distanceKM`: number (distância entre as cidades em quilômetros)
    - Incluir entre 30 e 40 rotas brasileiras populares (capital a capital, capitais para grandes cidades e rotas inter-regionais). Exemplo de entradas:
      - { origin: "São Paulo, SP", destination: "Rio de Janeiro, RJ", distanceKM: 430 }
      - { origin: "São Paulo, SP", destination: "Brasília, DF", distanceKM: 1015 }
      - { origin: "Rio de Janeiro, RJ", destination: "Brasília, DF", distanceKM: 1148 }
      - { origin: "São Paulo, SP", destination: "Belo Horizonte, MG", distanceKM: 586 }
      - { origin: "Belo Horizonte, MG", destination: "Brasília, DF", distanceKM: 716 }
      - { origin: "Porto Alegre, RS", destination: "Curitiba, PR", distanceKM: 710 }
      - { origin: "Curitiba, PR", destination: "São Paulo, SP", distanceKM: 408 }
      - { origin: "Fortaleza, CE", destination: "Recife, PE", distanceKM: 803 }
      - { origin: "Salvador, BA", destination: "Fortaleza, CE", distanceKM: 1330 }
      - { origin: "Salvador, BA", destination: "Rio de Janeiro, RJ", distanceKM: 1600 }
      - { origin: "Manaus, AM", destination: "Belém, PA", distanceKM: 1140 }
      - { origin: "Goiânia, GO", destination: "Brasília, DF", distanceKM: 209 }
      - { origin: "Curitiba, PR", destination: "Florianópolis, SC", distanceKM: 300 }
      - { origin: "Natal, RN", destination: "Fortaleza, CE", distanceKM: 531 }
      - { origin: "Campinas, SP", destination: "São Paulo, SP", distanceKM: 99 }
      - { origin: "Ribeirão Preto, SP", destination: "Belo Horizonte, MG", distanceKM: 350 }
      - { origin: "São Luís, MA", destination: "Teresina, PI", distanceKM: 419 }
      - { origin: "João Pessoa, PB", destination: "Recife, PE", distanceKM: 118 }
      - { origin: "Cuiabá, MT", destination: "Campo Grande, MS", distanceKM: 700 }
      - { origin: "Vitória, ES", destination: "Rio de Janeiro, RJ", distanceKM: 520 }
    - Objetivo: prover um conjunto realista de rotas para popular o `datalist` e permitir cálculos de emissão com base em distâncias reais.

  Observação: os valores de `distanceKM` nos exemplos são orientativos; ao implementar, preferir dados reais de fontes confiáveis ou um conjunto validado de distâncias.

  ADICIONAR MÉTODOS AO OBJETO `RoutesDB`:
  - `getAllCities: function()`
    - Retorna um array único e ordenado alfabeticamente com todos os nomes de cidades presentes em `routes`.
    - Deve extrair nomes tanto de `origin` quanto de `destination` em cada rota, remover duplicatas e ordenar alfabeticamente antes de retornar.

  - `findDistance: function(origin, destination)`
    - Encontra a distância entre duas cidades (em km) procurand o par nas rotas.
    - Deve pesquisar em ambas as direções (origin→destination e destination→origin).
    - Normalizar as entradas: `trim()` e converter para lowercase para fins de comparação.
    - Retornar a distância em km se encontrada; retornar `null` se não existir rota correspondente.

  OBSERVAÇÃO GERAL:
  - O arquivo inteiro `js/routes-data.js` deve definir apenas uma variável global: `RoutesDB`.
  - Adicionar comentários explicando a estrutura do objeto `RoutesDB` e o formato da propriedade `routes`.


CONFIG.JS - JS / CONFIG:
  - Criar `js/config.js` que define um objeto global `CONFIG` contendo:

  - `EMISSION_FACTORS` (objeto, kg CO2 por km):
    - `bicycle`: 0
    - `car`: 0.12
    - `bus`: 0.089
    - `truck`: 0.96

  - `TRANSPORT_MODES` (objeto com metadados):
    - Para cada modo (`bicycle`, `car`, `bus`, `truck`) incluir:
      - `label`: nome em português (Bicicleta, Carro, Ônibus, Caminhão)
      - `icon`: emoji ou identificador para o ícone (ex.: 🚲, 🚗, 🚌, 🚚)
      - `color`: código hex para uso na UI (opcional)

  - `CARBON_CREDIT` (objeto):
    - `KG_PER_CREDIT`: 1000
    - `PRICE_MIN_BRL`: 50
    - `PRICE_MAX_BRL`: 150

  - Adicionar um método a `CONFIG` chamado `populateDatalist`:
    - Obter a lista de cidades via `RoutesDB.getAllCities()`
    - Localizar o elemento `datalist` por id `cities-list`
    - Limpar o conteúdo atual do `datalist` e criar `<option>` para cada cidade retornada
    - Inserir os `<option>` no `datalist`

  - Adicionar também um método `setupDistanceAutofill`:
    - Obter os elementos de input de origem e destino e o input de distância e o checkbox manual
    - Adicionar listeners `change` em origem e destino:
      - Ao alterar, obter valores aparados (`trim`) de ambos inputs
      - Se ambos preenchidos, chamar `RoutesDB.findDistance(origin, destination)`
      - Se distância encontrada:
        - Preencher o input de distância com o valor
        - Tornar o campo readonly
        - Exibir mensagem de sucesso (ex.: alterar helper text para cor verde)
      - Se não encontrada:
        - Limpar o input de distância
        - Alterar helper text para sugerir entrada manual
    - Adicionar listener `change` no checkbox manual:
      - Quando marcado: remover `readonly` do input de distância e permitir entrada manual
      - Quando desmarcado: tentar buscar a rota novamente e, se encontrada, preencher e tornar readonly

  - Observação final: tudo deve estar dentro de um único objeto global `CONFIG` para facilitar uso em outras partes da aplicação.


CALCULATOR.JS - JS / CALCULADORA:
  - Criar `js/calculator.js` com um objeto global chamado `Calculator` contendo os seguintes métodos:

  - `calculateEmission: function(distanceKm, transportMode)`
    - Obter o fator de emissão em `CONFIG.EMISSION_FACTORS[transportMode]`.
    - Calcular a emissão: `emission = distanceKm * factor`.
    - Retornar o resultado arredondado para 2 casas decimais.

  - `calculateAllModes: function(distanceKm)`
    - Criar um array para armazenar resultados.
    - Para cada modo presente em `CONFIG.EMISSION_FACTORS`:
      - Calcular a emissão para esse modo.
      - Usar a emissão de `car` como baseline para comparação.
      - Calcular a porcentagem vs carro: `(emission / carEmission) * 100`.
      - Inserir no array um objeto `{ mode: 'car', emission: 12.5, percentageVsCar: 100 }`.
    - Ordenar o array por `emission` (do menor para o maior).
    - Retornar o array.

  - `calculateSavings: function(emission, baselineEmission)`
    - Calcular `savedKg = baselineEmission - emission`.
    - Calcular `percentage = (savedKg / baselineEmission) * 100` (tratar divisão por zero quando aplicável).
    - Retornar um objeto com `savedKg` e `percentage`, arredondados para 2 casas decimais.

  - `calculateCarbonCredits: function(emissionKg)`
    - Calcular créditos: `credits = emissionKg / CONFIG.CARBON_CREDIT.KG_PER_CREDIT`.
    - Retornar o valor de créditos arredondado para 4 casas decimais.

  - `estimateCreditPrice: function(credits)`
    - Calcular mínimo: `min = credits * CONFIG.CARBON_CREDIT.PRICE_MIN_BRL`.
    - Calcular máximo: `max = credits * CONFIG.CARBON_CREDIT.PRICE_MAX_BRL`.
    - Calcular média: `average = (min + max) / 2`.
    - Retornar um objeto `{ min, max, average }` com valores arredondados para 2 casas decimais.

  - Incluir comentários explicando cada cálculo (fórmula e unidades).
  - Observação: o arquivo deve definir apenas uma variável global: `Calculator`.


UI.JS - JS / INTERFACE (UI):
  - Criar `js/ui.js` com um objeto global chamado `UI` contendo métodos utilitários, de renderização e helpers de carregamento.

  UTILITY METHODS:
  - `formatNumber: function(number, decimals)`
    - Usar `toFixed()` para casas decimais.
    - Adicionar separadores de milhares usando regex ou `toLocaleString('pt-BR')`.
    - Retornar a string formatada.

  - `formatCurrency: function(value)`
    - Formatar em R$ com locale pt-BR.
    - Retornar string no formato `R$ 1.234,56`.

  - `showElement: function(elementId)`
    - Obter elemento por ID.
    - Remover a classe `hidden`.

  - `hideElement: function(elementId)`
    - Obter elemento por ID.
    - Adicionar a classe `hidden`.

  - `scrollToElement: function(elementId)`
    - Obter elemento por ID.
    - Usar `scrollIntoView({ behavior: 'smooth' })` para rolagem suave.

  RENDERING METHODS:
  - `renderResults: function(data)`
    - `data` contém: origin, destination, distance, emission, mode, savings
    - Obter metadados de `CONFIG.TRANSPORT_MODES` para o modo selecionado.
    - Criar uma string HTML com template literals contendo:
      - Cartão de rota mostrando `origin → destination`.
      - Cartão de distância mostrando valor em km.
      - Cartão de emissão mostrando CO2 em kg (usar `formatNumber`/`formatCurrency` conforme apropriado).
      - Cartão de transporte mostrando ícone e label.
      - Se o modo for `car` e houver savings: adicionar cartão mostrando `kg` economizados e `percentage`.
    - Retornar a string HTML completa; use `results__card` (BEM) para cada cartão.
    - Incluir comentários claros explicando a estrutura HTML gerada.

  - `renderComparison: function(modesArray, selectedMode)`
    - `modesArray` vem de `Calculator.calculateAllModes(distanceKm)`.
    - Para cada modo, criar item com:
      - Barra de cor mostrando faixa (ex.: verde para baixo, vermelho para alto)
      - Valores de emissão e porcentagem vs `car`.
    - Destacar `selectedMode` com classe `comparison__item--selected`.
    - Retornar string HTML completa.

  - `renderCarbonCredits: function(creditsData)`
    - `creditsData` contém `{ credits, price: { min, max, average } }`.
    - Criar HTML com grid de 2 cartões:
      - Cartão 1: créditos necessários (número grande) e helper text "1 crédito = 1000 kg CO2".
      - Cartão 2: preço estimado (min/max/average) em R$.
    - Incluir box explicativo sobre o que são créditos de carbono e botão "Compensar Emissões" (pode ser não funcional).
    - Usar `formatNumber` e `formatCurrency` para valores.

  INTERAÇÃO / HELPERS:
  - `showLoading: function(buttonElement)`
    - Salvar texto original em `buttonElement.dataset.originalText`.
    - Desabilitar o botão (`disabled = true`).
    - Trocar `innerHTML` para mostrar spinner e texto "Calculando..." (ex.: `<span class="spinner"></span> Calculando...`).

  - `hideLoading: function(buttonElement)`
    - Habilitar o botão.
    - Restaurar texto original a partir de `buttonElement.dataset.originalText`.

  Observação: todos os métodos devem fazer parte do objeto global `UI`. Use comentários claros explicando a estrutura HTML esperada (classes BEM, elementos internos) para que o desenvolvedor saiba onde injetar o conteúdo.

APP.JS - INICIALIZAÇÃO E MANUSEIO DE EVENTOS:
  - Criar `js/app.js` com inicialização e handlers de eventos. Usar IIFE ou `DOMContentLoaded`.

  INICIALIZAÇÃO (quando o DOM estiver pronto):
  1. Chamar `CONFIG.populateDatalist()` para preencher o autocomplete de cidades.
  2. Chamar `CONFIG.setupDistanceAutofill()` para habilitar autofill de distância.
  3. Obter o formulário por id `calculator-form`.
  4. Adicionar listener de `submit` ao formulário que chama o handler de envio.
  5. Log no console: "Calculadora inicializada!" (ou mensagem similar) para depuração.

  FORM SUBMIT HANDLER (quando o formulário for submetido):
  1. Prevenir o envio padrão (`event.preventDefault()`).
  2. Ler todos os valores do formulário e normalizar:
    - origin: `trim()`
    - destination: `trim()`
    - distance: `parseFloat()` (do input `distance`)
    - transportMode: obter o valor do `radio` marcado
  3. Validar inputs:
    - Verificar se origin, destination e distance estão preenchidos
    - Verificar se `distance` > 0
    - Se falhar, exibir alerta amigável e retornar
  4. Obter referência ao botão de submit
  5. Chamar `UI.showLoading(button)` para mostrar estado de carregamento
  6. Esconder seções de resultados anteriores usando `UI.hideElement()` para os containers relevantes
  7. Usar `setTimeout` com 1500ms para simular processamento assíncrono (opcional) e dentro dele:
    - Envolver em `try/catch` para tratamento de erros
    - No `try`:
      - Calcular emissão para o modo selecionado: `Calculator.calculateEmission(distance, transportMode)`
      - Calcular emissão do carro como baseline
      - Calcular savings: `Calculator.calculateSavings(emission, carEmission)`
      - Calcular comparação de todos os modos: `Calculator.calculateAllModes(distance)`
      - Calcular créditos e preço: `Calculator.calculateCarbonCredits(emission)` e `Calculator.estimateCreditPrice(credits)`
      - Construir objetos de dados necessários para renderização (`resultsData`, `comparisonData`, `creditsData`)
      - Chamar `UI.renderResults(resultsData)` e inserir o HTML em `#results-content`
      - Chamar `UI.renderComparison(comparisonData, transportMode)` e inserir o HTML em `#comparison-content`
      - Chamar `UI.renderCarbonCredits(creditsData)` e inserir o HTML em `#carbon-credits-content`
      - Mostrar todas as seções com `UI.showElement('results')`, `UI.showElement('comparison')`, `UI.showElement('carbon-credits')`
      - Rolagem até `results` com `UI.scrollToElement('results')`
      - Chamar `UI.hideLoading(button)` para restaurar o botão
    - No `catch`:
      - Logar o erro no console
      - Exibir alerta amigável ao usuário
      - Chamar `UI.hideLoading(button)` para restaurar o botão

  - Adicionar comentários explicando cada passo e usar nomes de variáveis descritivos.
  - Manter o código limpo e legível; todos os métodos de UI/Calculator/CONFIG devem ser usados e não repetir lógica.








