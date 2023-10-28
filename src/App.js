import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import Post from './pages/post/Post';
import Profile from './pages/profile/Profile';
function App() {
  return (
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/post/" element={<Post/>}/>
        <Route path="/profile/" element={<Profile/>}/>
         </Routes>
     </BrowserRouter>
   );
}

export default App;
