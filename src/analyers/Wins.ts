import MatchData from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../enum";
class Win implements Analyzer{
    HomeWins: number = 0
    AwayWins: number = 0
    HomeDraws: number = 0
    AwayDraws: number = 0
    HomeLose: number = 0
    AwayLose: number = 0
    Totalgames: number = 0
    constructor(public Teamname: string){}
    games(matches: MatchData[]): number{
        matches.map((match : MatchData): void => {
            if( match[1] === this.Teamname || match[2] === this.Teamname){
                this.Totalgames++
            }
        })
        return this.Totalgames
    }
    run(matches: MatchData[]): string{
        this.games(matches)
        for(let match of matches){
            if(match[1] === this.Teamname && match[5] === MatchResult.HomeWin){
                this.HomeWins++
            }
            else if(match[2] === this.Teamname && match[5] === MatchResult.AwayWin){
                this.AwayWins++
            }
            else if(match[1] === this.Teamname && match[5] === MatchResult.AwayWin){
                this.HomeLose++
            }
            else if(match[2] === this.Teamname && match[5] === MatchResult.HomeWin){
                this.AwayLose++
            }
            else if(match[1] === this.Teamname && match[5] === MatchResult.Draw){
                this.HomeDraws++
            }
            else if(match[2] === this.Teamname && match[5] === MatchResult.Draw){
                this.AwayDraws++
            }
        }
        return `${this.Teamname} has played a Total of  ${this.Totalgames} games
            Won => ${this.HomeWins + this.AwayWins} games (${this.HomeWins} Home and ${this.AwayWins} Away) 
            Lost => ${this.HomeLose + this.AwayLose} games (${ this.HomeLose} Home and ${this.AwayLose} Away)
            Draw => ${this.HomeDraws + this.AwayDraws} games (${this.HomeDraws} Home and ${this.AwayDraws} Away)`
    }

}

export default Win