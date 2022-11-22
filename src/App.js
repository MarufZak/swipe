import {
  Advantages,
  Features,
  Header,
  Numbers,
  Plans,
  Sponsors,
  Techs,
  Team,
  Questions,
  About,
  Press,
  Contact,
  Media,
  Footer
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Sponsors />
        <Numbers />
        <Features />
        <Advantages />
        <Techs />
        <Plans />
        <Team />
        <Questions />
        <About />
        <Press />
        <Contact />
        <Media />
      </main>
      <Footer />
    </>
  );
}

export default App;
