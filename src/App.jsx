import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/HomePage/Home";
import Contact from './Pages/Contactpage/Contact';
import About from "./Pages/Aboutpage/About";
import Sign from "./Pages/Signinpage/Sign";
import Account from "./Pages/Accountpage/Accaunt";
import Cart from "./Pages/Cart/Cart";
import Check from "./Pages/CheckOut/Check";
import Error from "./Pages/Errorpage/Error";
import Product from "./Pages/Productpage/Product";
import Login from "./Pages/Loginpage/Login"
import Wishlist from "./Pages/Wishlist/Wishlist";


export default function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="sign" element={<Sign/>} />
          <Route path="account" element={<Account/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="check" element={<Check/>} />
          <Route path="error" element={<Error/>} />
          <Route path="product" element={<Product/>} />
          <Route path="wish" element={<Wishlist/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);