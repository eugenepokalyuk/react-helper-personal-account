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
    skills: [{
      name: "Метрики",
      description: "Метрики Метрики и еще Метрики",
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
    }, {
      name: "Аналитика",
      description: "Аналитика Аналитика и еще Аналитика",
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
    }, {
      name: "Еще метрики",
      description: "Метрики Метрики и еще Метрики",
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
    skills: [{
      name: "Метрики",
      description: "Метрики Метрики и еще Метрики",
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
    }, {
      name: "Аналитика",
      description: "Аналитика Аналитика и еще Аналитика",
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
    }, {
      name: "Еще метрики",
      description: "Метрики Метрики и еще Метрики",
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
    skills: [{
      name: "Метрики",
      description: "Метрики Метрики и еще Метрики",
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
    }, {
      name: "Аналитика",
      description: "Аналитика Аналитика и еще Аналитика",
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
    }, {
      name: "Еще метрики",
      description: "Метрики Метрики и еще Метрики",
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
    skills: [{
      name: "Метрики",
      description: "Метрики Метрики и еще Метрики",
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
    }, {
      name: "Аналитика",
      description: "Аналитика Аналитика и еще Аналитика",
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
    }, {
      name: "Еще метрики",
      description: "Метрики Метрики и еще Метрики",
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
    skills: [{
      name: "Метрики",
      description: "Метрики Метрики и еще Метрики",
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
    }, {
      name: "Аналитика",
      description: "Аналитика Аналитика и еще Аналитика",
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
    }, {
      name: "Еще метрики",
      description: "Метрики Метрики и еще Метрики",
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
    skills: [{
      name: "Метрики",
      description: "Метрики Метрики и еще Метрики",
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
    }, {
      name: "Аналитика",
      description: "Аналитика Аналитика и еще Аналитика",
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
    }, {
      name: "Еще метрики",
      description: "Метрики Метрики и еще Метрики",
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
    name: "UX",
    subtitle: "Ативные навыки",
    skills: [{
      name: "Метрики",
      description: "Метрики Метрики и еще Метрики",
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
    }, {
      name: "Аналитика",
      description: "Аналитика Аналитика и еще Аналитика",
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
    }, {
      name: "Еще метрики",
      description: "Метрики Метрики и еще Метрики",
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
    name: "Пипл менеджемнт",
    subtitle: "Ативные навыки",
    skills: [{
      name: "Метрики",
      description: "Метрики Метрики и еще Метрики",
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
    }, {
      name: "Аналитика",
      description: "Аналитика Аналитика и еще Аналитика",
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
    }, {
      name: "Еще метрики",
      description: "Метрики Метрики и еще Метрики",
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
]

const App: FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(true);

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