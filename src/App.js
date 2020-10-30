import React from 'react'
import './App.css'
import {Fragment} from "react";
import Header from "./components/header/header";
import HomeContent from "./components/content/content";
import Footer from "./components/footer/footer";
import './components/css/style.css'

function App() {
  return (
    <Fragment>
      <Header/>
      <HomeContent/>
      <Footer/>
    </Fragment>
  )
}

export default App
