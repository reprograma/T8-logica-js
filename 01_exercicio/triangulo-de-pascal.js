function calculaProximaLinha(linha_anterior) {
  let proxima_linha = [ ]
  for (let i = 0; i < linha_anterior.length - 1; i++) {
    proxima_linha.push(linha_anterior[i] + linha_anterior[i + 1])
  }
  proxima_linha.unshift(1)
  proxima_linha.push(1)
  return proxima_linha
}

function trianguloDePascal(numero_de_linhas) {
  if (numero_de_linhas < 1) {
    throw 'Opa! Insira um número de linhas maior que 0.'
  }

  let triangulo_de_pascal = [ ]

  let linha_anterior = [ 1 ]
  triangulo_de_pascal.push(linha_anterior)

  for (let i = 0; i < numero_de_linhas - 1; i++) {
    const proxima_linha = calculaProximaLinha(linha_anterior)
    triangulo_de_pascal.push(proxima_linha)
    linha_anterior = proxima_linha
  }

  return triangulo_de_pascal
}
