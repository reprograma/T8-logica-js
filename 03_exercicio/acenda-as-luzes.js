function acendaAsLuzes(linha, coluna) {
  let tabela = [ [ 0, 0, 0, 0, 0 ],
                 [ 0, 0, 0, 0, 0 ],
                 [ 0, 0, 0, 0, 0 ],
                 [ 0, 0, 0, 0, 0 ],
                 [ 0, 0, 0, 0, 0 ] ]
  for (let i = 0; i < tabela[linha].length; i = i + 1) {
    tabela[linha][i] = 1
  }
  for (let i = 0; i < tabela.length; i = i + 1) {
    tabela[i][coluna] = 1
  }
  return tabela
}
