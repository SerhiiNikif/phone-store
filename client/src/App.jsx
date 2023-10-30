import "./scss/app.scss";
import { Header, Categories, Sort } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
