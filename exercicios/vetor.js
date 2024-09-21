function vetor(){
    var valor = document.getElementById('inum')
    var visor = document.getElementById('ivisor')
    var res = document.getElementById('res')
    
    if (valor.value.length == 0){
        window.alert('[ERRO!] Digite [1] no quadrado valor!')
    }else{
        valor = Number(valor.value)
        if (valor == 1){
        var valor = [2,4,5,8,10]
        var item = document.createElement('option')
        item.text = `${valor}`
        visor.appendChild(item)
        
        }
    }

    
}