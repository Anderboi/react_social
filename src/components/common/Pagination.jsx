/* eslint-disable jsx-a11y/anchor-is-valid */
import css from "./Pagination.module.css";

const Pagination = ({
  selectedPage,
  pageSize,
  itemsTotalCount,
  onPageChanged,
  pagesRange,
}) => {
  const pages = Math.ceil(itemsTotalCount / pageSize);

  const pageNumbers = [];

  for (let x = 1; x <= pages; x++) {
    pageNumbers.push(x);
  }

  const halfRange = Math.floor(pagesRange / 2);

  return (
    <div className={`${css.pagination} ${css.page}`}>
      <div
        className={`${selectedPage < halfRange + 2 && css.page_hidden}`}
        onClick={() => {
          onPageChanged(1);
        }}
      >
        First
      </div>
      {pageNumbers
        .map((p) => {
          return (
            <div
              key={p}
              className={`${selectedPage === p && css.selectedPage} ${
                css.page
              }`}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </div>
          );
        })
        .slice(
          selectedPage > halfRange ? selectedPage - (halfRange + 1) : 0,
          selectedPage > halfRange ? selectedPage + halfRange : pagesRange
        )}
      <div
        className={`${
          selectedPage > pages - (halfRange + 1) && css.page_hidden
        }`}
        onClick={() => {
          onPageChanged(pages);
        }}
      >
        ...{pages}
      </div>
    </div>
  );
};

export default Pagination;
