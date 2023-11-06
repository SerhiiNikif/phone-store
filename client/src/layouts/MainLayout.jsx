import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header, Footer } from "../components";
import { selectUser } from "../redux/user/selectors";

const MainLayout = () => {
  const { isAuth } = useSelector(selectUser);
  
  return isAuth ? (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  ) : (
    <Navigate replace to="/login" />
  )
};

export default MainLayout;
