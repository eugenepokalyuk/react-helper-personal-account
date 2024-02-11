import React from 'react';
import JobCard from '../JobCard/JobCard';

const JobRecommendation: React.FC = () => {
    return (
        <section className='mx-auto max-w-[700px] flex flex-col md:flex-row gap-[12px] mt-[16px]'>
            <JobCard
                title="Рекомендуемая позиция"
                subtitle="Middle продуктовый дизайнер"
            />
            <JobCard
                title="Справедливая зарплата"
                subtitle="180 000 ₽/мес"
                isSalary
            />
        </section>
    );
};

export default JobRecommendation;
