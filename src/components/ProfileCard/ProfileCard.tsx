import React from 'react';
import ReactPlayer from 'react-player/youtube';
// import avatar from '../../assets/animated-avatar.gif';
import { useAppSelector } from '../../utils/hooks';
const ProfileCard: React.FC = () => {
    const tags = ["19 лет", "Москва", "", "Опыт 5 лет", "Выход 2 недели"];
    const user = useAppSelector((store) => store.user)
    return (
        <section className="flex flex-col items-center max-md:items-start max-md:justify-center text-black">
            <div
                className='relative max-w-[235px] m-auto rounded-full'
                style={{ width: '235px', height: '235px' }}
            >
                {/* <img
                    className="rounded-full"
                    // src={user.stat.photo_url}
                    src={avatar}
                    style={{ width: '100%', height: '100%' }}
                /> */}
                {/* <video controls width="100%">
                    <source src={'blob:https://www.youtube.com/a2d95d45-aa6b-402e-b2a1-46e2931cc5a0'} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video> */}
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=PeL8fnHTyZI'
                    playing={true}
                    loop={true}
                    muted={true}
                    width='100%'
                    height='100%'
                    className='max-w-[235px] max-h-[235px] absolute top-0 left-0 rounded-full overflow-hidden z-[-10]'
                />
            </div>

            <div className="text-center max-md:text-left mt-4">
                <h1 className="text-[38px] font-[700] leading-[100%] -tracking-[1.5px] text-center">
                    {user.stat.name}
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
