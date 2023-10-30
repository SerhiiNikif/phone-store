import "./scss/app.scss";
import { Header, Categories, Sort, PhoneBlock } from "./components";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_STAGE === 'development' && process.env.REACT_APP_API_URL;

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

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
            {items.map((obj) => (
              <PhoneBlock key={obj._id} {...obj}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
