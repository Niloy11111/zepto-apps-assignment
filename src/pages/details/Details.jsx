import { useParams } from "react-router-dom";
import DetailsSkeleton from "../../components/detailsSkeleton/DetailsSkeleton";
import { useFetch } from "../../hooks/useFetch";
import Detail from "./Detail";

const Details = () => {
  const { id } = useParams();
  const { data, loading, reFetch } = useFetch(
    `https://gutendex.com/books/?ids=${id}`
  );

  const books = data?.results;

  return (
    <div className="my-20">
      {loading ? (
        <DetailsSkeleton />
      ) : (
        books?.map((book) => <Detail key={book.id} book={book} />)
      )}
    </div>
  );
};

export default Details;
