import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PhotoCarousel from './components/PhotoCarousel';
// import FullScreenPhoto from './components/FullScreenPhoto';
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <div className="flex flex-col h-screen ">
    <Header />
    <div className="relative flex-grow h-full bg-gray-200">
      {/* <FullScreenPhoto photo={currentPhoto} /> */}
      <PhotoCarousel  />
    </div>
    <Footer />
  </div>
   
  );
};

export default App;


 