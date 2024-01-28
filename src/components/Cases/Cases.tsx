import React from 'react';
import ImageCasesOne from '../../assets/cases-1.png';
import ImageCasesTwo from '../../assets/cases-2.png';
import { ReactComponent as IconLike } from '../../assets/like.svg';
import H1 from '../../typography/Headers/H1';

const caseStudies = [{
    image: ImageCasesOne,
    title: '+53% CTR за две недели без кода в BestDoctor',
    description: 'Знает что его решения влияют на некоторые метрики, учитывает',
    customerTestimonial: 'Внутри отзыв клиента',
}, {
    image: ImageCasesOne,
    title: '+53% CTR за две недели без кода',
    description: 'Знает что его решения влияют на некоторые метрики',
    customerTestimonial: 'Внутри отзыв клиента',
}, {
    image: ImageCasesTwo,
    title: 'Визуальный кейс',
    description: 'Знает что его решения влияют на некоторые метрики',
    customerTestimonial: 'Внутри отзыв клиента',
}];

const Cases: React.FC = () => {
    return (
        <section className='mx-auto max-w-[700px] mt-4 p-5 flex flex-col bg-white rounded-[30px]'>
            <H1 title={'Кейсы'} />
            <div className="flex flex-col mt-4">
                {caseStudies.map((caseStudy, index) => (
                    <div key={index} className='pb-[40px]'>
                        <img
                            src={caseStudy.image}
                            alt="Case Study"
                            className="object-cover w-full rounded-[16px] md:w-[643px] md:h-[270px] max-md:max-h-[110px]"
                        />
                        <div className=''>
                            {/* px-[6px] */}
                            <h3 className="text-[20px] text-[#000] font-[700] leading-[105%] -tracking-[0.25] mt-3">{caseStudy.title}</h3>
                            <p className="text-[16px] font-[400] my-1 text-[#1E1E1E]/50 leading-[115%]">{caseStudy.description}</p>
                            <div className="flex items-center mt-2">
                                <IconLike className='mr-1 w-[22px] h-[22px]' />
                                <span className="text-[15.25px] font-[500] leading-[105%] -tracking-[0.25] text-[#37B981]">{caseStudy.customerTestimonial}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cases;