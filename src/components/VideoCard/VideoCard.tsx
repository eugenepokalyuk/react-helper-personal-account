import { FC, useEffect, useRef, useState } from "react";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { ReactComponent as PlayIcon } from "../../assets/play-icon.svg";

interface VideoModalProps {
    videoUrl: string; onClose: () => void
}
const VideoCard: FC<{
    thumbnail: string;
    videoUrl: string;
    setModalOpen: (isOpen: boolean) => void;
}> = ({
    thumbnail,
    videoUrl,
    setModalOpen
}) => {
        const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

        const openModal = () => {
            setIsModalOpen(true);
            setModalOpen(true);
        };

        const closeModal = () => {
            setIsModalOpen(false);
            setModalOpen(false);
        };

        return (
            <div className="relative" style={{ borderRadius: '12px', overflow: 'hidden', width: '110px', height: '160px' }}>
                {isModalOpen ? (
                    <VideoModal videoUrl={videoUrl} onClose={closeModal} />
                ) : (
                    <>
                        <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
                        <button
                            onClick={openModal}
                            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center hover:scale-[105%] transition duration-300 ease-in-out"
                        >
                            <PlayIcon className="w-12 h-12 text-white transition-transform duration-300 ease-in-out hover:scale-110" />
                        </button>
                    </>
                )}
            </div>
        );
    };

const VideoModal: FC<VideoModalProps> = ({ videoUrl, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-10">
            <div ref={modalRef} className="rounded-[30px] max-w-full mx-4">
                <div className="fixed top-5 left-[20px]">
                    <Logo className="hover:cursor-pointer" />
                </div>

                <div className="fixed top-5 right-[20px] bg-gray-500/50 rounded-full p-1" onClick={onClose}>
                    <Close className="fill-white hover:cursor-pointer" />
                </div>

                <video
                    controls
                    src={videoUrl}
                    autoPlay
                    className="max-w-full h-[75vh] rounded-[30px]"
                />
            </div>
        </div>
    );
};

export default VideoCard;