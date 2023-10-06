import { match } from "assert"
import fs from "fs"

const matches = fs.readFileSync("football.csv" , {
    encoding: "utf-8"
}).split("\n").map((match : string) : string[] => match.split(","))

// enumeration
enum MatchResult{
    HomeWin = "H",
    AwayWin = "A",
    Draw =  "D"
}
let manuitedHomewins = 0
let manunitedAwaywins = 0
for(let match of matches){
    if(match[1] === "Man United" && match[5] === MatchResult.HomeWin){
        manuitedHomewins++
    }
    else if(match[2] === "Man United" && match[5] === MatchResult.AwayWin){
        manunitedAwaywins++
    }
}

console.log(`Man United has won A total of ${manuitedHomewins + manunitedAwaywins} games (Home ${manuitedHomewins}, Away ${manunitedAwaywins})`)