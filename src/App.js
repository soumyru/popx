import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreateAccountButton from './components/CreateAccountButton';
import LoginButton from './components/LoginButton';
import Welcome from './components/Welcome';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import AccountPage from './components/AccountPage';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/sign-in-page' element={<SignInPage/>}/>
        <Route path='/sign-up-page' element={<SignUpPage/>}/>
        <Route path='/account-page' element={<AccountPage/>}/>
        
        <Route exact path='/' element={
        <>
        <div className="container">
        <LoginButton/>
        <CreateAccountButton/>
        <Welcome/>
        </div>
        </>
        }/>
        </Routes>
    </BrowserRouter>
    
</>
  );
}

export default App;

