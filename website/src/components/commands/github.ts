import type { Terminal } from "@xterm/xterm"

export class Github {

    static metadata = {
        "name":"github",
        'description':"redirects to github profile page",
        'usage':"github"
    }

    static command(params:any) {
        var term:Terminal = params["terminal"]
        term.writeln(`\r\nredirecting to github...\r\n`)
        window.location.href = "https://github.com/hasanali5/"
    }

}
