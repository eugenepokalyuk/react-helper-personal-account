import React from 'react';
import OzonLogo from '../../assets/ozon-logo.png';
import Screenshot from '../../assets/screenshot.png';
import TinkoffLogo from '../../assets/tinkoff-logo.png';
import VideoThumbnail from '../../assets/video-thumbnail.png';
import YandexLogo from '../../assets/yandex-logo.png';
import H1 from '../../ui/Headers/H1';
import { Experience } from '../../utils/types';
import WorkExperienceCard from '../WorkExperienceCard/WorkExperienceCard';

const experiences: Experience[] = [{
    period: "2020 — настоящее время",
    duration: "3 года 6 месяцев",
    grade: "Senior Product",
    job: "Designer в GoMining",
    points: [
        "— UX ревью приложения",
        "— Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        "— Знает что его решения влияют на некоторые метрики, учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе"
    ],
    logo: YandexLogo,
    videoThumbnail: VideoThumbnail,
    videoUrl: "https://godssupport.com/images/diploma/465157376_282389471_mogusam.MP4"
}, {
    period: "2018 — 2022",
    duration: "3 года 6 месяцев",
    grade: "Senior Product",
    job: "Designer в GoMining",
    points: [
        "— UX ревью приложения",
        "— Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        "— Знает что его решения влияют на некоторые метрики, учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе"
    ],
    logo: TinkoffLogo,
    imageUrl: Screenshot,
}, {
    period: "2018 — 2022",
    duration: "3 года 6 месяцев",
    grade: "Senior Product",
    job: "Designer в GoMining",
    points: [
        "— UX ревью приложения",
        "— Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        "— Знает что его решения влияют на некоторые метрики, учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе"
    ],
    logo: OzonLogo
}];

const WorkExperience: React.FC = () => {
    return (
        <section className="mx-auto max-w-[700px] bg-white rounded-[20px] mt-4 p-[20px]">
            <div className='flex flex-col w-[185px]'>
                <H1 title={'Опыт работы 4 года 5 мес'} />
            </div>
            {experiences.map((experience, index) => (
                <WorkExperienceCard key={index} experience={experience} />
            ))}
        </section>
    );
};

export default WorkExperience;