import { useState } from "react";
import Favicon from "react-favicon";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [searchValue, setSearchValue] = useState("");
  const [newWishLists, setNewWishLists] = useState([]);
  return (
    <div className="w-5/6 2xl:w-5/6 xl:w-11/12 mx-auto">
      <Favicon url="https://i.ibb.co.com/WD2GzMR/Untitled-design-removebg-preview.png" />
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
