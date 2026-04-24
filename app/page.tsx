import Header from "@/components/Header";
import MainContent from "@/components/Main";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
      <About></About>
      <Resume></Resume>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
