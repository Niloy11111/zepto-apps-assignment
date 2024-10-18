import "react-loading-skeleton/dist/skeleton.css";
const DetailsSkeleton = () => {
  return (
    <div className="my-20  ">
      <div className="lg:flex  items-start justify-center gap-10">
        <div className="mx-auto lg:mx-0 skeleton h-[300px] lg:h-[460px] w-[300px] mb-10 lg:mb-0"></div>

        <div className="flex lg:flex-none justify-center">
          <div>
            <div className="skeleton  w-[300px] mb-5 h-[20px] rounded"></div>
            <div className="skeleton my-5 w-[300px]  h-[40px] rounded"></div>
            <div className="skeleton  w-[300px] mb-5 h-[20px] rounded"></div>
            <div className="flex items-center gap-5 mt-5">
              <div className="skeleton w-[150px]  h-[50px] rounded"></div>
              <div className="skeleton w-[150px]  h-[50px] rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="skeleton mx-auto my-20 w-[200px]  h-[30px] rounded"></div>

        <div className="mb-5  lg:flex items-center  lg:gap-5 w-3/4 mx-auto">
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
        </div>
        <div className="mb-5  lg:flex items-center  lg:gap-5 w-3/4 mx-auto">
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
        </div>
        <div className="mb-5  lg:flex items-center  lg:gap-5 w-3/4 mx-auto">
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
        </div>
        <div className="mb-5  lg:flex items-center  lg:gap-5 w-3/4 mx-auto">
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
        </div>
        <div className="mb-5  lg:flex items-center  lg:gap-5 w-3/4 mx-auto">
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
          <div className="skeleton mx-auto w-full lg:mb-0 mb-1  h-[40px] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
