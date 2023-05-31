import React from 'react';
// Icons
import { BiHome, BiUser, BiNotepad } from 'react-icons/bi';
import { BsFileCheck, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

//Link
import { Link } from 'react-scroll';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      <div className='w-full bg-black/20 h-[70px] back2xl 
      rounded-full max-w-[420px] mx-auto px-5 flex justify-between 
      items-center text-2xl
       text-white/100'>
        <Link 
          to="home"
          activeClass='active'
          smooth={true}
          offset={-200} 
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiHome />
        </Link>
        <Link 
          to="about" 
          activeClass='active'
          smooth={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiUser />
        </Link>
        <Link 
          to="skills" 
          activeClass='active'
          smooth={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiNotepad />
        </Link>
        <Link 
          to="certs"
          activeClass='active'
          smooth={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsFileCheck />
        </Link>
        <Link 
          to="projects"
          activeClass='active'
          smooth={true}  
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsBriefcase />
        </Link>
        <Link 
          to="contact"
          activeClass='active'
          smooth={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsChatSquareText />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
