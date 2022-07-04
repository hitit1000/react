import useAxios from "../hooks/useAxios";

export default function Etc() {
  useAxios("http://10.0.10.10:3001/quotation", "GET");
  return <div>Etc</div>;
}
