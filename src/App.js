import "./App.css";
// import VideoAsset from './assets/videoAsset.mp4'
import { Header, Nav, HeroSection, MacbookSection, ModularSection, Footer } from "./Components/index";


function App() {
  return (
    <section >
      <Nav />
      <Header />
      <HeroSection />
      <MacbookSection />
      <ModularSection />
      <Footer/>
     
    </section>
  );
}

export default App;
