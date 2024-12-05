/**
 * - How many times does the number on the left appear in the list on the right?
 * - For each number on the left.
 * - similarityScore += num * occurances
 */
const {readFilePairs, inputPath} = require('./solution1')

main()

async function main() {
    const [left, right] = readFilePairs(inputPath, '   ')

    const occurances = countOccurances(left, right)
    
    let similarityScore = 0
    for(let i = 0; i < left.length; i++) {
        similarityScore += left[i] * occurances[i]
    }

    console.log(similarityScore)
}

/**
 * Counts the amount of times each value of `reference` appears in `target`
 * @param {*[]} reference 
 * @param {*[]} target 
 * @returns An index-matching array containing the number of occurances for `reference`
 */
function countOccurances(reference, target) {
    // Not that I'm mindful of performance, but this should maybe be faster?
    reference.sort()
    target.sort()

    console.log('Target = ' + target[0])
    console.log('Reference = ' + reference[0])

    let occurances = []
    let j = 0
    for(let i = 0; i < reference.length; i++) {
        let occurance = 0
        for(j; j < target.length; j++) {
            if(target[j] == reference[i]) {
                occurance += 1
            }
            else if(target[j] > reference[i]) {
                // Don't care about lower. Higher means we're out of occurances.
                break;
            }
        }
        occurances.push(occurance)
    }
    return occurances
}