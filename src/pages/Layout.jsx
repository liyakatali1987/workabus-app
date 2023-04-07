import React from 'react';

import SearchBar from '../partials/SearchBar';

const  LayoutPage = () => {
  return (
    <div className="gap-8 py-15 md:py-12 border-t border-gray-200">
    {/* <div className="flex flex-col min-h-screen overflow-hidden"> */}
      <main className="flex-grow">
        <SearchBar />
      </main>
    </div>
  );
}

export default LayoutPage;