import { useState } from "react";

const style={
    color:`bg-[]`,
    header:`bg-[#232F3E] w-4/5 h-2/5 flex justify-center`
}

const Header=({add="True"})=>{
    const[selected,setselected]=useState(add)
    return(
        <div className="width-1/2 height-300px ">
            <div className={style.header}>
                <button className={style.color}>
                    {add=="True"?"connect wallet" : "Wallet Connected 00mbvdvbb....."}
                    {add=="True"?"":"saayan Wallet connected"}
                </button>
                
            </div>
            <div className="w-1/2 flex-flex-col m-8">
                My Board
            </div>
            <div className="w-1/2 flex-flex-col m-8">Assets</div>
            <div className="w-1/2 flex-flex-col m-8">Collection</div>
            <div className="w-1/2 flex-flex-col m-8">Saved </div>
            <div className="w-1/2 flex-flex-col m-8">Profile</div>
            <div className="w-1/2 flex-flex-col m-8">Transaction History</div>
            <img className="w-23 h-8 ml-9" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
        </div>


    )
}
export default Header;