/*let valores = [8,7,4,2,9]
valores.sort()
console.log(valores)

for (let valor = 0;valor < valores.length;valor++){
    console.log(`A posição ${valor} tem o valor ${valores[valor]}`)
}*/

let valores = [8,7,4,2,9]

valores.sort()
valores.push(15)
console.log(valores)

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
var n = 7
let pos = valores.indexOf(n)

if (pos == -1){
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor ${n} está na posição ${pos}`)
}

