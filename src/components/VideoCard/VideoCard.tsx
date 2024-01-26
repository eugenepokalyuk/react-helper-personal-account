import { FC, useState } from "react";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { ReactComponent as PlayIcon } from "../../assets/play-icon.svg";

interface VideoModalProps {
    videoUrl: string; onClose: () => void
}

const VideoCard: FC<{ thumbnail: string; videoUrl: string }> = ({ thumbnail, videoUrl }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className="relative" style={{ borderRadius: '30px', overflow: 'hidden', width: '110px', height: '160px' }}>
            {isModalOpen ? (
                <VideoModal videoUrl={videoUrl} onClose={() => setModalOpen(false)} />
            ) : (
                <>
                    {/* <div className='w-[110px] h-[160px] bg-pink-300'></div> */}
                    <img src={thumbnail} className="w-full h-full object-cover" />
                    <button
                        onClick={() => setModalOpen(true)}
                        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center"

                        style={{ borderRadius: '30px', overflow: 'hidden', width: '110px', height: '160px' }}
                    >
                        <PlayIcon />
                    </button>
                </>
            )}
        </div>
    );
};

const VideoModal: FC<VideoModalProps> = ({ videoUrl, onClose }) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-10">
                <div className="absolute top-10 left-10">
                    <Logo className="hover:cursor-pointer" />
                </div>

                <div className="absolute top-10 right-10 bg-gray-500/50 rounded-full p-1" onClick={onClose}>
                    <Close className="fill-white hover:cursor-pointer" />
                </div>

                <div className="rounded-[30px] max-w-full mx-4 my-8">
                    <video
                        controls
                        src={videoUrl}
                        autoPlay
                        className="max-w-full h-auto rounded-[30px]"
                    />
                </div>
            </div>
        </>
    );
};

export default VideoCard;