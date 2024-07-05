export const Footer = () => {
  return (
    <>
      <footer className="h-96">
        <form action="post" className="h-full w-fi px-16 flex flex-col justify-center items-center gap-x-20 gap-y-10">
          <input type="text" placeholder="Nome" className="w-[20vw] px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]" />
          <input type="email" placeholder="E-mail" className="w-[20vw] px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]" />
          <select defaultValue="Serviço desejado" className="w-[20vw] outline-none px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg bg-no-repeat bg-right border-r-[12px] cursor-pointer border-[#101010] hover:bg-[var(--dark-purple)] hover:border-[var(--dark-purple)]">

            <option value="1" className="">Blog</option>
            <option value="2" className="">Cartão de Visita Digital</option>
            <option value="3" className="">Loja Virtual</option>
            <option value="4" className="">Página Estática</option>
          </select>
          <input type="button" value="Enviar" className="px-4 py-2 bg-[#101010] text-[#eee] rounded-lg text-lg hover:bg-[var(--services-cardHover)] duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] hover:shadow-[0_4px_10px_rgba(94,0,218,.55)]" />
        </form>
      </footer>
    </>
  );
};
