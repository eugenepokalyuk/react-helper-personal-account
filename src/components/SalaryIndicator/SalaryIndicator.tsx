import React from 'react';
import { ReactComponent as IconPointer } from '../../assets/pointer.svg';
const SalaryIndicator: React.FC = () => {
    const totalSalaryRange = 350000;
    const highlightedStart = 150000;
    const highlightedEnd = 220000;
    const currentSalary = 200000;

    const highlightedStartPercent = (highlightedStart / totalSalaryRange) * 100;
    const highlightedWidthPercent = ((highlightedEnd - highlightedStart) / totalSalaryRange) * 100;
    const currentSalaryPositionPercent = (currentSalary / totalSalaryRange) * 100;

    return (
        <div className="mt-[20px]">
            <div className="relative w-full h-[6px] rounded-full bg-gray-200">
                <div
                    className="absolute h-[6px] rounded-full bg-green-500"
                    style={{
                        left: `${highlightedStartPercent - 10}%`,
                        width: `${highlightedWidthPercent + 12}%`,
                    }}
                ></div>
                <div
                    className="absolute"
                    style={{
                        left: `calc(${currentSalaryPositionPercent}% - 10px)`,
                        top: '-8px'
                    }}
                >
                    <IconPointer />
                </div>
            </div>
            <div className="flex justify-evenly text-xs mt-2 text-black/40 font-hauss font-medium">
                <span>150 000₽/мес</span>
                <span>220 000₽/мес</span>
            </div>
        </div>
    );
};

export default SalaryIndicator;