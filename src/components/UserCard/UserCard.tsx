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
    users: User[];
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
    return (
        <>
            {users.map((user, index) => (
                <div key={index} className="flex items-center">
                    <div className="relative mr-2">
                        {user.topLeftIcon == true ? <ThumbsUpIcon className='w-[40px] h-[40px] absolute -left-3 -top-3' /> : <ThumbsDownIcon className='w-[40px] h-[40px] absolute -left-3 -top-3' />}
                        <div className='w-12 h-12'>
                            <img src={user.avatarUrl || Avatar} alt={user.name} className="rounded-full object-cover" />
                        </div>
                        <div>
                            <img src={user.bottomRightIcon} className="w-5 h-5 text-red-500 absolute -bottom-1 -right-1 rounded-full" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[12px] text-[#000] font-[400] leading-[105%]">{user.name}</h2>
                        <p className="text-[12px] text-[#000]/45 font-[400] leading-[110%] truncate max-w-[80px]">{user.position}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserCard;