import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavbarFn from "./Components/Navbar";
import Orders from "./Components/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarFn />} />
      </Routes>
      <Routes>
        <Route path="orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
