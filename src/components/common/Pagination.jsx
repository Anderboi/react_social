/* eslint-disable jsx-a11y/anchor-is-valid */
import css from "./Pagination.module.css";

const Pagination = ({
  selectedPage,
  pageSize,
  itemsTotalCount,
  onPageChanged,
  pagesRange
}) => {


  const pages = Math.ceil(itemsTotalCount / pageSize);

  const pageNumbers = [];

  for (let x = 1; x <= pages; x++) {
    pageNumbers.push(x);
  }

  return (
    <div className={`${css.pagination} ${css.page}`}>
      <div
        className={`${
          selectedPage < Math.ceil(pagesRange / 2) + 1 && css.page_hidden
        }`}
        onClick={() => {
          onPageChanged(1);
        }}
      >
        First
      </div>
      {pageNumbers
        .map((p) => {
          return (
            <a
              href="#"
              key={p}
              className={`${selectedPage === p && css.selectedPage} ${
                css.page
              }`}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </a>
          );
        })
        .slice(
          selectedPage > Math.floor(pagesRange / 2) ? selectedPage - Math.ceil(pagesRange / 2) : 0,
          selectedPage > Math.floor(pagesRange / 2) ? selectedPage + Math.floor(pagesRange / 2) : pagesRange
        )}
      <div
        className={`${
          selectedPage > pages - Math.ceil(pagesRange / 2) && css.page_hidden
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
