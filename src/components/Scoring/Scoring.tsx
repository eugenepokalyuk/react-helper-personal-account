import { useEffect } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { ReactComponent as IconCheck } from "../../assets/check-icon.svg";
import { ReactComponent as Region } from "../../assets/region.svg";
import H1 from "../../typography/Headers/H1";
import { MenuItem } from "../../utils/types";
import Navbar from "../Navbar/Navbar";
import SkillsSection from "../SkillsSection/SkillsSection";

declare global {
    interface Window {
        helper_onSectorsStartHit: () => void;
        helper_onAchieveTarget: () => void;
        helper_onSectorGrow: () => void;
        helper_onBigBombLanded: () => void;
        helper_onSmallBombLanded: () => void;
        helper_onSectorPressed: (strength: any) => void;
        helper_onBubblePressed: () => void;
    }
}

const unityContext = new UnityContext({
    loaderUrl: "buildUnity/chart.loader.js",
    dataUrl: "buildUnity/chart.data.unityweb",
    frameworkUrl: "buildUnity/chart.framework.js.unityweb",
    codeUrl: "buildUnity/chart.wasm.unityweb",

    companyName: "Helper",
    productName: "SpiderChart",
    productVersion: "0.1",
});

const UnityContainer: React.FC = () => {
    useEffect(() => {
        unityContext.on("loaded", () => {
            // unityContext.send("Bridge", "Appear", "true");
            unityContext.send("Bridge", "Appear", "false");

            // unityContext.send("Bridge", "Freeze"); // Freeze the chart
            // unityContext.send("Bridge", "Unfreeze"); // Unreeze the chart
            // unityContext.send("Bridge", "SetGrade", "Надпись любая, подпись любая"); // shows overlay 3D text panel. args format: "<text1>,<text2>"

            // chart values:
            unityContext.send("Bridge", "SetValue", "0, 7"); // sets sector value. arguments format: "<sector index (0-7)>,<sector value(0-10)>"
            unityContext.send("Bridge", "SetValue", "1, 5");
            unityContext.send("Bridge", "SetValue", "2, 4");
            unityContext.send("Bridge", "SetValue", "3, 6");
            unityContext.send("Bridge", "SetValue", "4, 5");
            unityContext.send("Bridge", "SetValue", "5, 6");
            unityContext.send("Bridge", "SetValue", "6, 5");
            unityContext.send("Bridge", "SetValue", "7, 7");

            // Выбрать галочку:
            unityContext.send("Bridge", "SetTarget", "0, 0"); // sets contour line. arguments format: "<sector index (0-7)>,<sector value(0-10)>"
            unityContext.send("Bridge", "SetTarget", "1, 0");
            unityContext.send("Bridge", "SetTarget", "2, 0");
            unityContext.send("Bridge", "SetTarget", "3, 0");
            unityContext.send("Bridge", "SetTarget", "4, 0");
            unityContext.send("Bridge", "SetTarget", "5, 0");
            unityContext.send("Bridge", "SetTarget", "6, 0");
            unityContext.send("Bridge", "SetTarget", "7, 0");

            // Бомбы:
            // unityContext.send("Bridge", "SetValueWithBomb", "7, 5"); // same as above, but with bombs
            // unityContext.send("Bridge", "SetValueWithBomb", "7, 5"); // same as above, but with bombs
            // unityContext.send("Bridge", "SetValueWithBomb", "7, 5"); // same as above, but with bombs

            // Контур:
            unityContext.send("Bridge", "SetJobTargets", "6,6,5,6,5,4,6,7,#B3B2EC,#B8BEF9"); // sets filled contour line. arguments format: "<8 sector values>,<line color>,<background color>"

            // Colors:
            unityContext.send("Bridge", "SetBackgroundColor", "#ffffffff");
            unityContext.send("Bridge", "SetTextColor", "#00000080");
            // unityContext.send("Bridge", "SetWaveColor", "#B3B2EC");

            // Лепесток:
            // unityContext.send("Bridge", "SetSectorColor", "#B3B2EC");
            // unityContext.send("Bridge", "SetCoinColor", "#B3B2EC");
        });

        window.helper_onSectorsStartHit = () => {
            console.log('попал helper_onSectorsStartHit')
        };
        window.helper_onSectorsStartHit = () => {
            console.log('попал helper_onSectorsStartHit')
        }
        window.helper_onAchieveTarget = () => {
            console.log('попал helper_onAchieveTarget')
        }
        window.helper_onSectorGrow = () => {
            console.log('попал helper_onSectorGrow')
        }
        window.helper_onBigBombLanded = () => {
            console.log('попал helper_onBigBombLanded')
        }
        window.helper_onSmallBombLanded = () => {
            console.log('попал helper_onSmallBombLanded')
        }
        window.helper_onSectorPressed = (strength) => {
            console.log('попал helper_onSectorPressed', strength)
        }
        window.helper_onBubblePressed = () => {
            console.log('попал helper_onBubblePressed')
        }

        return () => {
            unityContext.removeAllEventListeners();
        };
    }, []);

    const userWindow = window.innerWidth;

    return (
        <div className="relative w-full max-w-[550px] h-[550px] max-md:h-[350px]">
            <Unity unityContext={unityContext} className="w-full h-full" />

            <div className="max-md:hidden absolute top-0 left-0 w-full h-full">
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '15%', left: '32%', transform: 'translate(-50%, -50%)' }}>
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p>
                </div>

                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '15%', left: '67%', transform: 'translate(-50%, -50%)' }}>
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">Превосходит</p>
                </div>

                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '38%', left: '10%', transform: 'translate(-50%, -50%)' }}>
                    <p className="text-[#FF9B00] text-[14px] font-[500] leading-[105%]">Не дотягивает</p>
                </div>
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '39%', left: '91.5%', transform: 'translate(-50%, -50%)' }}>
                    <p className="text-[#FF9B00] text-[14px] font-[500] leading-[105%]">Не дотягивает</p>
                </div>

                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '71%', left: '9%', transform: 'translate(-50%, -50%)' }}>
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">Превосходит</p>
                </div>
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '72%', left: '91%', transform: 'translate(-50%, -50%)' }}>
                    <p className="text-[#DA5041] text-[14px] font-[500] leading-[105%]">Ниже рынка</p>
                </div>

                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '95%', left: '33%', transform: 'translate(-50%, -50%)' }}>
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p>
                </div>
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '95%', left: '67%', transform: 'translate(-50%, -50%)' }}>
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p>
                </div>
            </div>
            {(userWindow == 425) && (
                <div className="sm:hidden absolute top-0 left-0 w-full h-full">
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '15%', left: '32%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">В рынке</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '15%', left: '66%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">Превосходит</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '37%', left: '10%', transform: 'translate(-50%, -50%)' }}>
                        <p className="text-[#FF9B00] text-[10px] font-[500] leading-[105%]">Не дотягивает</p>
                    </div>
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '39%', left: '91%', transform: 'translate(-50%, -50%)' }}>
                        <p className="text-[#FF9B00] text-[10px] font-[500] leading-[105%]">Не дотягивает</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '70%', left: '8%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">Превосходит</p>
                    </div>
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '72%', left: '91%', transform: 'translate(-50%, -50%)' }}>
                        <p className="text-[#DA5041] text-[10px] font-[500] leading-[105%]">Ниже рынка</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '95%', left: '33%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">В рынке</p>
                    </div>
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '95%', left: '66%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">В рынке</p>
                    </div>
                </div>
            )}
            {(userWindow !== 320 && userWindow < 425) && (
                <div className="sm:hidden absolute top-0 left-0 w-full h-full">
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '21%', left: '32%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">В рынке</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '21%', left: '66%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">Превосходит</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '39%', left: '10%', transform: 'translate(-50%, -50%)' }}>
                        <p className="text-[#FF9B00] text-[10px] font-[500] leading-[105%]">Не дотягивает</p>
                    </div>
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '40%', left: '91%', transform: 'translate(-50%, -50%)' }}>
                        <p className="text-[#FF9B00] text-[10px] font-[500] leading-[105%]">Не дотягивает</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '68%', left: '8%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">Превосходит</p>
                    </div>
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '69%', left: '91%', transform: 'translate(-50%, -50%)' }}>
                        <p className="text-[#DA5041] text-[10px] font-[500] leading-[105%]">Ниже рынка</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '89%', left: '33%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">В рынке</p>
                    </div>
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '89%', left: '66%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">В рынке</p>
                    </div>
                </div>
            )}
            {userWindow === 320 && (
                <div className="sm:hidden absolute top-0 left-0 w-full h-full">
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '26%', left: '31%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">В рынке</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '26%', left: '66%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">Превосходит</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '41%', left: '10%', transform: 'translate(-50%, -50%)' }}>
                        <p className="text-[#FF9B00] text-[10px] font-[500] leading-[105%]">Не дотягивает</p>
                    </div>
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '42.5%', left: '91%', transform: 'translate(-50%, -50%)' }}>
                        <p className="text-[#FF9B00] text-[10px] font-[500] leading-[105%]">Не дотягивает</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '65%', left: '8%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">Превосходит</p>
                    </div>
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '66%', left: '91%', transform: 'translate(-50%, -50%)' }}>
                        <p className="text-[#DA5041] text-[10px] font-[500] leading-[105%]">Ниже рынка</p>
                    </div>

                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '81.5%', left: '33%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">В рынке</p>
                    </div>
                    <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '81.5%', left: '66%', transform: 'translate(-50%, -50%)' }}>
                        <IconCheck className="w-[12px] h-[12px] mr-1" />
                        <p className="text-[#25A443] text-[10px] font-[500] leading-[105%]">В рынке</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const Scoring: React.FC = () => {
    const menuItems: MenuItem[] = [
        { name: 'Продукт' },
        { name: 'Инструменты' },
        { name: 'UI' },
        { name: 'Пипл-менеджмент' },
        { name: 'Проактивность' },
        { name: 'Автономность' },
        { name: 'Коммуникация' },
    ];

    const renderContent = (selectedItem: string): JSX.Element => {
        switch (selectedItem) {
            case 'Продукт':
                return <SkillsSection title={'Продуктовые навыки'} />;
            case 'Инструменты':
                return <SkillsSection title={'Инструментовые навыки'} />;
            default:
                return <SkillsSection title={'Другие навыки'} />;
        }
    };

    return (
        // px-[20px] pt-[20px] pb-[0px]
        <section className="mx-auto max-w-[700px] p-[24px] bg-white rounded-[30px] mt-3">
            <article>
                <H1 title={'Скоринг'} />
                <div className="flex items-center mt-4">
                    <div className='pr-1'>
                        <Region className="w-[22px] h-[22px]" />
                    </div>
                    <div>
                        <p className="text-black font-[12px] font-[400] leading-[115%]">Средний Middle product designer на рынке</p>
                        <p className="text-black/20 font-[12px] font-[400] leading-[115%] mt-[2px]">Обновили 23.12.2023</p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-2">
                    <UnityContainer />
                </div>
            </article>

            <Navbar menuItems={menuItems} renderContent={renderContent} />
        </section>
    );
};

export default Scoring;