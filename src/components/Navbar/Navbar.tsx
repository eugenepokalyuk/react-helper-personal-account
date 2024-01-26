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

    useEffect(() => {
        if (navRef.current) {
            const index = menuItems.findIndex(item => item.name === selectedItem);
            const selectedElement = navRef.current.children[index] as HTMLElement;

            if (selectedElement) {
                const leftPosition = selectedElement.offsetLeft + selectedElement.clientWidth / (1) - navRef.current.clientWidth / (1);
                navRef.current.scroll({ left: leftPosition, behavior: 'smooth' });
            }
        }
    }, [selectedItem, menuItems]);

    return (
        <>
            <div className="navbar-container">
                <div ref={navRef} className="menu-items">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            className={`menu-item px-[20px] py-[13px] text-nowrap ${item.name === selectedItem ? 'selected' : ''}`}
                            onClick={() => setSelectedItem(item.name)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="content-block">
                {renderContent(selectedItem)}
            </div>
        </>
    );
};

export default Navbar;