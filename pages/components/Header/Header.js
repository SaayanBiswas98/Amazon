import { useState } from "react";
import Link from "next/link";

const style={
    color:`bg-[grey] w-[90px] h-[67px]`,
    header:`bg-[#232F3E] w-4/5 h-2/5 flex justify-center `
}

const Header=({add="True"})=>{
    const[selected,setselected]=useState(add)
    return(
        <div className="width-1/2 height-300px fixed left-0 top-0 ">

            <div className={style.header}>
                <Link href="/Signin">
                <button className={style.color}>
                    {add=="True"?"connect wallet" : "Wallet Connected 00mbvdvbb....."}
                    {add=="True"?"":"saayan Wallet connected"}
                </button>
                </Link>
    
            </div>
            <div className="w-1/2 flex-flex-col m-8">
                My Board
            </div>
            <button className="w-1/2 flex-flex-col m-8 bg-red-600 hover:bg-red-900 transition:1200ms ease">Assets</button>
            <button className="w-1/2 flex-flex-col m-8 bg-red-600 hover:bg-red-900 transition:1200ms ease">Collection</button>
            <div className="w-1/2 flex-flex-col m-8">Saved </div>
            <div className="w-1/2 flex-flex-col m-8">Profile</div>
            <div className="w-1/2 flex-flex-col m-8">Transaction History</div>
            <img className="w-23 h-8 ml-9" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
        </div>


    )
}
export default Header;