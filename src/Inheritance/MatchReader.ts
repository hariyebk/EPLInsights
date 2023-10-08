import { datestringTodate } from "../utils"
import { MatchResult } from "../enum"
import CsvFileReader from "./CsvFileReader"
import MatchData from "../MatchData"
class MatchReader extends CsvFileReader<MatchData> {
    constructor(filename:string){
        super(filename)
    }
    mapRow(row: string[]) : MatchData {
        return [datestringTodate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResult,  row[6]]
    }
    
}

export default MatchReader