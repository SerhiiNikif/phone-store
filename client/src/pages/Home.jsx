import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import { PhoneBlock, Categories, Sort, Skeleton, Pagination } from "../components";
import { sortList } from "../components/Sort";
import { setCategoryId, setCurrentPage, setFilters, selectFilter } from "../redux/slices/filterSlice";
import { fetchPhones } from "../redux/slices/asyncActions";
import { selectPhoneData } from "../redux/slices/phoneSlise";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status, limit, countPages } = useSelector(selectPhoneData);

  const onChangeCategory = useCallback((index) => {
    dispatch(setCategoryId(index));
  }, []);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPhones = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPhones({
        category,
        sortBy,
        order,
        search,
        currentPage,
        limit
      })
    );

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
    getPhones();

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
        <Sort value={sort} />
      </div>
      <h2 className="content__title">All phones</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>An error has occurred 😕</h2>
          <p>Unfortunately, we were unable to obtain phones. Please try again later.</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : phones}
        </div>
      )}
      <Pagination limit={limit} countPages={countPages} currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
