import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as ThumbsUpIcon } from '../../assets/like.svg';
import OzonLogo from '../../assets/ozon-logo.png';
import { ReactComponent as ResearchIcon } from '../../assets/research.svg';
import Avatar from '../../assets/skills-user.png';
import TinkoffLogo from '../../assets/tinkoff-logo.png';
import YandexLogo from '../../assets/yandex-logo.png';
import H1 from '../../typography/Headers/H1';
import UserCard from '../UserCard/UserCard';

import { ReactComponent as IconBad } from "../../assets/icon-bad.svg";
import { ReactComponent as IconGood } from "../../assets/icon-good.svg";
import { ReactComponent as IconNormal } from "../../assets/icon-normal.svg";

interface SkillsSectionProps {
    title: string;
    rateIcon: any
}

const cards = [
    {
        title: "Метрики",
        description: "Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        rate: 0,
        users: [
            {
                name: "Виктория",
                position: "Product дизайнер в Yandex",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: YandexLogo,
                rate: 7.5
            },
            {
                name: "Виктория",
                position: "Product дизайнер в Tinkoff",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: TinkoffLogo,
                rate: 7.5
            },
            {
                name: "Виктория",
                position: "Product дизайнер в Ozon",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: OzonLogo,
                rate: 7.5
            }
        ],
    },

    {
        title: "Аналитика",
        description: "Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        rate: 0,
        users: [
            {
                name: "Виктория",
                position: "Product дизайнер в Yandex",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: YandexLogo,
                rate: 7.5
            },
            {
                name: "Виктория",
                position: "Product дизайнер в Tinkoff",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: TinkoffLogo,
                rate: 7.5
            }
        ],
    },

    {
        title: "Бизнесс",
        description: "Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        rate: 0,
        users: [
            {
                name: "Виктория",
                position: "Product дизайнер в Yandex",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: YandexLogo,
                rate: 7.5
            },
            {
                name: "Виктория",
                position: "Product дизайнер в Tinkoff",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: TinkoffLogo,
                rate: 7.5
            }
        ],
    },

    {
        title: "Исследования",
        description: "Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        rate: 0,
        icon: ResearchIcon,
        users: [
            {
                name: "Виктория",
                position: "Product дизайнер в Yandex",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: YandexLogo,
                rate: 7.5
            },
            {
                name: "Виктория",
                position: "Product дизайнер в Tinkoff",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: TinkoffLogo,
                rate: 5.5
            },
            {
                name: "Виктория",
                position: "Product дизайнер в Ozon",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: OzonLogo,
                rate: 2.5
            },
        ],
    },
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, rateIcon }) => {
    const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const onClick = () => {
        if (isMobile) {
            setExpandedCardIndex(null);
        }
    };

    const handleCardClick = (index: number) => {
        setExpandedCardIndex(index === expandedCardIndex ? null : index);
        // if (isMobile) {
        // }
    };

    // const handleCardHover = (index: number) => {
    //     if (!isMobile) {
    //         setExpandedCardIndex(index);
    //     }
    // };

    // const handleCardLeave = () => {
    //     if (!isMobile) {
    //         setExpandedCardIndex(null);
    //     }
    // };

    return (
        <article className="mt-6 pb-[50px]">
            <div className="flex px-2 mb-[40px] max-md:flex-col">
                <div className='w-[105px] h-[105px] mr-[30px] max-md:w-[70px] max-md:h-[70px] max-md:mr-[0px] max-md:mb-3'>
                    {/* <ThumbsUpIcon className="w-full h-full" /> */}
                    {rateIcon}
                </div>
                <div className='w-[100%]'>
                    <h2 className="text-[#000] text-[30px] font-[700] leading-[100%] -tracking-[1.25]">{title}</h2>
                    <p className="mt-2 text-[#000] text-[20px] font-[400] leading-[105%] max-w-[435px]">Навык «Продукт» отскорен 7 специалистами на средний балл 7,5 из 10, что соответствует ожиданию рынка</p>
                </div>
            </div>

            <hr className="my-4 mb-[40px]" />

            {cards.map((card, index) => (
                <div
                    key={index}
                    className="p-[11px] flex flex-col md:flex-row items-start mb-12 last:mb-0 hover:bg-[#F6F6F6] hover:cursor-pointer rounded-[16px] active:bg-[#F1F1F1]"
                    onClick={() => handleCardClick(index)}
                // onClick={() => handleCardClick(index)}
                // onMouseEnter={() => handleCardHover(index)}
                // onMouseLeave={handleCardLeave}
                >
                    <div className="flex w-full md:w-1/3 text-left items-center mb-4 md:mb-0">
                        {/* <ThumbsUpIcon className="w-[27px] h-[27px] mr-1" /> */}
                        {index === 0 && (
                            <IconGood className="w-[27px] h-[27px] mr-1" />
                        )}
                        {index === 1 && (
                            <IconGood className="w-[27px] h-[27px] mr-1" />
                        )}
                        {index === 2 && (
                            <IconNormal className="w-[27px] h-[27px] mr-1" />
                        )}
                        {index === 3 && (
                            <IconBad className="w-[27px] h-[27px] mr-1" />
                        )}
                        <h4 className="text-[#1E1E1E] text-[20px] font-[500] leading-[115%]">{card.title}</h4>
                    </div>

                    <div className="w-full md:w-2/3">
                        <p className="text-[16px] text-[#1E1E1E] font-[400] leading-[115%] max-w-[395px]">{card.description}</p>
                        <div className='flex flex-wrap gap-4 mt-4'>
                            {card.users.map((user, userIndex) => (
                                <UserCard key={userIndex} user={user} isModal={false} />
                            ))}
                        </div>
                        {expandedCardIndex === index && (
                            <>
                                <div
                                    className="max-md:hidden expanded-card absolute left-[50%] -translate-x-[50%] translate-y-[10%] w-[60%] bg-white card-shadows rounded-[36px] z-10"
                                    style={{
                                        top: `${expandedCardIndex * 8}rem)`
                                    }}
                                >

                                    <div>
                                        {cards[expandedCardIndex].users.map((user, userIndex) => (
                                            <div key={userIndex} className={`grid grid-cols-3 items-center mx-[30px] py-[20px] ${userIndex !== 0 && 'border-t'}`}>
                                                <UserCard key={userIndex} user={user} isModal={true} />
                                                <div className='flex'>
                                                    {user.rate >= 7.5 && (
                                                        <IconGood className='mr-[6px] w-[27px] h-[27px] drop-shadow-icon' />
                                                    )}
                                                    {(user.rate > 5 && user.rate < 7.4) && (
                                                        <IconNormal className='mr-[6px] w-[27px] h-[27px] drop-shadow-icon' />
                                                    )}
                                                    {user.rate <= 5 && (
                                                        <IconBad className='mr-[6px] w-[27px] h-[27px] drop-shadow-icon' />
                                                    )}
                                                    {/* <ThumbsUpIcon className='mr-[6px] w-[27px] h-[27px] drop-shadow-icon' /> */}
                                                    <p className='text-[#4FCC9B] text-[25px] font-[500] leading-[105%]'>{user.rate}/10</p>
                                                </div>
                                                <div>
                                                    <p className='text-[#1E1E1E] text-[13px] font-[400] leading-[115%]'>Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className='bg-[#44C894] rounded-b-[36px] grid grid-cols-3 items-center px-[30px] py-[15px]'>
                                        <h2 className='text-[#fff] text-[21.5px] font-[400] leading-[115%]'>Средняя оценка</h2>
                                        <h1 className='text-[#fff] text-[39.5px] font-[400] leading-[105%]'>7,5/10</h1>
                                        <p className='text-[#fff] text-[13px] font-[400] leading-[115%]'>Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе </p>
                                    </div>
                                </div>

                                <div className="md:hidden expanded-card fixed flex flex-col justify-between bottom-0 left-0 w-full h-full bg-white drop-shadow-2xl z-30 overflow-y-auto"
                                    style={{
                                        top: `${expandedCardIndex * 8}rem)`
                                    }}>
                                    <div>
                                        <div className='px-5 py-5'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <ThumbsUpIcon className='mr-[6px] w-[27px] h-[27px] drop-shadow-icon' />
                                                    <H1 title={card.title} />
                                                </div>
                                                <div className="bg-gray-500/50 rounded-full p-1">
                                                    <Close className="fill-white hover:cursor-pointer" onClick={onClick} />
                                                </div>
                                            </div>

                                            <div className='mt-[10px]'>
                                                <p className='text-[#000] text-[20px] font-[400] leading-[105%]'>Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе </p>
                                            </div>
                                        </div>

                                        <div className='px-5 mt-[30px]'>
                                            <h1 className='text-[24px] text-[#000] font-[700] leading-[105%] -tracking-[-0.5px]'>Оценки от специалистов</h1>
                                            {cards[expandedCardIndex].users.map((user, userIndex) => (
                                                <div key={userIndex} className={`grid grid-cols-1 items-center py-5 space-y-[14px] ${userIndex !== 0 && 'border-t'}`}>
                                                    <div className='flex justify-between items-center'>
                                                        <UserCard key={userIndex} user={user} isModal={true} />
                                                        <div className='flex'>
                                                            {/* <ThumbsUpIcon className='mr-[6px] w-[27px] h-[27px] drop-shadow-icon' /> */}
                                                            {user.rate >= 7.5 && (
                                                                <IconGood className='mr-[6px] w-[27px] h-[27px] drop-shadow-icon' />
                                                            )}
                                                            {(user.rate > 5 && user.rate < 7.4) && (
                                                                <IconNormal className='mr-[6px] w-[27px] h-[27px] drop-shadow-icon' />
                                                            )}
                                                            {user.rate <= 5 && (
                                                                <IconBad className='mr-[6px] w-[27px] h-[27px] drop-shadow-icon' />
                                                            )}
                                                            <p className='text-[#4FCC9B] text-[25px] font-[500] leading-[105%]'>{user.rate}/10</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        {/* text-[13px] */}
                                                        <p className='text-[#1E1E1E] text-[16px] font-[400] leading-[115%]'>Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='bg-[#44C894] grid grid-cols-1 items-center px-[30px] py-[15px] space-y-[14px]'>
                                        <h2 className='text-[#fff] text-[21.5px] font-[400] leading-[115%]'>Средняя оценка</h2>
                                        <h1 className='text-[#fff] text-[39.5px] font-[400] leading-[105%]'>7,5/10</h1>
                                        <p className='text-[#fff] text-[13px] font-[400] leading-[115%]'>Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </article>
    );
};

export default SkillsSection;