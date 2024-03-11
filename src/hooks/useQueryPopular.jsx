import { useEffect, useState } from "react";

const useQueryPopular = () => {
  const [popular, setPopular] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";

  const fetchPopular = async () => {
    // console.log(popular);
    const url = `${baseUrl}/movie/popular?api_key=758ef82708fe77d393847f402f8756a0&language=en-US&page=1`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const res = await (await fetch(url, options)).json();
    // const result = await res.json();
    console.log(res.results);
    setPopular(res.results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);

  return { results: popular };
};
export default useQueryPopular;
