import React from 'react';
// import logo from './logo.svg';
// import './App.module.css';
import styles from './App.module.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import DevelopersList from './components/developersList/developersList';
import Header from './components/header/header';
import FiltersSection from './components/filtersSection/filtersSection';
import RepositoriesList from './components/repositoriesList/repositoriesList'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <FiltersSection />
        <div className={styles.container}>
            <Routes>
                <Route path="/developers" element={<DevelopersList />} />
                <Route path="/" element={<RepositoriesList />} />
            </Routes>
        </div>

    </BrowserRouter>
  );
}

export default App;
