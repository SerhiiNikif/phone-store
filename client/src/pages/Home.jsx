import { useContext, useEffect, useState } from "react";

import { PhoneBlock, Categories, Sort, Skeleton, Pagination } from "../components";
import { SearchContext } from "../App";

const API_URL =
  process.env.REACT_APP_STAGE === "development" &&
  process.env.REACT_APP_API_URL;

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [countPhones, setCountPhones] = useState(0);
  const [sortType, setSortType] = useState({
    name: "popularity",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `${API_URL}?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCountPhones(json.countPhones);
        setItems(json.result);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const phones = items.map((obj) => <PhoneBlock key={obj._id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

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
      <div className="content__items">{isLoading ? skeletons : phones}</div>
      <Pagination
        countPhones={countPhones}
        onChangePage={(number) => setCurrentPage(number)}
      />
    </div>
  );
}

export default Home;
