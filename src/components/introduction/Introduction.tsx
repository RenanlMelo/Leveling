import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useAnimation } from "framer-motion";
import "./introduction.css";

type introductionProps = {
  sectionSize: number | null;
};

export const Introduction: React.FC<introductionProps> = ({ sectionSize }) => {
  const controls = useAnimation();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: scrollY > 50 ? "#000000" : "transparent",
      transition: { duration: 0.5 },
    });
  }, [scrollY, controls]);

  return (
    <>
      <section
        id="inicio"
        className="w-full grid grid-cols-2 justify-center items-center relative px-[10vw] py-32"
      >
        <div className="h-full flex justify-center items-start flex-col">
          <h1 className="text-[2.5vw] leading-[1] text-[#eee] font-black tracking-wider w-full">
            <strong className="font-bold text-[3.25vw] gradiente pr-3">
              Eleve e impulsione, <br />
            </strong>
            o nível do seu negócio
          </h1>
          <h3 className="text-[1.2vw] text-[#eeeeee75] my-[calc(65px-5vh)]">
            Digitalizando empresas
          </h3>
          <Link
            smooth
            spy
            duration={1000}
            offset={sectionSize !== null ? sectionSize * (-1 / 3) : 0}
            to={"servicos"}
            className="div_svgLogo gap-x-2 relative flex h-[6vh] w-[10vw] items-center justify-center overflow-hidden rounded-full bg-transparent border-2 border-[#aaaaaa80] hover:border-[#aaa] text-[var(--secondary-color)] hover:text-[#eee] shadow-[0_15px_30px_-12px_rgba(0,0,0,1)] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[var(--primary-color)] before:duration-500 before:ease-out hover:shadow-[var(--primary-color)] hover:before:h-56 hover:before:w-56"
          >
            <button className="text-[1.2vw] z-10">Serviços</button>
            <svg
              width="20"
              height="8"
              viewBox="0 0 20 8"
              fill="none"
              className="svg_logo translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9.91628 6.14782"
                stroke=""
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M10 6.14783L18.9163 1.00001"
                stroke=""
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </Link>
        </div>
        <img
          src="/logo_introduction.png"
          alt="Logo com efeito"
          className="lg:w-[100%] right-32 top-32 col-start-1 lg:col-start-2  lg:block "
        />
      </section>
    </>
  );
};
