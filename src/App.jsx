import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Globalstyle/global';
import MyFriendHome from './view/MyFriendHome';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MyFriendHome />
    </BrowserRouter>

  );
}

export default App;
