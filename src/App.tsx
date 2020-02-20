import React from "react";

import { GlobalStyles } from "./components/global-styles/global-styles.styles";
import { Quiz } from "./components/quiz/quiz.component";

function App() {
  return (
    <>
      <GlobalStyles />
      <Quiz />
    </>
  );
}

export default App;
