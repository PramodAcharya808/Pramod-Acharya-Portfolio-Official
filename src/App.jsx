import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SkillScroll from "./components/Skills/SkillScroll";
import ScrollTop from "./components/ScrollTopBtn/ScrollTop";
import Project from "./components/Projects/Project";

function App() {
  return (
    <>
      <div>
        <ScrollTop></ScrollTop>
        <Navbar></Navbar>
        <Hero></Hero>
        <SkillScroll></SkillScroll>
        <About></About>
        <Project></Project>
      </div>
    </>
  );
}

export default App;
