import { FC, useEffect, useState } from 'react';
import OzonLogo from '../../assets/ozon-logo.png';
import Avatar from '../../assets/skills-user.png';
import TinkoffLogo from '../../assets/tinkoff-logo.png';
import YandexLogo from '../../assets/yandex-logo.png';
import { FETCH_SKILLS_SUCCESS } from '../../services/actions/skills';
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../../services/actions/user';
import { fetchUserData } from '../../utils/api';
import { useAppDispatch } from '../../utils/hooks';
import Header from '../Header/Header';
// import Cases from '../Cases/Cases';
// import JobRecommendation from '../JobRecommendation/JobRecommendation';
// import ProfileCard from '../ProfileCard/ProfileCard';
// import Publications from '../Publications/Publications';
// import WorkExperience from '../WorkExperience/WorkExperience';
import Cases from '../Cases/Cases';
import JobRecommendation from '../JobRecommendation/JobRecommendation';
import ProfileCard from '../ProfileCard/ProfileCard';
import Publications from '../Publications/Publications';
import Scoring from '../Scoring/Scoring';
import WorkExperience from '../WorkExperience/WorkExperience';

import ImageAvitoLogo from '../../assets/companies/company-avito.jpeg';
import ImageMTCLogo from '../../assets/companies/company-mtc.png';
import ImageOpenBankLogo from '../../assets/companies/company-openbank.png';
import ImageOzonLogo from '../../assets/companies/company-ozon.png';
import ImageSamokatLogo from '../../assets/companies/company-samokat.png';
import ImageTinkoffLogo from '../../assets/companies/company-tinkoff.png';

import ImageAvitoPerson from '../../assets/persons/person-avito.jpeg';
import ImageMTCPerson from '../../assets/persons/person-mtc.jpeg';
import ImageOpenBankPerson from '../../assets/persons/person-openbank.jpeg';
import ImageOzonPerson from '../../assets/persons/person-ozon.jpeg';
import ImageSamokatPerson from '../../assets/persons/person-samokat.png';
import ImageTinkoffPerson from '../../assets/persons/person-tinkoff.jpeg';

// const mock = [
//   {
//     name: "Проактивность",
//     subtitle: "Ативные навыки",
//     skills: [
//       {
//         name: "Метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Tinkoff",
//             avatarUrl: Avatar,
//             companyLogo: TinkoffLogo,
//             comment: "Comment #2",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Ozon",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #3",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Аналитика",
//         description: "Аналитика Аналитика и еще Аналитика",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }, {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Еще метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       }]
//   },
//   {
//     name: "Автономность",
//     subtitle: "Ативные навыки",
//     skills: [
//       {
//         name: "Метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Tinkoff",
//             avatarUrl: Avatar,
//             companyLogo: TinkoffLogo,
//             comment: "Comment #2",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Ozon",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #3",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Аналитика",
//         description: "Аналитика Аналитика и еще Аналитика",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }, {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Еще метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       }]
//   },
//   {
//     name: "Коммуникация",
//     subtitle: "Ативные навыки",
//     skills: [
//       {
//         name: "Метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Tinkoff",
//             avatarUrl: Avatar,
//             companyLogo: TinkoffLogo,
//             comment: "Comment #2",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Ozon",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #3",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Аналитика",
//         description: "Аналитика Аналитика и еще Аналитика",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }, {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Еще метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       }]
//   },
//   {
//     name: "Продукт",
//     subtitle: "Ативные навыки",
//     skills: [
//       {
//         name: "Метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Tinkoff",
//             avatarUrl: Avatar,
//             companyLogo: TinkoffLogo,
//             comment: "Comment #2",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Ozon",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #3",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Аналитика",
//         description: "Аналитика Аналитика и еще Аналитика",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }, {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Еще метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       }]
//   },
//   {
//     name: "Инструменты",
//     subtitle: "Ативные навыки",
//     skills: [
//       {
//         name: "Метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Tinkoff",
//             avatarUrl: Avatar,
//             companyLogo: TinkoffLogo,
//             comment: "Comment #2",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Ozon",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #3",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Аналитика",
//         description: "Аналитика Аналитика и еще Аналитика",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }, {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Еще метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       }]
//   },
//   {
//     name: "UI",
//     subtitle: "Ативные навыки",
//     skills: [
//       {
//         name: "Метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Tinkoff",
//             avatarUrl: Avatar,
//             companyLogo: TinkoffLogo,
//             comment: "Comment #2",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Ozon",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #3",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Аналитика",
//         description: "Аналитика Аналитика и еще Аналитика",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }, {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Еще метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       }]
//   },
//   {
//     name: "UX",
//     subtitle: "Ативные навыки",
//     skills: [
//       {
//         name: "Метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Tinkoff",
//             avatarUrl: Avatar,
//             companyLogo: TinkoffLogo,
//             comment: "Comment #2",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Ozon",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #3",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Аналитика",
//         description: "Аналитика Аналитика и еще Аналитика",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }, {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Еще метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       }]
//   },
//   {
//     name: "Пипл менеджемнт",
//     subtitle: "Ативные навыки",
//     skills: [
//       {
//         name: "Метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Tinkoff",
//             avatarUrl: Avatar,
//             companyLogo: TinkoffLogo,
//             comment: "Comment #2",
//             rate: 7.5
//           },
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Ozon",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #3",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Аналитика",
//         description: "Аналитика Аналитика и еще Аналитика",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }, {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: OzonLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       },
//       {
//         name: "Еще метрики",
//         description: "Метрики Метрики и еще Метрики",
//         comment: "Comment On Footer",
//         reviews: [
//           {
//             name: "Виктория",
//             position: "Product дизайнер в Yandex",
//             avatarUrl: Avatar,
//             companyLogo: YandexLogo,
//             comment: "Comment #1",
//             rate: 7.5
//           }
//         ],
//       }]
//   }
// ]
const mock = [
  {
    name: "Проактивность",
    subtitle: "Ативные навыки",
    skills: [
      {
        name: "Стремление к развитию",
        description: "Сам следит за своим развитием, проходит курсы, читает статьи, интересуется развитием основных и дополнительных навыков",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Tinkoff",
            avatarUrl: Avatar,
            companyLogo: TinkoffLogo,
            comment: "Comment #2",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Ozon",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #3",
            rate: 7.5
          }
        ],
      },
      {
        name: "Поиск точек улучшения",
        description: "Проявляет инициативу сам или с чьей-то подачи, предлагает решения, но предпочитает использовать традиционные методы",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Работа с рисками",
        description: "Экспериментирует на уровне использоваия новых инструментов, не только в рамках оговоренного списка или ТЗ. Пытается улучшить не только дизайн, но и процессы. Пробует активное участие в планировании.",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Рефлексия",
        description: "Сомневается в выводах, которые делает.Нуждается в постоянной обратной связи и корректировках",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Работа с рисками",
        description: "Экспериментирует на уровне использоваия новых инструментов, не только в рамках оговоренного списка или ТЗ. Пытается улучшить не только дизайн, но и процессы. Пробует активное участие в планировании.",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Передача результата работы",
        description: "Строит флоу, расписывает состояния, уточняет корнер-кейсы",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Проверка реализации решений",
        description: "Следит за базовыми состояниями элементов дизайна в реализации",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      }]
  },
  {
    name: "Автономность",
    subtitle: "Ативные навыки",
    skills: [
      {
        name: "Подход к задачам",
        description: "Может начать работать и выдать результат даже при примерном описании функционала. Может в мелочах предлагать изменения по ТЗ, если это обоснованно. Самоорганизуется, сам следит за договоренностями и их выполнением",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Tinkoff",
            avatarUrl: Avatar,
            companyLogo: TinkoffLogo,
            comment: "Comment #2",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Ozon",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #3",
            rate: 7.5
          }
        ],
      },
      {
        name: "Оценка работы",
        description: "Самостоятельно оценивает свою работу в часах. Может выстроить родумап по своей работе",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Работа над ошибками",
        description: "Не понимает, как и что поменять. Нужно указать и вместе посидеть",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Вариативность",
        description: "Приносит много вариантов, но более осмысленных. Сам пока не может выбрать подходящий, но может аргументирвоать каждый из варинатов",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Принятие решений",
        description: "Можно доверить среднюю задачу (небольшое флоу) и не беспокоиться за качество, не организуя постоянный контроль",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Продуктовый процесс",
        description: "Понимает процессы и следует им",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      }]
  },
  {
    name: "Коммуникация",
    subtitle: "Ативные навыки",
    skills: [
      {
        name: "Презентации стейкхолдерам",
        description: "Аргументирует решения с точки зрения потребностей людей, которые закрываются его решением",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Tinkoff",
            avatarUrl: Avatar,
            companyLogo: TinkoffLogo,
            comment: "Comment #2",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Ozon",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #3",
            rate: 7.5
          }
        ],
      },
      {
        name: "Ведение встреч",
        description: "Может самостоятельно назначить и фасилитировать встречу для обсуждения своих решений",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Умение решать проблемы",
        description: "Может поднять и подсветить проблемы внутри интерфейса, выносит их на обсуждение",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      }]
  },
  {
    name: "Продукт",
    subtitle: "Ативные навыки",
    skills: [
      {
        name: "Понимание метрик",
        description: "Знает основные метрики и из чего они составляются",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Tinkoff",
            avatarUrl: Avatar,
            companyLogo: TinkoffLogo,
            comment: "Comment #2",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Ozon",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #3",
            rate: 7.5
          }
        ],
      },
      {
        name: "Улучшения в продукте",
        description: "Может улучшать небольшие части, в основном только интерфейсной направленности (ускорение выполнении задачи). Понимает стратегию продукта",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Понимание рынка",
        description: "Способен рассказать о ценностях бизнеса. Изучает конкурентов",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Масштабируемость",
        description: "Не учитывает в работе масштабируемость",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Понимание аудитории",
        description: "Собирает базовую информацию по указанию на источник, формирует в пул данных, может набросать свои наблюдения по теме",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      }]
  },
  {
    name: "Инструменты",
    subtitle: "Ативные навыки",
    skills: [
      {
        name: "Основные инструменты дизайна",
        description: "Работает в Figma, используя возможности «для продвинутых». Старается автоматизировать работу. Может быстро изучить новый инструмент, если этого требует задача. Может реализовать идею без дополнительного ресурса, Понимает как поставить задачу аутсфтау (тридешник, граф диз) и может говорить с ними на одном языке",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Tinkoff",
            avatarUrl: Avatar,
            companyLogo: TinkoffLogo,
            comment: "Comment #2",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Ozon",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #3",
            rate: 7.5
          }
        ],
      },
      {
        name: "Дополнительное",
        description: "Умеет вести документацию в текстовых редакторах (Notion, Confluence)",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Сервисы",
        description: "Следит за новыми сервисами. Ведет или просто на постоянной основе пользуется широким спектром уже известных инструментов, без труда внедряя их во все рабочие процессы на постоянной основе, чувствует себя в них как родной",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      }]
  },
  {
    name: "UI",
    subtitle: "Ативные навыки",
    skills: [
      {
        name: "Объем задач, которые может решать",
        description: "Умеет собирать флоу из нескольких экранов, показывать их логическую связь (нажал туда — перешел сюда; экран изменился так) на основе дизайн-системы и с небольшими правками в ней",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Отлично собирает флоу из нескольких экранов, не теряет логики, видит мелочи, учитывает их и укладывает в структуру самого флоу. Понимает, как работать с дизайн-системой и использовать ее при построении проекта.",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Tinkoff",
            avatarUrl: Avatar,
            companyLogo: TinkoffLogo,
            comment: "Comment #2",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Ozon",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #3",
            rate: 7.5
          }
        ],
      },
      {
        name: "Работа с интерфейсами",
        description: "Умеет создавать новые и грамотно нарушать устоявшиеся паттерны в поведении элементов для достижения целей экрана/продукта",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Понравилось, как менти может использовать готовые паттерны в работе всевозможных элементов и тут же придумывать на их основе новые, чтобы делать экраны и флоу вцелом более функциональным и отвечающим целям работы",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Креативно использует стандартные элементы, освежает их, придумывает им бОльшую  функциональность, по результату — удобные интерфейсы, чистые, понятные. Молодцом!",
            rate: 7.5
          }
        ],
      },
      {
        name: "Визуальный интерес",
        description: "Придумывает новые приёмы, поддерживает визуальный интерес и живость в рамках экранов",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Может не только брать готовое, но и придумывать новые приёмы, делает живые экранчики, очень сочно",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Творческий подход к визуалу — есть. Умеет работать с готовыми решениями, но внедряет свои идеи, компилирует, синтезиурет варианты, отлично работает с рефами.",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Хорошо владеет цветом, формами, создает экраны привлекательные, способные захватить и удержать внимание. Ищет новые решения в нестандартных источниках.",
            rate: 7.5
          }
        ],
      },
      {
        name: "Работа с дизайн-системой",
        description: "Умеет собирать сложные компоненты, делать их интерактивными и собирать кликабельные прототипы. Умеет работать с переменными",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Зачет за детальную заботу с переменными, сложными компонентами. На ура щелкает интерактивные и собирает кликабельные прототипы. Может оживить что угодно. Очень круто.",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Отлично освоил тему дизайн-систем, знает что, зачем, почему. Понимает, как работать с ее созданием. Применяет в проектах с легкостью, макеты держит супер-чистыми. Отлично, приятно посмотреть и проверить всегда.",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Топово использует дизайн-систему для создания кликабельных прототипов с интерактивными элементами. Внимателен к деталям и умело оживляет сложные компоненты.",
            rate: 7.5
          }
        ],
      },
      {
        name: "Особенности платформ",
        description: "Понимает особенности разных платформ: на iOS datepicker выглядит так, на Android так, в вебе вот так",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Не наизусть, конечно, но знает гайдлайны. Легко объяснить особенности разных платформ, понимает, почему и как разные компоненты выглядят на iOS и Android. Сможет работать и с нестандартными задачками под другие системы, потому что понимает, как подходить из функции, может генерировать идеи и решения вне четких рамок",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Реализуемость дизайна",
        description: "Может обсудить с разработчиками несколько вариантов, понять плюсы и минусы и найти компромисс",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Из диалога понятно, что менти знает, насколько важен диалог с разрабом и как итеративно двигаться по проекту, сверяясь с разработкой, чтобы не напридумывать зря лишнего, как оптимизировать работу и результат в этом тандеме",
            rate: 7.5
          }
        ],
      }]
  },
  {
    name: "UX",
    subtitle: "Ативные навыки",
    skills: [
      {
        name: "Паттерны юзабилити",
        description: "Понимает принципы устоявшейся логики в поведнии большого количества экранов. Умеет выстраивать логику поведения большого количества экранов и умеет, где необходимо, эту логику нарушать",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Андрей",
            position: "Дизайн-лид из Самокат.Тех",
            avatarUrl: ImageSamokatPerson,
            companyLogo: ImageSamokatLogo,
            comment: "Проявляет отличное понимание паттернов юзабилити и умение их применять на практике. Хвалю способность видеть общие шаблоны в пользовательских интерфейсах и находить эффективные решения для улучшения юзерского опыта",
            rate: 7.5
          },
          {
            name: "Саша",
            position: "Design Lead МТС Music",
            avatarUrl: ImageMTCPerson,
            companyLogo: ImageMTCLogo,
            comment: "Нормально распознает и применяет паттерны юзабилити. Легко находит подходящие шаблоны для решения задач, знает, как их прикрутить к проектам. Работа интуитивная, понятная конечному юзеру. Вэри гуд",
            rate: 7.5
          },
          {
            name: "Саша",
            position: "Продуктовый дизайнер в Озон",
            avatarUrl: ImageOzonPerson,
            companyLogo: ImageOzonLogo,
            comment: "Менти хорошо знает паттерны юзабилити и применяет их грамотно в работе. Его работы удобны для пользователей благодаря использованию стандартных шаблонов",
            rate: 7.5
          }
        ],
      },
      {
        name: "Верификация решения, исследования",
        description: "Грамотно подбирает нужные элементы интерфейса с учетом задачи человека. Старается максимально облегчить взаимодействие продукта и человека",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Вадим",
            position: "Продуктовый дизайнер в Авито",
            avatarUrl: ImageAvitoPerson,
            companyLogo: ImageAvitoLogo,
            comment: "Высокий уровень владения процессом верификации решений и ведения исследований. Хорошо их проверяет, детально. Работает методично и систематически",
            rate: 7.5
          }, {
            name: "Катя",
            position: "Продуктовый дизайнер в Тинькофф",
            avatarUrl: ImageTinkoffPerson,
            companyLogo: ImageTinkoffLogo,
            comment: "Работали над аудитом приложения для практики. Эффективно использовал инструменты, выявлял потенциальные проблемы, предлагал оптимальные решения. Все последовательно, обоснованно",
            rate: 7.5
          }, {
            name: "Артем",
            position: "Продуктовый дизайнер в банке «Открытие»",
            avatarUrl: ImageOpenBankPerson,
            companyLogo: ImageOpenBankLogo,
            comment: "Внимателен к процессу. Провел анализ обратной связи пользователей о новой функции чата в приложении, выявил проблемы, предложил зачетные решения для более понятного чата.",
            rate: 7.5
          }
        ],
      },
      {
        name: "Виды исследований, их подбор",
        description: "Способен провести исследование или быть наблюдателем, который помогает формировать результаты исследований. Способен объяснить важность проведения исследования по одному из методов. Участвует в составлении опроса. Способен обработать результаты. Хорошо понимает порядок ведения исследования, может провести его от постановки цели через подтверждение гипотез и сделать достаточные для успешной реализации проекта выводы, может вести несколько исследований сразу",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Вадим",
            position: "Продуктовый дизайнер в Авито",
            avatarUrl: ImageAvitoPerson,
            companyLogo: ImageAvitoLogo,
            comment: "Много знает о различных методах исследований. Умело выбирал подходящие типы исследований в зависимости от актуальной задачки. Хорош в интервью",
            rate: 7.5
          }, {
            name: "Саша",
            position: "Design Lead МТС Music",
            avatarUrl: ImageMTCPerson,
            companyLogo: ImageMTCLogo,
            comment: "Отлично ориентируется в качественных и количественных методах исследований, понимает, что надо делать, чтобы получить полное понимание о пользовательских потребностях. Умеет отлично работать с целевой, сегментировать, прописывать боли, ресерчить вдоль и поперек",
            rate: 7.5
          }, {
            name: "Артем",
            position: "Продуктовый дизайнер в банке «Открытие»",
            avatarUrl: ImageOpenBankPerson,
            companyLogo: ImageOpenBankLogo,
            comment: "Нереально проводит конкурентный по прямым и бенч вцелом, очень круто структурирует информацию, ищет референсы, делает анализ всего-всего и пишет не просто наблюдения по итогу, а детальные выводы и предложения",
            rate: 7.5
          }
        ],
      },
      {
        name: "Фреймворки",
        description: "Понимает принципы работы фреймворков разного уровня и типов, уверенно взаимодействует в их рамках с командой и проектами. Начианет применять базовые фрейморки в работе (анализ конкурентов, юзер стори, JTBD, CJM и другие). Использует JTBD, CJM и другие фреймворки в работе",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Саша",
            position: "Продуктовый дизайнер в Озон",
            avatarUrl: ImageOzonPerson,
            companyLogo: ImageOzonLogo,
            comment: "Менти успешно применяет фреймворки продуктовой разработки для создания адаптивных интерфейсов, что значительно ускоряет процесс, понимает последовательность, видит ситуации, где можно удачно комбинировать разные подходы",
            rate: 7.5
          }, {
            name: "Андрей",
            position: "Дизайн-лид из Самокат.Тех",
            avatarUrl: ImageSamokatPerson,
            companyLogo: ImageSamokatLogo,
            comment: "Уверенно применяет современные фреймворки в своей работе, способен создавать продукт быстрее за счет комбинации методов работы. Быстро схватывает, объединяет методики. Отлично выводит результаты. ",
            rate: 7.5
          }, {
            name: "Катя",
            position: "Продуктовый дизайнер в Тинькофф",
            avatarUrl: ImageTinkoffPerson,
            companyLogo: ImageTinkoffLogo,
            comment: "Систематично подходит к процессу разработки, думает об успешной реализации шагов, знает, какой чем подкрепить, как организовать. Не путается, может вести сложные проекты за счет владения разными фреймворками",
            rate: 7.5
          }
        ],
      },
      {
        name: "Генерация гипотез",
        description: "Генерирует гипотезы на основе простых фреймворков (анализ конкурентов, юзер стори). Гипотезы основаны на функциональности, а не на эстетике. Может выдать большое количество гипотез, грамотно сформулированных и позволяющих легко создавать опросы и шаблоны для интервью на их основе",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Вадим",
            position: "Продуктовый дизайнер в Авито",
            avatarUrl: ImageAvitoPerson,
            companyLogo: ImageAvitoLogo,
            comment: "Понимает, на каком этапе генерить гипотезы. Не ограничивается поверхностными. Может заранее написать черновые, иметь их ввиду при речерче и потом хорошо шлифануть переоценив после анализа собранной информации",
            rate: 7.5
          }, {
            name: "Саша",
            position: "Design Lead МТС Music",
            avatarUrl: ImageMTCPerson,
            companyLogo: ImageMTCLogo,
            comment: "Предлагает идеи на лету, систематически разрабатывает предположения, основываясь на внимательном анализе данных и исследований",
            rate: 7.5
          }, {
            name: "Артем",
            position: "Продуктовый дизайнер в банке «Открытие»",
            avatarUrl: ImageOpenBankPerson,
            companyLogo: ImageOpenBankLogo,
            comment: "Осмысленные и целенаправленные предположения. Пишет гипотезы, от которых легко отталкиваться при построении топового сценария для глубинки.",
            rate: 7.5
          }
        ],
      },
      {
        name: "Исследования",
        description: "Создает кликабельные прототипы для исследований. Под контролем старшего дизанера может общаться с респондентами в глубинках и даже проводить какую-то часть",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Саша",
            position: "Продуктовый дизайнер в Озон",
            avatarUrl: ImageOzonPerson,
            companyLogo: ImageOzonLogo,
            comment: "Круто исследует! Высокий уровень навыков. Активно применяет методы анализа данных и интервьюирования. Работали с учеником над проектом по созданию интерфейса для мобильного приложения, максимально подводит базу инфо под решения.",
            rate: 7.5
          }, {
            name: "Андрей",
            position: "Дизайн-лид из Самокат.Тех",
            avatarUrl: ImageSamokatPerson,
            companyLogo: ImageSamokatLogo,
            comment: "Способен систематически исследовать различные аспекты проекта, работает от цели до предложения визуала на основе очень детального, дотошнейшего ресерча. Впечатляет",
            rate: 7.5
          }, {
            name: "Катя",
            position: "Продуктовый дизайнер в Тинькофф",
            avatarUrl: ImageTinkoffPerson,
            companyLogo: ImageTinkoffLogo,
            comment: "Методичен, внимателен, копает глубоко, нестандартно складывает факты по итогу, хорошо делает выводы. Очень приятно читать исследования и кейсы от менти.",
            rate: 7.5
          }
        ],
      },
      {
        name: "Оформление выводов",
        description: "После исследований может сформировать некст степы для текущих задач",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Вадим",
            position: "Продуктовый дизайнер в Авито",
            avatarUrl: ImageAvitoPerson,
            companyLogo: ImageAvitoLogo,
            comment: "Четкие и информативные презентации. Удобная форма, можно не смотреть все исследование, но по выводам понятно все, что было сделано, от и до. ",
            rate: 7.5
          }, {
            name: "Саша",
            position: "Design Lead МТС Music",
            avatarUrl: ImageMTCPerson,
            companyLogo: ImageMTCLogo,
            comment: "Детально пишет выводы, отлично анализирует большой объем инфо в исследовании и способен писать не только поверхностные и очевидные вещи, но и очень интересные и неожиданные. Топово для продукта.",
            rate: 7.5
          }, {
            name: "Артем",
            position: "Продуктовый дизайнер в банке «Открытие»",
            avatarUrl: ImageOpenBankPerson,
            companyLogo: ImageOpenBankLogo,
            comment: "Хорошие. ясные выводы и предложения. Не просто наблюдения, а резюмирующие заключения.",
            rate: 7.5
          }
        ],
      },
      {
        name: "Проектирование сценария",
        description: "Пока мыслит категориями фич, а не решением конкретных болей. В его работу не нужно вносить много изменений, но все еще нуждается в страшем дизайнере. Может проектировать сценариями. Видит корнер кейсы и прокетирует их",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Саша",
            position: "Продуктовый дизайнер в Озон",
            avatarUrl: ImageOzonPerson,
            companyLogo: ImageOzonLogo,
            comment: "Менти преуспел в проектировании сценариев, трансформируя их в решения для конкретных потребностей пользователей. Способен видеть корнер-кейсы и учитывать их в деле, что радует.",
            rate: 7.5
          }, {
            name: "Андрей",
            position: "Дизайн-лид из Самокат.Тех",
            avatarUrl: ImageSamokatPerson,
            companyLogo: ImageSamokatLogo,
            comment: "Просматривается внимание к деталям и понимание, как превратить фичи в реальные решения для пользовательских проблем. Уверенно проектирует сценарии, хотя иногда требуется дополнительная поддержка от опытного дизайнера",
            rate: 7.5
          }, {
            name: "Катя",
            position: "Продуктовый дизайнер в Тинькофф",
            avatarUrl: ImageTinkoffPerson,
            companyLogo: ImageTinkoffLogo,
            comment: "Менти активно ищет способы превратить фичи в решения, которые закроют конкретные боли пользователей, отличное качество для участника любой команды",
            rate: 7.5
          }
        ],
      },
      {
        name: "Проектирование протов",
        description: "Глубокий анализ результатов тестирования, выявление основных трендов; может в более детальные прототипы для визуализации концепций. Эффективно использует аналитику для оптимизации пользовательского опыта",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Вадим",
            position: "Продуктовый дизайнер в Авито",
            avatarUrl: ImageAvitoPerson,
            companyLogo: ImageAvitoLogo,
            comment: "Хорошо разбирается в результатах тестирования, может их читать и анализировать. Создает детальные прототипы, способные учитывать опыт и предпочтения юзеров",
            rate: 7.5
          }, {
            name: "Саша",
            position: "Design Lead МТС Music",
            avatarUrl: ImageMTCPerson,
            companyLogo: ImageMTCLogo,
            comment: "Продуктивно превращает результаты тестирований в идеи для улучшения прототипов, сами прототипы получаются чистыми, функциональными, понятными, практически сразу готовыми к передаче в дальнейшую работу",
            rate: 7.5
          }, {
            name: "Артем",
            position: "Продуктовый дизайнер в банке «Открытие»",
            avatarUrl: ImageOpenBankPerson,
            companyLogo: ImageOpenBankLogo,
            comment: "Высочайшая детализация прототипов, кликабельные прототипы на компонентах и вариантах. Красота, очень приятно было смотреть макеты и комментировать",
            rate: 7.5
          }
        ],
      },
      {
        name: "Технические ограничения",
        description: "Знает ограничения каждой платформы при проектирование",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Саша",
            position: "Продуктовый дизайнер в Озон",
            avatarUrl: ImageOzonPerson,
            companyLogo: ImageOzonLogo,
            comment: "Менти отлично знаком с техническими ограничениями каждой платформы, не будет теряться при проектировке и разработке. ",
            rate: 7.5
          }, {
            name: "Андрей",
            position: "Дизайн-лид из Самокат.Тех",
            avatarUrl: ImageSamokatPerson,
            companyLogo: ImageSamokatLogo,
            comment: "Менти учитывает ограничения на каждом этапе проектирования, даже в процессе исследования понимает, как задать вопросы с учетом будущих тех.особенностей, которые известны заранее",
            rate: 7.5
          }, {
            name: "Катя",
            position: "Продуктовый дизайнер в Тинькофф",
            avatarUrl: ImageTinkoffPerson,
            companyLogo: ImageTinkoffLogo,
            comment: "Оптимально адаптированные к различным техническим средам продукты явно твой конек, дерзай! Ты все правильно видишь и чувствуешь, как идти в верном направлении",
            rate: 7.5
          }
        ],
      },
      {
        name: "Работа с текстами",
        description: "Может написать простой текст, чтобы закрыть необходимый для дизайна объем. Базово формулирует смыслы",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Вадим",
            position: "Продуктовый дизайнер в Авито",
            avatarUrl: ImageAvitoPerson,
            companyLogo: ImageAvitoLogo,
            comment: "Убедительный и информативный контент.  Может написать добротные тексты в интерфейс или на сайт, если не будет штатного копирайтера.",
            rate: 7.5
          },
          {
            name: "Саша",
            position: "Design Lead МТС Music",
            avatarUrl: ImageMTCPerson,
            companyLogo: ImageMTCLogo,
            comment: "Отлично пишет! Не зря есть профильное образование. Подкрутили навыки в свете работы с интерфейсами приложений и стало вообще бесподобно. Лаконично пропишет и донесет, что угодно.",
            rate: 7.5
          },
          {
            name: "Артем",
            position: "Продуктовый дизайнер в банке «Открытие»",
            avatarUrl: ImageOpenBankPerson,
            companyLogo: ImageOpenBankLogo,
            comment: "Грамотно формулирует, четко передает суть, сначала ушли в длинные тексты, потом по мере отработки пришли к добротным юиксовым текстам.",
            rate: 7.5
          }
        ],
      }]
  },
  {
    name: "Пипл менеджемнт",
    subtitle: "Ативные навыки",
    skills: [
      {
        name: "Менторство",
        description: "Не менторит",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Tinkoff",
            avatarUrl: Avatar,
            companyLogo: TinkoffLogo,
            comment: "Comment #2",
            rate: 7.5
          },
          {
            name: "Виктория",
            position: "Product дизайнер в Ozon",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #3",
            rate: 7.5
          }
        ],
      },
      {
        name: "Планирование сроков",
        description: "Базово планирует сроки выполнения своих небольших задач",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Планирование ресурсов",
        description: "Не планирует ресурсы, может сориентировать по срокам в рамках своей задачи",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Решение конфликтов внутри команды",
        description: "Распознает конфликты, не вмешивается в чужие. В случае недопонимания способен изложить свою позицию, отвечает только за ситуации, связанные лично с ним",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Управление процессами и ожиданиями",
        description: "Следует процессу, который определили старшие спецы. Понимает, к кому и куда идти, если «болит»",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }, {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: OzonLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      },
      {
        name: "Использование и создание гайдов",
        description: "Базово может собрать простой гайд для работы внутри команды. Использует гайды и не нуждается в проверке старшего дизайнера",
        comment: "Comment On Footer",
        reviews: [
          {
            name: "Виктория",
            position: "Product дизайнер в Yandex",
            avatarUrl: Avatar,
            companyLogo: YandexLogo,
            comment: "Comment #1",
            rate: 7.5
          }
        ],
      }]
  }
];

const App: FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // function asd() {
    //   let array: any[] = [];
    //   mock.forEach(element => {
    //     const skills = element.skills;
    //     console.log()
    //     skills.forEach(skill => {
    //       array.push(`${element.name} => ${skill.name}`)
    //     });
    //   });
    //   console.log(array);
    // }
    // asd();

    const username = 'Ireen_koz';

    dispatch({ type: FETCH_USER_REQUEST });
    fetchUserData(username)
      .then(res => {
        dispatch({ type: FETCH_USER_SUCCESS, payload: res });
        dispatch({ type: FETCH_SKILLS_SUCCESS, payload: mock });
      })
      .catch(error => {
        dispatch({ type: FETCH_USER_FAILURE, payload: error });
      })
      .finally(() => {
        setLoading(false); // Устанавливаем isLoading в false после завершения запроса
      });
  }, [dispatch]);

  // Если isLoading равен true, отображаем состояние загрузки
  if (isLoading) {
    return <></>;
  }

  return (
    <>
      {!isModalOpen && <Header />}
      <div className="container mx-auto px-4 pb-[100px] pt-[50px]">
        <main>
          <ProfileCard />
          <JobRecommendation />
          <Scoring />
          <WorkExperience setModalOpen={setModalOpen} />
          <Cases />
          <Publications />
        </main>
      </div>
    </>
  );
};

export default App;