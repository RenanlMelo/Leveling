import { useState } from "react";

export const About = () => {
  const content = {
    quemSomos: {
      name: "Quem Somos",
      description:
        "Na Leveling, transformamos ideias em soluções tecnológicas inovadoras. Nosso objetivo é oferecer uma experiência única e resultados que superam expectativas. Com uma equipe multidisciplinar e comprometida com o sucesso, nos inserimos no dia a dia dos nossos clientes para compreender suas dores, necessidades e desejos, entregando projetos personalizados e sob medida.",
    },
    oQueFazemos: {
      name: "O que fazemos",
      description:
        "Focados principalmente no desenvolvimento de sites, atendemos às necessidades específicas dos nossos clientes, proporcionando a inserção no mundo digital e impulsionando seu crescimento e sucesso. Seja para criar um site do zero ou melhorar uma plataforma existente, estamos comprometidos em auxiliar na jornada de transformação da sua ideia.",
    },
  };

  type ContentKey = "quemSomos" | "oQueFazemos";

  const [currentContent, setCurrentContent] = useState<ContentKey>("quemSomos");

  const handleToggle = (contentKey: ContentKey) => {
    setCurrentContent(contentKey);
  };

  return (
    <section
      id="sobre"
      className="w-full flex flex-col justify-center items-center py-24"
    >
      <h2 className="text-[#eee] text-[2.25vw] font-bold tracking-wide mb-24">
        Sobre
      </h2>
      <div className="flex justify-center items-center px-[20vw] gap-x-32">
        <div className="flex flex-col justify-start items-start h-full border-[#818181] border p-16 rounded-2xl relative">
          <span
            onClick={() => handleToggle("oQueFazemos")}
            className={` cursor-pointer p-4 border border-[#818181] rounded-2xl rounded-b-none text-[#eee] ${
              currentContent === "oQueFazemos"
                ? "bg-[#020202] border-b-black"
                : ""
            }`}
          >
            O que fazemos
          </span>
          <span
            onClick={() => handleToggle("quemSomos")}
            className={`cursor-pointer p-4 border border-b-0 border-[#818181] rounded-2xl rounded-b-none text-[#eee] ${
              currentContent === "quemSomos" ? "bg-[#020202]" : ""
            }`}
          >
            Quem somos
          </span>
          <h3 className="text-[#ddd] text-[2vw] font-semibold whitespace-nowrap p-6">
            {content[currentContent].name}
          </h3>
          <p className="text-[calc(.6vw+8px)] leading-9 text-[#ccc]">
            {content[currentContent].description}
          </p>
        </div>
      </div>
    </section>
  );
};
