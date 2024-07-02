import { Cases } from "./components/cases/Cases";
import { Header } from "./components/header/Header";
import { Introduction } from "./components/introduction/Introduction";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
// import { Division } from "./components/division/Division";
import { useState } from "react";

function App() {
  const [sectionSize, setSectionSize] = useState<number | null>(null);

  return (
    <>
      <Header sectionSize={sectionSize} />
      <Introduction sectionSize={sectionSize} />
      {/* <Division /> */}
      <Services setSectionSize={setSectionSize} />
      <Cases />
      <About />
    </>
  );
}

export default App;
