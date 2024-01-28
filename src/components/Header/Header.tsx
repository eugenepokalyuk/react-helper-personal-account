import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Share } from '../../assets/share.svg';
const Header: React.FC = () => {
  const shareURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
  };

  return (
    <header className="fixed top-[12px] px-[20px] flex justify-between w-full z-20">
      <div className="flex items-center">
        <Logo className='hover:cursor-pointer' />
      </div>

      <div className="flex justify-center items-center bg-gray-200 w-[50px] h-[50px] rounded-xl hover:bg-gray-300 hover:cursor-pointer" onClick={shareURL}>
        <Share />
      </div>
    </header>
  );
};
export default Header;