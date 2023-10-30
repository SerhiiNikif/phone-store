import { useEffect, useState } from "react";

import { PhoneBlock, Categories, Sort, Skeleton } from "../components";

const API_URL = process.env.REACT_APP_STAGE === 'development' && process.env.REACT_APP_API_URL;

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All phones</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PhoneBlock key={obj._id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
