import React from 'react';
import PageHeader from './modules/PageHeader'
import GridArticles from './modules/GridArticles'
import NewsList from './data/gm-test';
import logo from "./images/gm-logo.svg";

import './App.css'


function App() {
  return (
    <div>
      <PageHeader logo={logo} />
      <GridArticles list={NewsList} />
    </div>
  );
}

export default App;
