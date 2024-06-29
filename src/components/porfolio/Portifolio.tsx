export const Portifolio = () => {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center py-32 bg-transparent">
        <h1 className="text-[#eee] text-[2.5vw] font-bold tracking-wide mb-24">
          Portifólio
        </h1>
        <div className="w-full grid grid-cols-2 justify-evenly items-center px-96 gap-x-48">

          <div className=" w-full h-full rounded-[30px] flex flex-col gap-y-10 overflow-hidden font-sans shadow-shadow_card">
            <img src="/bg.png" alt="" className="w-full h-1/2" />
            <h2 className="text-2xl font-bold text-[#eee] mx-12 px-3 py-2 rounded-3xl w-fit g-[var(--services-card)]">
              Unilock Pisos
            </h2>
            <p className="text-lg text-[#ccc] px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            </p>
            <span className="w-full flex justify-end items-center">
              <a
                href=""
                className="w-full text-right px-6 pb-2 underline text-[#eeeeee70]"
              >
                Saiba mais
              </a>
            </span>
          </div>

          <div className=" w-full h-full rounded-[30px] flex flex-col gap-y-10 overflow-hidden font-sans shadow-shadow_card">
            <img src="./bg.png" alt="" className="w-full h-1/2" />
            <h2 className="text-2xl font-bold text-[#eee] mx-12 px-3 py-2 rounded-3xl w-fit g-[var(--services-card)]">
              Unilock Pisos
            </h2>
            <p className="text-lg text-[#ccc] px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            </p>
            <span className="w-full flex justify-end items-center">
              <a
                href=""
                className="w-full text-right px-6 pb-2 underline text-[#eeeeee70]"
              >
                Saiba mais
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
