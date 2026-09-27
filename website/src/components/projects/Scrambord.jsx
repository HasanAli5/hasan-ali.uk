export default function Scrambord({verbose}){
    return (
        <div id="mae_card" className="overflow-y-auto grid grid-flow-dense gap-4 w-full">
            <div className="rounded-2xl row-span-1 flex gap-8 min-w-11/12">
                <img src="./scrambord.ico" className={verbose?`w-25 h-25 rounded-2xl`:`w-15 h-15 rounded-2xl`}></img>
                <h1 className="text-2xl py-4">Scrambord</h1>
                {verbose?
                <p>Word based tiling web game.</p>:
                <></>}
            </div>
        </div>
    )
}
