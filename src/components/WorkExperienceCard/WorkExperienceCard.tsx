import { FC } from 'react';
import { Experience } from '../../utils/types';
import PhotoCard from '../PhotoCard/PhotoCard';
import VideoCard from '../VideoCard/VideoCard';

interface WorkExperienceCardProps {
    experience: Experience
}

const WorkExperienceCard: FC<WorkExperienceCardProps & { setModalOpen: (isOpen: boolean) => void }> = ({
    experience,
    setModalOpen
}) => {
    return (
        <div className="flex flex-col md:flex-row items-start py-[40px]">

            <div className="max-md:hidden md:w-1/3 text-left">
                <h4 className="text-[17px] font-[500] leading-[105%] -tracking-[0.25] w-[180px]">{experience.period}</h4>
                <p className="text-[16px] text-[#000]/30 font-[400] leading-[115%] mt-[3px]">{experience.duration}</p>
            </div>

            <div className="md:hidden md:w-1/3 text-left mb-5">
                <h4 className="text-[17px] font-[500] leading-[105%] -tracking-[0.5]">{experience.period}</h4>
                <p className="text-[16px] text-black/30 leading-[115%] mt-[3px]">{experience.duration}</p>
            </div>

            <div className="md:w-2/3">
                <div className='flex text-[24px] items-start justigy-center'>
                    <div className='max-w-[48px] max-h-[48px] mr-[5.25px]'>
                        <img
                            className="rounded-full"
                            src={experience.logo}
                            alt={experience.grade}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div>
                        <h3 className="text-black text-[24px] font-[700] leading-[105%] tracking-tighter">{experience.grade}<br />{experience.job}</h3>
                    </div>
                </div>

                <ul className='mt-[18px]'>
                    {experience.points.map((point, index) => (
                        <li key={index} className="mt-[12px] text-[#1E1E1E] text-[16px] font-[400] leading-[115%]">{point}</li>
                    ))}
                </ul>

                {experience.videoThumbnail && experience.videoUrl && (
                    <div className='mt-[20px] max-w-[110px] flex flex-col justify-center align-center'>
                        <VideoCard
                            thumbnail={experience.videoThumbnail}
                            videoUrl={experience.videoUrl}
                            setModalOpen={setModalOpen}
                        />
                        <p className='text-[12px] text-[#1E1E1E]/30 font-[400] leading-[115%] mt-[5px] hover:cursor-pointer'>Отзыв о кандидате</p>
                    </div>
                )}

                {experience.imageUrl && (
                    <div className='mt-[20px] max-w-[110px] flex flex-col justify-center align-center'>
                        <PhotoCard
                            photoUrl={experience.imageUrl}
                            setModalOpen={setModalOpen}
                        />
                        <p className='text-[12px] text-[#1E1E1E]/30 font-[400] leading-[115%] mt-[5px] hover:cursor-pointer'>Отзыв о кандидате</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkExperienceCard;