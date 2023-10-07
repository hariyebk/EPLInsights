import fs from "fs"

class CsvFileReader {
    data: string[][] = []
    constructor(public filename: string){}
    read(): void{
        this.data = fs.readFileSync(this.filename , {
            encoding: "utf-8"
        }).split("\n").map((match : string) : string[] => match.split(","))
    }

}

export default CsvFileReader