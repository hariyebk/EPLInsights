import MatchData from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../enum";
import printWLD from "../utils/printTeamStats";
class Win implements Analyzer{
    wld = {
        Teamname: this.Teamname,
        Totalgames: 0,
        HomeWins: 0,
        AwayWins: 0,
        HomeLose: 0,
        AwayLose: 0,
        HomeDraws: 0,
        AwayDraws: 0
    }
    constructor(public Teamname: string){}
    games(matches: MatchData[]): number{
        matches.map((match : MatchData): void => {
            if( match[1] === this.Teamname || match[2] === this.Teamname){
                this.wld.Totalgames++
            }
        })
        return this.wld.Totalgames
    }
    run(matches: MatchData[]): string{
        this.games(matches)
        for(let match of matches){
            if(match[1] === this.Teamname && match[5] === MatchResult.HomeWin){
                this.wld.HomeWins++
            }
            else if(match[2] === this.Teamname && match[5] === MatchResult.AwayWin){
                this.wld.AwayWins++
            }
            else if(match[1] === this.Teamname && match[5] === MatchResult.AwayWin){
                this.wld.HomeLose++
            }
            else if(match[2] === this.Teamname && match[5] === MatchResult.HomeWin){
                this.wld.AwayLose++
            }
            else if(match[1] === this.Teamname && match[5] === MatchResult.Draw){
                this.wld.HomeDraws++
            }
            else if(match[2] === this.Teamname && match[5] === MatchResult.Draw){
                this.wld.AwayDraws++
            }
        }
        return printWLD(this.wld)
    }

}

export default Win