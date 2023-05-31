import React from 'react';
// Images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* LOGO */}
        <a>
          <img src={Logo} alt='' />
        </a>
      </div>
    </div>
  </header>
  );
};

export default Header;
