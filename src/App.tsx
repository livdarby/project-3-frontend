import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import ProductList from "../components/ProductsList"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/product/:productId" element={<ShowProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sellerhome" element={<SellerHome />} />
        <Route path="/editproduct/:productId" element={<EditProduct />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
