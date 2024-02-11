import { FC, useEffect } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { ReactComponent as IconCheck } from "../../assets/check-icon.svg";

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

const MockData = () => {
    return (
        <>
            <div className="max-md:hidden absolute top-0 left-0 w-full h-full">

                {/* Пипл-менеджемнт */}
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '14%', left: '33%', transform: 'translate(-50%, -50%)' }}>
                    {/* <IconCheck className="w-[12px] h-[12px] mr-1" /> */}
                    {/* <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p> */}
                    <p className="text-[#FF9B00] text-[14px] font-[500] leading-[105%]">Не дотягивает</p>
                </div>

                {/* Проактивность */}
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '14%', left: '67%', transform: 'translate(-50%, -50%)' }}>
                    {/* <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">Превосходит</p> */}
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p>
                </div>

                {/* UX */}
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '36.5%', left: '8.5%', transform: 'translate(-50%, -50%)' }}>
                    {/* <p className="text-[#FF9B00] text-[14px] font-[500] leading-[105%]">Не дотягивает</p> */}
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p>
                </div>

                {/* Автономность */}
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '38.5%', left: '91%', transform: 'translate(-50%, -50%)' }}>
                    {/* <p className="text-[#FF9B00] text-[14px] font-[500] leading-[105%]">Не дотягивает</p> */}
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p>
                </div>

                {/* UI */}
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '71%', left: '9%', transform: 'translate(-50%, -50%)' }}>
                    {/* <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">Превосходит</p> */}
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p>
                </div>

                {/* Коммуникация */}
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '72%', left: '91%', transform: 'translate(-50%, -50%)' }}>
                    <p className="text-[#FF9B00] text-[14px] font-[500] leading-[105%]">Не дотягивает</p>
                </div>

                {/* Инструменты */}
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '95%', left: '33%', transform: 'translate(-50%, -50%)' }}>
                    <IconCheck className="w-[12px] h-[12px] mr-1" />
                    <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p>
                </div>

                {/* Продукт */}
                <div className="absolute text-nowrap flex items-center justify-center" style={{ top: '95%', left: '67%', transform: 'translate(-50%, -50%)' }}>
                    {/* <IconCheck className="w-[12px] h-[12px] mr-1" /> */}
                    {/* <p className="text-[#25A443] text-[14px] font-[500] leading-[105%]">В рынке</p> */}
                    <p className="text-[#FF9B00] text-[14px] font-[500] leading-[105%]">Не дотягивает</p>
                </div>
            </div>
            {(window.innerWidth == 425) && (
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
            {(window.innerWidth !== 320 && window.innerWidth < 425) && (
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
            {window.innerWidth === 320 && (
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
        </>
    )
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

const UnityContainer: FC = () => {
    // const { skills } = useAppSelector((store) => store.skills);

    // const calculateAverageRateForSkill = (reviews: any) => {
    //     const totalRate = reviews.reduce((acc: any, review: any) => acc + review.rate, 0);
    //     return reviews.length > 0 ? (totalRate / reviews.length) : 0;
    // };

    // const calculateAverageRateForCategory = (skills: any) => {
    //     const totalRate = skills.reduce((acc: any, skill: any) => acc + calculateAverageRateForSkill(skill.reviews), 0);
    //     const averageRate = skills.length > 0 ? (totalRate / skills.length) : 0;
    //     return Math.round(averageRate); // Округление до целого числа
    // };

    // const calculateAndUpdateRates = (skills: any) => {
    //     return skills.map((category: any) => {
    //         const averageRateForCategory = calculateAverageRateForCategory(category.skills);
    //         return {
    //             ...category,
    //             rate: averageRateForCategory,
    //             skills: category.skills.map((skill: any) => ({
    //                 ...skill,
    //                 averageRate: calculateAverageRateForSkill(skill.reviews),
    //             }))
    //         };
    //     });
    // };

    // const updatedCategories = calculateAndUpdateRates(skills);

    useEffect(() => {
        unityContext.on("loaded", () => {
            // unityContext.send("Bridge", "Appear", "true");
            unityContext.send("Bridge", "Appear", "false");

            // unityContext.send("Bridge", "Freeze"); // Freeze the chart
            // unityContext.send("Bridge", "Unfreeze"); // Unreeze the chart
            // unityContext.send("Bridge", "SetGrade", "Надпись любая, подпись любая"); // shows overlay 3D text panel. args format: "<text1>,<text2>"

            // chart values:
            // sets sector value. arguments format: "<sector index (0-7)>,<sector value(0-10)>"
            // updatedCategories.map((category: any, index: number) => {
            //     return unityContext.send("Bridge", "SetValue", `${index}, ${category.rate}`);
            // })
            unityContext.send("Bridge", "SetValue", "0, 6"); // Проактивность
            unityContext.send("Bridge", "SetValue", "1, 7"); // Автономность
            unityContext.send("Bridge", "SetValue", "2, 7"); // Коммуникация
            unityContext.send("Bridge", "SetValue", "3, 3"); // Продукт
            unityContext.send("Bridge", "SetValue", "4, 8"); // Инструменты
            unityContext.send("Bridge", "SetValue", "5, 7"); // UI
            unityContext.send("Bridge", "SetValue", "6, 5"); // UX
            unityContext.send("Bridge", "SetValue", "7, 3"); // Пипл менеджмент



            // Выбрать галочку:
            // sets contour line. arguments format: "<sector index (0-7)>,<sector value(0-10)>"
            // updatedCategories.map((_category: any, index: number) => {
            //     return unityContext.send("Bridge", "SetTarget", `${index}, 0`);
            // })
            unityContext.send("Bridge", "SetTarget", "0, 0"); // Проактивность
            unityContext.send("Bridge", "SetTarget", "1, 0"); // Автономность
            unityContext.send("Bridge", "SetTarget", "2, 0"); // Коммуникация
            unityContext.send("Bridge", "SetTarget", "3, 0"); // Продукт
            unityContext.send("Bridge", "SetTarget", "4, 0"); // Инструменты
            unityContext.send("Bridge", "SetTarget", "5, 0"); // UI
            unityContext.send("Bridge", "SetTarget", "6, 0"); // UX
            unityContext.send("Bridge", "SetTarget", "7, 0"); // Пипл менеджмент

            // Бомбы:
            // unityContext.send("Bridge", "SetValueWithBomb", "3, 5"); // same as above, but with bombs

            // Контур:
            unityContext.send("Bridge", "SetJobTargets", "6,7,8,4,9,7,5,4,#B3B2EC,#B8BEF9"); // sets filled contour line. arguments format: "<8 sector values>,<line color>,<background color>"
            // unityContext.send("Bridge", "SetJobTargets", "7,8,9,4,9,8,6,4,#B3B2EC,#B8BEF9"); // sets filled contour line. arguments format: "<8 sector values>,<line color>,<background color>"

            // Colors:
            // unityContext.send("Bridge", "SetBackgroundColor", "#ff69b4ff");
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

    return (
        <div className="flex justify-center items-center mt-2">
            <div className="relative w-full max-w-[550px] h-[550px] max-md:h-[350px]">
                <Unity unityContext={unityContext} className="w-full h-full" />
                <MockData />
            </div>
        </div>
    );
};

export default UnityContainer;