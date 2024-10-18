import { useEffect, useState } from "react";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTopWords } from "../../hooks/useTopWords";
const Book = ({ book, bookCardTopic }) => {
  const { id, title, authors, formats, bookshelves, subjects } = book;
  const currentId = id;
  const [toggle, setToggle] = useState(false);

  const allTopics = [...bookshelves, ...subjects];

  const { topics } = useTopWords(allTopics);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("lists")) || [];
    const isAvailabe = arr.find((item) => item.id === currentId) ? true : false;
    if (isAvailabe) {
      setToggle(!toggle);
    }
  }, []);

  const handleWishList = () => {
    setToggle(!toggle);
    let arr = JSON.parse(localStorage.getItem("lists")) || [];
    const isExist = arr.find((item) => item.id === currentId) ? true : false;
    if (!isExist) {
      arr = [...arr, book];
      localStorage.setItem("lists", JSON.stringify(arr));
    } else {
      const newArr = arr.filter((item) => item.id !== currentId);
      localStorage.setItem("lists", JSON.stringify(newArr));
    }
  };

  return (
    <div className="cardAnimation h-[460px]   box-shadow rounded-b">
      <div className="px-2 flex justify-between rounded-t bg-[#7179e6]  ">
        <p className="   text-white">{id}</p>
        <p className="capitalize   text-white">
          {bookCardTopic
            ? bookCardTopic?.split("/")[0]
            : topics[0]?.split("/")[0]}
        </p>
      </div>
      <img
        className=" w-full h-[70%] xl:h-[64%] 2xl:h-[70%]"
        src={formats["image/jpeg"]}
        alt=""
      />

      <div
        className={` pl-2   mt-1 ${authors.length === 1 && "mt-7"} ${
          authors?.length > 1 && "mt-1"
        } ${authors?.length < 1 && "mt-12"}`}
      >
        <h2 className="hover:text-[#7179e6] hidden 2xl:block">
          {" "}
          {title?.length > 32 ? `${title?.slice(0, 33)}.` : title}{" "}
        </h2>
        <h2 className="hover:text-[#7179e6] hidden  lg:block xl:hidden">
          {" "}
          {title?.length > 30 ? `${title?.slice(0, 30)}.` : title}{" "}
        </h2>
        <h2 className="hover:text-[#7179e6] block lg:hidden">
          {" "}
          {title?.length > 35 ? `${title?.slice(0, 36)}.` : title}{" "}
        </h2>
      </div>

      <div className="pl-2">
        {authors.map(({ name }, index) => (
          <h2 key={index} className=" font-medium">
            {name?.slice(0, 35)}
          </h2>
        ))}
      </div>

      <div className="px-2 flex justify-between items-center">
        <div className="">
          <Link to={`/details/${id}`}>
            <button className="hover:text-primary text-sm bg-white px-2 py-1 btnShadow rounded ">
              Details
            </button>
          </Link>
        </div>

        <div>
          {toggle && (
            <button onClick={handleWishList}>
              <MdFavorite className=" text-2xl text-primary" />
            </button>
          )}
          {!toggle && (
            <button onClick={handleWishList}>
              <MdOutlineFavoriteBorder className=" text-2xl text-primary" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
