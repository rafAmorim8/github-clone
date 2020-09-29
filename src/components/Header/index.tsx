import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  const navigateHome = () => {
    navigate('/');
  }

  return (
    <Container>
      <GithubLogo onClick={navigateHome} />
      <SearchForm onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Username or Repo..." value={search} onChange={e => setSearch(e.currentTarget.value)} />
      </SearchForm>
    </Container>
  );
};

export default Header;
