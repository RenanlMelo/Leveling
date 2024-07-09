import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Form = () => {
  const servicesOptions = [
    { name: "Blog", id: "blog" },
    { name: "Cartão de Visita Digital", id: "cartao de visita digital" },
    { name: "Loja Virtual", id: "loja virtual" },
    { name: "Página Estática", id: "pagina estatica" },
    { name: "Outros", id: "outros" },
  ];

  const [openSelect, setOpenSelect] = useState(false);
  const [selectText, setSelectText] = useState("Selecione o serviço desejado");
  const [outros, setOutros] = useState("");

  return (
    <div className="flex justify-center items-center flex-col w-[50%] h-fit my-24 mx-auto py-24 border border-white/50 rounded-2xl">
    <h2 className="text-[#eee] text-[calc(1.5vw+5px)] pb-10 font-semibold text-start">Entre em contato conosco agora mesmo!</h2>
      <section className="mt-10 w-full px-[10%]">
        <form
          action="post"
          className="h-full w-full flex flex-col justify-start items-center gap-y-10"
        >
          <input
            type="text"
            required
            placeholder="Nome"
            className="w-[calc(100%-80px)] px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
          />
          <input
            type="email"
            required
            placeholder="E-mail"
            className="w-[calc(100%-80px)] px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
          />
          {/* <select defaultValue="Serviço desejado" required className="w-[calc(100%-80px)] outline-none px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg bg-no-repeat bg-right border-r-[12px] cursor-pointer border-[#101010] hover:bg-[var(--dark-purple)] hover:border-[var(--dark-purple)]">
            <option value="1" className="text-[#eee] rounded-md font-sans">Blog</option>
            <option value="2" className="text-[#eee] rounded-md">Cartão de Visita Digital</option>
            <option value="3" className="text-[#eee] rounded-md">Loja Virtual</option>
            <option value="4" className="text-[#eee] rounded-md">Página Estática</option>
            <option value="4" className="text-[#eee] rounded-md">Outros</option>
          </select> */}
          <div className="z-30 w-[calc(100%-80px)] bg-[#101010] text-[#9ca3ad] rounded-lg text-lg relative">
            <h4
              onClick={() => setOpenSelect(!openSelect)}
              className={`z-20 cursor-pointer px-4 py-2 rounded-md duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] hover:bg-[var(--services-cardHover)] hover:shadow-[0_4px_10px_rgba(94,0,218,.55)] ${
                openSelect
                  ? "bg-[url(/close_menu.png)]"
                  : "bg-[url(/open_menu.png)]"
              } bg-no-repeat bg-[98%_55%]`}
            >
              {selectText}
            </h4>
            <AnimatePresence>
              {openSelect && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.75, ease: "easeInOut" }} 
                  className=" -z-20 flex flex-col rounded-b-md absolute w-full  border-b border-white/50 bg-[#101010] overflow-hidden"
                >
                  {servicesOptions.map((service, index) => (
                    <motion.span
                    key={index}
                      onClick={() => {
                        setSelectText(service.name),
                          setOpenSelect(!openSelect),
                          setOutros(service.name);
                      }}
                      className={`px-4 py-2 duration-300 hover:bg-[var(--services-cardHover)] cursor-pointer ${
                        selectText === service.name
                          ? "bg-[var(--dark-color)]"
                          : "bg-transparent"
                      } `}
                    >
                      {service.name}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {outros === "Outros" && (
            <input
              type="text"
              required
              placeholder="Serviço desejado"
              className="w-[calc(100%-80px)] px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
            />
          )}
          <textarea
            placeholder="Descrição"
            className="w-[calc(100%-80px)] px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
          ></textarea>
          <input
            type="button"
            value="Enviar"
            className="w-[10vw] px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg hover:bg-[var(--services-cardHover)] duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] hover:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
          />
        </form>
      </section>
    </div>
  );
};
