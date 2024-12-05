/*
- Pair up smallest number on left with smallest on right.
- Do same with second smallest, third, etc.
- For each pair, calculate absolute difference
- Add all differences together.
*/

const fs = require('node:fs')
const inputPath = './input.txt'

function main() {
    const file = fs.readFileSync(inputPath, {encoding: 'utf-8'})
    const strPairs = file.split('\n')
    const left = []
    const right = []
    strPairs.forEach(pair => {
        const numPair = pair.split('   ') 
        left.push(numPair[0])
        right.push(numPair[1])
    })

    left.sort()
    right.sort()

    let absDiff = 0
    for(let i = 0; i < strPairs.length; i++) {
        const diff = left[i] - right[i]
        absDiff += Math.abs(diff)
    }

    console.log(absDiff)
}
main()