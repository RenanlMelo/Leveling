export const Footer = () => {
  return (
    <>
        <footer className=" h-96">
            <form action="post" className="h-full w-fit px-16 flex flex-col justify-center items-center gap-x-20 gap-y-10">
              <input type="text" value="Nome" className="px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[3px_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[3px_4px_10px_rgba(94,0,218,.35)]" />
              <input type="email" value="E-mail" className="px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[3px_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[3px_4px_10px_rgba(94,0,218,.35)]" />
              <select defaultValue="Seviço desejado" className="hover: outline-none px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg bg-[url(/open_menu.png)] bg-no-repeat bg-right border-r-[12px] cursor-pointer border-[#101010]"> 
                <option className="after:bg-black" value="">Página Estática</option>
                <option value="">Loja Virtual</option>
                <option value="">Blog</option>
                <option value="">Cartão de Visita Digital</option>
              </select>
              <input type="button" value="Enviar" className="px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg" />
            </form>
        </footer>
    </>
  )
}
