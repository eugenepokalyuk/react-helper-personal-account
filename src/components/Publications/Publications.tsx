import React from 'react';
import H1 from '../../typography/Headers/H1';

import PublicationImage1 from '../../assets/publications-image-1.png';
import PublicationImage2 from '../../assets/publications-image-2.png';
import PublicationImage3 from '../../assets/publications-image-3.png';

const publications = [{
    heading: "Как улучшить опыт посетителя Эрмитажа: UX анализ и редизайн сервиса онлайн покупки билетов",
    paragraph: "Привет, я Алексей, дизайнер интерфейсов. В этой статье расскажу как можно улучшить сервис продаж билетов в Эрмитаже.",
    image: PublicationImage1
}, {
    heading: "Исследование российских дизайн-команд: кто делает продукты с сильным дизайном и где хорошая дизайн-культура",
    paragraph: "Ежегодное исследование продуктовых дизайн-команд в России. Как профессиональное сообщество оценивает результаты их работы?",
    image: PublicationImage2
}, {
    heading: "«Корзинка». Как студия из России дизайнит топ-1 продуктовую сеть Узбекистана",
    paragraph: "Ежегодное исследование продуктовых дизайн-команд в России. Как профессиональное сообщество оценивает результаты их работы?",
    image: PublicationImage3
}]

const Publications: React.FC = () => {
    return (
        <section className='mx-auto max-w-[700px] mt-4 p-[24px] flex flex-col md:flex-row bg-white gap-[10px] rounded-[30px] pb-[55px]'>
            <div>
                <H1 title={'Публикации'} />
                <div className="mt-4">
                    {publications.map((publication, index) => (
                        <div key={index} className='pb-[40px] last:pb-[0px] group cursor-pointer hover:cursor-pointer'>
                            <div className="relative">
                                <img
                                    src={publication.image}
                                    alt="Case Study"
                                    className="object-cover w-full rounded-[16px] md:w-[100%] group-hover:brightness-[.75] group-hover:opacity-[95%] transition duration-300 ease-in-out"
                                />
                            </div>
                            <div className=''>
                                <h3 className="text-[20px] text-[#000] font-[700] leading-[105%] -tracking-[0.25] mt-3 group-hover:text-black/70 transition-colors duration-300">{publication.heading}</h3>
                                <p className="text-[16px] font-[400] my-1 text-[#1E1E1E]/50 leading-[115%]">{publication.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;