import type { Terminal } from "@xterm/xterm"

export class Clear {

    static metadata = {
        "name":"clear",
        'description':"clears the terminal",
        'usage':"clear"
    }

    static command(params:any) {
        var term:Terminal = params["terminal"]
        term.clear()
    }

}
