import fs from "fs"

abstract class CsvFileReader <T> {
    // <T> : Generic type 
    abstract mapRow(row: string[]) : T
    data: T[] = []
    constructor(public filename: string){}
    read(): void{
        this.data = fs.readFileSync(this.filename , {
            encoding: "utf-8"
        }).split("\n").map((match : string) : string[] => match.split(",")).map(this.mapRow)
    }

}

export default CsvFileReader