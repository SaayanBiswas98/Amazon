import Fox from './MetaMask.png';
import Image from 'next/Image'
import Link from "next/link"

const style={
    wrapper:` bg-blue-900 ml-auto mr-auto   `,
    main:`flex w-[90px] mr-auto flex-col ml-auto justify-center h-screen`
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
