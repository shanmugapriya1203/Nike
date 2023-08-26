import Button from "../components/Button"
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {

  return (
 <section id="about-us" className="flex justify-between items-center mzx-lg:flex-col gap-10 w-full max-container">
  <div className='flex flex-1 flex-col'>
      

        <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          
          We Provide You
         <span className="text-coral-red">Super Quality</span>
         Shoes
          <br />
           </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
<div className="mt-11"><Button label='Shop now' iconURL={arrowRight} /></div>
        
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"></img>
        </div>
 </section>
  )
}

export default SuperQuality
