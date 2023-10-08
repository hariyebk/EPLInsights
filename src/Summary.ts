import MatchData from "./MatchData"


export interface Analyzer{
    run(macthes: MatchData[]) : string
}

export interface OutputTarget{
    print(report: string): void
}

class Summary{
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}
    buildAndPrintReport(matches: MatchData[]) : void{
        const report = this.analyzer.run(matches)
        this.outputTarget.print(report)
    }
}

export default Summary