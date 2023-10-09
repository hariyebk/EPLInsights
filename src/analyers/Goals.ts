import MatchData from "../MatchData";
import { Analyzer } from "../Summary";
import PrintGoals, { Stats } from "../utils/printGoalstats";
class Goals implements Analyzer{
    Goalstats: Stats = {
    Totalgoals:  0,
    TotalGames: 0,
    AvarageGoalsPerGame: 0,
    TotalHomeGoals:  0,
    TotalAwayGoals: 0,
    MximumGoalsPerGame: {
        goals: 0,
    },
    TotalCleanSheets:  0,
    HomeCleanSheets: 0,
    AwayCleanSheets: 0,
    MaximumGoalDifferencePerGame: {
        goals: 0,
    }
    }
    run(macthes: MatchData[]): string {
        this.Goalstats.TotalGames = macthes.length 
        macthes.map((match: MatchData): void => {
            if(match[1]){
                // Total goals
                this.Goalstats.Totalgoals +=  match[3] + match[4]
                // Total Home Goals
                this.Goalstats.TotalHomeGoals += match[3]
                // Total Away Goals 
                this.Goalstats.TotalAwayGoals += match[4]
                // Maximum number of goal per game
                if(match[3] + match[4] > this.Goalstats.MximumGoalsPerGame.goals){
                    this.Goalstats.MximumGoalsPerGame.goals = match[3] + match[4]
                    this.Goalstats.MximumGoalsPerGame.game = match
                }
                // Total clean sheets
                if(match[3] === 0 || match[4] === 0){
                    this.Goalstats.TotalCleanSheets++
                    match[3] === 0 ? this.Goalstats.AwayCleanSheets++ : this.Goalstats.HomeCleanSheets++
                }
                // Maximum Goal difference
                if(Math.abs(match[3] - match[4]) > this.Goalstats.MaximumGoalDifferencePerGame.goals){
                    this.Goalstats.MaximumGoalDifferencePerGame.goals = Math.abs(match[3] - match[4])
                    this.Goalstats.MaximumGoalDifferencePerGame.game = match
                }
            }
        })

        this.Goalstats.AvarageGoalsPerGame = Math.round(this.Goalstats.Totalgoals / this.Goalstats.TotalGames)

        return PrintGoals(this.Goalstats)
        
    }


}

export default Goals