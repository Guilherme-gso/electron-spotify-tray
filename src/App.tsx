import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyles';

const App: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
   <>
     <GlobalStyle />
     <h1>Spotify</h1>
   </>
  );
};

export default App;