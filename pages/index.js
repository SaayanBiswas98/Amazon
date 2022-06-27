import Sidebar from './components/Sidebar'
import Head from 'next/head'
import Image from 'next/image'


const Home=() => {
  return (
      <div className="w-full">
        <div className='w-90 z-2 sticky'>
          <Sidebar/>
        </div>      
      </div>
  )
}

export default Home


