import React from 'react';
import MyHeader from './MyHeader/MyHeader';
import NavLink from './NavLink/NavLink';
import Content from './Content/Content';
import MyFooter from './MyFooter/MyFooter';
// import ParentComponent from './ParentComponent/ParentComponent';

function App() {
  const myLinks = ["Notícias", "Esportes", "Clima"]
  return (
    /* 
    AULA 3 - PARTE 3  ↓
    <div>
      <MyHeader title = "Diário de notícias" />
      <NavLink links ={myLinks} />
      <Content />
      <MyFooter />
    </div>

    AULA 3 - PARTE 4  ↓ 
    <div>
      <ParentComponent>
        <p>texto 1</p>
        <p>texto 2</p>
        <p>texto 3</p>
        <p>texto 4</p>
        <p>texto 5</p>
        <p>texto 6</p>
        <span>
          <p>texto 7 = dentro do span conta somente 1</p>
          <p>texto 8 = dentro do span conta somente 1</p>
          <p>texto 9 = dentro do span conta somente 1</p>
        </span>
      </ ParentComponent>
    </div>

    AULA 3 - PARTE 5  ↓   */
    <>
      <MyHeader title="Site de notícias da Ana" />
      <NavLink links={myLinks} />
      <Content />
      <MyFooter />
    </>
  );
}

export default App;
