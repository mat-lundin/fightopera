import './App.css';
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/Home';
import Shows from './pages/Shows';
import Merch from './pages/Merch';
import Roster from './pages/Roster';
import About from './pages/About';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <Nav />
        <Routes>
          <Route path = 'fightopera/' element = {<Home />}></Route>
          <Route path = 'fightopera/shows/' element = {<Shows />}></Route>
          <Route path = 'fightopera/merch' element = {<Merch />}></Route>
          <Route path = 'fightopera/roster/' element = {<Roster />}></Route>
          <Route path = 'fightopera/about/' element = {<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
