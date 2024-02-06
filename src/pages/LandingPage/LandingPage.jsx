import { Benefit } from "../../components/Benefit/Benefit";
import { ComparePlatforms } from "../../components/ComparePlatforms/ComparePlatforms";
import { Features } from "../../components/Features/Features";
import { Footer } from "../../components/Footer/Footer";
import { FormSection } from "../../components/FormSection/FormSection";
import Hero from "../../components/Hero/Hero";
import StyledComponent from "../../components/Shared/StyledComponent/StyledComponent";
import { UserCases } from "../../components/UserCases/UserCases";

export const LandingPage = () => {
  return (
    <div className="app-container">
      <StyledComponent>
        <Hero />
      </StyledComponent>
      <Benefit />
      <StyledComponent backgroundColor="#FFF">
        <Features />
      </StyledComponent>
      <UserCases />
      {/* <ComparePlatforms /> */}
      <StyledComponent>
        <FormSection />
      </StyledComponent>
      <Footer />
    </div>
  );
};
