import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ServiceOption {
  name: string;
  id: string;
}

interface FormSubmitSettings {
  form: string;
  button: string;
  success: string;
  error: string;
}

class FormSubmit {
  settings: FormSubmitSettings;
  form: HTMLFormElement | null;
  formButton: HTMLButtonElement | null;
  url: string | null;

  constructor(settings: FormSubmitSettings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    this.url = this.form ? this.form.getAttribute("action") : null;
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    if (this.form) {
      this.form.innerHTML = this.settings.success;
    }
  }

  displayError() {
    if (this.form) {
      this.form.innerHTML = this.settings.error;
    }
  }

  getFormObject() {
    const formObject: { [key: string]: string } = {};
    if (this.form) {
      const fields = this.form.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement
      >("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name") as string] = field.value;
      });
    }
    return formObject;
  }

  onSubmission(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    target.disabled = true;
    target.innerText = "Enviando...";
  }

  async sendForm(event: Event) {
    try {
      this.onSubmission(event);
      if (this.url) {
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
      }
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(String(error));
    }
  }

  init() {
    if (this.form && this.formButton) {
      this.formButton.addEventListener("click", this.sendForm);
    }
    return this;
  }
}

export const Form = () => {
  const servicesOptions: ServiceOption[] = [
    { name: "Blog", id: "blog" },
    { name: "Cartão de Visita Digital", id: "cartao de visita digital" },
    { name: "Loja Virtual", id: "loja virtual" },
    { name: "Página Estática", id: "pagina estatica" },
    { name: "Outros", id: "outros" },
  ];

  const [openSelect, setOpenSelect] = useState(false);
  const [selectText, setSelectText] = useState("Selecione o serviço desejado");
  const [outros, setOutros] = useState("");

  useEffect(() => {
    const formSubmit = new FormSubmit({
      form: "[data-form]",
      button: "[data-button]",
      success: "<h1 id='success'>Pedido enviado!</h1>",
      error: "<h1 id='error'>Não foi possível enviar seu pedido.</h1>",
    });
    formSubmit.init();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        id="form"
        className="flex justify-center items-center flex-col w-[50%] h-fit my-24 mx-auto py-24 border border-white/50 rounded-2xl relative"
      >
        <h2 className="text-[#eee] text-[calc(1.5vw+5px)] pb-10 font-semibold text-start">
          Entre em contato conosco agora mesmo!
        </h2>
        <section className="mt-10 w-full px-[10%]">
          <form
            method="POST"
            data-form
            action="https://formsubmit.co/ajax/renanlaramelo@gmail.com"
            className="h-full w-full flex flex-col justify-start items-center gap-y-[calc(3vh+10px)]"
          >
            <input
              type="text"
              required
              name="Nome"
              placeholder="Nome"
              className="w-[calc(100%-80px)] px-4 py-2 bg-[#121212] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
            />
            <input
              type="email"
              required
              name="Email"
              placeholder="E-mail"
              className="w-[calc(100%-80px)] px-4 py-2 bg-[#121212] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
            />
            <div className="z-30 w-[calc(100%-80px)] bg-[#121212] text-[#9ca3ad] rounded-lg text-lg relative">
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
                    className=" -z-20 flex flex-col rounded-b-md absolute w-full  border-b border-white/50 bg-[#121212] overflow-hidden"
                  >
                    {servicesOptions.map((service, index) => (
                      <motion.span
                        key={index}
                        onClick={() => {
                          setSelectText(service.name);
                          setOpenSelect(!openSelect);
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
            <input type="hidden" name="Serviço" value={selectText} readOnly />
            <AnimatePresence>
              {outros === "Outros" && (
                <motion.input
                  initial={{ width: 0, height: 0 }}
                  animate={{ width: "calc(100% - 80px)", height: "auto" }}
                  exit={{ width: 0, height: 0 }}
                  type="text"
                  name="Serviço diferente"
                  required
                  placeholder="Serviço desejado"
                  className="w-[calc(100%-80px)] px-4 py-2 bg-[#121212] text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
                />
              )}
            </AnimatePresence>
            <textarea
              name="Descrição"
              placeholder="Descrição"
              className="w-[calc(100%-80px)] px-4 py-2 min-h-[150px] bg-[#121212] resize-none text-[#eee] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--services-cardHover)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
            ></textarea>
            <button
              type="submit"
              value="Enviar"
              data-button
              className="w-[10vw] px-4 py-2 shadow-[0_4px_10px_rgba(94,0,218,.55)] bg-[var(--services-cardHover)] text-[#eee] rounded-lg text-lg hover:bg-[#121212] duration-300 hover:shadow-[0_4px_10px_rgba(250,250,250,.5)] hover:border-[#aaa] border border-transparent"
            >
              Enviar
            </button>
          </form>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
