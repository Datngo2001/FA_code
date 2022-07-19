import React from "react";

function Pagination({ page, total, handleSelect }) {
  const isFirst = page <= 1;
  const isLast = page >= total;

  const handleNextClick = () => {
    if (isLast) {
      return;
    }
    handleSelect(page + 1);
  };

  const handlePrevClick = () => {
    if (isFirst) {
      return;
    }
    handleSelect(page - 1);
  };

  const handlePageClick = (e) => {
    const selected = Number.parseInt(e.target.textContent);

    if (isNaN(selected)) {
      handleSelect(0);
      return;
    }

    handleSelect(selected);
  };

  const getPageActiveClass = (buttonOrder) => {
    const activeClass = "active";
    switch (buttonOrder) {
      case 1:
        if (isFirst) {
          return activeClass;
        }
        break;
      case 2:
        if (!isFirst && !isLast) {
          return activeClass;
        }
        break;
      case 3:
        if (isLast) {
          return activeClass;
        }
        break;
      default:
        break;
    }
  };

  const getPageButtonNumber = (buttonOrder) => {
    switch (buttonOrder) {
      case 1:
        if (isFirst) {
          return page;
        } else if (isLast) {
          return page - 2;
        } else {
          return page - 1;
        }
      case 2:
        if (isFirst) {
          return page + 1;
        } else if (isLast) {
          return page - 1;
        } else {
          return page;
        }
      case 3:
        if (isFirst) {
          return page + 2;
        } else if (isLast) {
          return page;
        } else {
          return page + 1;
        }
      default:
        break;
    }
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li
          className={`page-item ${isFirst ? "disabled" : ""}`}
          onClick={handlePrevClick}
        >
          <span className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>
        <li className={`page-item ${getPageActiveClass(1)}`}>
          <span className="page-link" onClick={handlePageClick}>
            {getPageButtonNumber(1)}
          </span>
        </li>
        <li className={`page-item ${getPageActiveClass(2)}`}>
          <span className="page-link" onClick={handlePageClick}>
            {getPageButtonNumber(2)}
          </span>
        </li>
        <li className={`page-item ${getPageActiveClass(3)}`}>
          <span className="page-link" onClick={handlePageClick}>
            {getPageButtonNumber(3)}
          </span>
        </li>
        <li
          className={`page-item ${isLast ? "disabled" : ""}`}
          onClick={handleNextClick}
        >
          <span className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
