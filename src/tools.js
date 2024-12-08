const fs = require('node:fs')
const path = require('node:path')

const fileTools = {
    
    /**
     * 
     * @param {String} filePath path relative to ./src/ 
     * @param {*} separator Character(s) that separate the values
     * @param {*} isNumbers True if parsing numbers
     * @returns A matrix of values
     */
    readArrays: function(filePath, separator, isNumbers = false) {
        const lines = this.readFile(filePath)

        let arrays = []
        lines.forEach(line => {
            let values = line.split(separator)
            if(isNumbers) {
                values = this.normalizeNumStrings(values)
            }
            arrays.push(values)
        });

        return arrays
    },

    readFile: function(filePath) {
        //if(filePath.indexOf('/'))
        console.log(`FILEPATH: ${filePath}`)
        const file = fs.readFileSync(filePath, {encoding: 'utf-8'})
        return file.split('\n')
    },

    /**
     * Ensure that a the string representation of a number doesn't contain any funny carriage returns and similar.
     * @param {String[]} numStrings Collection of numbers in string format
     * @returns A collection of numbers
     */
    normalizeNumStrings: function(numStrings) {
        return numStrings.map(value => value.trim())
    },

    // Because I won't remember how to.
    removeDuplicates: function(collection) {
        // Of course I got this from stackoverflow.
        return [...new Set(collection)]
    }
}

const arrayTools = {
    /**
     * @callback condition
     * @param {T}val1
     * @param {T}val2
     */
    /**
     * 
     * @param {Array} array 
     * @param {condition} condition 
     */
    followsPattern: function(array, condition) {
        for(let i = 1; i < array.length; i++) {
            if(!condition(array[i - 1], array[i])) {
                return false
            }
        }
        return true
    }
}

module.exports = { fileTools, arrayTools }