
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import { CartProvider } from './store/cart-context';

function App() {
  return (
   <Router>
   <CartProvider>
   <NavBar />
      <Routes>
      <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
     </Routes>
     <Footer />
     </CartProvider>
   </Router>
  );
}

export default App;
