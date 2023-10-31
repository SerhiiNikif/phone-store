import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import FullPhone from "./pages/FullPhone";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="phone/:id" element={<FullPhone />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
