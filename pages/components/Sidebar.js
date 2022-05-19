import React from "react"
import Header from '../components/Header/Header'
import Content from '../components/Content'
import Assets from '../components/Assets';

const Sidebar=()=>{
    return(
        <div className="w-full h-screen flex flex-row">
        <div className="w-1/5 h-full bg-black-900 flex flex-col">
            <Header/>
        </div>
        <div className="w-4/5  flex flex-col">
            <Content/>
            <div className="flex ">
            <Assets/>
            </div>
        </div>
        </div>
    )
}
export default Sidebar