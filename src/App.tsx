import { Footer } from "./components/Footer";
import { FooterNavBar } from "./components/FooterNavBar";
import { Form } from "./components/Form";
import { InfoBody } from "./components/InfoBody";
import { InsiderWord } from "./components/InsiderWord";
import { LandingBody } from "./components/LandingBody";
import { LandingFooter } from "./components/LandingFooter";
import { NavBar } from "./components/NavBar";
import { PromotingDetail } from "./components/PromotingDetail";

function App() {
  return (
    <div className="bg-[#53389E] text-white">
      <div className="container max-w-[2560px] px-24 py-4 space-y-24">
        <NavBar />
        <LandingBody />
        <LandingFooter />
      </div>
      <div className="bg-white text-black">
        <div className="container max-w-[2560px] px-24 pt-24 pb-12 space-y-24">
          <InfoBody />
          <InsiderWord />
          <PromotingDetail />
          <Form />
          <FooterNavBar />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
