import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import { PhoneBlock, Categories, Sort, Skeleton, Pagination } from "../components";
import { sortList } from "../components/Sort";
import { SearchContext } from "../App";
import { setCategoryId, setCurrentPage, setCountPages, setLimit, setFilters } from "../redux/slices/filterSlice";

const API_URL =
  process.env.REACT_APP_STAGE === "development" &&
  process.env.REACT_APP_API_URL;

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const {categoryId, sort, currentPage, countPages, limit} = useSelector((state) => state.filter);
  const {searchValue} = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (index) => {
    dispatch(setCategoryId(index));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchPhones = () => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `${API_URL}?page=${currentPage}&limit=${limit}&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        dispatch(setCountPages(res.data.countPages));
        dispatch(setLimit(res.data.limit));
        setItems(res.data.phones);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  };

  // If you changed the parameters and there was a first render
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  // If there was a first render, then we check the URL parameters, if there are any, then we save them in redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)); // remove the '?'
      const sort = sortList.find(
        (obj) => params.sortProperty === obj.sortProperty
      );

      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  // If there was a first render, then we ask for phone numbers
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      fetchPhones();
    }

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const phones = items.map((obj) => <PhoneBlock key={obj._id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onCangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All phones</h2>
      <div className="content__items">{isLoading ? skeletons : phones}</div>
      <Pagination limit={limit} countPages={countPages} currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
