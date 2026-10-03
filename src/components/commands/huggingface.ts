import type { Terminal } from "@xterm/xterm"

export class Linkedin {

    static metadata = {
        "name":"huggingface",
        'description':"redirects to huggingface profile page",
        'usage':"huggingface"
    }

    static command(params:any) {
        var term:Terminal = params["terminal"]
        term.writeln(`\r\nredirecting to huggingface...\r\n`)
        window.location.href = "https://huggingface.co/Hali5";
    }

}
