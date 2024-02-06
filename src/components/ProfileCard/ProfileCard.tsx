import React, { useState } from 'react';
import userEgorImage from '../../assets/user-egor.webp';
import { useAppSelector } from '../../utils/hooks';
const ProfileCard: React.FC = () => {
    const tags = ["19 лет", "Москва", "Опыт 5 лет", "Выход 2 недели"];
    const user = useAppSelector((store) => store.user);
    const videoUrl = 'https://504818.selcdn.ru/MAX%20Helper%20Testimonials/Anya.mp4';
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section className="flex flex-col items-center max-md:justify-center text-black">
            <div className="video-container" style={{ width: '235px', height: '235px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                {!videoLoaded && (
                    <img
                        className="rounded-full"
                        // src={user.stat.photo_url}
                        src={userEgorImage}
                        alt="Placeholder"
                        style={{ width: '100%', height: '100%' }}
                    />
                )}
                {/* <video
                    autoPlay
                    loop
                    muted
                    style={{
                        display: videoLoaded ? 'block' : 'none',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%'
                    }}
                    onLoadedData={() => setVideoLoaded(true)}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
            </div>


            <div className="text-center max-md:text-left mt-4">
                <h1 className="text-[38px] font-[700] leading-[100%] -tracking-[1.5px] text-center">
                    {/* {user.stat.name} */}
                    Егор Патрикеев
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
