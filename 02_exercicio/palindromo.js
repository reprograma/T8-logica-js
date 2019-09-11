function verificaPalindromo(palavra) {
  if (typeof palavra != 'string') {
    throw 'Opa! Por favor, insira uma string.'
  }

  const palavra_invertida = palavra.split("").reverse().join("")
  if (palavra == palavra_invertida) {
    return true
  } else {
    return false
  }
}

// ou...
function verificaPalindromo(palavra) {
  if (typeof palavra != 'string') {
    throw 'Opa! Por favor, insira uma string.'
  }

  for (let indice = 0; indice < Math.floor(palavra.length / 2); indice++) {
    if (palavra.charAt(indice) != palavra.charAt((palavra.length - 1) - indice)) {
      return false
    }
  }
  return true
}

// ou...
function verificaPalindromo(palavra) {
  if (typeof palavra != 'string') {
    throw 'Opa! Por favor, insira uma string.'
  }

  for(let indice = 0; indice < palavra.length; indice++) {
    if (indice > (palavra.length - 1) - indice) {
      break
    }
    if (palavra.charAt(indice) != palavra.charAt((palavra.length - 1) - indice)) {
      return false
    }
  }
  return true
}
