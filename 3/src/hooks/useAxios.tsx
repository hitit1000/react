import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url: string, method: string, data?: object) => {
  const [result, setResult] = useState();
  const option = {
    url: url,
    method: method, // (get,post,put,delete,etc...)
    headers: { Accept: "application/json", "Content-Type": "application/json;charset=UTF-8" },
    data: { data },
  };
  useEffect(() => {
    axios(option).then((Response) => {
      setResult(Response.data);
    });
  }, [url]);
  return result;
};

export default useAxios;
