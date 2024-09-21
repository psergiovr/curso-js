function contagem(){
    var ci = document.getElementById('inicio')
    var cf = document.getElementById('fim')
    var cp = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ci.value.length == 0 || cf.value.length == 0 || cp.value.length == 0){
        window.alert('[ERRO!] Faltam dados!')
    }else{
        
        var i = Number(ci.value)
        var f = Number(cf.value)
        var p = Number(cp.value)

        if (p <= 0){
            window.alert('Número do Passo Inválido!')
        }else if (p > 0){
            res.innerHTML = ('<p>Contando...</p> ')
        }
       

        if (i < f && p > 0){
            for(var i;i <= f;i += p){
                //Contagem crescente!
                res.innerHTML += ` 👉${i}`
            }
        }else if (i > f && p > 0){
            //Contagem regressiva!
            for(var i;i >= f;i -= p){
                res.innerHTML += ` 👉${i}`
            }
        }
        if (p <= 0){
            res.innerHTML += `<p>Tente novamente...</p>`
        }else if (p > 0){
            res.innerHTML += ' 👉🏴'
        }
    }   res.style.backgroundColor = '#76d3f2'
        res.style.borderRadius = "5px"
        res.style.border = '1px solid black'
}   
