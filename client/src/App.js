import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavbarFn from "./Components/Navbar";
import Orders from "./Components/Orders";
import MadeupData from "./Components/MadeUpData";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DataProvider from "./Config/contex";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NavbarFn />} />
        </Routes>
        <Routes>
          <Route path="orders" element={<Orders />} />
        </Routes>
        <Routes>
          <Route path="mydata" element={<MadeupData />} />
        </Routes>
      
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
