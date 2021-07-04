import {Navbar} from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Routes,Route } from "react-router";
import "./styles.css";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
