import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import DesktopDisplay from "./components/DisplayLayout/DesktopDisplay";
import About from "./components/About/About";
function App() {
  return (
    <>
      <div>
        <DesktopDisplay>
          <Navbar></Navbar>
          <Hero></Hero>
          <About></About>
        </DesktopDisplay>
      </div>
    </>
  );
}

export default App;
