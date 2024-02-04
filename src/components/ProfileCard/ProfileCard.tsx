import React from 'react';
import { useAppSelector } from '../../utils/hooks';
// const VideoPlayer = () => {
//     return (
//         <div className='player-wrapper' style={{ width: '235px', height: '235px', borderRadius: '50%', overflow: 'hidden' }}>
//         </div>
//     );
// };

const ProfileCard: React.FC = () => {
    const tags = ["19 лет", "Москва", "", "Опыт 5 лет", "Выход 2 недели"];
    const user = useAppSelector((store) => store.user)
    return (
        <section className="flex flex-col items-center max-md:items-start max-md:justify-center text-black">
            <div className='player-wrapper' style={{ width: '235px', height: '235px', borderRadius: '50%', overflow: 'hidden' }}>
                <img
                    className="rounded-full"
                    src={user.stat.photo_url}
                    // src={avatar}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            {/* <VideoPlayer /> */}

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
