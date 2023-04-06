import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import SearchBar from '../partials/SearchBar';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <SearchBar />
      </main>
      <Footer />

    </div>
  );
}

export default Home;