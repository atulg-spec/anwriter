import React from "react";
import Nav from './parts/Navbar';
import TextForm from './parts/TextForm';
import Message from './parts/Message'
import './App.css';

function App() {

  return (
    <>
    <meta name="viewport" content="width-device-width,initial-scale=1.0"></meta>
    <Nav head="TypeWriter"></Nav>
    <Message></Message>
    <TextForm />

    </>
  );
}

export default App;
