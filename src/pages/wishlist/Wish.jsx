import { RxCross1 } from "react-icons/rx";
import { useOutletContext } from "react-router-dom";

const Wish = ({ wish, index, length }) => {
  const {
    id,
    title,
    authors,
    formats,
    bookshelves,
    subjects,
    languages,
    download_count,
  } = wish;

  const { setNewWishLists } = useOutletContext();

  const currentId = id;

  const image = formats["image/jpeg"];
  const allSubjects = [...bookshelves, ...subjects];
  const onlineRead = formats["text/html"];

  const handleRemove = (id) => {
    const arr = JSON.parse(localStorage.getItem("lists"));
    const newArr = arr.filter((item) => item.id !== currentId);
    localStorage.setItem("lists", JSON.stringify(newArr));
    setNewWishLists(newArr);
  };

  return (
    <div
      className={`p-4 bg-[#fafafa] lg:p-5  ${
        index === 0 ? "rounded-t-lg" : ""
      } ${index === length - 1 ? "rounded-b-lg" : ""}`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-[8px] ">
          <div className="border rounded-[6px] flex items-center gap-[5px] py-1.5 px-1 max-w-max"></div>
          <div className="flex">
            <div className="bg-[#EAEAEA] w-[90px] rounded-[6px] ">
              <img
                className=" h-[100px] w-full rounded-lg"
                src={image}
                alt=""
              />
            </div>
            <div className="mt-[10px] ml-[10px]">
              <h2 className="lg:block hidden font-semibold"> {title}</h2>
              <h2 className="font-semibold block lg:hidden">
                {" "}
                {title?.length > 25 ? `${title?.slice(0, 26)}.` : title}{" "}
              </h2>
              <p className="lg:flex">
                <span className="mr-2">Written by</span> {"   "}
                {authors.map(({ name }, index) => (
                  <p key={index} className=" font-medium ">
                    {name?.slice(0, 35)}
                    {index < authors.length - 1 && ", "}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer  max-h-max"
          onClick={() => handleRemove(id)}
        >
          <RxCross1></RxCross1>
        </div>
      </div>
      <div className="text-right border-b pb-10">
        <h2 className="font-semibold text-lg "> €3.00</h2>
      </div>
    </div>
  );
};

export default Wish;
