/*
- Pair up smallest number on left with smallest on right.
- Do same with second smallest, third, etc.
- For each pair, calculate absolute difference
- Add all differences together.
*/

const fs = require('node:fs')
const inputPath = './input.txt'

main()

function main() {
    const [left, right] = readFilePairs(inputPath, '   ')

    left.sort()
    right.sort()

    let absDiff = 0
    for(let i = 0; i < left.length; i++) {
        const diff = left[i] - right[i]
        absDiff += Math.abs(diff)
    }

    console.log(absDiff)
}

function readFilePairs(filePath, separator) {
    const file = fs.readFileSync(filePath, {encoding: 'utf-8'})
    const strPairs = file.split('\n')

    const left = []
    const right = []
    strPairs.forEach(pair => {
        const numPair = pair.split(separator) 
        left.push(numPair[0])
        right.push(numPair[1])
    })
    return [left, right]
}

module.exports = { readFilePairs, inputPath }