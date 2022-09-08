console.log('a node futtatja ezt a fájlt!')

const szam=Math.round(Math.random()*100)
console.log(`A véletlen szám: ${szam}`)
if(szam>=50)
    console.log('Gratula!')
else
    console.log('Sajnálom...')

szam>=50 ? console.log("Gratulálok!") : console.log("Őszintén sajnálom!")

import { diakok } from "./adatok.js"

console.log(`A diákok létszáma:${diakok.length}`)