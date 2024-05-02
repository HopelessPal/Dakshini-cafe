import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Section from "./Components/Section";
import Upcoming from "./Components/Upcoming";
import Lsection from "./Components/Lsection";
import Banner from "./Components/banner";
import Map from "./Components/Map";

export default function Home() {
  return (
    <div>
    <Navbar />
    <About />
    <Section />
    {/* <CustomerFeedback /> */}
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
