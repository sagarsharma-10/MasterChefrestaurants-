import Dishes from "./Data";
// import FoodItems from "./Components/FoodItems";
import CartItems from "./Components/CartItems";
// import  from "./Components/Navlink";
import { Route, Routes } from "react-router";
// import Section1 from "./Components/Section1";
import Home from "./Components/Home";
import Navlink from "./Components/Navlink";

function App() {
  return (
    <div>
      <Navlink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
    </div>
  )
}

export default App;