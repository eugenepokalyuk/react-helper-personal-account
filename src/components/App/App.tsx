import React from 'react';
import Cases from '../Cases/Cases';
import Header from '../Header/Header';
import JobRecommendation from '../JobRecommendation/JobRecommendation';
import ProfileCard from '../ProfileCard/ProfileCard';
import Publications from '../Publications/Publications';
import Scoring from '../Scoring/Scoring';
import WorkExperience from '../WorkExperience/WorkExperience';

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <main>
        <ProfileCard />
        <JobRecommendation />

        <Scoring />
        <WorkExperience />
        <Cases />
        <Publications />
      </main>
    </div>
  );
};

export default App;