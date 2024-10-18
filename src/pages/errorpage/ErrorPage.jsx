import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <h1 className="text-primary text-4xl font-bold mb-8">
          404 - Not Found!
        </h1>
        <NavLink to="/">
          <div className="flex justify-center">
            <button className="transition-all border-white border-2 cursor-pointer px-6  rounded-lg py-2 hover:text-[#7179e6] btnShadow">
              Go Home
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
