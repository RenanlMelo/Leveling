"use client";

import { About } from "@/components/about/About";
import { Cases } from "@/components/cases/Cases";
import { Footer } from "@/components/footer/Footer";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header/Header";
import { Introduction } from "@/components/introduction/Introduction";
import { Services } from "@/components/services/Services";
import { useState } from "react";

export default function Home() {
  const [sectionSize, setSectionSize] = useState<number | null>(null);

  return (
    <>
      <Header sectionSize={sectionSize} />
      <Introduction sectionSize={sectionSize} />
      <Services setSectionSize={setSectionSize} />
      <Form />
      <Cases />
      <About />
      <div className="w-24 h-24 bg-[#814BFF] blur-3xl rounded-full shadow-[0_0_1000px_100px_rgba(129,75,255,1)] ml-16 absolute left-0 -z-10" />
      <Footer />
    </>
  );
}
