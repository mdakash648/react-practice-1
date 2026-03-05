import React from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Container from './components/common/Container';
import Demo from './components/common/Demo';
import Test from './components/practice/Test';
import Card1 from './components/practice/props/Card1';
import Card2 from './components/practice/props/card2';
import Card3 from './components/practice/props/Card3';
import Paragraph from './components/practice/props/Paragraph';
import CardWraper from './components/practice/props/CardWraper';
import UseState from './components/practice/localState/UseState';
import Counter from './components/practice/localState/Counter';
import ParagraphShow from './components/practice/localState/ParagraphShow';
import InputFieldLivePreview from './components/practice/localState/InputFieldLivePreview';
import SimpleLikeButton from './components/practice/localState/SimpleLikeButton';
import DarkLiteMode from './components/practice/localState/DarkLiteMode';
import CharacterCounter from './components/practice/localState/CharacterCounter';
import SimpleTodo from './components/practice/localState/SimpleTodo';
import LoginSimulation from './components/practice/localState/LoginSimulation';
import SimpleAccordion from './components/practice/localState/Accordion';
import MultiInputForm from './components/practice/FromHandaling/MultiInputForm';

const App = () => {
  return (
    <>
      <Header />
      <Demo />
      <Container>
        <Test name='Akash' age='22' />
        <Test name='Nazmul' age='20' />
        <Test name='lkdsj' age='15' />
        <CardWraper>
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
        </CardWraper>
        <CardWraper>
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
        </CardWraper>
        <Card3 product='mengo' price='500' isStock={true} />
        <Card3 product='sdjfl' price='500' isStock={false} />
        <Card3 product='lskfl' price='500' isStock={true} />
        <Paragraph name='Akash' age='20' clas='10th' />
        {/* localState */}
        <UseState />
        <Counter />
        <ParagraphShow />
        <InputFieldLivePreview />
        <SimpleLikeButton />
        <DarkLiteMode />
        <CharacterCounter />
        <SimpleTodo />
        <LoginSimulation />
        <SimpleAccordion />
        {/* FromHandaling */}
        <MultiInputForm />
      </Container>
      <Footer />
    </>
  );
};

export default App;
