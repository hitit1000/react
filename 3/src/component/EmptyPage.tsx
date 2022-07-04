import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <div>페이지를 찾을 수 없습니다.</div>
      <Link to="/">홈으로</Link>
    </>
  );
}
