import Apple from '../components/Apple.jpeg'
import Image from 'next/image';
import Pan from '../components/Pan.jpeg'
import Ac from '../components/Ac.jpeg'
import laptop from "../components/laptop.jpg";
import tv from "../components/tv.jpg";
import watch from "../components/watch.jpg";
import iphone from '../components/iphone.jpg';
import shoe from "../components/shoe.jpg";
import Link from 'next/link';


const carlist=[
    {
        name:'apple',
        image:Apple,
        pricemultiplier:235.99,
    },
    {
        name:"Pan",
        image:Pan,
        pricemultiplier:99.56
    },
    {
        name:'Ac',
        image:Ac,
        pricemultiplier:122.95

    },
    {
        name:'laptop',
        image:laptop,
        pricemultiplier:788.90
    },
    {
        name:'tv',
        image:tv,
        pricemultiplier:188.90
    },
    {
        name:'watch',
        image:watch,
        pricemultiplier:88.90
    },

]

const phone=[
    {
        name:'iphone',
        image:iphone,
        pricemultiplier:988.90
    },
    {
        name:'shoe',
        image:shoe,
        pricemultiplier:988.90
    },
]

const style={
    buy:`bg-yellow-400`,
    phone:`flex flex-col`,
    col:`flex flex-row m-4 ml-2`,
    carlist:` flex flex-col`,
    phones:`flex flex-col w-1/2 m-4 h-90`,
    car:`flex flex-col w-1/2 m-4 h-90`,
    head:`w-full h-full flex flex-row m-12 `,
    option:`flex flex-col`,
    name:`w-56 h-67 flex flex-col`,
    h2:`text-black font-normal`
}

const Assets=()=>{
    return(
        <div className={style.head}>
            <h2>Top Assets</h2>
        <div className={style.col}>
        <div className={style.carlist}>
            {carlist.map((car,index)=>(
                <div className={style.car}>
                    <Image src={car.image} width={60} height={65}/>
                    {car.name}
                    ${car.pricemultiplier}
                <button className={style.buy}>
                    Add to Cart
                </button>
                </div>
                
            ))}  
        </div>
        <div className={style.carlist}>
            {carlist.map((car,index)=>(
                <div className={style.car}>
                    <Image src={car.image} width={60} height={65}/>
                    {car.name}
                    ${car.pricemultiplier}
                <button className={style.buy}>
                    Add to Cart
                </button>
                </div>
                
            ))}  
        </div>
        <div className={style.carlist}>
            {carlist.map((car,index)=>(
                <div className={style.car}>
                    <Image src={car.image} width={60} height={65}/>
                    {car.name}
                    ${car.pricemultiplier}
                <button className={style.buy}>
                    Add to Cart
                </button>
                </div>
                
            ))}  
        </div>
        <div className={style.carlist}>
            {carlist.map((car,index)=>(
                <div className={style.car}>
                    <Image src={car.image} width={60} height={65}/>
                    {car.name}
                    ${car.pricemultiplier}
                <button className={style.buy}>
                    Add to Cart
                </button>
                </div>
                
            ))}  
        </div>
        <div className={style.phone}>
            {phone.map((phones,index)=>(
                <div className={style.phones}>
                    <Image src={phones.image} width={60} height={65}/>
                    {phones.name}
                    ${phones.pricemultiplier}
                <Link href="/Cart">    
                <div className={style.buy}>
                    Add to Cart
                </div>
                </Link>
                </div>
                
            ))}  
        </div>
        </div>
        </div>
    )
}
export default Assets;
