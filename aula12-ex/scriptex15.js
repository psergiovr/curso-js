
function clicar(){
    
    var data = new Date()
    var anoAt = data.getFullYear()
    var idad = window.document.getElementById('idad')
    var msg = window.document.getElementById('item01')

    if (idad.value.length == 0 || Number(idad.value) > anoAt){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fem = document.getElementsByName('radsex')
        var idade = anoAt - Number(idad.value)
        msg.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fem[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','imagem01/homem-crianca.png')
            }else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src','imagem01/homem-adolesc.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','imagem01/homem-adulto.png')
            }else{
                //Idoso
                img.setAttribute('src','imagem01/homem-velho.png')
            }
        }else if (fem[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','imagem01/mulher-crianca.png')
            }else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src','imagem01/mulher-adolesc.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','imagem01/mulher-adulta.png')
            }else{
                //Idoso
                img.setAttribute('src','imagem01/mulher-velha.png')
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        msg.appendChild(img)
    }     
}


