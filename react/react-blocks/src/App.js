import './App.css';
import Header from './components/Header';
import Advertisment from './components/Advertisment';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainPage">
        <Navigation />
        <Main>
            <div className="subs">
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
            <div>
              <Advertisment />
            </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
