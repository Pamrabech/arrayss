const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 7,10]
const salaJava = [6, 5, 8, 9, 8, 5]
const salaPhyton = [4, 7, 8, 9]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => 
    atual + acum,0)
    return somaDasNotas/notasDaSala.length 
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)} `)
console.log(`Média da sala de Java ${mediaSala(salaJava)} `)
console.log(`Média da sala de Phyton ${mediaSala(salaPhyton)} `)