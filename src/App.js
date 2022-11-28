import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Deposit from './Pages/Deposit/Deposit';
import ByCredio from './Pages/Deposit/ByCredio';
import ByCard from './Pages/Deposit/ByCard';
import ByOtherBank from './Pages/Deposit/ByOtherBank';
import PreviewOtherBank from './Pages/Deposit/PreviewOtherBank';
import Saving from './Pages/Savings/Saving';
import SavingPreview from './Pages/Savings/SavingPreview';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="app-container">
          <Sidebar/>
          <div className="body">
            <Routes>
              <Route exact path='/' element={<Dashboard/>}></Route>
              <Route exact path='/deposit' element={<Deposit/>}></Route>
              <Route exact path='/bycredio' element={<ByCredio/>}></Route>
              <Route exact path='/bycard' element={<ByCard/>}></Route>
              <Route exact path='/bybank' element={<ByOtherBank/>}></Route>
              <Route exact path='/preview' element={<PreviewOtherBank/>}></Route>
              <Route exact path='/savings' element={<Saving/>}></Route>
              <Route exact path='/savingpreview' element={<SavingPreview/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
