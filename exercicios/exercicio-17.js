function gerador(){
    var n = document.getElementById('txn')
    var res = document.getElementById('res')
    var tab = document.getElementById('itab')

    if (n.value.length == 0){
        window.alert('[ERRO!] Favor adcionar um número!')
    }else{
        var n = Number(n.value)
        var c = 1
        tab.innerHTML = ''
        if (n >= 0 || n <= 0){
            for (i = 1;i <= 10;i++){
                var item = document.createElement('option')
                item.text = `${n} X ${i} = ${n*i}`
                item.value = `tab${c}`
                tab.appendChild(item)
                tab.style.backgroundColor = '#68c8f2'
                tab.style.borderRadius = '5px'
                item.style.textShadow = '1px 1px 2px black'
            }
        }
   }
}
        

    
