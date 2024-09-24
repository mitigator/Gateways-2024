import Hero from './Hero'
import Technical from './Technical'
import Theme from './Theme'
import NonTechnical from './NonTechnical'
import Navbar from './Navbar'
import UIUX from '../events/uiux'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <Theme/>
        <Technical/>
        <NonTechnical/> 
        
    </div>
  )
}

export default Home