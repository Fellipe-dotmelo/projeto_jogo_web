function vingadores() {
    const jsonFilmes = require('./filmes.json');

    for (let i in jsonFilmes['filmes']['filme']) {
        let item = jsonFilmes['filmes']['filme'][i]

        let divRow = document.createElement('div')
        divRow.className = 'row'

        let divCol = document.createElement('div')
        divCol.className = 'col'

        let p1 = document.createElement('p')
        p1.innerHTML = `<strong>Título: </strong> ${item['titulo']['#text']}`

        let p2 = document.createElement('p')
        p2.innerHTML = `<strong>Resumo: </strong> ${item['resumo']['#text']}`


        let genero = ''
        for (let g in item.genero) {
            if (genero) genero += ', '
            genero += item.genero[g]['#text']
        }
        let p3 = document.createElement('p')
        p3.innerHTML = `<strong>Gênero: </strong> ${genero}`

        let elenco = ''
        for (let e in item.elenco.ator) {
            if (elenco) elenco += ', '
            elenco += item.elenco.ator[e]['#text']
        }

        let p4 = document.createElement('p')
        p4.innerHTML = `<strong>Elenco: </strong> ${elenco}`

        let p5 = document.createElement('p')
        p5.innerHTML = `<strong>Data de Lançamento: </strong> ${item['dataLancamento']['#text'] + '(' + item.dataLancamento['@attributes']['pais'] + ')'}`
        let hr = document.createElement('hr')

        divRow.appendChild(divCol)
        divCol.appendChild(p1)
        divCol.appendChild(p2)
        divCol.appendChild(p3)
        divCol.appendChild(p4)
        divCol.appendChild(p5)
        divCol.appendChild(hr)

        document.getElementById('lista').appendChild(divRow)
    }
}