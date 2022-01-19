import Link from "next/Link";
// Next에서는 link를 적용할 때 아래와 같이 적용함
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter(); /* react-router-dom의 useLocation과 같음 */

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>about</a>
      </Link>
      {/* 스타일 태그로 next에서 스타일을 적용할 수 있음 */}
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
