import { useEffect, useRef, useState } from 'react';
import { setSelectedSkill } from '../../services/actions/skills';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import './Navbar.css';

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const [isUserAction, setIsUserAction] = useState(false);

    const { skills, selectedSkill } = useAppSelector((store) => store.skills);

    useEffect(() => {
        if (!selectedSkill && skills.length > 0) {
            dispatch(setSelectedSkill(skills[0].name));
        }
    }, [dispatch, selectedSkill, skills]);

    useEffect(() => {
        if (isUserAction && selectedSkill && navRef.current) {
            const index = skills.findIndex((skill: any) => skill.name === selectedSkill);
            const selectedElement = navRef.current.children[index] as HTMLElement;
            if (selectedElement) {
                selectedElement.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });
            }
        }
    }, [selectedSkill, skills, isUserAction]);

    const handleSkillSelect = (skillName: string) => {
        setIsUserAction(true);
        dispatch(setSelectedSkill(skillName));
    };

    return (
        <nav>
            <div className="navbar-container mt-6">
                <div ref={navRef} className="menu-items">
                    {skills.map((skill: any, index: number) => (
                        <button
                            key={index}
                            className={`menu-item ${selectedSkill === skill.name ? 'selected bg-[#F2F4F9] rounded-full' : ''} text-[20px] font-[500] leading-[105%] px-[22px] py-[15px] max-md:p-[10px] max-md:text-[22px] text-nowrap cursor-pointer`}
                            onClick={() => handleSkillSelect(skill.name)}
                        >
                            {skill.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;