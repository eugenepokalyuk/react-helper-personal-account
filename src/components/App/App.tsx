import { FC, useEffect, useState } from 'react';
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../../services/actions/user';
import { fetchUserData } from '../../utils/api';
import { useAppDispatch } from '../../utils/hooks';
import Cases from '../Cases/Cases';
import Header from '../Header/Header';
import JobRecommendation from '../JobRecommendation/JobRecommendation';
import ProfileCard from '../ProfileCard/ProfileCard';
import Publications from '../Publications/Publications';
import Scoring from '../Scoring/Scoring';
import WorkExperience from '../WorkExperience/WorkExperience';

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