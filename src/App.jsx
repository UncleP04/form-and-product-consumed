import './App.css';
import React from 'react';
import FormValidated from './components/Form';
import ImageForm from './components/ImageFolder';
import Products from './components/products';

function App() {
  return (
    <div className="App">
      {/* <div className="container">
        <FormValidated />
        <ImageForm />
      </div> */}
      <Products />
    </div>
  );
}

export default App;
