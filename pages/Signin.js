import Fox from './MetaMask.png';
import Image from 'next/Image'
import Link from "next/link"

const style={
    wrapper:` bg-blue-900 ml-9 w-[290px] h-[100px]  `,
    main:`flex w-full h-full justify-center w-[200px] flex-col ml-5 `
}

export default function Signin(){
    return(
        <div className={style.main}>
        <Image src={Fox} height={120} width={100}/>
        <Link href='/'>
        <div className={style.wrapper}>
            Connect Wallet
        </div>
        </Link>
        </div>
    )
}
