import { useState } from "react";

export const About = () => {
  const data1 = {
    name: "Quem Somos",
    description:
      "Na Leveling, transformamos ideias em soluções tecnológicas inovadoras. Nosso objetivo é oferecer uma experiência única e resultados que superam expectativas. Com uma equipe multidisciplinar e comprometida com o sucesso, nos inserimos no dia a dia dos nossos clientes para compreender suas dores, necessidades e desejos, entregando projetos personalizados e sob medida.",
  };

  const data2 = {
    name: "O que fazemos",
    description:
      "Focados principalmente no desenvolvimento de sites, atendemos às necessidades específicas dos nossos clientes, proporcionando a inserção no mundo digital e impulsionando seu crescimento e sucesso. Seja para criar um site do zero ou melhorar uma plataforma existente, estamos comprometidos em auxiliar na jornada de transformação da sua ideia.",
  };

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section
        id="sobre"
        className="w-full flex flex-col justify-center items-center py-24"
      >
        <h2 className="text-[#eee] text-[2.25vw] font-bold tracking-wide mb-24">
          Sobre
        </h2>
        <div className="flex justify-center items-center px-[20vw] gap-x-32">
          <div className="flex flex-col justify-start items-start h-full border border-white/50 p-16 rounded-2xl relative">
            <div className="absolute top-0 left-10 -translate-y-full flex gap-x-4 p-4 pb-0">
              <button onClick={() => setToggle(!toggle)} className="p-4 border border-b-0 border-white/50 rounded-2xl rounded-b-none text-[#eee]">
                O que fazemos
              </button>
              <button onClick={() => setToggle(!toggle)} className="p-4 border border-b-0 border-white/50 rounded-2xl rounded-b-none text-[#eee]">
                Quem somos
              </button>
            </div>
            <h3 className="text-[#ddd] text-[2vw] font-semibold whitespace-nowrap p-6">
              {toggle ? data1.name : data2.name}
            </h3>
            <p className="text-[calc(.6vw+8px)] leading-9 text-[#ccc]">
              {toggle ? data1.description : data2.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
