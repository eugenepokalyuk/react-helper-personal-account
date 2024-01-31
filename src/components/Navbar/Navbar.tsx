import { FC, useEffect, useRef, useState } from 'react';
import { MenuItem } from '../../utils/types';
import './Navbar.css';

interface NavbarProps {
    menuItems: MenuItem[];
    renderContent: (selectedItem: string) => JSX.Element;
}

const Navbar: FC<NavbarProps> = ({ menuItems, renderContent }) => {
    const navRef = useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = useState<string>(menuItems[0].name);
    const prevSelectedItemRef = useRef<string>(menuItems[0].name);

    useEffect(() => {
        if (prevSelectedItemRef.current !== selectedItem && navRef.current) {
            const index = menuItems.findIndex(item => item.name === selectedItem);
            const selectedElement = navRef.current.children[index] as HTMLElement;

            if (selectedElement) {
                selectedElement.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });
            }
        }
        prevSelectedItemRef.current = selectedItem;
    }, [selectedItem, menuItems]);

    return (
        <>
            <div className="navbar-container">
                <div ref={navRef} className="menu-items">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            className={`menu-item text-[20px] font-[500] leading-[105%] px-[22px] py-[15px] max-md:p-[10px] max-md:text-[22px] text-nowrap ${item.name === selectedItem ? 'selected bg-[#F2F4F9] rounded-full' : ''}`}
                            onClick={() => setSelectedItem(item.name)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                {renderContent(selectedItem)}
            </div>
        </>
    );
};

export default Navbar;