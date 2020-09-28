import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'ramorim8'}
            name={'Rafael Amorim'}
            avatarUrl={'https://avatars0.githubusercontent.com/u/24491482?v=4'}
            followers={15}
            following={7}
            company={'Rocketseat'}
            location={'Vancouver, Canada'}
            email={'raff.code@gmail.com'}
            blog={'raffcode.com'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'ramorim8'}
                  reponame={'youtube-content'}
                  description={'Contains all of my ui clone projects'}
                  language={n % 3 === 0 ? 'JavaScript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
