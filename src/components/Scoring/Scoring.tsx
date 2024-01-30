import { useEffect } from "react";
import Unity, { UnityContext } from 'react-unity-webgl';
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

    companyName: "DefaultCompany",
    productName: "SpiderChart",
    productVersion: "0.1",
});

const UnityContainer: React.FC = () => {
    useEffect(() => {
        unityContext.on("loaded", () => {
            unityContext.send("Bridge", "Appear", "true");
            // unityContext.send("Bridge", "Freeze"); // Freeze the chart
            // unityContext.send("Bridge", "Unfreeze"); // Unreeze the chart
            // unityContext.send("Bridge", "SetGrade", "Мидл ~120 000₽,Обновили цель 12 авг"); // shows overlay 3D text panel. args format: "<text1>,<text2>"

            // chart values:
            unityContext.send("Bridge", "SetValue", "0, 5"); // sets sector value. arguments format: "<sector index (0-7)>,<sector value(0-10)>"
            unityContext.send("Bridge", "SetValue", "1, 5");
            unityContext.send("Bridge", "SetValue", "2, 5");
            unityContext.send("Bridge", "SetValue", "3, 5");
            unityContext.send("Bridge", "SetValue", "4, 5");
            unityContext.send("Bridge", "SetValue", "5, 5");
            unityContext.send("Bridge", "SetValue", "6, 5");
            unityContext.send("Bridge", "SetValue", "7, 5");
            // unityContext.send("Bridge", "SetValueWithBomb", "7, 5"); // same as above, but with bombs
            // unityContext.send("Bridge", "SetTarget", "0, 5"); // sets contour line. arguments format: "<sector index (0-7)>,<sector value(0-10)>"
            unityContext.send("Bridge", "SetJobTargets", "0,1,2,3,4,5,6,7,#B3B2EC,#B8BEF9"); // sets filled contour line. arguments format: "<8 sector values>,<line color>,<background color>"

            // colors:
            unityContext.send("Bridge", "SetBackgroundColor", "#ffffffff");
            unityContext.send("Bridge", "SetTextColor", "#00000080");
            // unityContext.send("Bridge", "SetWaveColor", "#B3B2EC");
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
        <div className="w-[960px] h-[250px] md:h-[600px]">
            <Unity unityContext={unityContext} style={{ width: '100%', height: '100%' }} />
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
        <section className="mx-auto max-w-[700px] py-5 bg-white rounded-[30px] mt-3 px-5">
            <article>
                <H1 title={'Скоринг'} />
                <div className="flex items-start mt-[9px]">
                    <Region className="w-[22px] h-[22px] mr-2" />
                    <div>
                        <p className="text-black font-[12px] font-[400] leading-[115%]">Средний Middle product designer на рынке</p>
                        <p className="text-black/20 font-[12px] font-[400] leading-[115%] mt-[2px]">Обновили 23.12.2023</p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <UnityContainer />
                </div>
            </article>

            <Navbar menuItems={menuItems} renderContent={renderContent} />
        </section>
    );
};

export default Scoring;