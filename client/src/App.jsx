import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullPhone = lazy(() => import(/* webpackChunkName: "FullPhone" */ './pages/FullPhone'));
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="phone/:id" element={<FullPhone />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
