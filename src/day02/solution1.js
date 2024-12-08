/**
 * - A report contains any number of levels
 * - Each level must either succesivly decrease or increase in values.
 * - Increase/decrease limitation: 1 to 3.
 */
const { fileTools, arrayTools } = require('../tools')
const inputPath = './day02/input.txt'

main()

function main() {
    const reports = fileTools.readArrays(inputPath, ' ', true)

    const minDiff = 1
    const maxDiff = 3
    let safeReports = 0
    let numNonUnidirectional = 0
    let numNonDiffStuff = 0

    // overly complicated but "fun"
    reports.forEach(report => {
        let helpMe = false
        let ascending = report[0] < report[1]
        if(report[0] === report[1]) helpMe = true
        const uniDirectional = ascending ? 
            (val1, val2) => val1 < val2 : 
            (val1, val2) => val1 > val2
        
        const withinDiff = (val1, val2) => {
            const diff = Math.abs(val1 - val2)
            const withinBounds = diff >= minDiff && diff <= maxDiff
            console.log(`ABS ${diff} = ${withinBounds}`)
            return withinBounds
        }

        if(!arrayTools.followsPattern(report, uniDirectional)) {
            numNonUnidirectional++
            helpMe = true
        }
        if(!arrayTools.followsPattern(report, withinDiff)) {
            numNonDiffStuff++
            helpMe = true
        }
        if(!helpMe) safeReports++
    })

    console.log(`Safe reports = ${safeReports} / ${reports.length}`)
    console.log(`Uni-false = ${numNonUnidirectional} / ${reports.length}`)
    console.log(`Diff-false = ${numNonDiffStuff} / ${reports.length}`)
}
