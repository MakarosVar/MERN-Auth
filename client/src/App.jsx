import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/sign-in" exact element={<SignIn />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
