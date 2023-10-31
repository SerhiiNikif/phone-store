import { useEffect, useState } from "react";

import { PhoneBlock, Categories, Sort, Skeleton } from "../components";

const API_URL =
  process.env.REACT_APP_STAGE === "development" &&
  process.env.REACT_APP_API_URL;

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "popularity",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

    fetch(`${API_URL}?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onCangeCategory={(index) => setCategoryId(index)}
        />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
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
