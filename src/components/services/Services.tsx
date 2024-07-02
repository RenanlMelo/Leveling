import { AnimatePresence, motion } from "framer-motion";
import "./services.css";
import { useEffect, useState } from "react";

// Serviços
const servicesData = [
  // 1º Serviço
  {
    title: "Página Estática",
    description:
      "Gere leads e capture a atenção do seu público com uma Landing Page otimizada. Projetamos páginas de destino atraentes e eficazes, perfeitas para promover produtos, serviços ou campanhas.",
    linkHref: "",
  },

  // 2º Serviço
  {
    title: "Loja Virtual",
    description:
      "Leve seu negócio para o próximo nível com uma loja virtual robusta. Desenvolvemos e-commerces atraentes e eficientes, focados em conversão e integração segura de sistemas de pagamento.",
    linkHref: "",
  },

  // 3º Serviço
  {
    title: "Blog",
    description:
      "Transforme suas ideias em palavras e conecte-se com seu público. Criamos blogs personalizados, otimizados para SEO, garantindo uma plataforma funcional e estética para seus conteúdos.",
    linkHref: "",
  },

  // 4º Serviço
  {
    title: "Cartão de Visita Digital",
    description:
      "Modernize sua apresentação com um Cartão de Visita Digital. Crio cartões elegantes e interativos que destacam sua marca, facilitando o compartilhamento de informações de forma prática e impactante.",
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

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndices((prevOpenIndices) => {
      if (prevOpenIndices.includes(index)) {
        // Remove o índice se já estiver presente (fecha o dropdown)
        return prevOpenIndices.filter((i) => i !== index);
      } else {
        // Adiciona o índice (abre o dropdown)
        return [...prevOpenIndices, index];
      }
    });
  };

  return (
    <motion.section
      id="servicos"
      className="h-fit w-full flex justify-center items-center relative px-[10vw] bg-no-repeat bg-cover z-10 py-32 bg-[var(--services-bg)] shadow-[0_0_100px_50px_rgba(55,0,128,.3)]"
    >
      <div className="grid grid-cols-2 gap-y-[4vw] justify-center items-center w-fit mx-auto">
        <div className="col-start-1 row-span-full flex justify-evenly flex-col h-full">
          <div className="">
            <h2 className="text-[#eee] text-[2.5vw] font-bold tracking-wide ml-16 mb-4">
              Serviços oferecidos
            </h2>
            <p className="text-[.9vw] text-[#ccc] px-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
              cum itaque! Omnis incidunt hic laborum laboriosam praesentium,
              quae ad eveniet autem fugiat quibusdam corporis impedit nihil
              libero! Nesciunt, aspernatur deleniti!
            </p>
          </div>
          <blockquote className="text-[.8vw] text-[#aaa] px-10">
            "Nossa missão é digitalizar os sonhos e objetivos de todos os
            empreendedores."
            <br />- Leveling
          </blockquote>
        </div>

        <div className="flex justify-center items-center gap-y-10 flex-col col-start-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className={`grid w-[50%] bg-[var(--services-bg)] h-full py-2 rounded-bl-3xl rounded-tr-3xl hover:backdrop-blur-lg duration-300 border border-[#eeeeee50] relative cursor-pointer overflow-hidden`}
            >
              <div className="flex justify-between items-center z-10">
                <h4 className="text-[1vw] font-bold font-mono text-[#eee] px-8 w-fit">
                  {service.title}
                </h4>
                <img
                  src="/open_menu.svg"
                  alt="Abrir menu"
                  className="pr-8 translate-y-1/2"
                />
              </div>
              <div className="-z-10 bg-[var(--services-bg)]">
                {openIndices.includes(index) && (
                  <AnimatePresence>
                    <motion.div
                      className="mt-6 px-8 mb-4"
                      initial={{ y: -100 }}
                      animate={{ y: 0 }}
                      exit={{ y: -100 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <motion.p className="text-[.8vw] font-['Montserrat'] text-[#eee]">
                        {service.description}
                      </motion.p>
                      <motion.span className="absolute bottom-3 right-2">
                        <motion.a
                          href={service.linkHref}
                          className="text-[.8vw] text-[var(--secondary-color)] underline underline-offset-2 px-4 py-2"
                        >
                          Saiba mais
                        </motion.a>
                      </motion.span>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
