import { ReactComponent as Region } from "../../assets/region.svg";
import Spider from '../../assets/spider.png';
import H1 from "../../ui/Headers/H1";
import { MenuItem } from "../../utils/types";
import Navbar from "../Navbar/Navbar";
import SkillsSection from "../SkillsSection/SkillsSection";
const Scoring: React.FC = () => {
    const menuItems: MenuItem[] = [
        { name: 'Продукт' },
        { name: 'Инструменты' },
        { name: 'UI' },
        { name: 'UX' },
        { name: 'Пил-менеджмент' },
        { name: 'Проактивность' },
        { name: 'Автономность' },
        { name: 'Коммуникация' },
    ];

    const renderContent = (selectedItem: string): JSX.Element => {
        switch (selectedItem) {
            case 'Продукт':
                return <SkillsSection title={'Продуктовые навыки'} />;
            case 'Инструменты':
                return <SkillsSection title={'Инструментовые навыки'} />;
            default:
                return <SkillsSection title={'Другие навыки'} />;
        }
    };

    return (
        <section className="mx-auto max-w-[700px] px-[20px] py-[20px] bg-white rounded-[20px] mt-4">
            <H1 title={'Скоринг'} />
            <div className="flex items-center">
                <Region className="mr-2" />
                <div>
                    <p className="text-black font-[12px] font-[400] leading-[115%]">Средний Middle product designer на рынке</p>
                    <p className="text-black/20 font-[12px] font-[400] leading-[115%] mt-[2px]">Обновили 23.12.2023</p>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <img src={Spider} alt="" />
            </div>

            <div>
                <Navbar menuItems={menuItems} renderContent={renderContent} />
            </div>
        </section>
    );
};

export default Scoring;