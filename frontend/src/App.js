// import logo from './logo.svg';
import './App.css';
import {AuthProvider} from "./context/AuthContext"

import LandingPage from './pages/LandingPage'
import Authentication from './pages/Authentication'
import VideoMeet from './pages/VideoMeet'
import HomeComponent from './pages/home';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
function App() {
  return (
    <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                    <Route path='/'element={<LandingPage/>}/>
                    <Route path='/auth'element={<Authentication/>}/>
                    <Route path='/home'element={<HomeComponent />} />                    
                    <Route path='/:url'element={<VideoMeet/>}/>

                </Routes>
                </AuthProvider>
            </Router>
        </div>
  );
}

export default App;
