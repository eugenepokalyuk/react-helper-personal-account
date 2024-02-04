import { ReactComponent as Region } from "../../assets/region.svg";
import H1 from "../../typography/Headers/H1";
import Navbar from '../Navbar/Navbar';
import SkillsSection from '../SkillsSection/SkillsSection';
import UnityContainer from "../UnityContainer/UnityContainer";

const Scoring: React.FC = () => {
    return (
        <section className="mx-auto max-w-[700px] p-[24px] bg-white rounded-[30px] mt-3">
            <article>
                <H1 title={'Скоринг'} />
                <div className="flex items-center mt-4">
                    <div className='pr-1'>
                        <Region className="w-[22px] h-[22px]" />
                    </div>
                    <div>
                        <p className="text-black font-[12px] font-[400] leading-[115%]">Средний Middle product designer на рынке</p>
                        <p className="text-black/20 font-[12px] font-[400] leading-[115%] mt-[2px]">Обновили 23.12.2023</p>
                    </div>
                </div>
            </article>

            <UnityContainer />
            <Navbar />
            <SkillsSection />
        </section>
    );
};

export default Scoring;