export default function MaeModel({verbose}){
    return (
        <div id="mae_card" className="overflow-y-auto grid grid-flow-dense gap-4 w-full">
            <div className=" row-span-1 flex gap-8 min-w-11/12">
                <img src="./pathmnist.jpg" className={verbose?`w-25 h-25 rounded-2xl`:`w-15 h-15 rounded-2xl`}></img>
                <h1 className="text-2xl py-4">PathMNIST Predictor Model</h1>
                {verbose?
                <p>VIT model that used MAE pretraining and cross attension pooling to produce accuracy results beating benchmark using transformer models rather than convulution nueral networks</p>:
                <></>}
            </div>
        </div>
    )
}
