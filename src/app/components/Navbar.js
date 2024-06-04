import logoImg from '../assets/logo.png'
import Image from "next/image"; 

const Navbar = () => {
   return(
    <div className='flex justify-between py-2 px-8'>
        <div className='flex gap-8 items-center font-inter'>
        <Image className='w-[120px] h-20' src={logoImg} alt='logo of dribble'/>
        <p>Find designers</p>
        <p>Inspiration</p>
        <p>Courses</p>
        <p>Jobs</p>
        <p>Go Pro</p>
        </div>
        <div className='flex gap-4 items-center'>
            <input className='border-black border-2 rounded-lg p-2' type="text" placeholder='Search'/>
            <button className='cursor-pointer'>Log in</button>
            <button className='bg-black text-white py-3 px-6 rounded-lg cursor-pointer' type='submit'>Sign up</button>
        </div>
    </div>
    
    
   )
}
export default Navbar;