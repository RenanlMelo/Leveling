import { useState } from "react";

const casesData = [
  {
    title: "Unilock Pisos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis",
  },
  {
    title: "Teste",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis",
  },
];

export const Cases = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  return (
    <>
      <section
        id="cases"
        className="w-full flex flex-col justify-center items-center py-32"
      >
        <h1 className="text-[#eee] text-[2.5vw] font-bold tracking-wide mb-24">
          Cases
        </h1>
        <div className="w-full grid grid-cols-2 justify-evenly items-center px-96 gap-x-48">
          {casesData.map((project, index) => (
            <div
              onMouseEnter={() => setVisibleIndex(index)}
              onMouseLeave={() => setVisibleIndex(null)}
              className="w-full h-full rounded-[30px] flex flex-col gap-y-10 overflow-hidden font-sans shadow-shadow_card relative"
              key={index}
            >
              <img src="/bg.png" alt="" className="w-full h-1/2" />
              <h2 className="text-2xl font-bold text-[#eee] mx-12 px-3 py-2 rounded-3xl w-fit">
                {project.title}
              </h2>
              <p className="text-lg text-[#ccc] px-10">{project.description}</p>
              <span className="w-full flex justify-end items-center">
                <img
                  id="saibaMais"
                  src="/saiba_mais.png"
                  alt="Saiba Mais"
                  className={`absolute right-4 bottom-4 w-8 ${visibleIndex === index ? "" : "hidden"}`}
                />
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
