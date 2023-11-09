import React, { useState } from 'react';
import Header from './components/Header';
import ContentContainer from './components/ContentContainer';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about'); // Default to 'About Me'

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app dark-theme"> 
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="main-content">
        <ContentContainer currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
