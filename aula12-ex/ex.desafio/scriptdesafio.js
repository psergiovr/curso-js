function clicar(){
    
    var mes = document.getElementById('mes')

    var data = new Date()
    var mesA = data.getMonth()
   
    var letra = document.getElementsByName('letra')
    var mesA = mesA + 1

    if (mes.value.length == 0 || mesA != Number(mes.value)){
        window.alert('[ERRO] Favor digite o número do mês vigente!')
    }else{
        var res = document.getElementById('res')
    
        var img = document.createElement('img')
        img.setAttribute('id','gil')
        
        if (letra[0].checked && mesA == 9){
                Letra = 'Letra A'
                mes = 'Setembro'
                res.innerHTML = `(${Letra}) - Mês: ${mes}.<p> Dias: 22, 23 e 24 / 27, 28 e 29.</p>`
            }else if(letra[1].checked && mesA == 9){
                Letra = 'Letra B'
                mes = 'Setembro'
                res.innerHTML = `(${Letra}) Mês: ${mes}.<p>Dias: 18, 19 e 20 / 23, 24 e 25 / 28, 29 e 30.</p>`
            }else if (letra[2].checked && mesA == 9){
                Letra = 'Letra C'
                mes = 'Setembro'
                res.innerHTML = `(${Letra}) Mês: ${mes}.<p> Dias: 19, 20 e 21 / 24, 25 e 26 / 29, 30.</p>`
            }else if (letra[3].checked && mesA == 9){
                Letra = 'Letra D'
                mes = 'Setembro'
                res.innerHTML = `(${Letra}) Mês: ${mes}.<p> Dias: 21, 22 e 23 / 26, 27 e 28.</p>`
            }else if (letra[4].checked && mesA == 9){
                Letra = 'Letra E'
                mes = 'Setembro'
                res.innerHTML = `(${Letra}) Mês: ${mes}.<p> Dias: 20, 21 e 22 / 25, 26 e 27 / 30.</p>`
            }
            img.setAttribute('src','etegilportugal.jpeg')
            img.style.borderRadius = '5px'
            img.style.boxShadow = '2px 2px 4px black'
            img.style.height = '25vh'
            img.style.width = '22vw'
            res.appendChild(img)
        }
} 

function folga(){
    var mes = document.getElementById('mes')
    var res = document.getElementById('res')
    letra = document.getElementsByName('letra')

    var data = new Date()
    var mesA = data.getMonth()

    var mesA = mesA + 1

    if (mes.value.length == 0 || mesA != Number(mes.value)){
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    }else{
        var mes = (mes.value)
        res = document.getElementById('res')

        var img = document.createElement('img')
        img.setAttribute('id', 'passeio')
        
        if (mes == 9 && letra[0].checked){
            Letra = 'Letra A'
            mes = 'Setembro'
            res.innerHTML = `Mês ${mes} ${Letra} <p>Folgas - 20 e 21 / 26 e 27 / 30.</p>`
        }else if (mes == 9 && letra[1].checked){
        Letra = 'Letra B'
        mes = 'Setembro'
        res.innerHTML = `Mês ${mes} ${Letra} <p>Folgas - 21 e 22 / 26 e 27.</p>`
        }else if (mes == 9 && letra[2].checked){
            Letra = 'Letra C'
            mes = 'Setembro'
            res.innerHTML = `Mês ${mes} ${Letra} <p>Folgas - 22 e 23 / 27 e 28.</p>`
        }else if (mes == 9 && letra[3].checked){
            Letra = 'Letra D'
            mes = 'Setembro'
            res.innerHTML = `Mês ${mes} ${Letra} <p>Folgas - 19 e 20 / 24 e 25 / 29 e 30.</p>`
        }else if (mes == 9 && letra[4].checked){
            Letra = 'Letra E'
            mes = 'Setembro'
            res.innerHTML = `Mês ${mes} ${Letra} <p>Folgas - 23 e 24 / 28 e 29.</p>`
        }
       
    }
    document.body.style.backgroundColor = '#49A5FF'
    img.setAttribute('src','laser.jpg')
    res.appendChild(img)
    img.style.borderRadius = '10px'
    img.style.boxShadow = '2px 2px 4px black'
    img.style.height = '25vh'
    img.style.width = '22vw'
}