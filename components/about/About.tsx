import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const [toggle, setToggle] = useState("data1");

  return (
    <section
      id="sobre"
      className="w-full flex flex-col justify-center items-center py-24"
    >
      <h2 className="text-[#eee] text-[2.25vw] font-bold tracking-wide mb-24">
        Sobre
      </h2>
      <div className="flex flex-col justify-center items-start px-[20vw] relative">
        <div className="flex gap-x-4 pl-8">
          <button
            onClick={() => setToggle("data1")}
            value='O que fazemos'
            className={`p-4 rounded-2xl rounded-b-none text-[#eee] ${toggle !== "data1" ? 'bg-[#101010] shadow-[inset_0_-5px_20px_2px_#000000]' : 'bg-[#020202] translate-y-px border border-b-0 z-10'} `}
          >
            O que fazemos
          </button>
          <button
            onClick={() => setToggle("data2")}
            value='Quem somos'
            className={`p-4 rounded-2xl rounded-b-none text-[#eee] ${toggle !== "data2" ? 'bg-[#101010] shadow-[inset_0_-5px_20px_2px_#000000]' : 'bg-[#020202] translate-y-px border border-b-0 z-10'} `}
          >
            Quem somos
          </button>
        </div>
        <div className="flex flex-col justify-start items-start h-full border border-[#94959b] bg-[#020202] p-16 rounded-2xl relative">
          <AnimatePresence mode="wait">
            {toggle === "data2" ? (
              <motion.div
                key="data1"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.75 }}
              >
                <motion.h3
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 25, opacity: 0 }}
                  transition={{ duration: 0.75 }}
                  className="text-[#ddd] text-[2vw] font-semibold whitespace-nowrap p-6"
                >
                  {data1.name}
                </motion.h3>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 25, opacity: 0 }}
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="text-[calc(.6vw+8px)] leading-9 text-[#ccc]"
                >
                  {data1.description}
                </motion.p>
              </motion.div>
            ) : (
              <motion.div key="data2">
                <motion.h3
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.75 }}
                  className="text-[#ddd] text-[2vw] font-semibold whitespace-nowrap p-6"
                >
                  {data2.name}
                </motion.h3>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="text-[calc(.6vw+8px)] leading-9 text-[#ccc]"
                >
                  {data2.description}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
