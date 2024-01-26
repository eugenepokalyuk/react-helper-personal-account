import React from 'react';
import H1 from '../../ui/Headers/H1';

const publications = [
    { year: "2020", text: "VC: Абстракции OpenAI, зелёный Wise и «покусанный» Freeform: самые интересные ребрендинги технокомпаний за 2023 год" },
    { year: "2020", text: "VC: Абстракции OpenAI, зелёный Wise и «покусанный» Freeform: самые интересные ребрендинги технокомпаний за 2023 год" },
    { year: "2020", text: "VC: Абстракции OpenAI, зелёный Wise и «покусанный» Freeform: самые интересные ребрендинги технокомпаний за 2023 год" },
    { year: "2020", text: "VC: Абстракции OpenAI, зелёный Wise и «покусанный» Freeform: самые интересные ребрендинги технокомпаний за 2023 год" }
];

const Publications: React.FC = () => {
    return (
        <section className='mx-auto max-w-[700px] mt-4 p-[20px] flex flex-col md:flex-row bg-white gap-[10px] rounded-[20px]'>
            <div>
                <H1 title={'Публикации'} />
                <div className="mt-4">
                    {publications.map((publication, index) => (
                        <div key={index} className="flex justify-between mt-[23px]">
                            <div className="w-1/2 text-[#1E1E1E]/50 text-[14px] font-[400] leading-[115%]">
                                <p>{publication.year}</p>
                            </div>
                            <div className="w-full text-[#1E1E1E]/50 text-[14px] font-[400] leading-[115%]">
                                <p className='pr-[40px] max-md:pr-1'>{publication.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;