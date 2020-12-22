import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  console.log(errorMessage);

  

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 21,
          term: term,
          location: "Istanbul",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(`error ${err}`);
      console.log(err);
    }
  };

  useEffect(()=>{
      searchApi()
  },[]);
 return [searchApi,results,errorMessage]
};
