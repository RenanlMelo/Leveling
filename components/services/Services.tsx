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

  // 3º Serviço
  {
    title: "Loja Virtual",
    description:
      "Leve seu negócio para o próximo nível com uma loja virtual robusta.",
    linkHref: "",
  },

  // 4º Serviço
  {
    title: "Página Estática",
    description:
      "Gere leads e capture a atenção do seu público com uma Landing Page otimizada.",
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
    <motion.section className="px-[10vw] bg-no-repeat bg-cover py-32 bg-[url('/fundo2.png')] bg-right">
      <div className="grid grid-cols-2 gap-y-[4vw] justify-center items-center w-fit mx-auto">
        <div className="col-start-1 row-start-1 row-span-full flex justify-evenly flex-col">
          <div>
            <h2 className="text-[var(--text-color)] text-[2.25vw] font-bold tracking-wide ml-16 mb-4">
              Serviços oferecidos
            </h2>

            <p
              id="servicos"
              className="text-[calc(.6vw+8px)] leading-9 text-[var(--text-lightColor)] px-10"
            >
              Na Leveling, transformamos ideias em soluções incríveis a partir
              de Desenvolvimento Web. Nossa abordagem centrada no cliente
              garante uma experiencia única e resultados que não só atendem, mas
              superam as necessidades e objetivos do mesmo.
            </p>
          </div>
          <blockquote className="text-[calc(.5vw+8px)] text-[var(--text-lightColor)] px-10 mt-[3vh]">
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
              className={`dropDownDiv grid w-[calc(50%+50px)] h-full rounded-bl-3xl rounded-tr-3xl border border-[var(--text-color)eee50] relative cursor-pointer overflow-hidden`}
            >
              <div className="dropDownTitle flex justify-between items-center z-10 py-[6px]">
                <h4 className="text-[calc(.6vw+7px)] font-medium  text-[var(--text-color)] px-[2vw] whitespace-nowrap flex-grow">
                  {service.title}
                </h4>
                <svg
                  width="20"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="var(--text-color)"
                  className="mr-6 translate-y-1/2"
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
                    className={`dropDown -z-10 `}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <motion.p className="px-[2vw] py-[2vh] text-[calc(.6vw+5px)] text-[var(--text-lightColor)]">
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
