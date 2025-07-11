import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Layout from './components/Layout/Layout'
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Layout" element={<Layout/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
