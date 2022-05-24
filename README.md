# Web Scraping Brasileirão Série B

### Web Scraping no site Globo Esporte para capturar a tabela do Brasileirão da série B.

## Desenvolvimento

Foi utilizado [NodeJs](https://nodejs.org/) com o framework [Express](https://expressjs.com/pt-br/) e as bibliotecas [Puppeteer](https://github.com/puppeteer/puppeteer) e [Cheerio](https://cheerio.js.org/)

## Execução

Para executar o programa, faça o download ou o clone do projeto na pasta da sua preferência:

``` shell
git clone https://github.com/eurobsonrosa/web-scraping-brasileirao-serie-b.git
```

caminhe até a pasta do projeto e execute no terminal o comando abaixo para instalar as dependências:

``` shell
$ npm install
```
para subir o servidor execue o comando:

``` shell
$ node server.js
```

O servidor ficará disponível na porta 3000.

Para acessar o resultado acesse as rotas abaixo:

* http://localhost:3000/tabela1
* http://localhost:3000/tabela2

