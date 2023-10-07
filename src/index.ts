import CsvFileReader from "./CsvFileReader"

const reader = new CsvFileReader("football.csv")

// enumeration
enum MatchResult{
    HomeWin = "H",
    AwayWin = "A",
    Draw =  "D"
}

let manuitedHomewins = 0
let manunitedAwaywins = 0
for(let match of reader.data){
    if(match[1] === "Man United" && match[5] === MatchResult.HomeWin){
        manuitedHomewins++
    }
    else if(match[2] === "Man United" && match[5] === MatchResult.AwayWin){
        manunitedAwaywins++
    }
}

console.log(`Man United has won A total of ${manuitedHomewins + manunitedAwaywins} games (Home ${manuitedHomewins}, Away ${manunitedAwaywins})`)