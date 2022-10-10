const nomes = ["Ana","Maria","Noah","Ben"]
const notas = [7, 4.5, 6, 8]

const reprovados = nomes.filter ((aluno,indice) => notas [indice] < 5 )

console.log(`reprovados: ${reprovados}`)

