  // COM PUPPETEER + CHEERIO

const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const fs = require('fs/promises')

const tabela2 = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ge.globo.com/futebol/brasileirao-serie-b');
  const DadosPagina = await page.evaluate(() => {
    return document.documentElement.innerHTML
  })
  
  const $ = cheerio.load(DadosPagina)
  
  const tabela = []
  
  $('.tabela__equipes .classificacao__tabela--linha').each(function () {
    const posicao = $(this).find('.classificacao__equipes--posicao').text()
    const time = $(this).find('.classificacao__equipes--nome').text()
    tabela.push({ posicao, time })
  })
 
  await browser.close();

  await fs.writeFile('tabela2.json', JSON.stringify(tabela))

  res.send(tabela)
}

module.exports = tabela2
