import React from 'react';
import Container from './Container';
import Span from './Span';
import Link from './Link';
import List from './List';
import ListItem from './ListItem';
import Image from './Image';
import Input from './Input';

export default function ContainerSearch() {
  return (
    <Container className='container-search'>
      <Container className='container-search-main'>
        <Container className='home-tabs'>
          <List className="list" items={searchTabs}>
            {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
          </List>
        </Container>
        <Container className='searchBlock'>
          <Input type='text' className='searchField' />
          <Container className='searchBtn' title='Найти' />
        </Container>
        <Container className='home-promo'>
          <Span className='home-promo-first' title='Найдётся всё' />
        </Container>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv6Xd5T1AB7fsWwdmDwmZOdEkYXsu-BbUSs_snZgZDtiXJik2' className='home-promo-ad' />
      </Container>
    </Container>
  );
}

const searchTabs = [
  'Видео', 
  'Картинки', 
  'Новости', 
  'Карты', 
  'Маркет', 
  'Переводчик', 
  'Музыка', 
  'Эфир', 
  'ещё'
];