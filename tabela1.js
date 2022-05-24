// COM PUPPETEER

const puppeteer = require('puppeteer')
const fs = require('fs/promises')

const tabela1 = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ge.globo.com/futebol/brasileirao-serie-b');
  
  let tabela = await page.$$eval('.tabela__equipes .classificacao__tabela--linha', tabela => {
    return tabela.map(linha => {
      return {
        posicao: linha.children[0].innerText,
        time: linha.children[1].innerText
      }
    })
  })

  await browser.close();

  await fs.writeFile('tabela1.json', JSON.stringify(tabela))
  
  res.send(tabela)
};

module.exports = tabela1