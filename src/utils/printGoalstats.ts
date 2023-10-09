import MatchData from "../MatchData"
export interface Stats{
    Totalgoals: number
    TotalGames: number
    AvarageGoalsPerGame: number 
    TotalHomeGoals: number 
    TotalAwayGoals: number 
    MximumGoalsPerGame: {goals: number, game?: MatchData},
    TotalCleanSheets: number 
    HomeCleanSheets: number 
    AwayCleanSheets: number 
    MaximumGoalDifferencePerGame: {goals: number, game?: MatchData}
} 
function PrintGoals(goalstats: Stats): string{
    const {Totalgoals, TotalGames, AvarageGoalsPerGame, TotalHomeGoals, TotalAwayGoals, MaximumGoalDifferencePerGame, TotalCleanSheets, HomeCleanSheets, AwayCleanSheets, MximumGoalsPerGame} = goalstats
    return `
    Total Goals in the season - ${Totalgoals}
    Toatl Goals scored By Home Team - ${TotalHomeGoals}
    Total Goals scored By Away Team - ${TotalAwayGoals}
    Avarage Goals per game - ${AvarageGoalsPerGame}
    Maximum number of Goals in a single game - ${MximumGoalsPerGame.goals}, game - ${MximumGoalsPerGame.game?.at(1)} Vs ${MximumGoalsPerGame.game?.at(2)} (${MximumGoalsPerGame.game?.at(3)} - ${MximumGoalsPerGame.game?.at(4)})
    Total clean sheets in the season - ${TotalCleanSheets}
    Number of cleansheets by Home Team - ${HomeCleanSheets}
    Number of cleansheets by Away Team - ${AwayCleanSheets}
    Maximum Goal Difference in a single game - ${MaximumGoalDifferencePerGame.goals}, game - ${MaximumGoalDifferencePerGame.game?.at(1)} Vs ${MaximumGoalDifferencePerGame.game?.at(2)} (${MaximumGoalDifferencePerGame.game?.at(3)} - ${MaximumGoalDifferencePerGame.game?.at(4)})
    `
}

export default PrintGoals