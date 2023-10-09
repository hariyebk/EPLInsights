import { datestringTodate } from "./utils/stringTodate"
import { MatchResult } from "./enum"
import CsvFileReader from "./CsvFileReader"
type MatchData = [Date, string, string, number, number, MatchResult, string]
interface DataReader{
    read(): void
    data: string[][]
}
class MatchReader{
    static Initializer(filename: string): MatchReader{
        return new MatchReader(
            new CsvFileReader(filename)
        )
    }
    matches: MatchData[] = []
    constructor(public reader : DataReader){}
    load(): void{
        // reads the file
        this.reader.read()
        // defines the types for the results
        this.matches = this.reader.data.map((row: string[]): MatchData => [datestringTodate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResult, row[6]])
    }
}

export default MatchReader