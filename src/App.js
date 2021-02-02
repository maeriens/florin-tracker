import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ContentWrapper from './components/ContentWrapper';
import ChallengesPage from './components/ChallengesPage';
import ChallengePage from './components/ChallengePage';
import About from './components/About';

function App() {

  return (
    <BrowserRouter>
      <ContentWrapper>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route >

          <Route exact path='/beginner'>
            <ChallengesPage level='beginner' />
          </Route>
          <Route exact path='/intermediate'>
            <ChallengesPage level='intermediate' />
          </Route>
          <Route exact path='/advanced'>
            <ChallengesPage level='advanced' />
          </Route>

          <Route path='/:level/:exercise' component={ChallengePage} />

          <Route path='/about'>
            <About />
          </Route>

          <Route>
            <Redirect push to='/' />
          </Route>
        </Switch>
      </ContentWrapper>
    </BrowserRouter>
  )
}

export default App;
