import { OutputTarget } from "../Summary";
import fs from "fs"

class HtmlReport implements OutputTarget{
    print(report: string): void{
        const html = `
        <div>
            <h2> Analysis Report </h2>
            <div>
                <p>
                ${report}
                </p>
            </div>
        </div>
        `
        fs.writeFileSync("report.html", html)
    }
}

export default HtmlReport