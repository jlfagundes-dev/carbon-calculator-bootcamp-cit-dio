# Calculadora EcoTrip

Calculadora EcoTrip é o projeto final do Bootcamp CI&amp;T - Do Prompt ao Agente, em parceria com a DIO. A aplicação simula o impacto ambiental de viagens, estimando emissões de carbono por distância, transporte e perfil do trajeto, incentivando escolhas conscientes e sustentáveis.

---
<a href="./img/image.png"><img src="./img/image.png" alt="Bootcamp CI&T - do PROMPT ao AGENTE" width="220" /></a>

## Sobre este projeto

Este projeto faz parte do meu estudo e prática no **Bootcamp CI&T - do Prompt ao Agente**, realizado em parceria com a [DIO](https://www.dio.me/bootcamp/ci-t-do-prompt-ao-agente).

---

## Demo (publicado)

O projeto está publicado no GitHub Pages em:

https://jlfagundes-dev.github.io/carbon-calculator-bootcamp-cit-dio/

## Como executar localmente

Use a extensão Live Server do Visual Studio Code para servir o projeto via HTTP (recomendado):

- Instale a extensão **Live Server** no VS Code.
- Abra a pasta do projeto no VS Code.
- Clique com o botão direito do mouse no arquivo `index.html` e clique em **Open with Live Server**.
- O site será servido em `http://127.0.0.1:5500` (ou porta similar); abra no navegador.

## Deploy (GitHub Pages)

Adicionei um workflow de GitHub Actions para publicar os arquivos estáticos em GitHub Pages automaticamente. O arquivo está em:

.github/workflows/deploy.yml

O workflow dispara em `push` para a branch `main` e também por `workflow_dispatch` (disparo manual).

## Arquivos principais

- `index.html` — marcação e formulário
- `css/style.css` — estilos e variáveis CSS
- `js/routes-data.js` — base de rotas e métodos `getAllCities` / `findDistance`
- `js/config.js` — constantes e lógica de autofill
- `js/calculator.js` — cálculos e utilitários de emissão
- `js/ui.js` — renderização e helpers de UI
- `js/app.js` — inicialização e handlers do formulário
- `.github/workflows/deploy.yml` — workflow para GitHub Pages


