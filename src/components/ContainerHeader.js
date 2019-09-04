import React from 'react';
import Container from './Container';
import Header from './Header';
// import Span from './Span';
import Link from './Link';
import List from './List';
import ListItem from './ListItem';
// import Image from './Image';

import DateComponent from './Date';

export default function ContainerFirst() {
  return (
    <Container className='container-header'>
      <Header className='header'>
        <List className='header-news-tabs' items={newsTabs}>
          {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
        </List>
      </Header>
      <Container className='teaser'>
        <List className='list' items={news}>
          {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
        </List>
      </Container>
    </Container>
  );
}

const news = [
  'Вы работаете в стартапе', 
  'который решил тягаться с самим Яндексом в части', 
  'Это, конечно же шутка, но задача нешуточная',
];

const newsTabs = [
  'Сейчас в СМИ', 
  'В Германии', 
  'Рекомендуем',
  <DateComponent />
];