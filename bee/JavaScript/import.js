import prompt from 'prompt-sync'
const input = prompt()
import { readFileSync } from 'fs'

/*readFile('/etc/passwd', (err, data) => 
{  if (err) throw err
  console.log(data)
})*/

const nome = readFileSync("arquivo_teste.txt", "utf8").split("\n") 
const teste = (nome + `Oi`)

console.log(teste)
