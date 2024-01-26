import { FC, useState } from "react";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";

interface PhotoModalProps {
    photoUrl: string;
    onClose: () => void;
}

const PhotoCard: FC<{ photoUrl: string }> = ({ photoUrl }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="relative" style={{ borderRadius: '30px', overflow: 'hidden', width: '110px', height: '160px' }}>
            {!isModalOpen && (
                <>
                    <img
                        src={photoUrl}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '30px' }}
                    />
                    <button
                        onClick={() => setModalOpen(true)}
                        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center"
                        aria-label="View image"
                    >
                        {/* Placeholder for view icon */}
                    </button>
                </>
            )}
            {isModalOpen && (
                <PhotoModal photoUrl={photoUrl} onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
};

const PhotoModal: FC<PhotoModalProps> = ({ photoUrl, onClose }) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-10">
                <div className="absolute top-10 left-10">
                    <Logo className="hover:cursor-pointer" />
                </div>

                <div className="absolute top-10 right-10 bg-gray-500/50 rounded-full p-1" onClick={onClose}>
                    <Close className="fill-white hover:cursor-pointer" />
                </div>

                <div className="rounded-[30px] max-w-full mx-4 my-8 p-4">
                    <img
                        src={photoUrl}
                        alt="Enlarged view"
                        className="max-w-full h-[60vh] rounded-[30px]"
                    />
                </div>
            </div>
        </>
    );
};

export default PhotoCard;