import React from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Container from './components/common/Container';
import Demo from './components/common/Demo';
import Test from './components/practice/Test';
import Card1 from './components/practice/props/Card1';
import Card2 from './components/practice/props/card2';

const App = () => {
  return (
    <>
      <Header />
      <Demo />
      <Container>
        <Test name='Akash' age='22' />
        <Test name='Nazmul' age='20' />
        <Test name='lkdsj' age='15' />
        <div className='flex flex-wrap items-center justify-center gap-4 my-10'>
          <Card1
            img='https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
            title='this is title'
            contant='this is contact'
            tag={['fresh', 'food', 'fresh']}
            btnText='read me'
          />
          <Card1
            img='https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg'
            title='strawberry'
            contant="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            tag={['test', 'food', 'fresh']}
            btnText='Read Me'
          />
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 my-10'>
          <Card2
            img='https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
            name='Akash'
            age='22'
            Profession='student'
          />
          <Card2
            img='https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg'
            name='Nazmul'
            age='18'
            Profession='job'
          />
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default App;
