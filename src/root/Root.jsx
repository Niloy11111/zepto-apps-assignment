import { useState } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [searchValue, setSearchValue] = useState("");
  const [newWishLists, setNewWishLists] = useState([]);
  return (
    <div className="w-5/6 2xl:w-5/6 xl:w-11/12 mx-auto">
      <Outlet
        context={{
          searchValue,
          setSearchValue,
          newWishLists,
          setNewWishLists,
        }}
      ></Outlet>
    </div>
  );
};

export default Root;
