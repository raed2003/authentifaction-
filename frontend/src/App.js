import './App.css';
import {Routes,Route} from 'react-router-dom'
import SignUp from './component/Register';
import SignInSide from './component/Login';
import ResponsiveAppBar from './component/Navbar';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
         <Route path="/" element={<SignUp/>}/>
         <Route path="/LOGIN" element={<SignInSide/>}/>
         <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
