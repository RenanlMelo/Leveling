import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const casesData = [
  {
    url: "autosalesbrasil",
    image: "/autosalesbrasil_image.png",
    title: "Auto Sales Brasil",
    subtittle: "E-commerce institucional",
    description: "Website destinado a revenda de veículos",
  },
  {
    url: "unilockpisos",
    image: "/image.png",
    title: "Unilock Pisos",
    subtittle: "Em construção",
    description:
      "...",
  },
];

export const Cases = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  return (
    <>
      <section
        id="cases"
        className="w-full flex flex-col justify-center items-center my-24 relative"
      >
        {/* <Image
          src="/fundo_branco.png"
          alt="Fundo"
          width={500}
          height={500}
          className="absolute top-0 right-0 w-[500px] h-[500px] z-50"
        /> */}
        <h1 className="text-[var(--text-color)] text-[2.25vw] font-bold tracking-wide mb-[calc(5vh+10px)]">
          Cases
        </h1>
        <div className="w-full grid grid-cols-2 justify-evenly items-center px-[20vw] gap-x-[10vw]">
          {casesData.map((project, index) => (
            <div
              onMouseEnter={() => setVisibleIndex(index)}
              onMouseLeave={() => setVisibleIndex(null)}
              className="flex flex-col justify-evenly font-sans shadow-shadow_card bg-gradient-to-t relative"
              key={index}
            >
              <Image
                src={project.image}
                alt="Imagem de fundo"
                width={1600}
                height={900}
                className="duration-300 aspect-video"
              />
              <div className="py-[4vh]">
                <h2 className="text-[calc(1.15vw+5px)] font-bold text-[var(--text-color)] ml-[2.5vw] pb-[1vh] rounded-3xl w-fit">
                  {project.title}
                </h2>
                <p className="text-[calc(1vw+2px)] ml-[2vw] pb-[5vh] font-semibold text-[#ccc] w-fit text-start">
                  {project.subtittle}
                </p>
                <p className="text-[calc(.8vw+2px)] text-[#ccc] ml-[2vw]">
                  {project.description}
                </p>
                <span className="w-(calc(100%-2vw)) h-[calc(4vh+10px)] flex justify-end items-center mx-[2vw] py-[2vh] overflow-hidden relative">
                  <AnimatePresence>
                    {visibleIndex === index && (
                      <motion.a
                        href={`${project.url}`}
                        id="saibaMais"
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        exit={{ x: 100 }}
                        transition={{ duration: 0.5 }}
                        className={`hover:text-[#aaa] hover:decoration-[#aaa] decoration-transparent underline-offset-2 underline px-3 py-2 duration-75 ease-linear text-[1vw] whitespace-nowrap mb-4 text-[var(--text-color)] ${
                          visibleIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {/* Saiba mais */}
                      </motion.a>
                    )}
                  </AnimatePresence>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
