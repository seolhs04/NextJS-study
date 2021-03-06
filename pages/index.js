import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Head from "Next/head";
import Seo from "../components/Seo";

import {
  useInput,
  useClick,
  useConfirm,
  usePreventLeave,
  useFadeIn,
  useNetwork,
} from "../hooks";

// 1. next는 react와 다르게 파일명이 url로 적용된다.
// 2. set useState를 저런식으로 사용 가능
// 3. nextjs는 react와는 다르게 소스코드를 열면 실제로 값이 들어있는 div를 보여주게된다.
// 4. 따라서 사용자가 인터넷 접속이 느린 상태에서 들어갔을 때도 빈 화면이 아닌 무언가 들어있는 화면을 볼 수 있는 것이다.(hydration)
// 5. html구조가 먼저 사용자에게 보여지고 그 후에 reactjs, javascript가 불러와져서 상호작용을 하게 된다
// 6. 따라서 SEO검색엔진 최적화에도 좋은 것.

export default function Home() {
  const confirmFun = useConfirm("are you sure?", () =>
    console.log("complete!")
  );
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const fadeInH1 = useFadeIn(2);
  return (
    <div>
      <Seo title="HOME" />
      <h1>{useNetwork() ? "online" : "offline"}</h1>
      <button onClick={confirmFun}>confirm</button>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
      <h1 {...fadeInH1}>fadeIN</h1>
    </div>
  );
}
