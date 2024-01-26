import React from 'react';
import ImageCasesOne from '../../assets/cases-1.png';
import ImageCasesTwo from '../../assets/cases-2.png';
import { ReactComponent as IconLike } from '../../assets/like.svg';

const caseStudies = [{
    image: ImageCasesOne,
    title: '+53% CTR за две недели без кода в BestDoctor',
    description: 'Знает что его решения влияют на некоторые метрики, учитывает',
    customerTestimonial: 'Внутри отзыв клиента',
}, {
    image: ImageCasesOne,
    title: '+53% CTR за две недели без кода в BestDoctor',
    description: 'Знает что его решения влияют на некоторые метрики, учитывает',
    customerTestimonial: 'Внутри отзыв клиента',
}, {
    image: ImageCasesTwo,
    title: '+53% CTR за две недели без кода в BestDoctor',
    description: 'Знает что его решения влияют на некоторые метрики, учитывает',
    customerTestimonial: 'Внутри отзыв клиента',
}];

const Cases: React.FC = () => {
    return (
        <section className='mx-auto max-w-[700px] mt-4 px-[25px] py-[31px] flex flex-col bg-white gap-[10px] rounded-[20px]'>
            <h2 className="font-hauss text-[30px] font-[700] mb-4 leading-[30px] text-black">Кейсы</h2>
            <div className="flex flex-col gap-4">
                {caseStudies.map((caseStudy, index) => (
                    <div key={index} className='mb-[40px]'>
                        <img
                            src={caseStudy.image}
                            alt="Case Study"
                            className="object-cover w-full rounded-[16px] md:w-[643px] md:h-[270px]"
                        />
                        <h3 className="font-hauss text-[16px] font-semibold mt-3 text-[#1E1E1E]">{caseStudy.title}</h3>
                        <p className="font-hauss text-[14px] my-1 text-[#1E1E1E]/50">{caseStudy.description}</p>
                        <div className="flex items-center mt-2">
                            {/* <CustomerIcon className="mr-1 w-5 h-5" /> */}
                            <IconLike className='mr-1 w-[22px] h-[22px]' />
                            <span className="font-hauss text-[16px] text-[#37B981]">{caseStudy.customerTestimonial}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cases;