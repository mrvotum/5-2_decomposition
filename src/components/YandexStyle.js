import React from 'react';
import Container from './Container';
import ContainerHeader from './ContainerHeader';
import ContainerSearch from './ContainerSearch';

export default function YandexStyle() {
  return (
    <div className="main">
      <Container className='container'>
        <ContainerHeader />
        <ContainerSearch />
      </Container>
    </div>
  );
}