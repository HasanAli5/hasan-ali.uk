import { useState } from "react";
import MaeModel from "./projects/MaeModel.jsx";
import MaeModelPreview from "./projects/previews/MaeModel.jsx";
import Scrambord from "./projects/Scrambord.jsx";
import ScrambordPreview from "./projects/previews/Scrambord.jsx";
import Kbfl from "./projects/Kbfl.jsx";
import KbflPreview from "./projects/previews/Kbfl.jsx";


export default function Projects(){
    const [previewState,setPreviewState] = useState(false)
    const [selectedState,setSelectedState] = useState(0)

    const ProjectsArray = [
        MaeModel,
        Scrambord,
        Kbfl
    ]

    const PreviewsArray = [
        <MaeModelPreview/>,
        <ScrambordPreview/>,
        <KbflPreview/>
    ]

    function Preview(){
        if (previewState){
            return (
            <div id="preview" className={`text-white col-span-5 border border-zinc-800 rounded-4xl p-4 overflow-clip`}>
                {PreviewsArray[selectedState]}
            </div>
            )
        }
    }

    function projectHandler(selected){
        switch (previewState){
            case true:
                if (selected==selectedState){
                    setPreviewState(false)
                    
                }
                else {
                    setSelectedState(selected)
                }
                break
            case false:
                setPreviewState(true)
                setSelectedState(selected)
                break
        }
    }

    return (
        <>
            <div id="projects" className={`text-white col-span-${previewState?3:5} border border-zinc-800 rounded-4xl p-8`}>
                <h1 className="text-4xl px-6">Projects</h1>
                <div className="border-t border-zinc-700 mx-4 my-4"></div>

                {ProjectsArray.map((ProjectComponent,index)=>{

                    var classname
                    if (index == selectedState && previewState){
                        classname = "w-full my-2 px-4 pt-4 pb-16 border border-blue-800 rounded-2xl text-left relative"
                    }
                    else{
                        classname = "w-full my-2 px-4 pt-4 pb-16 border border-zinc-800 rounded-2xl text-left relative"
                    }
                     

                        return (
                        <button key={index} onClick={()=>projectHandler(index)} className={classname}>
                            <ProjectComponent verbose={!previewState}/>
                        </button>)
                    }
                )}

            </div>
            <Preview/>
        </>
    )
}