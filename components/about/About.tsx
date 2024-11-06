import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const About = () => {
  interface Data {
    id: string;
    name: string;
    description: string;
  }

  const data: Data[] = [
    {
      id: "data1",
      name: "Quem Somos",
      description:
        "Na Leveling, transformamos ideias em soluções tecnológicas inovadoras. Nosso objetivo é oferecer uma experiência única e resultados que superam expectativas. Com uma equipe multidisciplinar e comprometida com o sucesso, nos inserimos no dia a dia dos nossos clientes para compreender suas dores, necessidades e desejos, entregando projetos personalizados e sob medida.",
    },
    {
      id: "data2",
      name: "O que fazemos",
      description:
        "Focados principalmente no desenvolvimento de sites, atendemos às necessidades específicas dos nossos clientes, proporcionando a inserção no mundo digital e impulsionando seu crescimento e sucesso. Seja para criar um site do zero ou melhorar uma plataforma existente, estamos comprometidos em auxiliar na jornada de transformação da sua ideia.",
    },
  ];

  const [toggle, setToggle] = useState<Data>(data[0]);

  const handleClick = (itemId: string) => {
    const newItem = data.find((item) => item.id === itemId);
    if (newItem) {
      setToggle(newItem);
    }
  };

  return (
    <section
      id="sobre"
      className="w-full flex flex-col justify-center items-center py-12"
    >
      <h2 className="text-[var(--text-color)] text-[7vw] xl:text-[2.25vw] font-bold tracking-wide xl:mt-12">
        Sobre
      </h2>
      <div className="flex flex-col justify-center items-center xl:items-start px-[5vw] xl:px-[20vw] relative">
        <div className="flex justify-center xl:items-start gap-x-8 p-4 xl:p-8 w-full">
          {data.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`aboutButton`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start h-full border border-[#94959b] bg-[#020202] p-8 xl:p-16 rounded-2xl">
          <AnimatePresence mode="wait">
            <div key={toggle.id}>
              <motion.h3
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 25, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-[#ddd] text-[6vw] xl:text-[2vw] font-semibold p-6"
              >
                {toggle.name}
              </motion.h3>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 25, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-[4.5vw] xl:text-[calc(.6vw+8px)] leading-8 text-[#ccc]"
              >
                {toggle.description}
              </motion.p>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
