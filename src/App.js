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
import Withdraw from './Pages/Withdraw/Withdraw';
import CardPin from './Pages/Withdraw/CardPin';
import Account from './Pages/Account/Account';
import Otp from './Pages/Account/Otp';
import CheckingOtp from './Pages/Account/CheckingOtp';
import AccountDetails from './Pages/Account/AccountDetails';
import Transaction from './Pages/Transaction/Transaction';
import Chat from './Pages/Chat/chat';
import Profile from './Pages/Profile/Profile';
import ProfileForm from './Pages/Profile/ProfileForm';

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
              <Route exact path='/cashless' element={<Saving/>}></Route>
              <Route exact path='/savingpreview' element={<SavingPreview/>}></Route>
              <Route exact path='/withdraw' element={<Withdraw/>}></Route>
              <Route exact path='/pin' element={<CardPin/>}></Route>
              <Route exact path='/openaccount' element={<Account/>}></Route>
              <Route exact path='/getotp' element={<Otp/>}></Route>
              <Route exact path='/checking' element={<CheckingOtp/>}></Route>
              <Route exact path='/accountdetails' element={<AccountDetails/>}></Route>
              <Route exact path='/transaction' element={<Transaction/>}></Route>
              <Route exact path='/people' element={<Chat/>}></Route>
              <Route exact path='/profile' element={<Profile/>}></Route>
              <Route exact path='/profileform' element={<ProfileForm/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
