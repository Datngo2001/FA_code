import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { apiInstance } from "../api";

function withPagination(
  Wrapped,
  options = {
    entity: "",
  }
) {
  function WithPagination() {
    const [data, setData] = useState([]);
    const [paginate, setPaginate] = useState({
      page: 1,
      limit: 10,
      total: 0,
    });

    useEffect(() => {
      apiInstance
        .get(
          `/${options.entity}?_page=${paginate.page}&_limit=${paginate.limit}`
        )
        .then((res) => {
          setData(res.data);
          setPaginate((val) => ({
            ...val,
            total: res.headers["x-total-count"],
          }));
        })
        .catch((err) => console.log(err));
    }, [paginate.page, paginate.limit]);

    const handlePrev = () => {
      if (paginate.page - 1 <= 0) {
        return;
      }
      setPaginate((val) => ({
        ...val,
        page: paginate.page - 1,
      }));
    };

    const handleNext = () => {
      if (paginate.page + 1 > paginate.total) {
        return;
      }
      setPaginate((val) => ({
        ...val,
        page: paginate.page + 1,
      }));
    };

    const handleFirst = () => {
      setPaginate((val) => ({
        ...val,
        page: 1,
      }));
    };

    const handleLast = () => {
      setPaginate((val) => ({
        ...val,
        page: paginate.total / paginate.limit,
      }));
    };

    const handlePageClick = (toPage) => {
      return () => {
        setPaginate((val) => ({
          ...val,
          page: toPage,
        }));
      };
    };

    return (
      <div>
        <Wrapped data={data}></Wrapped>
        <Pagination className="m-auto">
          <Pagination.First onClick={handleFirst} />
          <Pagination.Prev onClick={handlePrev} />
          <Pagination.Item>{paginate.page - 1}</Pagination.Item>
          <Pagination.Item className="active">{paginate.page}</Pagination.Item>
          <Pagination.Item>{paginate.page + 1}</Pagination.Item>
          <Pagination.Next onClick={handleNext} />
          <Pagination.Last onClick={handleLast} />
        </Pagination>
      </div>
    );
  }

  WithPagination.diplayName = `WithPagination{${Wrapped.name}}`;

  return WithPagination;
}

export default withPagination;
