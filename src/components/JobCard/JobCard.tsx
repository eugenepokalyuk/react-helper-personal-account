import React from 'react';
import { ReactComponent as IconLike } from '../../assets/like.svg';
import SalaryIndicator from '../SalaryIndicator/SalaryIndicator';

interface JobCardProps {
    title: string;
    subtitle: string;
    description: string;
    isSalary?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
    title,
    subtitle,
    isSalary,
    description
}) => {
    return (
        <article className="flex flex-col flex-1 justify-between bg-white rounded-[20px] mt-4 px-[13px] py-[13px] max-md:my-1 max-md:px-[15px] max-md:py-[13px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <IconLike className='mr-1' />
                    <h2 className='font-hauss text-sm'>{title}</h2>
                </div>
            </div>

            <div className='mt-[14px]'>
                <h1 className='font-hauss text-[30px] font-semibold mb-4 leading-[30px] text-black'>{subtitle}</h1>
            </div>

            <div>
                {isSalary && <SalaryIndicator />}
            </div>

            <div className="mt-4">
                <p className="text-sm text-black/40">{description}</p>
            </div>
        </article>
    );
};

export default JobCard;