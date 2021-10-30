import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/Landing/LandingPage';
import ResumeLanding from './components/Resume/ResumeLanding';
import ProjectsLanding from './components/Projects/ProjectsLanding';
import ContactLanding from './components/Contact/ContactLanding';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Footer />
      <Switch>
        <Route path='/' exact={true}>
          <LandingPage/>
        </Route>
        <Route path='/resume' exact={true}>
          <ResumeLanding />
        </Route>
        <Route path='/projects' exact={true}>
          <ProjectsLanding />
        </Route>
        <Route path='/contact' exact={true}>
          <ContactLanding />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
