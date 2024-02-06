import React from 'react';

import { ReactComponent as IconBad } from "../../assets/icon-bad.svg";
import { ReactComponent as IconGood } from "../../assets/icon-good.svg";
import { ReactComponent as IconNormal } from "../../assets/icon-normal.svg";

interface UserCardProps {
    user: any;
    // user: User;
    isModal?: boolean
}
const UserCard: React.FC<UserCardProps> = ({ user, isModal }) => {
    const selectIconByAverageRate = (averageRate: number, size: number): JSX.Element => {
        if (averageRate >= 7) return <IconGood className={`w-[${size}px] h-[${size}px] absolute -left-1.5 -top-1.5`} />;
        if (averageRate > 5 && averageRate < 7) return <IconNormal className={`w-[${size}px] h-[${size}px] absolute -left-1.5 -top-1.5`} />;
        return <IconBad className={`w-[${size}px] h-[${size}px] absolute -left-1.5 -top-1.5`} />;
    };

    return (
        <>
            <div className="flex items-center">
                <div className="relative mr-2">
                    {!isModal && selectIconByAverageRate(user.rate, 18)}
                    <div className={`${isModal ? 'w-[58px] h-[58px]' : 'w-[32px] h-[32px]'}`}>
                        <img src={user.avatarUrl} alt={user.name} className="rounded-full object-cover" />
                    </div>
                    <div>
                        <img src={user.companyLogo} className={`${isModal ? 'w-[23px] h-[23px]' : 'w-[15px] h-[15px]'} text-red-500 absolute -bottom-1 -right-1 rounded-full`} />
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