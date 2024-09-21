var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas`)

if (horas < 12 && horas > 6){
    console.log('Bom Dia!')
}else if (horas >= 12 && horas < 18){
    console.log('Boa Tarde!')
}else if (horas >= 18 && horas < 24){
    console.log('Boa Noite!')
}else if (horas >= 0 || horas <= 6){
    console.log('Já é de madrugada. E usamos Bom Dia!')
}
