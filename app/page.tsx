import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Banner from "./Components/banner";
import Gallery from "./Components/Gallery";
import Menu from "./Components/Menu";
import Upcoming from "./Components/Upcoming";
import Contact from "./Components/Contact";
import Map from "./Components/Map";
import Lsection from "./Components/Lsection";

export default function Home() {
  return (
    <div>
    <Navbar />
    <About />
    <Section />
    <Banner />
    <Gallery />
    <Menu />
    <Upcoming />
    <Contact />
    <Map />
    <Lsection />
    </div>
  );
}
