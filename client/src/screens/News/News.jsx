import "./News.css";
import { useState, useEffect } from "react";
import sanityClient from "../../client";
import NewsCard from "../../components/NewsCard/NewsCard";
import SearchNews from "../../components/SearchNews/SearchNews";
import ReactPaginate from "react-paginate";

export default function News() {
  const [news, setNews] = useState(null);
  const [display, setDisplay] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "news"]{
      title,
      slug,
      affiliate[]->{name,location},
      press_release,
      publishedDate,
      body,
      link
    }`
      )
      .then((data) => {
        setNews(
          data.sort(
            (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
          )
        );
        setDisplay(
          data.sort(
            (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
          )
        );
      })
      .catch(console.error);
  }, []);

  const newsPerPage = 6;
  const pagesVisited = pageNumber * newsPerPage;
  const pageCount = Math.ceil(display.length / newsPerPage);
  const changePage = ({ selected }) => {
    window.scrollTo(0, 0);
    setPageNumber(selected);
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-10">
      <header>
        <h1 className="font-bold text-3xl">News & Press Releases</h1>
      </header>
      <SearchNews
        setDisplay={setDisplay}
        news={news}
        setPageNumber={setPageNumber}
      />
      <main>
        <div className="flex flex-wrap gap-4 justify-center">
          {display && display.length > 0 ? (
            display
              .slice(pagesVisited, pagesVisited + newsPerPage)
              .map((item, key) => (
                <section className="newsCard" key={key}>
                  <NewsCard news={item} />
                </section>
              ))
          ) : (
            <h1>No news to be displayed</h1>
          )}
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActiveBtn"}
        />
      </main>
    </div>
  );
}
