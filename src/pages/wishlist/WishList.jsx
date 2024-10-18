import { LuArrowLeft } from "react-icons/lu";
import { Link, useOutletContext } from "react-router-dom";
import Wish from "./Wish";

const WishList = () => {
  const wishLists = JSON.parse(localStorage.getItem("lists"));
  const { newWishLists } = useOutletContext();

  return (
    <div className="my-20">
      <Link to={`/`}>
        <div className="border-2 border-white mb-6  w-[50px] h-[50px] flex justify-center items-center btnShadow  rounded-lg">
          <LuArrowLeft className="text-2xl text-primary" />
        </div>
      </Link>
      <div className="lg:w-[65%]">
        <h1 className=" text-[28px]  font-bold">
          An overview of your wishlists
        </h1>
        <div className="grid grid-cols-1 mt-[30px]">
          {" "}
          {newWishLists.length >= 1
            ? newWishLists?.map((wish, index) => (
                <Wish
                  key={wish.id}
                  index={index}
                  length={newWishLists?.length}
                  wish={wish}
                />
              ))
            : wishLists?.map((wish, index) => (
                <Wish
                  key={wish.id}
                  index={index}
                  length={wishLists?.length}
                  wish={wish}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
