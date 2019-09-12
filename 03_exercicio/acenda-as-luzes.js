function criaTabela(num_linhas, num_colunas) {
  let tabela = [ ]
  for (let i = 0; i < num_linhas; i = i + 1) {
    let linha = [ ]
    for (let j = 0; j < num_colunas; j = j + 1) {
      linha.push(0)
    }
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
    tabela[linha][i] = 1
  }
  for (let i = 0; i < tabela.length; i = i + 1) {
    tabela[i][coluna] = 1
  }
  return tabela
}
