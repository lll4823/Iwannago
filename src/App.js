import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Youtube from './routes/Youtube';
import Google from './routes/Google';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/google" component={Google} />
    </HashRouter>
  );
}

export default App;
