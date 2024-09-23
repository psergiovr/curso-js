let n = document.querySelector('input#inum')
let tab = document.querySelector('select#itab')
let res = document.querySelector('div#res')
let valores = []

function eNumero(num){
    if (Number(num) >= 100 && Number(num) <= 1000){
        return true
    }else{
        return false
    }
}

function naLista(num, l){
    if (l.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    
    if (eNumero(n.value) && !naLista(n.value, valores)){
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `O valor ${n.value} foi adicionado.`
        tab.appendChild(item)
        res.innerHTML = ""
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    n.value = ''
    n.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}