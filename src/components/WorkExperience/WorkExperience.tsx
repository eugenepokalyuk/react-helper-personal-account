import React, { FC } from 'react';
import BWGLogo from '../../assets/companies/company-bwg.jpg';
import RosLogo from '../../assets/companies/company-rosbank.jpg';
import H1 from '../../typography/Headers/H1';
import { Experience } from '../../utils/types';
import WorkExperienceCard from '../WorkExperienceCard/WorkExperienceCard';

const experiences: Experience[] = [{
    period: "2022 — настоящее время",
    duration: "1 год 6 месяцев",
    grade: "Senior Product",
    job: "Designer в Росбанк",
    points: [
        "— Разработал много новых компонентов для дизайн-системы",
        "— Принял участие в редизайне интернет-банка",
        "— Снизил нагрузку на службу поддержки через дизайн",
        "— Повысил конверсию сервиса проверки контрагентов",
        "— Повысил конверсию и улучшил юзабилити раздела приёма платежей\" Знает что его решения влияют на некоторые метрики, учитывает это при работе"
    ],
    logo: RosLogo,
}, {
    period: "2020 — 2022",
    duration: "2 года 4 месяцев",
    grade: "Middle Product",
    job: "Designer в BWG",
    points: [
        "— Повысил конверсии платежной формы на 23%",
        "— Повысил конверсии из заявки в сделку с 65% до 70-75%",
        "— Лендинги моей разработки показали конверсию от 35 до 42%",
        "— Улучшил юзабилити сложных систем"
    ],
    logo: BWGLogo,
}];

const WorkExperience: FC<{
    setModalOpen: (isOpen: boolean) => void
}> = ({
    setModalOpen
}) => {
        return (
            <section className="mx-auto max-w-[700px] bg-white rounded-[30px] mt-4 p-[24px]">
                <div className='flex flex-col w-[185px]'>
                    <H1 title={'Опыт работы 4 года 5 мес'} />
                </div>
                {experiences.map((experience, index) => (
                    <React.Fragment key={index}>
                        <WorkExperienceCard
                            key={index}
                            experience={experience}
                            setModalOpen={setModalOpen}
                        />
                        {index + 1 !== experiences.length && (<hr />)}
                    </React.Fragment>
                ))}
            </section>
        );
    };

export default WorkExperience;