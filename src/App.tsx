import { Cases } from "./components/cases/Cases";
import { Header } from "./components/header/Header";
import { Introduction } from "./components/introduction/Introduction";
<<<<<<< HEAD
import { Portifolio } from "./components/portifolio/Portifolio";
=======
import { About } from "./components/about/About";
>>>>>>> 7a3c39dc4a25192f261c7de9cd8ac624f0979ea9
import { Services } from "./components/services/Services";
// import { Division } from "./components/division/Division";
import { useState } from "react";


function App() {
  const [sectionSize, setSectionSize] = useState<number | null>(null);

  return (
    <>
<<<<<<< HEAD
      <Header />
      <Introduction />
      <Services />
      <Portifolio />
=======
      <Header sectionSize={sectionSize} />
      <Introduction sectionSize={sectionSize} />
      {/* <Division /> */}
      <Services setSectionSize={setSectionSize} />
      <Cases />
      <About />
>>>>>>> 7a3c39dc4a25192f261c7de9cd8ac624f0979ea9
    </>
  );
}

export default App;
