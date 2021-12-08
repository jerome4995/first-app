import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './components/router/Routes';


const App = () => {
    return (
        <BrowserRouter>
          <BaseRouter />
        </BrowserRouter>
      );
}

export default App;

