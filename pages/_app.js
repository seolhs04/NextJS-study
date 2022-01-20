// 앱의 청사진 같은 역할. 가장 상위의 root파일임
// 반드시 파일명은 _app.js로 지어야함
// react의 app.js와 동일한 역할

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

// component와 pageProps를 props로 가짐
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />

      {/* 글로벌 스타일을 적용할 때는 이 파일에서 적용함 */}
      <style jsx>{`
        a {
          color: black;
        }
      `}</style>
    </Layout>
  );
}
