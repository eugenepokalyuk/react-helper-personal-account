import { FC } from 'react';
import { Experience } from '../../utils/types';
import PhotoCard from '../ImageCard/ImageCard';
import VideoCard from '../VideoCard/VideoCard';

interface WorkExperienceCardProps {
    experience: Experience
}

const WorkExperienceCard: FC<WorkExperienceCardProps> = ({ experience }) => {
    return (
        <div className="flex flex-col md:flex-row items-start py-[40px] border-t first-of-type:border-t-[0px]">
            <div className="md:w-1/3 text-left">
                <h4 className="font-hauss font-semibold text-[18px]">{experience.period}</h4>
                <p className="font-hauss text-[16px] text-black/30">{experience.duration}</p>
            </div>
            <div className="md:w-2/3">
                <div
                    className='font-hauss flex text-[24px]'
                >
                    <div
                        className='max-w-[48px] mr-[5.25px]'
                        style={{ width: '100%', height: '100%' }}
                    >
                        <img
                            className="rounded-full"
                            src={experience.logo}
                            alt={experience.grade}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div>
                        <h3 className="font-bold leading-6">{experience.grade}<br />{experience.job}</h3>
                    </div>
                </div>


                <ul className='mt-[18px]'>
                    {experience.points.map((point, index) => (
                        <li key={index} className="text-sm mt-[12px]">{point}</li>
                    ))}
                </ul>

                {experience.videoThumbnail && experience.videoUrl && (
                    <div className='mt-[20px]'>
                        <VideoCard thumbnail={experience.videoThumbnail} videoUrl={experience.videoUrl} />
                        <p className='font-hauss text-[12px] text-[#1E1E1E]/30 hover:cursor-pointer'>Отзыв о кандидате</p>
                    </div>
                )}

                {experience.imageUrl && (
                    <div className='mt-[20px]'>
                        <PhotoCard photoUrl={experience.imageUrl} />
                        <p className='font-hauss text-[12px] text-[#1E1E1E]/30 hover:cursor-pointer'>Отзыв о кандидате</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkExperienceCard;