import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

export const Pagination = ({ countPhones, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={Math.round(countPhones / 4)}
      renderOnZeroPageCount={null}
    />
  );
};
