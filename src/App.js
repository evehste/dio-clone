
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/Feed/Feed";
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
     </Routes>
    </Router>
  );
}

export default App;
