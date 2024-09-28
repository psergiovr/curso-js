    let num = document.querySelector('input#inum')
    let tab = document.querySelector('select#ilista')
    let valor = []

function nalista(num,lis){
    if(lis.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}
function numAdicio(num){
    if(Number(num) == 0){
        return true
    }else{
        return false
    }
}

function adicionar(){
     
    if(numAdicio(num.value) || nalista(num.value, valor)){
        window.alert('[ERRO!] Número inválido, ou já encontado na lista. Verifique os dados!')
    }
    else{
        valor.push(Number(num.value)) 
        
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado!`
        tab.appendChild(item)
        res.innerHTML = ''
    }
        num.value = ''
        num.focus()
}
function verificando(){
    
    if(valor.length == 0){
        window.alert('[ERRO!!] Verifique os dados!')
    }
    else {
        let soma = 0
        let media = 0
        
        for(let pos in valor){
            soma += valor[pos]
        }
        media = soma/valor.length
        
        res.innerHTML = ``
        res.innerHTML = `<p>A soma de todos os valores é igual a: ${soma}</p>`
        res.innerHTML += `<p>Ao todo temos ${valor.length} números cadastrados.</p>`
        res.innerHTML += `<p>A média dos valores é igual a: ${media}</p>`
    }
        
}