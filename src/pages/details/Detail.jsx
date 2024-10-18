import { Link } from "react-router-dom";

const Detail = ({ book }) => {
  const {
    id,
    title,
    authors,
    formats,
    bookshelves,
    subjects,
    languages,
    download_count,
  } = book;

  const image = formats["image/jpeg"];
  const allSubjects = [...bookshelves, ...subjects];
  const onlineRead = formats["text/html"];
  return (
    <div className="">
      <div className="w-4/5 lg:w-2/4 mx-auto flex lg:flex-row flex-col  gap-16">
        <div>
          <img
            className="rounded-lg h-[400px] mx-auto w-[300px]"
            src={image}
            alt=""
          />
        </div>

        <div>
          <h1 className="text-xl font-semibold border-b-4  border-primary  pb-2">
            {title}
          </h1>
          <div>
            {authors.map(({ name, birth_year, death_year }, index) => (
              <div key={index} className=" rounded-lg mt-3 w-[300px]  ">
                <h2 className="">{name}</h2>
                <div className="flex items-center gap-4">
                  {birth_year !== null ? <p>Birth - {birth_year}</p> : ""}
                  {death_year !== null ? <p>Death - {death_year}</p> : ""}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h1 className="rounded-lg mt-5 max-w-max ">
              Total Downloads{" "}
              <span className="uppercase">{download_count}</span>
            </h1>
          </div>
          <div className="flex items-center mt-5 gap-5">
            <div>
              {languages.map((language, index) => (
                <h1
                  key={index}
                  className="border-white border-2 py-2 rounded-lg  max-w-max px-4"
                >
                  Language <span className="uppercase">{language}</span>
                </h1>
              ))}
            </div>
            <div>
              <Link
                to={`${onlineRead}`}
                className="border-white btnShadow border-2 py-2 rounded-lg hover:text-primary max-w-max px-4"
              >
                Read Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold mt-12 lg:mt-20 text-center">
        Topic/Genre
      </h1>

      <div className="mt-10 w-4/5 lg:w-2/3 mx-auto grid md:grid-cols-2 lg:grid-cols-3  gap-5">
        {allSubjects.map((subject, index) => {
          const showSubject = subject.startsWith("Browsing:")
            ? subject.replace("Browsing:", "").trim()
            : subject;
          return (
            <ul key={index} className="list-none space-y-2">
              <li className="bg-white mt-2 p-2 rounded">
                {`${showSubject?.slice(0, 28)}.`}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
