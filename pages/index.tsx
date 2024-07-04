// pages/index.tsx
import { useState } from "react";
import { Header } from "../components/header/Header";
import { Introduction } from "../components/introduction/Introduction";
import { Services } from "../components/services/Services";
import { Cases } from "../components/cases/Cases";
import { About } from "../components/about/About";
import { Footer } from "../components/footer/Footer";

function HomePage() {
  const [sectionSize, setSectionSize] = useState<number | null>(null);

  return (
    <>
      <Header sectionSize={sectionSize} />
      <Introduction sectionSize={sectionSize} />
      <Services setSectionSize={setSectionSize} />
      <Cases />
      <About />
      <Footer />
    </>
  );
}

export default HomePage;
