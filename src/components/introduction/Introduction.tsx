import "./introduction.css";

export const Introduction = () => {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center relative px-48">
        <img
          src="public\GLASS_EFFECT_LOGO.svg"
          alt="Logo com efeito"
          className="w-[750px] absolute right-32 top-32"
        />
        <div className="w-full h-full flex justify-center items-start flex-col">
          <h1 className="text-5xl text-[#eee] max-w-3xl font-black tracking-wider">
            Desenvolvimento de <br />
            <strong className="font-bold text-[60px] gradiente">
              soluções web
            </strong>
            <br />
            para o seu negócio.
          </h1>
          <h3 className="text-2xl text-[#eeeeee75] my-10">
            Inserir subtítulo descritivo
          </h3>
          <div className="div_svgLogo gap-x-2 relative flex h-[50px] w-40 items-center justify-center overflow-hidden rounded-full bg-[#101010] border-2 border-[#aaaaaa80] hover:border-[#aaa] text-[var(--secondary-color)] hover:text-[#eee] shadow-[0_15px_30px_-12px_rgba(0,0,0,1)] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[var(--primary-color)] before:duration-500 before:ease-out hover:shadow-[var(--primary-color)] hover:before:h-56 hover:before:w-56">
            <button className="text-2xl z-10">Serviços</button>
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
      </section>
    </>
  );
};
