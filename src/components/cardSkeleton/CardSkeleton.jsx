import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({ cards }) => {
  const books = Array(8).fill(0);
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 ">
      {books.map((book, index) => (
        <div key={index} className="card h-[460px]">
          <div className="skeleton skeletonText"></div>
          <div className="h-[75%] rounded skeleton w-full"></div>

          <div className="mt-1">
            <div className="skeleton skeletonText"></div>
            <div className="skeleton skeletonText"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
