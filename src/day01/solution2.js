/**
 * - How many times does the number on the left appear in the list on the right?
 * - For each number on the left.
 * - similarityScore += num * occurances
 */
const {readFilePairs, inputPath} = require('./solution1')

main()

async function main() {
    let [left, right] = readFilePairs(inputPath, '   ')
    left = removeDuplicates(left)
    const occurances = countOccurances(left, right)

    left.sort() // of course, the most important part.
    
    let similarityScore = 0
    for(let i = 0; i < left.length; i++) {
        similarityScore += left[i] * occurances[i]
    }

    console.log(similarityScore)
}

/**
 * Ensure that a the string representation of a number doesn't contain any funny carriage returns and similar.
 * @param {String[]} numStrings Collection of numbers in string format
 * @returns A collection of numbers
 */
function normalizeNumStrings(numStrings) {
    return numStrings.map(value => value.trim())
}

// Because I won't remember how to.
function removeDuplicates(collection) {
    // Of course I got this from stackoverflow.
    return [...new Set(collection)]
}

/**
 * Counts the amount of times each value of `reference` appears in `target`
 * @param {*[]} reference 
 * @param {*[]} target 
 * @returns An index-matching array containing the number of occurances for `reference`
 */
function countOccurances(reference, target) {
    // Not that I'm mindful of performance, but this should maybe be faster?
    reference = normalizeNumStrings(reference)
    target = normalizeNumStrings(target)
    reference.sort()
    target.sort()

    let allOccurances = []
    let j = 0
    for(let i = 0; i < reference.length; i++) {
        let occurances = 0
        while(j < target.length && target[j] <= reference[i]) {
            if(target[j] === reference[i]) {
                occurances += 1
            }
            
            j++
        }
        allOccurances.push(occurances)
    }
    console.log(allOccurances.length)
    return allOccurances
}