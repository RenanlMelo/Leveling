import "./introduction.css";

export const Introduction = () => {
  return (
    <>
      <section className="w-full grid grid-cols-2 justify-center items-center relative px-[10vw] py-[10vh]">
        <div className="w-[100%] h-full flex justify-center items-start flex-col">
          <h1 className="text-[2.5vw] leading-[1] text-[#eee] max-w-3xl font-black tracking-wider">
            Desenvolvimento de <br />
            <strong className="font-bold text-[3.25vw] gradiente">
              soluções web
            </strong>
            <br />
            para o seu negócio.
          </h1>
          <h2 className="text-[1.2vw] text-[#eeeeee75] my-10">
            Inserir subtítulo descritivo
          </h2>
          <div className="div_svgLogo gap-x-2 relative flex h-[6vh] w-[10vw] items-center justify-center overflow-hidden rounded-full bg-[#101010] border-2 border-[#aaaaaa80] hover:border-[#aaa] text-[var(--secondary-color)] hover:text-[#eee] shadow-[0_15px_30px_-12px_rgba(0,0,0,1)] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[var(--primary-color)] before:duration-500 before:ease-out hover:shadow-[var(--primary-color)] hover:before:h-56 hover:before:w-56">
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
          </div>
        </div>
        <img
          src="/logo_introduction.png"
          alt="Logo com efeito"
          className="w-[100%] col-start-2 row-start-1 right-32 top-32"
        />
      </section>
    </>
  );
};
