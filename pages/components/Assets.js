import Apple from '../components/Apple.jpeg'
import Image from 'next/image';
import Pan from '../components/Pan.jpeg'
import Ac from '../components/Ac.jpeg'

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

    }
]


const style={
    carlist:` flex flex-col`,
    car:`flex flex-col w-1/2 m-4 h-90`,
    head:`w-full h-full flex flex-row`,
    option:`flex flex-col`,
    name:`w-56 h-67 flex flex-col`,
    h2:`text-black font-normal`
}

const Assets=()=>{
    return(
        <div className={style.head}>
            <h2>Top Assets</h2>
        <div className={style.carlist}>
            {carlist.map((car,index)=>(
                <div className={style.car}>
                    <Image src={car.image} width={1000} height={1200}/>
                    {car.name}
                    ${car.pricemultiplier}
                </div>
                
            ))}  
        </div>
        </div>
    )
}
export default Assets;
