import "./scss/app.scss";
import { Header, Categories, Sort, PhoneBlock } from "./components";

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
          <h2 className="content__title">All phones</h2>
          <div className="content__items">
            <PhoneBlock title="Apple iPhone 15 Pro" price={50000} />
            <PhoneBlock title="Apple iPhone 14" price={45000} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
