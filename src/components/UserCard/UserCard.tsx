import React from 'react';
import Avatar from '../../assets/skills-user.png';
import { ReactComponent as ThumbsDownIcon } from '../../assets/thumbs-down-icon.svg'; // Path to your SVG
import { ReactComponent as ThumbsUpIcon } from '../../assets/thumbs-up-icon.svg'; // Path to your SVG

interface User {
    name: string;
    position: string;
    avatarUrl: string;
    topLeftIcon: boolean;
    bottomRightIcon: string;
}

interface UserCardProps {
    user: User;
    isModal: boolean
}

const UserCard: React.FC<UserCardProps> = ({ user, isModal }) => {
    return (
        <>
            <div className={`flex items-center`}>
                <div className="relative mr-2">
                    {!isModal && (user.topLeftIcon == true
                        ? <ThumbsUpIcon className='w-[34px] h-[34px] absolute -left-3 -top-3' />
                        : <ThumbsDownIcon className='w-[34px] h-[34px] absolute -left-3 -top-3' />
                    )}
                    <div className={`${isModal ? 'w-[58px] h-[58px]' : 'w-[32px] h-[32px]'}`}>
                        <img src={user.avatarUrl || Avatar} alt={user.name} className="rounded-full object-cover" />
                    </div>
                    <div>
                        <img src={user.bottomRightIcon} className={`${isModal ? 'w-[23px] h-[23px]' : 'w-[15px] h-[15px]'} text-red-500 absolute -bottom-1 -right-1 rounded-full`} />
                    </div>
                </div>
                <div>
                    <h2 className={`${isModal ? 'text-[17px] font-[500]' : 'text-[12px] font-[400]'} text-[#000] leading-[105%]`}>{user.name}</h2>
                    <p className={`${!isModal ? 'truncate max-w-[80px]' : ''} text-[12px] text-[#000]/45 font-[400] leading-[110%] mt-1`}>{user.position}</p>
                </div>
            </div>
        </>
    );
};

export default UserCard;