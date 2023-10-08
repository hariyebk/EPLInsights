import MatchReader from "./MatchReader"
import CsvFileReader from "./CsvFileReader"
import {MatchResult} from "./enum"
import Summary from "./Summary"
import Win from "./analyers/Wins"
import ConsoleReport from "./reports/ConsoleReport"

const csvfilereader = new CsvFileReader("football.csv")
const matchreader = new MatchReader(csvfilereader)
matchreader.load()
const win = new Win("Bournemouth")
const consolereport = new ConsoleReport()
const summary = new Summary(win, consolereport)
summary.buildAndPrintReport(matchreader.matches)

matchreader.load()

