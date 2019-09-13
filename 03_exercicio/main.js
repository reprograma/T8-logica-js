function criaTabela(num_linhas, num_colunas) {
  let tabela = [ ]
  const table = document.querySelector('table')
  for (let i = 0; i < num_linhas; i = i + 1) {
    let linha = [ ]
    const tr = document.createElement('tr')
    for (let j = 0; j < num_colunas; j = j + 1) {
      const td = document.createElement('td')
      td.addEventListener('click', function () {
        acendaAsLuzes(tabela, i, j)
      })
      tr.appendChild(td)
      linha.push(td)
    }
    table.appendChild(tr)
    tabela.push(linha)
  }
  return tabela
}

function acendaAsLuzes(tabela, linha, coluna) {
  if (!(linha >= 0 && linha < tabela.length)) {
    throw 'Opa, index da linha fora do que pode, ai ai ai.'
  }

  if (!(coluna >= 0 && coluna < tabela[0].length)) {
    throw 'Opa, index da coluna fora do que pode, ai ai ai.'
  }

  for (let i = 0; i < tabela[linha].length; i = i + 1) {
    const td = tabela[linha][i]
    td.classList.add('painted')
  }
  for (let i = 0; i < tabela.length; i = i + 1) {
    const td = tabela[i][coluna]
    td.classList.add('painted')
  }
  return tabela
}

let tabela = criaTabela(15, 15)
