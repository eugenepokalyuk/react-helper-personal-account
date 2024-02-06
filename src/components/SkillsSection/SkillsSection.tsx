import React, { useState } from 'react';
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as IconAccord } from "../../assets/icon-accordion.svg";
import { ReactComponent as IconBad } from "../../assets/icon-bad.svg";
import { ReactComponent as IconGood } from "../../assets/icon-good.svg";
import { ReactComponent as IconNormal } from "../../assets/icon-normal.svg";


import H1 from '../../typography/Headers/H1';
import { useAppSelector } from '../../utils/hooks';
import UserCard from '../UserCard/UserCard';
type Review = {
    name: string;
    position: string;
    avatarUrl: string;
    companyLogo: string;
    rate: number;
}

interface Skill {
    name: string;
    reviews: Review[];
}

interface Category {
    name: string;
    subtitle: string;
    skills: Skill[];
}

const calculateAverageRate = (reviews: Review[]): number => {
    const totalRate = reviews.reduce((acc, { rate }) => acc + rate, 0);
    return reviews.length > 0 ? parseFloat((totalRate / reviews.length).toFixed(1)) : 0;
};

const calculateReviewsAverageRate = (reviews: any[]) => {
    const totalRate = reviews.reduce((acc, review) => acc + review.rate, 0);
    return reviews.length > 0 ? parseFloat((totalRate / reviews.length).toFixed(1)) : 0;
};

const calculateAverageRateForCategory = (category: Category): number => {
    const totalRate = category.skills.reduce((acc, skill) => acc + calculateAverageRate(skill.reviews), 0);
    return category.skills.length > 0 ? parseFloat((totalRate / category.skills.length).toFixed(1)) : 0;
};

const SkillsSection: React.FC = () => {
    const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
    const { skills, selectedSkill } = useAppSelector((store) => store.skills);

    const handleCardClick = (index: number) => {
        setExpandedCardIndex(index === expandedCardIndex ? null : index);
    };

    const selectIconByAverageRateFull = (averageRate: number): JSX.Element => {
        const iconClass = `w-full h-full mr-1`;
        if (averageRate >= 7) return <IconGood className={iconClass} />;
        if (averageRate > 5 && averageRate < 7) return <IconNormal className={iconClass} />;
        return <IconBad className={iconClass} />;
    };

    const getBackgroundColor = (averageRate: number) => {
        if (averageRate >= 7) return "#44C894";
        if (averageRate > 5 && averageRate < 7) return "#FFB84B";
        return "#E94230";
    };

    const selectedCategory = skills.find((category: Category) => category.name === selectedSkill);
    const averageRateForSelectedCategory = selectedCategory ? calculateAverageRateForCategory(selectedCategory) : 0;
    return (
        <article className="mt-6 pb-[50px]">
            <div className="flex px-2 mb-[40px] max-md:flex-col">
                <div className='w-[103px] h-[103px] mr-[30px] max-md:w-[70px] max-md:h-[70px] max-md:mr-[0px] max-md:mb-3'>
                    {selectIconByAverageRateFull(averageRateForSelectedCategory)}
                </div>
                <div className='w-[100%]'>
                    <h2 className="text-[#000] text-[30px] font-[700] leading-[100%] -tracking-[1.25]">{selectedCategory.name}</h2>
                    <p className="mt-2 text-[#000] text-[20px] font-[400] leading-[105%] max-w-[435px]">
                        Навык «{selectedCategory.name}» отскорен {averageRateForSelectedCategory.toFixed(0)} специалистами на средний балл {averageRateForSelectedCategory} из 10, что соответствует ожиданию рынка</p>
                </div>
            </div>

            <hr className="my-4 mb-[40px]" />

            {selectedCategory.skills.map((skill: any, index: number) => {
                const reviewsAverageRate = calculateReviewsAverageRate(skill.reviews);
                const bgColor = getBackgroundColor(reviewsAverageRate); // Get the background color
                return (
                    <div
                        key={index}
                        className="relative py-4 px-5 flex flex-col md:flex-row items-start mb-[1rem] last:mb-0 hover:bg-[#F6F6F6] hover:cursor-pointer rounded-[16px] active:bg-[#F1F1F1]"
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="flex w-full md:w-1/3 text-left items-center mb-4 md:mb-0 justify-between">
                            <div className='flex items-center'>
                                <div className='w-[27px] h-[27px] max-md:w-[33px] max-md:h-[33px] mr-1'>
                                    {selectIconByAverageRateFull(reviewsAverageRate)}
                                </div>
                                <h4 className="text-[#1E1E1E] text-[20px] font-[500] leading-[115%]">{skill.name}</h4>
                            </div>

                            <div className='md:hidden'>
                                <IconAccord className='fill-[#1E1E1E]/30' />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 relative">
                            <p className="text-[16px] text-[#1E1E1E] font-[400] leading-[115%] max-w-[395px]">Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе</p>

                            <div className='flex flex-wrap gap-4 mt-3'>
                                {skill.reviews.map((user: any, userIndex: number) => (
                                    <UserCard key={userIndex} user={user} isModal={false} />
                                ))}
                            </div>
                        </div>
                        {expandedCardIndex == index && (
                            <>
                                <div className="max-md:hidden expanded-card absolute top-[29%] left-[50%] -translate-x-[50%] translate-y-[29%] w-[135%] bg-white card-shadows rounded-[36px] z-10">
                                    <div>
                                        {selectedCategory.skills[expandedCardIndex].reviews.map((review: Review, userIndex: number) => {
                                            const textColor = getBackgroundColor(review.rate); // Get the background color
                                            return (
                                                <div key={userIndex} className={`grid grid-cols-3 items-center mx-[30px] py-[20px] ${userIndex !== 0 && 'border-t'}`}>
                                                    <UserCard key={userIndex} user={review} isModal={true} />
                                                    <div className='flex'>
                                                        <div className='w-[27px] h-[27px] max-md:w-[33px] max-md:h-[33px] mr-1'>
                                                            {selectIconByAverageRateFull(review.rate)}
                                                        </div>
                                                        <p
                                                            className='text-[#4FCC9B] text-[25px] font-[500] leading-[105%]'
                                                            style={{
                                                                color: textColor
                                                            }}
                                                        >{review.rate}/10</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-[#1E1E1E] text-[13px] font-[400] leading-[115%]'>Здесь мы объяняем насколько учитывает это при работе. Знает что его решения влияют на некоторые метрики, учитывает это при работе.</p>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        )}
                                    </div>
                                    <div
                                        className={`bg-[#44C894] rounded-b-[36px] grid grid-cols-3 items-center px-[30px] py-[15px]`}
                                        style={{
                                            background: bgColor
                                        }}
                                    >
                                        <h2 className='text-[#fff] text-[21.5px] font-[400] leading-[115%]'>Средняя оценка</h2>
                                        <h1 className='text-[#fff] text-[39.5px] font-[400] leading-[105%]'>{calculateAverageRate(selectedCategory.skills[expandedCardIndex].reviews)}/10</h1>
                                        <p className='text-[#fff] text-[13px] font-[400] leading-[115%]'>Здесь мы объяняем насколько учитывает это при работе. Знает что его решения влияют на некоторые метрики, учитывает это при работе.</p>
                                    </div>
                                </div>

                                <div className="md:hidden expanded-card fixed inset-0 bg-white drop-shadow-2xl z-30 overflow-y-auto">
                                    <div className='px-5 py-5'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center'>
                                                <div className='w-[27px] h-[27px] max-md:w-[33px] max-md:h-[33px] mr-1'>
                                                    {selectIconByAverageRateFull(calculateAverageRate(selectedCategory.skills[expandedCardIndex].reviews))}
                                                </div>
                                                <H1 title={selectedCategory.skills[expandedCardIndex].name} />
                                            </div>
                                            <div className="bg-gray-500/50 rounded-full p-1">
                                                <Close className="fill-white hover:cursor-pointer" onClick={() => setExpandedCardIndex(null)} />
                                            </div>
                                        </div>

                                        <div className='mt-[10px]'>
                                            <p className='text-[#000] text-[20px] font-[400] leading-[105%]'>Здесь мы объяняем насколько учитывает это при работе. Знает что его решения влияют на некоторые метрики, учитывает это при работе.</p>
                                        </div>
                                    </div>

                                    <div className='px-5 mt-[30px]'>
                                        <h1 className='text-[24px] text-[#000] font-[700] leading-[105%] -tracking-[-0.5px]'>Оценки от специалистов</h1>
                                        {selectedCategory.skills[expandedCardIndex].reviews.map((review: Review, userIndex: number) => {
                                            const textColor = getBackgroundColor(review.rate); // Get the background color
                                            return (
                                                <div key={userIndex} className={`grid grid-cols-1 items-center py-5 space-y-[14px] ${userIndex !== 0 && 'border-t'}`}>
                                                    <div className='flex justify-between items-center'>
                                                        <UserCard key={userIndex} user={review} isModal={true} />
                                                        <div className='flex'>
                                                            <div className='w-[27px] h-[27px] max-md:w-[33px] max-md:h-[33px] mr-1'>
                                                                {selectIconByAverageRateFull(review.rate)}
                                                            </div>
                                                            <p
                                                                className='text-[#4FCC9B] text-[25px] font-[500] leading-[105%]'
                                                                style={{
                                                                    color: textColor
                                                                }}
                                                            >{review.rate}/10</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className='text-[#1E1E1E] text-[16px] font-[400] leading-[115%]'>Здесь мы объяняем насколько учитывает это при работе. Знает что его решения влияют на некоторые метрики, учитывает это при работе.</p>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        )}
                                    </div>

                                    <div
                                        className={`bg-[#44C894] grid grid-cols-1 items-center px-[30px] py-[15px] space-y-[14px]`}
                                        style={{
                                            background: bgColor
                                        }}
                                    >
                                        <h2 className='text-[#fff] text-[21.5px] font-[400] leading-[115%]'>Средняя оценка</h2>
                                        <h1 className='text-[#fff] text-[39.5px] font-[400] leading-[105%]'>{calculateAverageRate(selectedCategory.skills[expandedCardIndex].reviews)}/10</h1>
                                        <p className='text-[#fff] text-[13px] font-[400] leading-[115%]'>Здесь мы объяняем насколько учитывает это при работе. Знает что его решения влияют на некоторые метрики, учитывает это при работе.</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </article>
    );
};
export default SkillsSection;