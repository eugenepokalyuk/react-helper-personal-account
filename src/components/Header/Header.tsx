import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Share } from '../../assets/share.svg';

const Header = () => {
  const [showShareHover, setShowShareHover] = useState(false);
  const [showShareClick, setShowShareClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shareURL = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareClick(true);
    setTimeout(() => setShowShareClick(false), 2000);
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

        {showShareHover && !showShareClick && windowWidth > 768 && (
          <div className="absolute top-[60px] left-[100%] transform -translate-x-[100%] px-[14px] py-[12px] bg-black rounded-[12px]">
            <p className='text-[16px] text-[#fff] font-[400] leading-[105%] text-nowrap'>Поделиться</p>
          </div>
        )}

        {showShareClick && (
          <div className="absolute top-[60px] left-[100%] transform -translate-x-[100%] px-[14px] py-[12px] bg-black rounded-[12px]">
            <p className='text-[16px] text-[#fff] font-[400] leading-[105%] text-nowrap'>Ссылка скопирована</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
