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

const mock = [
  {
    name: "Проактивность",
    subtitle: "Ативные навыки",
    // description: "Навык Проактивность отскорен 7 специалистами на средний балл 7,5 из 10, что соотвествует ожиданию рынка",
    skills: [{
      name: "Метрики",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7.5
        }
      ],
    }, {
      name: "Аналитика",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 9.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 9.5
        }
      ],
    }, {
      name: "Бизнес",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 6.7
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 6.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 6.9
        }
      ],
    }, {
      name: "Исследования",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 6.6
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 4.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 3.3
        }
      ],
    }]
  },
  {
    name: "Автономность",
    subtitle: "Автономные навыки",
    // description: "Навык Автономность отскорен 7 специалистами на средний балл 7,5 из 10, что соотвествует ожиданию рынка",
    skills: [{
      name: "Метрики",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 2.2
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 2.3
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 5
        }
      ],
    }, {
      name: "Аналитика",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 6
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 8
        }
      ],
    }, {
      name: "Бизнес",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 9
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 10
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 1
        }
      ],
    }, {
      name: "Исследования",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 2
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 3
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 4
        }
      ],
    }]
  },
  {
    name: "Коммуникация",
    subtitle: "Коммуникационные навыки",
    // description: "Навык Коммуникация отскорен 7 специалистами на средний балл 7,5 из 10, что соотвествует ожиданию рынка",
    skills: [{
      name: "Метрики",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 6
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7
        }
      ],
    }, {
      name: "Аналитика",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 8
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 9
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 10
        }
      ],
    }, {
      name: "Бизнес",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 1
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 2
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 3
        }
      ],
    }, {
      name: "Исследования",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 4
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 6
        }
      ],
    }]
  },
  {
    name: "Продукт",
    subtitle: "Продуктовые навыки",
    // description: "Навык «Продукт» отскорен 7 специалистами на средний балл 7,5 из 10, что соотвествует ожиданию рынка",
    skills: [{
      name: "Метрики",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 8
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 9
        }
      ],
    }, {
      name: "Аналитика",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 10
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 1
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 2
        }
      ],
    }, {
      name: "Бизнес",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 3
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 4
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 5
        }
      ],
    }, {
      name: "Исследования",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 6
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 8
        }
      ],
    }]
  },
  {
    name: "Инструменты",
    subtitle: "Другие навыки",
    // description: "Навык Инструменты отскорен 7 специалистами на средний балл 7,5 из 10, что соотвествует ожиданию рынка",
    skills: [{
      name: "Метрики",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 9
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 10
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 1
        }
      ],
    }, {
      name: "Аналитика",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 2
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 3
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 4
        }
      ],
    }, {
      name: "Бизнес",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 6
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7
        }
      ],
    }, {
      name: "Исследования",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 8
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 9
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 10
        }
      ],
    }]
  },
  {
    name: "UI",
    subtitle: "UI навыки",
    // description: "Навык «Продукт» отскорен 7 специалистами на средний балл 7,5 из 10, что соотвествует ожиданию рынка",
    skills: [{
      name: "Метрики",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 1
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 2
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 3
        }
      ],
    }, {
      name: "Аналитика",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 4
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 6
        }
      ],
    }, {
      name: "Бизнес",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 8
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 9
        }
      ],
    }, {
      name: "Исследования",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 10
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 1
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 2
        }
      ],
    }]
  },
  {
    name: "UX",
    subtitle: "UX навыки",
    // description: "Навык «Продукт» отскорен 7 специалистами на средний балл 7,5 из 10, что соотвествует ожиданию рынка",
    skills: [{
      name: "Метрики",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7.5
        }
      ],
    }, {
      name: "Аналитика",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7.5
        }
      ],
    }, {
      name: "Бизнес",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7.5
        }
      ],
    }, {
      name: "Исследования",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7.5
        }
      ],
    }]
  },
  {
    name: "Пипл менеджмент",
    subtitle: "Пипл менеджмент навыки",
    // description: "Навык «Продукт» отскорен 7 специалистами на средний балл 7,5 из 10, что соотвествует ожиданию рынка",
    skills: [{
      name: "Метрики",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7.5
        }
      ],
    }, {
      name: "Аналитика",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7.5
        }
      ],
    }, {
      name: "Бизнес",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7.5
        }
      ],
    }, {
      name: "Исследования",
      reviews: [
        {
          name: "Виктория",
          position: "Product дизайнер в Yandex",
          avatarUrl: Avatar,
          companyLogo: YandexLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Tinkoff",
          avatarUrl: Avatar,
          companyLogo: TinkoffLogo,
          rate: 7.5
        },
        {
          name: "Виктория",
          position: "Product дизайнер в Ozon",
          avatarUrl: Avatar,
          companyLogo: OzonLogo,
          rate: 7.5
        }
      ],
    }]
  },
]

const App: FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const username = 'Ireen_koz';

  //   dispatch({ type: FETCH_USER_REQUEST });
  //   fetchUserData(username)
  //     .then(res => {
  //       dispatch({ type: FETCH_USER_SUCCESS, payload: res });
  //     })
  //     .catch(error => {
  //       dispatch({ type: FETCH_USER_FAILURE, payload: error });
  //     });
  // });
  useEffect(() => {
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

    // dispatch({ type: FETCH_SKILLS_REQUEST });
    // fetchUserData(username)
    //   .then(res => {
    //     dispatch({ type: FETCH_SKILLS_SUCCESS, payload: res });
    //   })
    //   .catch(error => {
    //     dispatch({ type: FETCH_SKILLS_FAILURE, payload: error });
    //   })
    //   .finally(() => {
    //     setLoading(false); // Устанавливаем isLoading в false после завершения запроса
    //   });
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