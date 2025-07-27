import { Outlet, useLocation } from "react-router-dom";

import { useAnime } from "../Context/AnimeContext";
import ReactPaginate from "react-paginate";
import Header from "./Header";

function Layout() {
  const { lastPage, currentPage, handlePageClick } = useAnime();
  const location = useLocation();

  return (
    <div className="container">
      <Header />
      <div className="anime">
        <Outlet />
      </div>

      <div
        className={`glass pagination-div ${
          location.pathname === "/AnimeInfo" ? "hide-pagination" : ""
        } `}
      >
        <ReactPaginate
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          forcePage={currentPage}
          pageCount={lastPage}
          previousLabel="Previous"
          pageClassName="page-item glass"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Layout;
