// import React from 'react';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
// import { ReactComponent as Share } from '../../assets/share.svg';
// const Header: React.FC = () => {
//   const shareURL = () => {
//     const currentURL = window.location.href;
//     navigator.clipboard.writeText(currentURL);
//   };

//   return (
//     <header className="fixed top-[12px] px-[20px] flex justify-between w-full z-20">
//       <div className="flex items-center">
//         <Logo className='hover:cursor-pointer' />
//       </div>

//       <div
//         className="flex justify-center items-center bg-gray-200 w-[50px] h-[50px] rounded-xl hover:bg-gray-300 hover:cursor-pointer"
//         onClick={shareURL}
//       >
//         <Share />
//       </div>
//     </header>
//   );
// };
// export default Header;
import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Share } from '../../assets/share.svg';

const Header = () => {
  const [showShareHover, setShowShareHover] = useState(false);
  const [showShareClick, setShowShareClick] = useState(false);

  const shareURL = () => {
    // Logic to copy URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    setShowShareClick(true);
    setTimeout(() => setShowShareClick(false), 2000); // Hide after 2 seconds
  };

  return (
    <header className="fixed top-[12px] px-[20px] flex justify-between w-full z-20">
      <div className="flex items-center">
        <Logo className='hover:cursor-pointer' />
      </div>

      <div className="relative flex justify-center items-center bg-gray-200 w-[50px] h-[50px] rounded-xl hover:bg-gray-300 hover:cursor-pointer"
        onMouseEnter={() => setShowShareHover(true)}
        onMouseLeave={() => setShowShareHover(false)}
        onClick={shareURL}
      >
        <Share />

        {showShareHover && !showShareClick && (
          <div className="absolute text-nowrap top-[60px] left-[100%] transform -translate-x-[100%] px-[14px] py-[12px] bg-black text-white rounded-[12px] text-sm">
            <p className='text-[16px] text-[#fff] font-[400] leading-[105%]'>Поделиться</p>
          </div>
        )}

        {showShareClick && (
          <div className="absolute text-nowrap top-[60px] left-[100%] transform -translate-x-[100%] px-[14px] py-[12px] bg-black text-white rounded-[12px] text-sm">
            <p className='text-[16px] text-[#fff] font-[400] leading-[105%]'>Ссылка скопирована</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
