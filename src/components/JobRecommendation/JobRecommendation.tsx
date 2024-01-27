import React from 'react';
import JobCard from '../JobCard/JobCard';

const JobRecommendation: React.FC = () => {
    return (
        <section className='mx-auto max-w-[700px] flex flex-col md:flex-row gap-[10px] mt-[16px]'>
            <JobCard
                title="Рекомендуемая позиция"
                subtitle="Middle продуктовый дизайнер"
                description="Справедливая зарплата, исходя из 72% мечта с существующими вакансиями"
            />
            <JobCard
                title="Справедливая зарплата"
                subtitle="200 000 ₽/мес"
                description="Справедливая зарплата, исходя из 72% мечта с существующими вакансиями"
                isSalary
            />
        </section>
    );
};

export default JobRecommendation;
