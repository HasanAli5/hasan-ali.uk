import type { Terminal } from "@xterm/xterm"

export class Time {

    static metadata = {
        "name":"time",
        'description':"displays time",
        'usage':"time"
    }

    static command(params:any) {
        var term:Terminal = params["terminal"]
        const date = new Date()
        term.writeln("")
        term.writeln(`${date.toLocaleTimeString()}\r\n`)
    }

}
