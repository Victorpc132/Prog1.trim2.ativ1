// CLI: Command Line Interface

const params = process.argv
const command = params[2]

if (command === 'add') {
    const value = params[3]
    console.log(`aqui logica para add new item: ${value}`)
    process.exit(0)
}

console.log("n entrou em nenhuma condicional")