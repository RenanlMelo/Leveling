import Header from "./components/header/Header";
import { Introduction } from "./components/introduction/Introduction";
import { Portifolio } from "./components/portifolio/Portifolio";
import { Services } from "./components/services/Services";


function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Services />
      <Portifolio />
    </>
  );
}

export default App;
