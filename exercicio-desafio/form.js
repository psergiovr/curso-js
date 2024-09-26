function validar(){
    nome = document.querySelector('input#inome')
    mat = document.querySelector('input#imat')
    res = document.querySelector('div#res')
    tur = document.getElementsByName('hora')
    valide = document.querySelector('input#ivalid')
   

    if (nome.value.length == 0 || mat.value != 22098){
        window.alert('[ERRO!] Favor verifique os dados!')
    }else{
        vaz = document.getElementById('inum')
        vaz00 = document.getElementById('inum00')
        vaz01 = document.getElementById('inum01')
        vaz02 = document.getElementById('inum02')
        vaz03 = document.getElementById('inum03')
        vaz04 = document.getElementById('inum04')
        vaz05 = document.getElementById('inum05')
        vaz06 = document.getElementById('inum06')
        tur = document.getElementsByName('hora')
        temp = document.getElementsByName('tempo')
        
        nome = (nome.value)
        mat = Number(mat.value)
        vaz = Number(vaz.value)
        vaz00 = Number(vaz00.value)
        vaz01 = Number(vaz01.value)
        vaz02 = Number(vaz02.value)
        vaz03 = Number(vaz03.value)
        vaz04 = Number(vaz04.value)
        vaz05 = Number(vaz05.value)
        vaz06 = Number(vaz06.value)
        vazaom = (vaz + vaz00 + vaz01 + vaz02 + vaz03 + vaz04 + vaz05 + vaz06)/8
        
        var func = 'Operador de ETE'
        var data = new Date()
        var dia = data.getDate()
        var mes = data.getMonth()
        var mes = mes + 1
        var ano = data.getFullYear()
        
        if (tur[0].checked && temp[0].checked){
            turno = '7h às 15'
            temp[0].checked = tempo = 'Bom'
            res.innerHTML = `Nome: ${nome}, Matrícula: ${mat}, Função: ${func}<p> Dia: ${dia} ${mes} ${ano}, Turno: ${turno}, tempo: ${tempo}</p><p> Vazão Média: ${vazaom}.</p>`
        }else if(tur[0].checked && temp[1].checked){
            turno = '7h às 15'
            temp[1].checked = tempo = 'Chuva'
            res.innerHTML = `Nome: ${nome}, Matrícula: ${mat}, Função: ${func}; Dia: ${dia} ${mes} ${ano}, Turno: ${turno}, tempo: ${tempo}`
        }else if(tur[0].checked && temp[2].checked){
            turno = '7h às 15'
            temp[1].checked = tempo = 'Chuva Forte'
            res.innerHTML = `Nome: ${nome}, Matrícula: ${mat}, Função: ${func}; Dia: ${dia} ${mes} ${ano}, Turno: ${turno}, tempo: ${tempo}; Grade Escalar: ${grade}`
        }
        
    }
}
function equipamento(){
    cm = document.querySelector('input#itex')

    if (cm.value == 0){
        window.alert('[ERRO!] Favor verifique os dados!')
    }else{
        grad = document.getElementsByName('grade')
        res01 = document.querySelector('div#res01')
        bomb = document.getElementsByName('bomba')
        desar = document.getElementsByName('desar')
        cm = Number(cm.value)

        if(grad[1].checked && bomb[0].checked && desar[0].checked){
            desar[0] = desare = '#01'
            grad[1].checked = grade = 'Automático'
            bomb[0] = bomba = '#01'
            res01.innerHTML = `Grade Escalar: ${grade}, Bomba: ${bomba} >> Amperagem: ${cm}<p>Desarenador: ${desare} >> ${grade}</p> `
        }else if(grad[1].checked && bomb[1].checked && desar[0].checked){
            desar[0] = desare = '#01'
            bomb[1] = bomba = '#02'
            grad[1].checked = grade = 'Automático'
            res01.innerHTML = `Grade Escalar: ${grade}, Bomba: ${bomba} >> Amperagem: ${cm}<p>Desarenador: ${desare} >> ${grade}</p> `
        }else if(grad[1].checked && bomb[2].checked && desar[0].checked){
            desar[0] = desare = '#01'
            bomb[2] = bomba = '#03'
            grad[1].checked = grade = 'Automático'
            res01.innerHTML = `Grade Escalar: ${grade}, Bomba: ${bomba} >> Amperagem: ${cm}<p>Desarenador: ${desare} >> ${grade}</p> `
        }
        if(grad[1].checked && bomb[0].checked && desar[1].checked){
            desar[0] = desare = '#02'
            grad[1].checked = grade = 'Automático'
            bomb[0] = bomba = '#01'
            res01.innerHTML = `Grade Escalar: ${grade}, Bomba: ${bomba} >> Amperagem: ${cm}<p>Desarenador: ${desare} >> ${grade}</p> `
        }else if(grad[1].checked && bomb[1].checked && desar[1].checked){
            desar[0] = desare = '#02'
            bomb[1] = bomba = '#02'
            grad[1].checked = grade = 'Automático'
            res01.innerHTML = `Grade Escalar: ${grade}, Bomba: ${bomba} >> Amperagem: ${cm}<p>Desarenador: ${desare} >> ${grade}</p> `
        }else if(grad[1].checked && bomb[2].checked && desar[1].checked){
            desar[0] = desare = '#02'
            bomb[2] = bomba = '#03'
            grad[1].checked = grade = 'Automático'
            res01.innerHTML = `Grade Escalar: ${grade}, Bomba: ${bomba} >> Amperagem: ${cm}<p>Desarenador: ${desare} >> ${grade}</p> `
        }
    }
}