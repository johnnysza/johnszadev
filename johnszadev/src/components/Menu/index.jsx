import React from 'react' 
import { useState } from 'react'
import Logo from '../../assets/JS_Logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Menu = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-black to-gray-800 text-gray-300'>
        <div>
            <img src={Logo} alt="Logo IMG" style={{width:'100px'}}/>
        </div>

        {/* Menu */}
        
            <ul className='hidden md:flex'>
                <li>
                <Link to="home"  smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li>
                <Link to="about"  smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li>
                <Link to="skills"  smooth={true} duration={500}>
                    Skills
                </Link>
                </li>
                <li>
                <Link to="work"  smooth={true} duration={500}>
                    Work
                </Link>
                </li>
                <li>
                <Link to="contact"  smooth={true} duration={500}>
                    Contact
                </Link>
                </li>
            </ul>
        
        {/* Hamburguer */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black to-gray-800 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true} duration={500}>
                    Home
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true} duration={500}>
                    About
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills"  smooth={true} duration={500}>
                    Skills
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true} duration={500}>
                    Work
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact"  smooth={true} duration={500}>
                    Contact
                </Link></li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 py-2 '>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/jonathan-da-silva-souza-a97525182/" target={'_blank'} rel='noreferrer'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 py-2'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/johnnysza" target={'_blank'} rel='noreferrer'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Menu