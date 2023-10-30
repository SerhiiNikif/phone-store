import "./scss/app.scss";
import { Header, Categories, Sort, PhoneBlock } from "./components";

import phones from "./assets/phones.json";

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
            {phones.map((obj) => (
              <PhoneBlock key={obj.id} {...obj}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
