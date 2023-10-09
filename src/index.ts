import MatchReader from "./MatchReader"
import Summary from "./Summary"
import Win from "./analyers/Wins"
import ConsoleReport from "./reports/ConsoleReport"
import HtmlReport from "./reports/HtmlReport"
import Goals from "./analyers/Goals"


const matchreader = MatchReader.Initializer('football.csv')
matchreader.load()

// const win = new Win("Bournemouth")
const consolereport = new ConsoleReport()
// const htmlreport = new HtmlReport()
const goals = new Goals()
const summary = new Summary(goals, consolereport)
summary.buildAndPrintReport(matchreader.matches)

matchreader.load()

