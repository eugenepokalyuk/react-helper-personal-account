import React, { FC } from 'react';
import { createPortal } from 'react-dom';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white p-4 rounded shadow-lg max-w-md mx-auto">
                <button className="absolute top-2 right-2 text-xl" onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;