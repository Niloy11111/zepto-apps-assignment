import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "react-loading-skeleton/dist/skeleton.css";
import { useOutletContext } from "react-router-dom";
import Book from "../../components/book/Book";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";
import Navbar from "../../components/navbar/Navbar";
import { useFetch } from "../../hooks/useFetch";
import { useTopWords } from "../../hooks/useTopWords";
const Home = () => {
  const { searchValue, setSearchValue } = useOutletContext();
  const [pageNumber, setPageNumber] = useState(1);
  const [previousPages, setPreviousPages] = useState(0);
  const [totalPages, setTotalPages] = useState(8);
  const pageNumbers = [...Array(totalPages)].map((v, index) => index + 1);
  const [toggle, setToggle] = useState(false);
  const [singleTopic, setSingleTopic] = useState("");
  const [bookCardTopic, setBookCardTopic] = useState("");
  const [storedSearchValue, setStoredSearchValue] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [storedPageNumber, setStoredPageNumber] = useState(null);
  const [storedTopic, setStoredTopic] = useState("");
  const stored = JSON.parse(localStorage.getItem("persists"));
  const pageOneTopics = [
    "fiction",
    "literature",
    "drama",
    "history",
    "england",
  ];

  useEffect(() => {
    if (stored) {
      setStoredTopic(stored?.singleTopic);
      setBookCardTopic(stored?.singleTopic);
      setStoredPageNumber(parseFloat(stored?.pageNumber));
      setStoredSearchValue(stored?.searchValue);
    }

    setIsLoaded(true);
  }, [stored]);

  const handleRefetch = () => {
    localStorage.removeItem("persists");
    setStoredTopic("");
    setSingleTopic("");
    setStoredSearchValue("");
    setSearchValue("");
    setPageNumber(1);
    setStoredPageNumber(1);
  };

  const searchQuery = storedSearchValue ? storedSearchValue : searchValue;

  const topicQuery = storedTopic ? storedTopic : singleTopic;
  const pageNumberQuery = storedPageNumber ? storedPageNumber : pageNumber;

  let url = "";
  if (isLoaded) {
    if (searchQuery?.length > 0) {
      url = `https://gutendex.com/books/?search=${searchQuery}`;
    } else if (topicQuery) {
      url = `https://gutendex.com/books/?page=${pageNumberQuery}&topic=${topicQuery}`;
    } else {
      url = `https://gutendex.com/books/?page=${pageNumber}`;
    }
  }

  const { data, loading } = useFetch(url);

  const books = data?.results;

  const allTopics = books?.reduce((acc, book) => {
    return acc.concat(book.subjects, book.bookshelves);
  }, []);

  const { topics } = useTopWords(allTopics, loading);

  const handleNext = () => {
    setPreviousPages((prev) => prev + 8);
    setTotalPages((prev) => prev + 8);
  };

  const handlePrev = () => {
    if (previousPages === 0 || previousPages < 0) {
      return;
    }
    setPreviousPages((prev) => prev - 8);
    setTotalPages((prev) => prev - 8);
  };

  const handleTopic = (topic) => {
    setSingleTopic(topic);
    if (searchValue?.length === 0) {
      setBookCardTopic(topic);
    }
    setPageNumber(1);
    setStoredPageNumber(1);
  };

  useEffect(() => {
    if (singleTopic || (searchValue && !loading)) {
      localStorage.setItem(
        "persists",
        JSON.stringify({
          singleTopic: searchValue.length > 0 ? "" : singleTopic,
          pageNumber: searchValue.length > 0 ? 1 : pageNumber,
          searchValue,
        })
      );
    }
  }, [books, searchValue, singleTopic, loading, pageNumber]);

  const handlePageNumber = (pageNum) => {
    setPageNumber(pageNum);
    setStoredPageNumber(pageNum);
  };

  return (
    <>
      <Navbar />
      <div className="mb-20 lg:mt-10 mt-5 ">
        <div className="lg:flex lg:gap-10 xl:gap-16">
          <div className="  mx-auto lg:w-[28%] xl:w-[15%]  mb-10 lg:mb-0 flex md:flex-row  lg:justify-normal  flex-col  lg:flex-col  gap-5  lg:gap-5 md:gap-3 ">
            <div
              onClick={() => setToggle(!toggle)}
              className={`cursor-pointer btnShadow border bg-white  py-3 rounded-lg 
                flex items-center  justify-between px-5  lg:w-full w-[90%] md:mx-0 lg:mx-0 mx-auto `}
            >
              <h2 className="flex gap-2">
                Filter{" "}
                <span
                  className={`${
                    !toggle ? "md:block" : "md:hidden"
                  } xl:hidden 2xl:block`}
                >
                  by Topic
                </span>
              </h2>
              <IoIosArrowDown />
            </div>

            {toggle ? (
              <div
                className="w-full bg-[#FFFFFF] btnShadow 
                md:py-1.5  
               p-4 lg:p-4  md:px-0 rounded-lg font-normal text-sm lg:flex-col md:flex md:gap-4  lg:gap-2 md:justify-center  border"
              >
                {topics?.length > 0
                  ? topics?.map((topic, index) => (
                      <div
                        onClick={() => handleTopic(topic)}
                        key={index}
                        className={`${
                          topicQuery === topic ? "bg-[#EBEEF2]" : ""
                        }  cursor-pointer  flex items-center  md:gap-0 lg:gap-3  rounded-lg py-2 pl-3 md:pr-2  hover:bg-[#EBEEF2]`}
                      >
                        <MdOutlineDoubleArrow className="" />

                        <h2 className="capitalize">
                          {" "}
                          {topic && topic.split("/")[0]}
                        </h2>
                      </div>
                    ))
                  : pageOneTopics.map((topic, index) => (
                      <div
                        onClick={() => handleTopic(topic)}
                        key={index}
                        className={`${
                          topicQuery === topic ? "bg-[#EBEEF2]" : ""
                        }  cursor-pointer  flex items-center  md:gap-0 lg:gap-3  rounded-lg py-2 pl-3 md:pr-2  hover:bg-[#EBEEF2]`}
                      >
                        <MdOutlineDoubleArrow className="" />

                        <h2 className="capitalize">
                          {" "}
                          {topic && topic.split("/")[0]}
                        </h2>
                      </div>
                    ))}
                <button
                  className="mt-2 w-full lg:max-w-max px-5 mx-auto lg:mt-0  md:hidden lg:block
                   font-medium text-white py-2 rounded bg-primary"
                  onClick={handleRefetch}
                >
                  Reset Data
                </button>
              </div>
            ) : (
              ""
            )}
          </div>

          <div
            className="lg:w-[72%] xl:w-[85%]
           w-[85%] md:w-[90%]  mx-auto "
          >
            {loading || books === undefined ? (
              <CardSkeleton />
            ) : (
              <div
                className="grid grid-cols-1 md:grid-cols-2 
               xl:grid-cols-3 2xl:grid-cols-4  lg:grid-cols-2 
                 gap-6"
              >
                {books?.map((book) => (
                  <Book
                    bookCardTopic={bookCardTopic}
                    key={book.id}
                    book={book}
                  />
                ))}
              </div>
            )}

            <div className="mt-10 flex md:gap-5 gap-2 justify-center items-center">
              <div>
                <button
                  onClick={handlePrev}
                  className="btnShadow px-2 md:px-4 md:py-3  py-2  xl:py-2 rounded  flex items-center gap-1 text-[#7179e6] bg-white"
                >
                  <GrPrevious />{" "}
                  <span className=" xl:block  lg:hidden hidden ">Prev</span>
                </button>
              </div>
              <div className=" lg:flex hidden transition-all duration-500 xl:gap-5 lg:gap-2 items-center ">
                {pageNumbers.slice(previousPages, totalPages).map((pageNum) => (
                  <button
                    onClick={() => handlePageNumber(pageNum)}
                    key={pageNum}
                    className={`${
                      pageNumberQuery === pageNum && searchQuery === ""
                        ? "transition-all duration-300 btnActive text-primary "
                        : ""
                    }  btnShadow  max-w-max px-2 lg:py-1    xl:px-3 2xl:px-5 xl:py-2 lg:px-2 transition-all btnShadow  rounded-lg  duration-300  border-2 border-white cursor-pointer  font-semibold`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
              <div className="flex lg:hidden  transition-all duration-500 md:gap-5 gap-2 items-center ">
                {pageNumbers
                  .slice(previousPages, totalPages - 3)
                  .map((pageNum) => (
                    <button
                      onClick={() => handlePageNumber(pageNum)}
                      key={pageNum}
                      className={`${
                        pageNumberQuery === pageNum &&
                        storedSearchValue?.length === 0
                          ? "transition-all duration-300 btnActive text-primary "
                          : ""
                      }   btnShadow  max-w-max px-2 py-2   md:px-3 transition-all btnShadow  rounded-lg  duration-300  border-2 border-white cursor-pointer  font-semibold`}
                    >
                      {pageNum}
                    </button>
                  ))}
              </div>
              <div>
                <button
                  onClick={handleNext}
                  className="btnShadow  px-2 md:px-4 md:py-3 py-2   xl:py-2  rounded  flex items-center gap-1 bg-white text-[#7179e6] "
                >
                  <span className=" xl:block  lg:hidden hidden ">Next</span>{" "}
                  <GrNext />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
