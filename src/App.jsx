import React from "react";
import Header  from "./compoments/header/Header"
import Nav  from "./compoments/nav/Nav"
import About  from "./compoments/about/About"
import Experience  from "./compoments/experience/Experience"
import Services  from "./compoments/services/Services"
import Portfolio  from "./compoments/portfolio/Portfolio"
import Contact  from "./compoments/contact/Contact"
import Footer  from "./compoments/footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
