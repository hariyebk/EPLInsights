interface TeamStats{
    Teamname: string
    Totalgames: number
    HomeWins: number
    AwayWins: number
    HomeLose: number
    AwayLose: number
    HomeDraws: number
    AwayDraws: number
}
function printWLD(stats: TeamStats): string{
    return `${stats.Teamname} has played a Total of  ${stats.Totalgames} games
    Won => ${stats.HomeWins + stats.AwayWins} games (${stats.HomeWins} Home and ${stats.AwayWins} Away) 
    Lost => ${stats.HomeLose + stats.AwayLose} games (${ stats.HomeLose} Home and ${stats.AwayLose} Away)
    Draw => ${stats.HomeDraws + stats.AwayDraws} games (${stats.HomeDraws} Home and ${stats.AwayDraws} Away)`
}

export default printWLD