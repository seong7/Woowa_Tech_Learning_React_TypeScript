import React from "react";
// 지금 코드에서는 안쓰지만 바벨로 컴파일된 후에 해당 패키지를 사용한다.
// 그래서 반드시 import 해줘야함

import ReactDOM from "react-dom";

interface AppProps {
  title: string;
  color: string;
}

function App(props: AppProps) {
  return <h1>{props.title}</h1>;
}

// VirtualDOM
ReactDOM.render(
  // JSX transpiler (Babel 에 있음) 이 담당
  // https://babeljs.io/repl 에서 컴파일 되는 것 볼 수 있다.

  // React.StrictMode 는 개발 모드에서 자식 컴포넌트들의 잠재적인 문제를 알려주는 도구
  <React.StrictMode>
    <App title="Tech Hello?" color="red" />
  </React.StrictMode>,
  document.getElementById("root") // 컴포넌트를 붙일 HTML 요소
);
