import React from 'react';
import mock from '../../utils/mock.json';

const ProfileCard: React.FC = () => {
    const tags = ["19 лет", "Москва", "", "Опыт 5 лет", "Выход: 2 недели"];

    return (
        <section className="flex flex-col items-center max-md:items-start max-md:justify-center py-2 text-black">
            <picture
                className='max-w-[235px] m-auto'
                style={{ width: '100%', height: '100%' }}
            >
                <img
                    className="rounded-full"
                    src={mock.photo_url}
                    alt={mock.name}
                    style={{ width: '100%', height: '100%' }}
                />
            </picture>
            <div className="text-center max-md:text-left">
                <h1 className="mt-4 md:mt-0 font-hauss text-[38px] font-bold leading-tight tracking-tight" style={{ letterSpacing: '-1.5px' }}>
                    {mock.name}
                </h1>
                <div className="mt-4 flex flex-wrap gap-[6px] justify-center max-md:justify-start">
                    {tags.map((tag, index) => (
                        tag && <span key={index} className="bg-white font-hauss px-[15px] py-[12px] rounded-full text-sm text-black font-medium">{tag}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
