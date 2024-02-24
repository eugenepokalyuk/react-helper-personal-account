import React from 'react';
import { ReactComponent as IconLike } from '../../assets/like.svg';
import H1 from '../../typography/Headers/H1';
import SalaryIndicator from '../SalaryIndicator/SalaryIndicator';

interface JobCardProps {
    title: string;
    subtitle: string;
    isSalary?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
    title,
    subtitle,
    isSalary,
}) => {
    return (
        <article className="flex flex-col flex-1 justify-between bg-white rounded-[20px] px-[18px] pb-[18px] py-[16px] max-md:my-1">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <IconLike className='mr-1' />
                        <h2 className='text-[15px] text-[#000] font-[500] leading-[105%]'>{title}</h2>
                    </div>
                </div>

                <div className='mt-2'>
                    <H1 title={subtitle} />
                </div>

                <div>
                    {isSalary && <SalaryIndicator />}
                </div>
            </div>

            <div className="mt-4">
                <p className="text-[12px] font-[400] leading-[115%] text-black/40">Справедливая зарплата, исходя из 72% мечта <span className='text-nowrap'>с существующими</span> вакансиями</p>
            </div>
        </article>
    );
};

export default JobCard;