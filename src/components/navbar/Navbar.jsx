import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { NavLink, useOutletContext } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const stored = JSON.parse(localStorage.getItem("persists"));

  const { setSearchValue } = useOutletContext();
  const handleChange = (e) => {
    setSearchValue(e.target.value);

    localStorage.setItem(
      "persists",
      JSON.stringify({
        ...stored,
        singleTopic: "",
        pageNumber: 1,
        searchValue: e.target.value,
      })
    );
  };

  return (
    <nav className=" mt-10 ">
      <div className="w-full lg:flex hidden items-center justify-between">
        <div className="lg:w-[30%] xl:w-[18.5%]">
          <h1 className="text-2xl xl:block font-semibold">Friday</h1>
        </div>

        <div className="lg:w-[70%] xl:w-[81.5%]  flex justify-between  items-center">
          <div>
            <ul className="flex lg:gap-3 gap-5 xl:gap-5 items-center">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "transition-all duration-300 text-[#7179e6] border-2 cursor-pointer px-6  rounded-lg py-2 btnActive"
                    : "btnShadow"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/wishlist"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? ""
                    : "transition-all border-white border-2 cursor-pointer px-6  rounded-lg py-2 hover:text-[#7179e6] btnShadow"
                }
              >
                Wishlist
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? ""
                    : "transition-all border-white border-2 cursor-pointer px-6  rounded-lg py-2 hover:text-[#7179e6] btnShadow"
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>

          <div className="searchField relative w-[280px] lg:w-[230px] 2xl:w-[350px]   bg-[#F3F4F6] flex rounded-lg items-center">
            <input
              onChange={handleChange}
              defaultValue={stored?.searchValue}
              className="pl-3 text-[#959595]  rounded-lg text-lg w-full py-2.5 outline-none lg:border border-[#EBEEF2] focus:border bg-[#F3F4F6] lg:bg-[#ffffff]"
              type="text"
              placeholder="Search by title"
            />

            <button className=" absolute right-0  px-4 flex items-center justify-center m-1 h-[39px] rounded">
              {" "}
              <BsSearch className="text-[#444] text-lg"></BsSearch>
            </button>
          </div>
        </div>
      </div>
      {/* mobile nav */}

      <div className="flex-col lg:hidden w-[90%] mx-auto">
        <div className="flex lg:hidden items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl  font-semibold">Friday</h1>
          </div>
          <div className=" md:flex searchField w-[350px] relative  mx-auto   bg-[#F3F4F6] hidden rounded-lg items-center">
            <input
              onChange={handleChange}
              defaultValue={stored?.searchValue}
              className="pl-3 text-[#959595]  rounded-lg text-lg w-full py-2.5 outline-none lg:border border-[#EBEEF2] focus:border bg-[#F3F4F6] lg:bg-[#ffffff]"
              type="text"
              placeholder="Search by title"
            />

            <button className=" absolute right-0  px-4 flex items-center justify-center m-1 h-[39px] rounded">
              {" "}
              <BsSearch className="text-[#444] text-lg"></BsSearch>
            </button>
          </div>
          <div>
            <button
              className="transition-all duration-300"
              onClick={() => setToggle(!toggle)}
            >
              {" "}
              <FaBars className="text-3xl text-primary" />
            </button>
          </div>
        </div>
        <div className="md:hidden searchField w-[350px] relative  mx-auto flex  bg-[#F3F4F6]  rounded-lg items-center">
          <input
            onChange={handleChange}
            defaultValue={stored?.searchValue}
            className="pl-3 text-[#959595]  rounded-lg text-lg w-full py-2.5 outline-none lg:border border-[#EBEEF2] focus:border bg-[#F3F4F6] lg:bg-[#ffffff]"
            type="text"
            placeholder="Search by title"
          />

          <button className=" absolute right-0  px-4 flex items-center justify-center m-1 h-[39px] rounded">
            {" "}
            <BsSearch className="text-[#444] text-lg"></BsSearch>
          </button>
        </div>
      </div>

      {toggle && (
        <div
          className="
          
          lg:hidden h-full  right-0 bottom-0 z-10 
      max-w-[500px] min-w-[300px] fixed bg-white 
      "
        >
          <div
            onClick={() => setToggle(!toggle)}
            className="transition-all duration-300 absolute right-6 cursor-pointer top-4"
          >
            <RxCross1 className="text-3xl text-primary" />
          </div>

          <div className=" flex flex-col mt-24 items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold mb-10">Friday</h1>
            </div>
            <div>
              <ul className="flex flex-col gap-3 ">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "transition-all duration-300 text-[#7179e6] border-2 cursor-pointer px-6  rounded-lg py-2 btnActive"
                      : "btnShadow"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/wishlist"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : "transition-all border-[#ebeef2] border-2 cursor-pointer px-6  rounded-lg py-2 hover:text-[#7179e6] btnShadow"
                  }
                >
                  Wishlist
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? ""
                      : "transition-all border-[#ebeef border-2 cursor-pointer px-6  rounded-lg py-2 hover:text-[#7179e6] btnShadow"
                  }
                >
                  Contact
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
