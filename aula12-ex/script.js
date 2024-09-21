function carregar(){
    var img = window.document.getElementsByName('imag')
    var msg = window.document.getElementById('item01')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora  são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = 'imagem/img-manha-pq.png'
        document.body.style.background = '#68A5C1'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imagem/tarde-pq.png'
        document.body.style.background = '#804116'
    }else{ 
        //boa noite
        img.src = 'imagem/noite-pq.png'
        document.body.style.background = '#593F5E'
    }
}

