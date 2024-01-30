import React from 'react';
import UserImage from '../../assets/user-image.jpeg';
import mock from '../../utils/mock.json';
const ProfileCard: React.FC = () => {
    const tags = ["19 лет", "Москва", "", "Опыт 5 лет", "Выход: 2 недели"];

    return (
        <section className="flex flex-col items-center max-md:items-start max-md:justify-center text-black">
            <picture
                className='max-w-[235px] m-auto'
                style={{ width: '100%', height: '100%' }}
            >
                <img
                    className="rounded-full"
                    src={UserImage}
                    // src={mock.photo_url}
                    alt={mock.name}
                    style={{ width: '100%', height: '100%' }}
                />
            </picture>

            <div className="text-center max-md:text-left mt-4">
                <h1 className="text-[38px] font-[700] leading-[100%] -tracking-[1.5px] text-center">
                    {/* {mock.name} */}
                    Александр Гаврилов
                </h1>
                <div className="mt-4 flex flex-wrap gap-[6px] justify-center">
                    {tags.map((tag, index) => (
                        tag && <span key={index} className="bg-white px-[20px] py-[12px] rounded-full text-[14.8px] text-[#000000] font-[500] leading-[105%]">{tag}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
