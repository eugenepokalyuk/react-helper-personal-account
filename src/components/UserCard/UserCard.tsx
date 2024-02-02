import React from 'react';
import Avatar from '../../assets/skills-user.png';

import { ReactComponent as IconBad } from "../../assets/icon-bad.svg";
import { ReactComponent as IconGood } from "../../assets/icon-good.svg";
import { ReactComponent as IconNormal } from "../../assets/icon-normal.svg";

interface User {
    name: string;
    position: string;
    avatarUrl: string;
    topLeftIcon: boolean;
    bottomRightIcon: string;
    rate: number
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
                    {!isModal && user.rate >= 7.5 ? (
                        <IconGood className='w-[18px] h-[18px] absolute -left-1.5 -top-1.5' />
                    ) : !isModal && (user.rate > 5 && user.rate < 7.4) ? (
                        <IconNormal className='w-[18px] h-[18px] absolute -left-1.5 -top-1.5' />
                    ) : !isModal && user.rate <= 5 && (
                        <IconBad className='w-[18px] h-[18px] absolute -left-1.5 -top-1.5' />
                    )}

                    {/* {!isModal && (user.topLeftIcon == true
                        ? <ThumbsUpIcon className='w-[34px] h-[34px] absolute -left-3 -top-3' />
                        : <ThumbsDownIcon className='w-[34px] h-[34px] absolute -left-3 -top-3' />
                    )} */}
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