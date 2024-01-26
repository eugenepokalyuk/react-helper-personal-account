import { ReactComponent as ThumbsUpIcon } from '../../assets/like.svg'; // Path to your SVG
import OzonLogo from '../../assets/ozon-logo.png';
import Avatar from '../../assets/skills-user.png';
import TinkoffLogo from '../../assets/tinkoff-logo.png';
import YandexLogo from '../../assets/yandex-logo.png';
import UserCard from '../UserCard/UserCard';

const cards = [
    {
        title: "Метрики",
        description: "Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        rate: 0,
        users: [
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: YandexLogo,
            },
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: TinkoffLogo,
            },
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: OzonLogo,
            },
        ],
    },

    {
        title: "Аналитика",
        description: "Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        rate: 0,
        users: [
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: YandexLogo,
            },
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: TinkoffLogo,
            }
        ],
    },

    {
        title: "Бизнесс",
        description: "Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        rate: 0,
        users: [
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: YandexLogo,
            },
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: TinkoffLogo,
            }
        ],
    },

    {
        title: "Исследования",
        description: "Здесь мы объяняем насколько учитывает это при работе Знает что его решения влияют на некоторые метрики, учитывает это при работе",
        rate: 0,
        users: [
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: YandexLogo,
            },
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: TinkoffLogo,
            },
            {
                name: "Виктория",
                position: "Product дизайнер",
                avatarUrl: Avatar,
                topLeftIcon: true,
                bottomRightIcon: OzonLogo,
            },
        ],
    },
];

const SkillsSection: React.FC<{ title: string }> = ({ title }) => {

    return (
        <section className="mt-[30px]">
            <div className="flex items-center mb-4">
                <ThumbsUpIcon className="w-12 h-12 text-green-500 mr-4 max-md:hidden" />
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <p className="text-gray-600">Навык «Продукт» отскорен 7 специалистами на средний балл 7,5 из 10, что соответствует ожиданию рынка</p>
                </div>
            </div>

            <hr className="my-4" />

            {cards.map((card, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start mb-12 md:mb-14">
                    <div className="flex w-full md:w-1/3 text-left items-center mb-4 md:mb-0">
                        <ThumbsUpIcon className="w-6 h-6 text-green-500 mr-2" />
                        <h4 className="text-gray-800 text-lg font-medium leading-normal">{card.title}</h4>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-base text-gray-800 font-normal leading-relaxed">{card.description}</p>
                        <div className='flex flex-wrap gap-4 mt-4'>
                            <UserCard users={card.users} />
                        </div>
                    </div>
                </div>
            ))}

        </section>
    );
};

export default SkillsSection;