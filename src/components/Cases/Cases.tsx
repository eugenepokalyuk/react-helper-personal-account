import React from 'react';
import ImageCasesOne from '../../assets/cases/case-1.png';
import ImageCasesThree from '../../assets/cases/case-2.png';
import ImageCasesTwo from '../../assets/cases/case-3.png';

import { ReactComponent as IconLike } from '../../assets/like.svg';
import H1 from '../../typography/Headers/H1';

const caseStudies = [{
    image: ImageCasesOne,
    heading: 'Увеличил среднее время на сайте на ⇪7,65% ',
    paragraph: 'vtb.ru',
    customerTestimonial: 'Внутри отзыв клиента',
}, {
    image: ImageCasesTwo,
    heading: ' Разработал гайдлайны для подбора дизайнеров, улучшил действующий функционал сервиса и погрузился в бизнес процесс компании.',
    paragraph: 'Нмаркет.ПРО',
    customerTestimonial: 'Внутри отзыв клиента',
}, {
    image: ImageCasesThree,
    heading: 'Увеличил показатель Customer Effort Score в 2 раза',
    paragraph: 'Каршеринги',
    customerTestimonial: 'Внутри отзыв клиента',
}];

const Cases: React.FC = () => {
    return (
        <section className='mx-auto max-w-[700px] mt-4 p-[24px] flex flex-col bg-white rounded-[30px] pb-[55px]'>
            <H1 title={'Кейсы'} />
            <div className="flex flex-col mt-4">
                {caseStudies.map((caseStudy, index) => (
                    <div key={index} className='pb-[40px] last:pb-[0px] group cursor-pointer hover:cursor-pointer'>
                        <div className="relative">
                            <img
                                src={caseStudy.image}
                                alt="Case Study"
                                className="object-cover w-full rounded-[16px] md:w-[100%] md:h-[270px] max-md:max-h-[110px] group-hover:brightness-[.75] group-hover:opacity-[95%] transition duration-300 ease-in-out"
                            />
                        </div>
                        <div className=''>
                            <h3 className="text-[20px] text-[#000] font-[700] leading-[105%] -tracking-[0.25] mt-3 group-hover:text-black/70 transition-colors duration-300">{caseStudy.heading}</h3>
                            <p className="text-[16px] font-[400] my-1 text-[#1E1E1E]/50 leading-[115%]">{caseStudy.paragraph}</p>
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