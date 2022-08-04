import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home'
import './App.css';
import DemoHigherOrderComponent from './pages/DemoHigherOrderComponent/DemoHigherOrderComponent';
import Navigation from './layouts/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="route-container">
        <Routes>
          <Route path='/' element={<Home />} index></Route>
          <Route path='/higher-order-function' element={<DemoHigherOrderComponent />} index></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
