import type { Terminal } from "@xterm/xterm"

export class Hello {

    static metadata = {
        "name":"hello",
        'description':"says hi back",
        'usage':"hello"
    }

    static command(params:any) {
        var term:Terminal = params["terminal"]
        term.writeln("")
        term.writeln(`hi!`)
        term.writeln("")
    }

}
