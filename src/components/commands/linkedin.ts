import type { Terminal } from "@xterm/xterm"

export class Linkedin {

    static metadata = {
        "name":"linkedin",
        'description':"redirects to linkedin profile page",
        'usage':"linkedin"
    }

    static command(params:any) {
        var term:Terminal = params["terminal"]
        term.writeln(`\r\nredirecting to linkedin...\r\n`)
        window.location.href = "https://www.linkedin.com/in/hasanali5/";
    }

}
