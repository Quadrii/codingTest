import { Home } from './page/home';
import { Route, Routes } from 'react-router';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
