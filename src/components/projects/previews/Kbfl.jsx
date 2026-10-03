export default function Kbfl({verbose}){
    return (
        <div>
            <h1 className="text-4xl my-2">Kademlia-Based Federated Learning</h1>
            <p>
                Peer to Peer (P2P) alternative Using Kademlia Networks (DHT) to Federated Learning. Traditonal Federated Learning uses a central server which aggregates all local models into a global model that is sent back to all nodes.
                Kademlia-Based Federated Learning works fully on P2P network, where all peers are treated equally and contribute equally to the aggregation of the global model ensuring everyone does there fair share of the work in aggregation,
                 and prevents there from being a central server dependancy, which reduces administration requirements to deploy and collaborate with other peers on the same models with local data silos, whilst also preserving data privacy.
            </p>
            <br/>
            <h2 className="text-3xl my-2">Training and Validation Loss Graphs</h2>
            <table>
                <caption className="caption-bottom text-zinc-400">Loss Graph of Centralised Learning (CL), Traditonal Federated Learning (TFL), and Kademlia-Based Federated Learning (KBFL)</caption>
                <img src="./kbfl_loss.png"></img>
            </table>
            
            <h2 className="text-3xl my-2">Test Results</h2>
            <table className=" align-middle">
                <caption className="caption-bottom text-zinc-400">Table of Test Results on ChestMNIST test dataset</caption>
                <tr>
                    <th className="p-2 border rounded-l-full border-zinc-700">Name / Type</th>
                    <th className="p-2 border border-zinc-700">Accuracy (%)</th>
                </tr>
                <tr>
                    <th className="p-2 border border-zinc-700">Centralised Learning</th>
                    <th className="p-2 border border-zinc-700">94.7437</th>
                </tr>
                <tr>
                    <th className="p-2 border border-zinc-700">Traditonal Federated Learning (Global Model)</th>
                    <th className="p-2 border border-zinc-700">94.7463</th>
                </tr>
                <tr>
                    <th className="p-2 border border-zinc-700">Traditonal Federated Learning (Avg Local Model)</th>
                    <th className="p-2 border border-zinc-700">94.7400</th>
                </tr>
                <tr>
                    <th className="p-2 border border-zinc-700">Kademlia-Based Federated Learning (Global Model)</th>
                    <th className="p-2 border border-zinc-700">94.7418</th>
                </tr>
                <tr>
                    <th className="p-2 border border-zinc-700">Kademlia-Based Federated Learning (Avg Local Model)</th>
                    <th className="p-2 border border-zinc-700">94.7254</th>
                </tr>
            </table>
        </div>
        
    )
}
