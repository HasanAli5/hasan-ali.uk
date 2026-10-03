import type { Terminal } from "@xterm/xterm"

const MAX_NAME = 12

export class Help {

    static metadata = {
        "name":"help",
        'description':"displays all commands and their functions",
        'usage':"help"
    }

    static command(params:any) {
        var term = params["terminal"]
        term.write("\r\n")
        term.writeln("\x1b[35mCommands:\x1B[0m")
        for (let i = 0; i < params["commands"].length; i++) {
            const command = params["commands"][i];
            var name_len = command["metadata"]["name"].length
            var space = " ".repeat(MAX_NAME-name_len+1)
            term.writeln(
                ` \x1b[33m${command["metadata"]["name"]}\x1B[0m`+
                `${space}`+
                `\x1b[1;0m${command["metadata"]["description"]}\x1B[0;0m`)
        }
        term.write("\r\n")
    }

}
