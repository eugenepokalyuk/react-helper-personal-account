import React from 'react';

const publications = [
    { year: "2020", text: "VC: Абстракции OpenAI, зелёный Wise и «покусанный» Freeform: самые интересные ребрендинги технокомпаний за 2023 год" },
    { year: "2020", text: "VC: Абстракции OpenAI, зелёный Wise и «покусанный» Freeform: самые интересные ребрендинги технокомпаний за 2023 год" },
    { year: "2020", text: "VC: Абстракции OpenAI, зелёный Wise и «покусанный» Freeform: самые интересные ребрендинги технокомпаний за 2023 год" },
    { year: "2020", text: "VC: Абстракции OpenAI, зелёный Wise и «покусанный» Freeform: самые интересные ребрендинги технокомпаний за 2023 год" }
];

const Publications: React.FC = () => {
    return (
        <section className='mx-auto max-w-[700px] mt-4 px-[25px] py-[31px] flex flex-col md:flex-row bg-white gap-[10px] rounded-[20px]'>
            <div>
                <h2 className="font-hauss text-[30px] font-[700] mb-4 leading-[30px] text-black" style={{ letterSpacing: '-1.612px' }}>
                    Публикации
                </h2>
                <div className="mt-4">
                    {publications.map((publication, index) => (
                        <div key={index} className="flex justify-between mt-[23px]">
                            <div className="w-1/2 font-hauss text-black/50 opacity-50 text-sm leading-6" style={{ lineHeight: '115%', fontSize: '14px' }}>
                                <p>{publication.year}</p>
                            </div>
                            <div className="w-full font-hauss text-black/50 text-sm leading-6" style={{ lineHeight: '115%', fontSize: '14px' }}>
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