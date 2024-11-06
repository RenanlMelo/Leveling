import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Form } from "../form/Form";

// Serviços
const servicesData = [
  // 1º Serviço
  {
    title: "Blog",
    description:
      "Transforme suas ideias em palavras e conecte-se com seu público.",
    linkHref: "",
  },

  // 2º Serviço
  {
    title: "Cartão de Visita Digital",
    description: "Modernize sua apresentação com um Cartão de Visita Digital.",
    linkHref: "",
  },

  // 4º Serviço
  {
    title: "Página Estática",
    description:
      "Gere leads e capture a atenção do seu público com uma Landing Page otimizada.",
    linkHref: "",
  },

  // 3º Serviço
  {
    title: "Site Institucional",
    description:
      "Leve seu negócio para o próximo nível com uma loja virtual robusta.",
    linkHref: "",
  },
];

type serviceProps = {
  setSectionSize: React.Dispatch<React.SetStateAction<number | null>>;
};

export const Services: React.FC<serviceProps> = ({ setSectionSize }) => {
  useEffect(() => {
    const getSectionSize = () => {
      const sectionElement = document.getElementById("servicos");
      if (sectionElement) {
        setSectionSize(sectionElement.clientHeight);
      }
    };

    getSectionSize(); // Chama a função uma vez para obter a altura inicial
    window.addEventListener("resize", getSectionSize); // Atualiza a altura quando a janela for redimensionada

    return () => {
      window.removeEventListener("resize", getSectionSize); // Remove o listener no cleanup
    };
  }, [setSectionSize]);

  // const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [openIndices, setOpenIndices] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndices(openIndices === index ? null : index);
  };

  return (
    <motion.section className="px-[10vw] bg-no-repeat bg-cover bg-[#50505010] py-12 xl:py-32 bg-[url('/fundo2.png')] bg-right -z-20">
      <div className="flex flex-col xl:grid grid-cols-2 gap-y-[6vh] justify-center items-center w-fit mx-auto">
        <div className="col-start-1 row-start-1 row-span-full flex justify-evenly flex-col">
          <div>
            <h2 className="text-[var(--text-color)] text-[7vw] xl:text-[2.25vw] font-bold tracking-wide mb-2 xl:ml-10">
              Nossas soluções
            </h2>
            <h3 className="text-[var(--text-lightColor)] text-[4.5vw] xl:text-[1.25vw] font-normal tracking-wide xl:ml-14 xl:mb-4 -translate-y-4">
              Desenvolvimento web
            </h3>

            <p
              id="servicos"
              className="text-[4vw] xl:text-[calc(.6vw+8px)] leading-9 text-[var(--text-lightColor)] xl:px-10"
            >
              Na Leveling, criamos sites personalizados que atendem diretamente
              às necessidades do seu negócio. Nosso time de especialistas estará
              com você em cada etapa, oferecendo suporte contínuo e atualizações
              ao longo de todo o processo. Realizamos análises detalhadas do seu
              mercado para desenvolver soluções voltadas para a conversão,
              totalmente otimizadas para SEO. Confira ao lado alguns dos
              serviços mais requisitados.
            </p>
          </div>
          <blockquote className="text-[3.75vw] xl:text-[calc(.5vw+8px)] text-[var(--text-lightColor)] xl:px-10 mt-[3vh]">
            &quot;Nossa missão é impulsionar negócios com o poder da
            tecnologia.&quot;
            <br />- Leveling
          </blockquote>
        </div>

        <div className="flex justify-center items-center gap-y-10 flex-col col-start-2">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => handleToggle(index)}
              className={`grid w-[75vw] xl:w-[calc(50%+50px)] h-fit rounded-bl-3xl rounded-tr-3xl border border-[var(--text-lightColor)] relative cursor-pointer overflow-hidden`}
            >
              <div className="flex justify-between items-center z-10 py-[6px]">
                <h4 className="text-[4.2vw] xl:text-[calc(.6vw+7px)] font-medium text-[var(--text-color)] px-6 xl:px-[2vw] whitespace-nowrap flex-grow">
                  {service.title}
                </h4>
                <svg
                  width="20"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="var(--text-color)"
                  className="mr-6 translate-y-1/2 scale-[1.35] xl:scale-100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9.91628 6.14782"
                    stroke="var(--text-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 6.14783L18.9163 1.00001"
                    stroke="var(--text-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <AnimatePresence>
                {/* {openIndices.includes(index) && ( */}
                {openIndices === index && (
                  <motion.div
                    className={`dropDown`}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <motion.p className="px-6 xl:px-[2vw] py-[2vh] text-[4vw] xl:text-[calc(.6vw+5px)] z-20 text-[var(--text-lightColor)]">
                      {service.description}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
