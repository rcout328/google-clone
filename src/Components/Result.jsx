import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REACT_APP_GOOGLE_API_KEY } from "./api";

const Result = () => {
  const [data, setData] = useState([]);
  const { link } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // eslint-disable-next-line no-undef
          `https://www.googleapis.com/customsearch/v1?key=${REACT_APP_GOOGLE_API_KEY}&cx=87a49879cb66a4914&q=${link}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        // Check if 'items' exists in the response before setting the data
        setData(result.items ? result.items : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [link]);

  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src="https://imagetolink.com/ib/jS8XcfZrLa.png"
          alt="jS8XcfZrLa"
          height={92}
          width={273}
        />
      </div>
      <div className="flex flex-col ml-10 gap-5">
        {data.map((item) => (
          <div key={item.link}>
            <div>
              <img
                src={item.pagemap.cse_thumbnail[0].src} // Adjust the path to the image URL
                height={100}
                width={100}
                className="rounded-full w-10 h-10"
                alt="thumbnail"
              />
            </div>
            <h1>
              <a href={item.link} className="text-blue-700">
                {item.title}
              </a>
            </h1>
            <p>{item.snippet}</p>
            <a href={item.link} className="mr-5">
              {item.link}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Result;
