function ordenarLista(lista) {
  let lista_ordenada = [ ]
  while (lista.length > 0) {
    let indice_menor_elemento = 0
    for (let i = 0; i < lista.length; i = i + 1) {
      if (lista[indice_menor_elemento] > lista[i]) {
        indice_menor_elemento = i
      }
    }
    lista_ordenada.push(lista[indice_menor_elemento])
    lista.splice(indice_menor_elemento, 1)
  }
  return lista_ordenada
}

// ou...

function estaOrdenada(lista) {
  for (let i = 0; i < lista.length - 1; i = i + 1) {
    if (lista[i] > lista[i + 1]) {
      return false
    }
  }
  return true
}

function ordenarLista(lista) {
  while (!(estaOrdenada(lista))) {
    for (let i = 0; i < lista.length - 1; i = i + 1) {
      if (lista[i] > lista[i + 1]) {
        const aux = lista[i +  1]
        lista[i + 1] = lista[i]
        lista[i] = aux
      }
    }
  }
  return lista
}
